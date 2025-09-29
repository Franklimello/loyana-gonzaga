"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from 'lucide-react'
import Image from 'next/image'

import tutor1 from '../../public/prescila soares.jpeg'  // Você precisará substituir pelas fotos dos tutores
import tutor2 from '../../public/pamela.jpeg'  // Você precisará substituir pelas fotos dos tutores
import tutor3 from '../../public/maria gabriela.jpeg'  // Você precisará substituir pelas fotos dos tutores

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const testimonials = [
  {
    content:
      "A Dra. Loyana salvou a vida da minha cachorrinha! Seu conhecimento e dedicação fizeram toda a diferença. Ela explicou cada procedimento com paciência e carinho.",
    author: "Marina Silva",
    role: "Tutora da Bella",
    image: tutor1,
    rating: 5,
    highlight: "Salvou minha pet",
    service: "Cirurgia de Emergência"
  },
  {
    content:
      "Nunca vi um atendimento tão humanizado! A Dra. Loyana tratou meu gatinho como se fosse dela, com muito amor e profissionalismo. Recomendo de olhos fechados!",
    author: "thalita Mendes",
    role: "Tutor do Mimi",
    image: tutor2,
    rating: 5,
    highlight: "Atendimento excepcional",
    service: "Check-up Completo"
  },
  {
    content:
      "A consulta foi muito detalhada e esclarecedora. A Dra. Loyana orientou sobre todos os cuidados preventivos e meu cãozinho saiu de lá mais saudável e feliz!",
    author: "Ana Paula",
    role: "Tutora do Rex",
    image: tutor3,
    rating: 5,
    highlight: "Cuidado preventivo",
    service: "Consulta Clínica"
  },
];

export function VetTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            O que dizem nossos{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              tutores
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Histórias reais de cuidado e dedicação. Cada depoimento representa uma experiência única 
            de confiança, profissionalismo e amor pelos animais.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">4.9 estrelas</span>
            </div>
            <div className="text-slate-600">
              <span className="font-bold text-emerald-600">98%</span> de satisfação
            </div>
            <div className="text-slate-600">
              <span className="font-bold text-emerald-600">800+</span> pets atendidos
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-6">
                  <article className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-100 relative overflow-hidden group">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-50 to-transparent rounded-full translate-y-12 -translate-x-12" />
                    
                    <div className="relative z-10">
                      {/* Service Badge */}
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Quote className="w-4 h-4" />
                        {item.service}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center space-y-8">
                        {/* Quote */}
                        <div className="relative">
                          <Quote className="w-12 h-12 text-emerald-200 mx-auto mb-6" />
                          <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed italic font-light">
                            "{item.content}"
                          </blockquote>
                        </div>
                        
                        {/* Highlight */}
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4">
                          <p className="text-emerald-700 font-semibold text-lg">
                            ✨ {item.highlight}
                          </p>
                        </div>
                        
                        {/* Author Info */}
                        <div className="flex flex-col items-center space-y-4">
                          <div className="relative">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300">
                              <Image
                                src={item.image}
                                alt={`Foto de ${item.author}`}
                                fill
                                sizes="80px"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                              <Heart className="w-3 h-3 text-white fill-current" />
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <h4 className={`text-2xl font-bold text-slate-900 ${playfair.className}`}>
                              {item.author}
                            </h4>
                            <p className="text-slate-500 font-medium">{item.role}</p>
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-1">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group/btn"
            onClick={scrollPrev}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 group-hover/btn:text-slate-900 group-hover/btn:-translate-x-1 transition-all" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group/btn"
            onClick={scrollNext}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover/btn:text-slate-900 group-hover/btn:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Quote className="w-6 h-6 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Avaliações Verificadas</span>
            </div>
            
            <h3 className={`text-2xl lg:text-3xl font-bold text-white mb-4 ${playfair.className}`}>
              A saúde do seu pet pode ser o{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                próximo caso de sucesso
              </span>
            </h3>
            
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de tutores que já confiaram na experiência e dedicação 
              da Dra. Loyana para cuidar da saúde dos seus melhores amigos.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span>✓ Equipamentos modernos</span>
              <span>✓ Atendimento humanizado</span>
              <span>✓ Ambiente seguro</span>
              <span>✓ Emergências 24h</span>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}