"use client"
import useEmblaCarousel from "embla-carousel-react"
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Clock,
  Stethoscope,
  Heart,
  Activity,
  Shield,
  Star,
  ArrowRight,
  Syringe,
  Users
} from "lucide-react"

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const services = [
  {
    title: "Consulta Clínica Geral",
    description: "Exame completo do seu pet com avaliação de saúde, orientações preventivas e diagnóstico de possíveis problemas de saúde.",
    duration: "Duração: 45min",
    price: "R$ 80,00",
    icon: <Stethoscope />,
    linkText: 'Olá Dra. Loyana! Vi no site sobre consulta clínica e gostaria de agendar para meu pet.',
    badge: "Mais Procurado",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Vacinação Completa",
    description: "Protocolo vacinal completo para cães e gatos, incluindo vacinas obrigatórias e opcionais para máxima proteção do seu pet.",
    duration: "Duração: 30min",
    price: "A partir de R$ 45,00",
    icon: <Syringe />,
    linkText: 'Olá Dra. Loyana! Vi no site sobre vacinação e quero agendar para meu pet.',
    badge: "Prevenção",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Cirurgia Veterinária",
    description: "Procedimentos cirúrgicos especializados com equipamentos modernos, anestesia segura e acompanhamento pós-operatório completo.",
    duration: "Duração: 2h-4h",
    price: "Consulte valores",
    icon: <Activity />,
    linkText: 'Olá Dra. Loyana! Vi no site sobre cirurgia veterinária e gostaria de saber mais.',
    badge: "Especializado",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Check-up Premium",
    description: "Avaliação completa com exames laboratoriais, consulta detalhada e plano de cuidados personalizado para seu pet.",
    duration: "Duração: 1h30",
    price: "R$ 150,00",
    icon: <Shield />,
    linkText: 'Olá Dra. Loyana! Vi no site sobre check-up premium e quero agendar.',
    badge: "Completo",
    color: "from-orange-500 to-red-600"
  },
];

export function VetServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': {
        slidesToScroll: 2,
      },
      '(min-width: 1024px)': {
        slidesToScroll: 3,
      }
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            Nossos{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cuidados veterinários especializados com equipamentos modernos, técnicas avançadas e muito amor pelos animais
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
                  <article className="group bg-white rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
                    {/* Badge */}
                    <div className={`absolute top-6 right-6 bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {item.badge}
                    </div>
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl">{item.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className={`text-2xl font-bold text-slate-900 ${playfair.className}`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-100 pt-6 mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <span className="text-lg font-semibold text-slate-900">
                          
                        </span>
                      </div>
                      
                      <a
                        target='_blank'
                        href={`https://wa.me/5533999927464?text=${encodeURIComponent(item.linkText)}`}
                        className={`group/btn flex items-center justify-center gap-3 bg-gradient-to-r ${item.color} hover:shadow-lg text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 w-full`}
                      >
                        <MessageCircle className="w-5 h-5 group-hover/btn:animate-pulse" />
                        <span>Agendar Consulta</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 group"
            aria-label="Serviço anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-slate-900 group-hover:-translate-x-1 transition-all" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all duration-300 group"
            aria-label="Próximo serviço"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold text-slate-900 mb-4 ${playfair.className}`}>
              Por que escolher nossa clínica veterinária?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Oferecemos cuidados veterinários especializados com equipamentos modernos em ambiente seguro e acolhedor para seu pet
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Equipamentos Modernos</h4>
              <p className="text-slate-600">Utilizamos tecnologia de ponta para diagnósticos precisos e tratamentos eficazes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Atendimento Humanizado</h4>
              <p className="text-slate-600">Cada pet recebe cuidado individualizado com muito carinho e atenção personalizada</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Ambiente Seguro</h4>
              <p className="text-slate-600">Clínica totalmente higienizada com protocolos rigorosos de biossegurança</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}