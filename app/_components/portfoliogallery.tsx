"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Foto1 from "../../public/foto1.jpeg";
import Foto2 from "../../public/foto2.jpeg";
import Foto3 from "../../public/foto3.jpeg";
import Foto4 from "../../public/foto4.jpeg";
import Foto5 from "../../public/foto5.jpeg";
import Foto6 from "../../public/foto6.jpeg";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Camera, Sparkles, Award } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function PortfolioGallery() {
  const [emblaRef2, emblaApi2] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': {
        slidesToScroll: 2,
      },
      '(min-width: 1024px)': {
        slidesToScroll: 3,
      }
    }
  });

  const scrollPrev2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi2]);

  const scrollNext2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi2]);

  const portfolioNails = [
    { src: Foto1, alt: "Nail art francesa com detalhes dourados - Manicure elegante" },
    { src: Foto2, alt: "Decoração floral delicada - Unhas para casamento" },
    { src: Foto3, alt: "Pedicure completa com esmalte vermelho clássico" },
    { src: Foto4, alt: "Nail art geométrica moderna - Design personalizado" },
    { src: Foto5, alt: "Unhas decoradas com glitter e pedrinhas - Festa" },
    { src: Foto6, alt: "Manicure minimalista com nude e detalhes discretos" }
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Nosso
            </span>
            Portfólio
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Conheça alguns dos nossos trabalhos realizados. Cada unha é única e especial, 
            criada com carinho e atenção aos detalhes para realçar a beleza de cada cliente.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">800+</div>
              <div className="text-sm text-slate-500">Unhas Feitas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-slate-500">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">5+</div>
              <div className="text-sm text-slate-500">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev2}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-slate-900 group-hover:-translate-x-1 transition-all" />
          </button>

          <div className="overflow-hidden rounded-3xl" ref={emblaRef2}>
            <div className="flex gap-6 p-4">
              {portfolioNails.map((foto, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] group"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white p-4">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        ✨ Nail Art
                      </div>
                    </div>
                    
                    {/* Caption */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-slate-700">
                          Trabalho #{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext2}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Nail Art Styles Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Nail Art Personalizada</h3>
            <p className="text-slate-600">Designs únicos criados especialmente para você, desde delicados até os mais elaborados</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Estilos Clássicos</h3>
            <p className="text-slate-600">Francesinha, nude, vermelho clássico e outras opções atemporais sempre impecáveis</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ocasiões Especiais</h3>
            <p className="text-slate-600">Decorações temáticas para casamentos, festas, formaturas e eventos importantes</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-orange-400" />
            <span className="text-orange-400 font-semibold">Trabalhos Comprovados</span>
          </div>
          
          <h3 className={`text-2xl lg:text-3xl font-bold text-white mb-4 ${playfair.className}`}>
            Pronta para ter unhas{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              incríveis como essas?
            </span>
          </h3>
          
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Cada trabalho é único e especial. Agende seu horário e venha fazer parte 
            do nosso portfólio com unhas lindas e bem cuidadas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ Produtos de qualidade</span>
            <span>✓ Designs personalizados</span>
            <span>✓ Resultado duradouro</span>
          </div>
        </div>
      </div>
    </section>
  );
}