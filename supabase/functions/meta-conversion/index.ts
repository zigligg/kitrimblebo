import { createClient } from "npm:@supabase/supabase-js@2.39.0";
import { createHash } from "node:crypto";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const META_ACCESS_TOKEN = "EAAH9RyMXRrUBOZBHZAAa61FxZAtNOWVgey6XyOybf4DTBTDiMp0O3xWJaOQqBUVzuNyzMZCMfMaboYXYOmykkYksHP9z0g3WKtKZBZCLPC46taG1TW5ukUKX6sRsipklp7zA8tsHW8JXYjuZBilY1zeIBDcSgkSonE0ATGCexBNsG3DQZC7o0Oc20gsYicTZCOkWiqwZDZD";

interface UserData {
  client_ip_address: string;
  client_user_agent: string;
  em?: string;
  ph?: string;
  fn?: string; // first_name
  ln?: string; // last_name
  ge?: string; // gender
  db?: string; // date_of_birth
  ct?: string; // city
  st?: string; // state
}

interface CustomData {
  currency?: string;
  value?: number;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  source?: string;
  action_source?: string;
}

interface ConversionEvent {
  event_name: string;
  event_time: number;
  event_source_url?: string;
  event_id?: string;
  user_data: UserData;
  custom_data?: CustomData;
}

// Função para hash SHA256
const hashData = (data: string): string => {
  return createHash('sha256').update(data).digest('hex');
};

// Função para normalizar e fazer hash dos dados do usuário
const normalizeAndHashUserData = (data: any): UserData => {
  const userData: UserData = {
    client_ip_address: data.client_ip_address,
    client_user_agent: data.client_user_agent,
  };

  if (data.email) {
    userData.em = hashData(data.email.toLowerCase().trim());
  }
  if (data.phone) {
    userData.ph = hashData(data.phone.replace(/\D/g, ''));
  }
  if (data.first_name) {
    userData.fn = hashData(data.first_name.toLowerCase().trim());
  }
  if (data.last_name) {
    userData.ln = hashData(data.last_name.toLowerCase().trim());
  }
  if (data.gender) {
    userData.ge = hashData(data.gender.toLowerCase().trim());
  }
  if (data.date_of_birth) {
    userData.db = hashData(data.date_of_birth);
  }
  if (data.city) {
    userData.ct = hashData(data.city.toLowerCase().trim());
  }
  if (data.state) {
    userData.st = hashData(data.state.toLowerCase().trim());
  }

  return userData;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data = await req.json();
    const {
      event_name,
      event_source_url,
      event_id,
      action_source,
      content_name,
      content_category,
      content_type,
      value,
      currency,
      ...userData
    } = data;

    if (!event_name) {
      throw new Error("event_name é obrigatório");
    }

    const event: ConversionEvent = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url,
      event_id,
      user_data: normalizeAndHashUserData({
        ...userData,
        client_ip_address: req.headers.get("x-forwarded-for") || "0.0.0.0",
        client_user_agent: req.headers.get("user-agent") || "",
      }),
      custom_data: {
        action_source,
        content_name,
        content_category,
        content_type,
      }
    };

    if (value && currency) {
      event.custom_data = {
        ...event.custom_data,
        currency: currency.toUpperCase(),
        value: Number(value)
      };
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/1301989717534028/events?access_token=${META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [event]
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error?.message || 'Erro ao enviar evento para o Meta');
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
