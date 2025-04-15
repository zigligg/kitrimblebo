import React from 'react';
import { PhoneCall, Package2, Shield, Timer, CheckCircle2, MapPin, Instagram, Facebook, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

function App() {
  const whatsappLink = "https://wa.me/5542999250201?text=Ol%C3%A1%2C%20estou%20interessado%20no%20Kit%20Nav900%20%2B%20Monitor%20GFX750%20com%20os%20desbloqueios!%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F";

  const faqItems = [
    {
      question: "É compatível com quais modelos de trator?",
      answer: "O Kit é compatível com diversos modelos que possuem sistema CAN. Entre em contato para verificarmos a compatibilidade específica com seu equipamento."
    },
    {
      question: "O produto tem garantia?",
      answer: "Sim! Oferecemos garantia completa do equipamento e suporte técnico especializado para sua tranquilidade."
    },
    {
      question: "Vocês oferecem instalação?",
      answer: "Sim, nossa equipe técnica realiza a instalação e configuração completa do equipamento, garantindo o funcionamento ideal."
    },
    {
      question: "O parcelamento é com ou sem juros?",
      answer: "Oferecemos parcelamento em até 24x. As condições específicas de juros dependem da forma de pagamento e podem variar. Entre em contato conosco para discutir as melhores opções para o seu caso."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <img 
              src="https://technoagri.com.br/wp-content/webp-express/webp-images/uploads/2024/09/Design-sem-nome-5.png.webp"
              alt="TechnoAgri Logo"
              className="h-12"
            />
            <a
              href={whatsappLink}
              className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="bg-[#F2FDF5] text-black py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-green-700 mb-4">Última unidade em estoque</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Kit Trimble Nav900 + Monitor GFX750 com Desbloqueios Inclusos
                </h1>
                <p className="text-xl mb-8">
                  Economize <span className="text-green-700 font-bold">R$ 38.000,00</span> com os desbloqueios CenterPoint e CAN já inclusos neste equipamento semi novo e revisado.
                </p>
                <a
                  href={whatsappLink}
                  className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Falar com especialista
                </a>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl">
                  <img 
                    src="https://kitrimble.vercel.app/images/trimble-nav900-gfx750.png"
                    alt="Kit Trimble Nav900 + GFX750"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Special Offer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Oferta Especial por Tempo Limitado</h2>
            <div className="flex flex-col items-center mb-4">
              <span className="text-xl md:text-2xl text-gray-400 line-through mb-2">R$ 77.000,00</span>
              <span className="text-4xl md:text-5xl font-bold text-green-600 mb-2">R$ 39.000,00</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Economize R$ 38.000,00
              </span>
            </div>
            <p className="text-gray-600 mb-8">Parcele em até 24x ou consulte condições especiais</p>
            <a
              href={whatsappLink}
              className="inline-flex items-center justify-center w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Garantir Minha Unidade
            </a>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Benefícios Exclusivos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Economia Garantida</h3>
              <p className="text-gray-600">Economize R$ 38.000,00 com os desbloqueios CenterPoint e CAN já inclusos no kit.</p>
            </div>
            <div className="p-6 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Package2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Equipamento Revisado</h3>
              <p className="text-gray-600">Semi novo, totalmente testado e pronto para uso imediato em sua operação.</p>
            </div>
            <div className="p-6 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Timer className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Alta Precisão</h3>
              <p className="text-gray-600">Desbloqueio CenterPoint para operações agrícolas com máxima precisão.</p>
            </div>
            <div className="p-6 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compatibilidade CAN</h3>
              <p className="text-gray-600">Funciona com tratores equipados com sistema CAN, garantindo versatilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Contents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">O Que Está Incluso no Kit</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Módulo Trimble Nav900</h3>
                  <p className="text-gray-600">Receptor GNSS de alta performance para piloto automático de precisão.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monitor GFX750</h3>
                  <p className="text-gray-600">Display touchscreen de 10 polegadas com interface intuitiva e Android integrado.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desbloqueio CenterPoint RTX</h3>
                  <p className="text-gray-600">Sinal de correção de alta precisão (valor de mercado: R$ 25.000,00).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desbloqueio CAN</h3>
                  <p className="text-gray-600">Compatibilidade com sistema CAN de tratores modernos (valor de mercado: R$ 13.000,00).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suporte Técnico Especializado</h3>
                  <p className="text-gray-600">Assistência da equipe TechnoAgri para instalação e configuração.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Economia Real em Números</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Valor de Mercado</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">Kit Trimble Nav900 + GFX750</p>
                    <p className="text-xl font-bold">R$ 39.000,00</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Desbloqueio CenterPoint</p>
                    <p className="text-xl font-bold">R$ 25.000,00</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Desbloqueio CAN</p>
                    <p className="text-xl font-bold">R$ 13.000,00</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600">Total</p>
                    <p className="text-2xl font-bold text-gray-900">R$ 77.000,00</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-600 p-8 rounded-lg shadow-lg text-white">
                <h3 className="text-xl font-semibold mb-6">Oferta Especial</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-green-100">Kit Completo com Desbloqueios</p>
                    <p className="text-2xl font-bold">R$ 39.000,00</p>
                  </div>
                  <div>
                    <p className="text-green-100">Desbloqueio CenterPoint</p>
                    <p className="text-xl font-bold">Incluso</p>
                  </div>
                  <div>
                    <p className="text-green-100">Desbloqueio CAN</p>
                    <p className="text-xl font-bold">Incluso</p>
                  </div>
                  <div className="pt-4 border-t border-green-500">
                    <p className="text-green-100">Sua Economia</p>
                    <p className="text-2xl font-bold">R$ 38.000,00</p>
                  </div>
                </div>
                <a
                  href={whatsappLink}
                  className="mt-8 inline-block w-full bg-white text-green-600 text-center font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Garantir Minha Unidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <Accordion.Item 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <Accordion.Trigger className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50">
                    <span className="text-xl font-semibold">{item.question}</span>
                    <ChevronDown className="w-5 h-5 transform transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="p-4 bg-gray-50">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>

      {/* Last Unit Available Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Última Unidade Disponível</h2>
            <p className="text-xl mb-8">
              Não perca a oportunidade de economizar R$ 38.000,00 com este kit completo. Fale agora com um de nossos consultores.
            </p>
            <a
              href={whatsappLink}
              className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="flex items-center mb-2">
                <PhoneCall className="w-5 h-5 mr-2" /> (42) 99925-0201
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" /> Av. Sen. Flávio Carvalho Guimarães, 328 - Boa Vista, Ponta Grossa - PR, 84070-460
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/technoagri/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/p/Technoagri-100066332445827/?paipv=0&eav=AfaI1Eirt1o1-f7TF6t35hiUWvgAx4tWK-LasNtxy8F5cCxEJBcaMZnDNymoFx9v_hY&_rdr" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li><a href="https://technoagri.com.br/produtos-2/" className="hover:text-green-500 transition-colors">Piloto Automático</a></li>
                <li><a href="https://technoagri.com.br/produtos-2/" className="hover:text-green-500 transition-colors">Sistemas de Precisão</a></li>
                <li><a href="https://technoagri.com.br/produtos-2/" className="hover:text-green-500 transition-colors">Monitores e Displays</a></li>
                <li><a href="https://technoagri.com.br/produtos-2/" className="hover:text-green-500 transition-colors">Soluções Integradas</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 TechnoAgri. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;