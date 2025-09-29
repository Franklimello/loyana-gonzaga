"use client"

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Stethoscope, Shield } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-8" aria-label="Rodapé do site Dra. Loyana Gonzaga">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Footer Content */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" role="contentinfo">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-3">
                Dra. Loyana Gonzaga
              </h3>
              <p className="text-xl font-medium text-emerald-400 mb-3">
                Médica Veterinária • CRMV-MG 12345
              </p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Cuidando da saúde dos seus pets com dedicação, competência e muito amor. 
                Seu melhor amigo merece o melhor cuidado.
              </p>
            </div>
            
            <div className="mb-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5533999927464?text=Olá%20Dra.%20Loyana,%20gostaria%20de%20agendar%20uma%20consulta%20veterinária%20para%20meu%20pet."
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Agendar consulta pelo WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Agendar Consulta
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/loyanagonzaga.vet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800 hover:bg-emerald-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Perfil no Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
                
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              {[
                "Consultas Clínicas",
                "Vacinação Completa", 
                "Cirurgias Especializadas",
                "Check-ups Preventivos",
                "Atendimento de Emergência",
                "Exames Laboratoriais"
              ].map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contato & Horários</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Telefone</p>
                  <a 
                    href="tel:+5533999638245"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    (33) 9 9992-7464
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Emergências 24h</p>
                  <a 
                    href="tel:+5533999999999"
                    className="text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    (33) 9 9992-7464
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a 
                    href="mailto:dra.loyana@veterinaria.com"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm"
                  >
                    dra.loyana@veterinaria.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium mb-2">Funcionamento</p>
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>Seg - Sex: 8h às 18h</p>
                    <p>Sábado: 8h às 14h</p>
                    <p>Emergências: 24h</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Localização</p>
                  <address className="not-italic text-gray-400 text-sm leading-relaxed mt-1">
                    Clínica Veterinária<br />
                    Endereço da clínica<br />
                    Bairro - Lajinha | MG
                  </address>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Dra. Loyana Gonzaga - Médica Veterinária. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              CRMV-MG 12345 | Responsável Técnica
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Site desenvolvido com 
              <Stethoscope className="w-4 h-4 text-emerald-500" />
              e muito amor pelos pets
            </p>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-sm">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <Stethoscope className="w-4 h-4" />
            <span>Seu pet merece o melhor cuidado</span>
            <Shield className="w-4 h-4" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}