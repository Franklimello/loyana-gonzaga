'use client';

import Image from "next/image";
import loyana2 from '../../public/loyana2.png';
import loyanaClinica from '../../public/loyana.png'; // Você precisará adicionar esta imagem
import loyanaCirurgia from "../../public/loyanaCirurgia.jpeg"; // Você precisará adicionar esta imagem
import { Check, MessageCircle, Award, Users, Globe, Heart, Star, ArrowRight, Sparkles, Stethoscope, Shield, Activity } from "lucide-react";
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(0);

  const achievements = [
    { number: "3+", label: "Anos de experiência", icon: <Award className="w-6 h-6" /> },
    { number: "100k+", label: "Pets atendidos", icon: <Heart className="w-6 h-6" /> },
    { number: "10+", label: "Cirurgias realizadas", icon: <Activity className="w-6 h-6" /> },
    { number: "99%", label: "Taxa de sucesso", icon: <Star className="w-6 h-6" /> }
  ];

  const highlights = [
    {
      icon: <Check className="text-emerald-500" />,
      text: "Formação em Medicina Veterinária com especialização em clínica médica"
    },
    {
      icon: <Check className="text-emerald-500" />,
      text: "Equipamentos modernos para diagnósticos precisos e tratamentos eficazes"
    },
    {
      icon: <Check className="text-emerald-500" />,
      text: "Atendimento humanizado focado no bem-estar animal e tranquilidade dos tutores"
    },
    {
      icon: <Check className="text-emerald-500" />,
      text: "Disponibilidade para emergências e acompanhamento pós-consulta"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/30 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Stethoscope className="w-4 h-4" />
            Conheça a Veterinária
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Sobre Dra. Loyana Gonzaga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cuidando da saúde dos seus pets com dedicação, competência e muito amor
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Image gallery */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Main image with decorative background */}
            <div className="relative">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/50 to-teal-300/50 rounded-3xl transform rotate-3 scale-105 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-300/50 to-emerald-300/50 rounded-3xl transform -rotate-2 scale-110 blur-sm" />
              
              {/* Main image container */}
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500">
                <Image
                  src={loyana2}
                  alt="Dra. Loyana Gonzaga sorrindo, especialista em medicina veterinária"
                  fill
                  quality={100}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
              </div>

              {/* Secondary image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <Image
                  src={loyanaClinica}
                  alt="Dra. Loyana Gonzaga atendendo um pet na clínica"
                  fill
                  quality={100}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 transform hover:rotate-12 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">8+</div>
                  <div className="text-xs text-gray-600 font-medium">Anos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Main description */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com mais de 8 anos de experiência em <span className="font-semibold text-emerald-600">medicina veterinária</span>, dedico minha vida ao cuidado e bem-estar dos animais, oferecendo tratamentos com excelência e muito carinho.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Especializada em <span className="font-semibold text-teal-600">clínica médica</span> e procedimentos cirúrgicos, trabalho com equipamentos modernos e protocolos atualizados para garantir o <span className="font-semibold text-cyan-600">melhor cuidado possível</span> para seu pet.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Acredito que cada animal é único, por isso desenvolvo <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">planos de tratamento personalizados</span> que atendem às necessidades específicas de cada paciente.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg transform transition-all duration-500 hover:scale-105 ${
                    activeAchievement === index ? 'ring-2 ring-emerald-500 shadow-emerald-200' : ''
                  }`}
                >
                  <div className="flex justify-center mb-3 text-emerald-500">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Author info */}
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-white/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-3 border-emerald-500 shadow-lg">
                  <Image
                    src={loyanaClinica}
                    alt="Foto da Dra. Loyana Gonzaga, médica veterinária"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  Dra. Loyana Gonzaga
                  <div className="w-5 h-5 text-blue-500">
                    <Shield className="w-5 h-5" />
                  </div>
                </h3>
                <p className="text-gray-600 font-medium">CRMV-MG 12345 • Médica Veterinária • Especialista em Clínica Médica</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">(4.9 • 89 avaliações)</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/5533999927464?text=Olá Dra. Loyana! Preciso agendar uma consulta para meu pet. Pode me ajudar com os horários disponíveis?`}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar com Dra. Loyana
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Emergências atendidas 24h
                <Heart className="w-4 h-4 text-emerald-500 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 leading-relaxed mb-6">
              "A Dra. Loyana salvou a vida do meu cãozinho! Seu conhecimento, dedicação e carinho fizeram toda a diferença. 
              Profissional exemplar que realmente ama o que faz. Recomendo de olhos fechados!"
            </blockquote>
            <cite className="font-semibold text-emerald-600">— Maria Silva, Tutora do Rex</cite>
          </div>
        </div>
      </div>
    </section>
  );
}