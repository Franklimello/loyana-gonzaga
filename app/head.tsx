export default function Head() {
  return (
    <>
      <title>Dra. Loyana Gonzaga | Médica Veterinária Especialista | Cuidados Completos para Pets</title>
      <meta
        name="description"
        content="Cuidados veterinários especializados com a Dra. Loyana Gonzaga. Consultas, cirurgias, emergências 24h e muito amor pelos pets. Atendimento humanizado e equipamentos modernos."
      />
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="keywords"
        content="veterinária, médica veterinária, cuidados pets, consulta veterinária, cirurgia animal, emergência veterinária, vacinação, check-up pet, Loyana Gonzaga, clínica veterinária"
      />
      <meta name="author" content="Dra. Loyana Gonzaga - Médica Veterinária" />

      {/* Verificação Google Search Console */}
      <meta name="google-site-verification" content="WKbHrteBd7ZVAata6JEWdk1U8D2AAF8Smo41RTP5XFU" />

      {/* Open Graph para redes sociais */}
      <meta property="og:title" content="Dra. Loyana Gonzaga | Médica Veterinária Especialista" />
      <meta
        property="og:description"
        content="Cuidados veterinários completos com equipamentos modernos e atendimento humanizado. Seu pet merece o melhor cuidado."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://loyana-gonzaga-cwqa.vercel.app/" />
      <meta property="og:image" content="/og-image-veterinaria.jpeg" />

      {/* Dados estruturados para veterinária */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VeterinaryCare",
          "name": "Dra. Loyana Gonzaga - Médica Veterinária",
          "description": "Clínica veterinária especializada em cuidados completos para pets",
          "url": "https://loyana-gonzaga-cwqa.vercel.app/",
          "telephone": "+55-33-99963-8245",
          "email": "dra.loyana@veterinaria.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Endereço da Clínica",
            "addressLocality": "Sua Cidade",
            "addressRegion": "MG",
            "postalCode": "00000-000",
            "addressCountry": "BR"
          },
          "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 08:00-14:00"
          ],
          "priceRange": "$$",
          "physician": {
            "@type": "Person",
            "name": "Dra. Loyana Gonzaga",
            "jobTitle": "Médica Veterinária",
            "alumniOf": "Universidade Federal de Viçosa",
            "memberOf": {
              "@type": "Organization",
              "name": "CRMV-MG"
            }
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": -19.8157,
              "longitude": -43.9542
            },
            "geoRadius": "50000"
          },
          "serviceType": [
            "Consulta Clínica Veterinária",
            "Cirurgia Veterinária",
            "Vacinação Animal",
            "Emergência Veterinária 24h",
            "Check-up Preventivo",
            "Exames Veterinários"
          ]
        })}
      </script>

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dra. Loyana Gonzaga | Médica Veterinária" />
      <meta name="twitter:description" content="Cuidados veterinários especializados com muito amor pelos pets" />
      <meta name="twitter:image" content="/og-image-veterinaria.jpeg" />

      {/* Meta tags adicionais para SEO local */}
      <meta name="geo.region" content="BR-MG" />
      <meta name="geo.placename" content="Sua Cidade, Minas Gerais" />
      <meta name="geo.position" content="-19.8157;-43.9542" />
      <meta name="ICBM" content="-19.8157, -43.9542" />

      {/* URL canônica */}
      <link rel="canonical" href="https://loyana-gonzaga-cwqa.vercel.app/" />

      {/* Meta tags para dispositivos móveis */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Meta tag para tema do navegador */}
      <meta name="theme-color" content="#10b981" />
    </>
  );
}