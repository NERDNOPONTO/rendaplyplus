import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Users, DollarSign, Clock, Star, ArrowRight, MessageCircle } from 'lucide-react';

function App() {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  useEffect(() => {
    // Show WhatsApp button after 1 minute and 5 seconds (65 seconds)
    const timer = setTimeout(() => {
      setShowWhatsAppButton(true);
    }, 65000); // 65 seconds = 1 minute and 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const features = [
    "Como comprar perfis de streaming por preços acessíveis com fornecedores confiáveis",
    "Como revender com lucro e atrair clientes fixos e recorrentes",
    "Como criar anúncios e criativos chamativos (que realmente vendem)",
    "Como usar tráfego pago mesmo com pouco orçamento",
    "Como abrir uma conta no Banco do Brasil usando apenas número angolano",
    "Técnicas para transformar conversas no WhatsApp em vendas automáticas",
    "Como calcular e controlar o seu lucro com exatidão",
    "Acesso ao grupo exclusivo de networking, com suporte e acompanhamento pessoal"
  ];

  const targetAudience = [
    "Homens angolanos entre 20 e 35 anos",
    "Pessoas que querem montar um negócio com entrada rápida no mercado",
    "Quem deseja ter renda recorrente todos os meses",
    "Quem quer trabalhar com o celular e internet, sem depender de chefes ou patrões",
    "Quem está começando do zero e precisa de um método simples, acessível e prático"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Play className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">RendaPlay</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Transforma <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Streaming</span> em Renda Mensal
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Aprende passo a passo como comprar perfis de plataformas como Netflix, HBO Max e Disney+ a preço baixo e revender com lucro todos os meses. Mesmo sem experiência e com baixo investimento inicial.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm border border-purple-500/20">
              <div className="aspect-video">
                <wistia-player media-id="bq0ca89i9p" aspect="1.7777777777777777"></wistia-player>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O Que Vais Aprender Dentro do RendaPlay
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Para Quem é o RendaPlay
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-center p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <Users className="w-6 h-6 text-purple-400 mr-4 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Investimento</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="w-12 h-12 text-green-400 mr-4" />
              <div>
                <p className="text-gray-300 text-lg">Apenas</p>
                <p className="text-4xl md:text-5xl font-bold text-white">6.497 Kz</p>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Acesso completo ao curso</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Grupo exclusivo de networking</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Suporte direto no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como Funciona
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assiste à VSL</h3>
              <p className="text-gray-300">Assiste ao vídeo completo acima</p>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Clica no Botão</h3>
              <p className="text-gray-300">Clica no botão verde quando aparecer</p>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fala Comigo</h3>
              <p className="text-gray-300">Fala comigo direto no WhatsApp para garantir tua vaga</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 text-red-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Vagas Limitadas</h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Para manter a qualidade do suporte, o acesso ao grupo é limitado por tempo e por vagas. Garanta a tua entrada hoje mesmo antes que o acesso seja fechado.
          </p>
          
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-300 font-semibold text-lg">
              ⚠️ Atenção: Últimas vagas disponíveis
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Não espera por oportunidades.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Cria a tua.
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-8 font-semibold">
            Começa hoje com o RendaPlay.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-yellow-400 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
          
          {!showWhatsAppButton && (
            <p className="text-gray-400 text-lg">
              👆 O botão de compra aparecerá em breve...
            </p>
          )}
        </div>
      </section>

      {/* WhatsApp Button - Fixed at bottom */}
      {showWhatsAppButton && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
          <div className="container mx-auto text-center animate-fade-in">
            <a
              href="https://wa.me/message/B52TGG5UQPHRI1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xl rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Garantir Minha Vaga Agora
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
            <p className="text-gray-300 mt-2 text-sm">
              ⚡ Vagas Limitadas - Clique agora e garante a tua entrada
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/40 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Play className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-white font-semibold">RendaPlay</span>
          </div>
          <p className="text-gray-400">
            © 2025 RendaPlay. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;