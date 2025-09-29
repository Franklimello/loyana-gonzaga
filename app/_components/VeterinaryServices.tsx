import { MessageCircle, Stethoscope, Heart, Shield, Activity, Clock, Syringe } from 'lucide-react';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function VeterinaryServices() {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Diagnóstico Preciso",
      description: "Equipamentos modernos e técnicas avançadas para diagnósticos rápidos e tratamentos eficazes para seu pet."
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada pet recebe cuidado individualizado com muito carinho, priorizando o bem-estar animal e a tranquilidade dos tutores."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protocolos rigorosos de segurança, ambiente higienizado e procedimentos seguros para garantir a saúde do seu companheiro."
    }
  ];

  return (
    <section
      className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20"
      aria-label="Conheça nossos serviços veterinários"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Stethoscope className="w-8 h-8 text-emerald-600" aria-hidden="true" />
          </div>
          
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 ${playfair.className}`}>
            Nossos{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              Oferecemos <strong className="text-slate-900">cuidados veterinários completos para seu pet</strong> com equipamentos modernos 
              e protocolos atualizados. Nosso trabalho vai além do tratamento — priorizamos a prevenção e o bem-estar animal, 
              proporcionando qualidade de vida e tranquilidade para toda a família.
            </p>
            
            <p className="text-xl text-slate-700 leading-relaxed">
              Com <strong className="text-emerald-600">experiência e dedicação</strong>, cada atendimento é pensado para oferecer 
              o melhor cuidado possível, desde consultas de rotina até procedimentos complexos, sempre com muito amor pelos animais.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              
              <h3 className={`text-xl font-semibold text-slate-900 mb-4 ${playfair.className}`}>
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services List */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 mb-16">
          <h3 className={`text-3xl font-bold text-slate-900 text-center mb-8 ${playfair.className}`}>
            Nossos Principais Serviços
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-emerald-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Clínica Médica
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Consultas de rotina e check-ups preventivos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Vacinação e vermifugação completas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Tratamento de doenças dermatológicas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Diagnóstico e tratamento de alergias
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Acompanhamento de pets idosos
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-teal-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Procedimentos Especializados
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Cirurgias gerais e especializadas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Castração e esterilização
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Exames laboratoriais e de imagem
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Atendimento de emergências 24h
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Internação e cuidados intensivos
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Services Highlight */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-16 border border-red-100">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <h3 className={`text-2xl font-bold text-center text-slate-900 mb-4 ${playfair.className}`}>
            Atendimento de Emergência
          </h3>
          
          <p className="text-center text-slate-700 mb-6 max-w-2xl mx-auto">
            Para situações urgentes, disponibilizamos atendimento de emergência 24 horas. 
            Entre em contato imediatamente em casos de acidentes, intoxicações ou sintomas graves.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
              🚨 Emergências: (33) 9 9992-7464
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-center">
          <h3 className={`text-3xl lg:text-4xl font-bold text-white mb-6 ${playfair.className}`}>
            Pronto para cuidar da saúde{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              do seu melhor amigo?
            </span>
          </h3>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Agende uma consulta e proporcione ao seu pet o cuidado veterinário que ele merece. 
            Estamos aqui para garantir a saúde e felicidade do seu companheiro!
          </p>
          
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5533999927464?text=Olá Dra. Loyana! Gostaria de agendar uma consulta veterinária para meu pet. Quais são os horários disponíveis?"
            aria-label="Entrar em contato via WhatsApp para agendar consulta veterinária"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:ring-4 focus:ring-emerald-200"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Agendar Consulta
          </a>
          
          <p className="text-sm text-slate-400 mt-4">
            ✓ Agendamento rápido • ✓ Resposta em até 30 minutos • ✓ Horários flexíveis
          </p>
        </div>
      </div>
    </section>
  );
}