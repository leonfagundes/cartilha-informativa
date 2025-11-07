"use client"

import { InfoCard } from "./info-card"
import { 
  Globe, 
  Compass, 
  ScrollText, 
  Globe2, 
  Building2, 
  Handshake, 
  AlertTriangle, 
  Heart 
} from "lucide-react"

const cardsData = [
  {
    id: 1,
    title: "O que é Migração?",
    icon: Globe,
    content: `Migração é o movimento de pessoas de um país para outro por decisão própria. O imigrante deixa seu país normalmente em busca de melhores condições de vida, trabalho, estudo ou oportunidades pessoais. Esse deslocamento é planejado e não envolve ameaça direta à sua vida.

No Brasil, a principal legislação que assegura direitos aos imigrantes é a Lei de Migração (Lei Nº 13.445/2017), que reconhece o imigrante como sujeito de direitos e promove sua integração na sociedade.`,
    lawLink: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm"
  },
  {
    id: 2,
    title: "Quem é Refugiado?",
    icon: Compass,
    content: `Refugiado é quem é forçado a deixar seu país de origem devido a perseguição por motivos como raça, religião, nacionalidade, grupo social ou opinião política. Nessas situações, retornar ao país representa risco à vida, dignidade e liberdade da pessoa.

A base legal internacional está na Convenção Relativa ao Estatuto dos Refugiados (1951), complementada no Brasil pela Lei Nº 9.474/1997, que define e garante direitos aos refugiados.`,
    lawLink: "https://www.planalto.gov.br/ccivil_03/leis/l9474.htm"
  },
  {
    id: 3,
    title: "Legislação Brasileira",
    icon: ScrollText,
    content: `O Brasil possui uma das legislações mais avançadas em proteção humanitária:

- Constituição Federal de 1988: estabelece a dignidade da pessoa humana e a igualdade.
- Lei Nº 9.474/97: regulamenta a concessão do refúgio.
- Lei Nº 13.445/2017 (Lei de Migração): orienta políticas de acolhimento, regularização e integração do migrante.

A legislação garante direito à saúde, educação, acesso à justiça e não discriminação.`,
    lawLink: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },
  {
    id: 4,
    title: "Legislação Internacional",
    icon: Globe2,
    content: `O Direito Internacional estabelece bases para proteção humanitária:

- Declaração Universal dos Direitos Humanos (1948): reconhece direitos fundamentais de todas as pessoas.
- Convenção Relativa ao Estatuto dos Refugiados (1951): define quem é refugiado e garante proteção.
- Pacto Global para a Migração Segura, Ordenada e Regular (ONU): promove cooperação internacional no acolhimento de migrantes.`,
    lawLink: "https://www.acnur.org/fileadmin/Documentos/portugues/BDL/Convencao_relativa_ao_Estatuto_dos_Refugiados.pdf"
  },
  {
    id: 5,
    title: "Situação no Município",
    icon: Building2,
    content: `No nível municipal, não há legislação específica para acolhimento de refugiados. Entretanto, já existem iniciativas e debates políticos em andamento, como propostas de lei orientadas ao acolhimento e integração social de imigrantes e refugiados na cidade.

Isso mostra a importância da sociedade civil e de instituições locais para preencher lacunas na política pública.`
  },
  {
    id: 6,
    title: "Instituto Kayton",
    icon: Handshake,
    content: `Organização que atua no apoio direto a imigrantes e refugiados, oferecendo:

- Cursos de português para facilitar a integração.
- Orientação jurídica (documentos, solicitação de refúgio, SISCONARE, Polícia Federal).
- Encaminhamento para vagas de emprego.

O instituto atua na defesa dos direitos humanos e acolhimento, apesar de limitações financeiras e ausência de abrigo próprio.`,
    websiteLink: "https://institutokayton.com.br",
    images: [
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.25 (1).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.25 (2).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.26 (1).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.26 (2).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.26.jpeg"
    ]
  },
  {
    id: 7,
    title: "Desafios Enfrentados",
    icon: AlertTriangle,
    content: `As principais dificuldades relatadas incluem:

- Xenofobia e discriminação cultural.
- Barreiras linguísticas que dificultam trabalho e convivência.
- Dificuldades para encontrar moradia e emprego.
- Traumas psicológicos decorrentes de guerras e violência.

Esses desafios reforçam a importância de acolhimento social e políticas públicas inclusivas.`
  },
  {
    id: 8,
    title: "Como Apoiar e Acolher",
    icon: Heart,
    content: `Pequenas atitudes transformam a integração:

- Tratar migrantes e refugiados com respeito e dignidade.
- Incentivar a aprendizagem do português com diálogo simples.
- Divulgar projetos de apoio e ONGs locais.
- Combater o preconceito com informação e empatia.

A humanidade acolhe mais do que qualquer fronteira.`
  }
]

export function InfoCardsSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-10 lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Informações Importantes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Clique em cada card para saber mais sobre migração, refúgio e direitos humanos
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {cardsData.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              content={card.content}
              lawLink={card.lawLink}
              websiteLink={card.websiteLink}
              images={card.images}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
