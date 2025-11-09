"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Linkedin, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const teamMembers = [
  "Gabriela Gonçalves",
  "Luana Karina",
  "Juliana Lima",
  "Maria Fernanda Rodrigues",
  "Lune Helena Gomides",
  "Helen Paes"
]

const teamContact = {
  email: "grupodepesquisa@gmail.com",
  description: "Estudantes de direito da Universidade de Sorocaba (UNISO)",
  image: "/grupo.jpeg"
}

const developer = {
  name: "Leon Fagundes",
  email: "contato.leonfagundes@gmail.com",
  linkedin: "https://linkedin.com/in/leonfagundes",
  github: "https://github.com/leonfagundes"
}

export default function SobrePage() {
  const { language, setLanguage } = useLanguage()

  const translations: Record<string, any> = {
    pt: {
      title: "Sobre o Projeto",
      backButton: "Voltar para o início",
      objective: "Objetivo do Projeto",
      objectiveText: `Este é um projeto de extensão da UNISO (Universidade de Sorocaba) que visa fornecer informações essenciais e acessíveis para imigrantes e refugiados no Brasil.

O projeto tem como objetivo principal promover a integração social e o acesso aos direitos fundamentais dessas pessoas, oferecendo um guia multilíngue com informações sobre legislação, organizações de apoio e recursos disponíveis.

Através desta cartilha digital, buscamos contribuir para o acolhimento humanitário e a garantia de dignidade para todos que buscam reconstruir suas vidas em território brasileiro.`,
      methodology: "Metodologia do Projeto",
      methodologyText: `A metodologia adotada neste projeto de extensão envolveu diversas etapas:

1. Pesquisa bibliográfica: Levantamento de legislações brasileiras e internacionais sobre migração e refúgio, além de estudos sobre direitos humanos e integração social.

2. Mapeamento de organizações: Identificação de instituições e ONGs que oferecem apoio a imigrantes e refugiados na região, como o Instituto Kayton.

3. Entrevistas e diálogos: Conversas com imigrantes, refugiados e organizações de apoio para compreender as principais necessidades e desafios enfrentados.

4. Desenvolvimento da cartilha digital: Criação de um website multilíngue (Português, Inglês, Espanhol e Francês) com design acessível e responsivo, contendo informações organizadas em cards temáticos.

5. Revisão e validação: Validação do conteúdo com especialistas e membros da comunidade migrante para garantir a precisão e relevância das informações.

O projeto busca aliar teoria e prática, promovendo não apenas a disseminação de conhecimento, mas também a criação de ferramentas concretas de apoio social.`,
      team: "Equipe do Projeto de Extensão",
      developer: "Desenvolvimento do Site",
      contact: "Contato"
    },
    en: {
      title: "About the Project",
      backButton: "Back to home",
      objective: "Project Objective",
      objectiveText: `This is an extension project from UNISO (University of Sorocaba) that aims to provide essential and accessible information for immigrants and refugees in Brazil.

The main objective of the project is to promote social integration and access to fundamental rights for these people, offering a multilingual guide with information about legislation, support organizations and available resources.

Through this digital guide, we seek to contribute to humanitarian reception and guarantee dignity for all who seek to rebuild their lives in Brazilian territory.`,
      methodology: "Project Methodology",
      methodologyText: `The methodology adopted in this extension project involved several stages:

1. Bibliographic research: Survey of Brazilian and international legislation on migration and refuge, as well as studies on human rights and social integration.

2. Organization mapping: Identification of institutions and NGOs that offer support to immigrants and refugees in the region, such as Instituto Kayton.

3. Interviews and dialogues: Conversations with immigrants, refugees and support organizations to understand the main needs and challenges faced.

4. Development of the digital guide: Creation of a multilingual website (Portuguese, English, Spanish and French) with accessible and responsive design, containing information organized in thematic cards.

5. Review and validation: Content validation with experts and members of the migrant community to ensure accuracy and relevance of information.

The project seeks to combine theory and practice, promoting not only the dissemination of knowledge, but also the creation of concrete tools for social support.`,
      team: "Extension Project Team",
      developer: "Website Development",
      contact: "Contact"
    },
    es: {
      title: "Sobre el Proyecto",
      backButton: "Volver al inicio",
      objective: "Objetivo del Proyecto",
      objectiveText: `Este es un proyecto de extensión de UNISO (Universidad de Sorocaba) que tiene como objetivo proporcionar información esencial y accesible para inmigrantes y refugiados en Brasil.

El proyecto tiene como objetivo principal promover la integración social y el acceso a los derechos fundamentales de estas personas, ofreciendo una guía multilingüe con información sobre legislación, organizaciones de apoyo y recursos disponibles.

A través de esta guía digital, buscamos contribuir a la acogida humanitaria y garantizar la dignidad de todos los que buscan reconstruir sus vidas en territorio brasileño.`,
      methodology: "Metodología del Proyecto",
      methodologyText: `La metodología adoptada en este proyecto de extensión involucró varias etapas:

1. Investigación bibliográfica: Estudio de legislaciones brasileñas e internacionales sobre migración y refugio, además de estudios sobre derechos humanos e integración social.

2. Mapeo de organizaciones: Identificación de instituciones y ONGs que ofrecen apoyo a inmigrantes y refugiados en la región, como el Instituto Kayton.

3. Entrevistas y diálogos: Conversaciones con inmigrantes, refugiados y organizaciones de apoyo para comprender las principales necesidades y desafíos enfrentados.

4. Desarrollo de la guía digital: Creación de un sitio web multilingüe (Portugués, Inglés, Español y Francés) con diseño accesible y responsivo, conteniendo información organizada en tarjetas temáticas.

5. Revisión y validación: Validación del contenido con expertos y miembros de la comunidad migrante para garantizar la precisión y relevancia de la información.

El proyecto busca unir teoría y práctica, promoviendo no solo la difusión de conocimiento, sino también la creación de herramientas concretas de apoyo social.`,
      team: "Equipo del Proyecto de Extensión",
      developer: "Desarrollo del Sitio Web",
      contact: "Contacto"
    },
    fr: {
      title: "À Propos du Projet",
      backButton: "Retour à l'accueil",
      objective: "Objectif du Projet",
      objectiveText: `Il s'agit d'un projet d'extension de l'UNISO (Université de Sorocaba) qui vise à fournir des informations essentielles et accessibles aux immigrants et réfugiés au Brésil.

L'objectif principal du projet est de promouvoir l'intégration sociale et l'accès aux droits fondamentaux de ces personnes, en offrant un guide multilingue avec des informations sur la législation, les organisations de soutien et les ressources disponibles.

Grâce à ce guide numérique, nous cherchons à contribuer à l'accueil humanitaire et à garantir la dignité de tous ceux qui cherchent à reconstruire leur vie sur le territoire brésilien.`,
      methodology: "Méthodologie du Projet",
      methodologyText: `La méthodologie adoptée dans ce projet d'extension a impliqué plusieurs étapes:

1. Recherche bibliographique: Étude de la législation brésilienne et internationale sur la migration et le refuge, ainsi que des études sur les droits humains et l'intégration sociale.

2. Cartographie des organisations: Identification des institutions et ONG qui offrent un soutien aux immigrants et réfugiés dans la région, comme l'Instituto Kayton.

3. Entretiens et dialogues: Conversations avec des immigrants, des réfugiés et des organisations de soutien pour comprendre les principaux besoins et défis rencontrés.

4. Développement du guide numérique: Création d'un site web multilingue (Portugais, Anglais, Espagnol et Français) avec un design accessible et responsive, contenant des informations organisées en cartes thématiques.

5. Révision et validation: Validation du contenu avec des experts et des membres de la communauté migrante pour garantir l'exactitude et la pertinence des informations.

Le projet cherche à allier théorie et pratique, en promouvant non seulement la diffusion des connaissances, mais aussi la création d'outils concrets de soutien social.`,
      team: "Équipe du Projet d'Extension",
      developer: "Développement du Site",
      contact: "Contact"
    }
  }

  const t = translations[language] || translations.pt

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-background text-foreground flex flex-col">
      <Navbar currentLanguage={language} onLanguageChange={setLanguage} />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-6 py-8 sm:py-12 md:py-20">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          {t.backButton}
        </Link>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 sm:mb-8 break-words">
          {t.title}
        </h1>

        {/* Objective Section */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-4 sm:mb-6 break-words">
            {t.objective}
          </h2>
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/80 whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {t.objectiveText}
            </p>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-4 sm:mb-6 break-words">
            {t.methodology}
          </h2>
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/80 whitespace-pre-line leading-relaxed text-sm sm:text-base break-words">
              {t.methodologyText}
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-6 sm:mb-8">
            {t.team}
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              {/* Names and Info */}
              <div className="flex-1">
                <div className="mb-3 sm:mb-4">
                  {teamMembers.map((name, index) => (
                    <p key={index} className="font-display font-semibold text-sm sm:text-base mb-1">
                      {name}
                    </p>
                  ))}
                </div>
                {teamContact.description && (
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {teamContact.description}
                  </p>
                )}
                <div className="flex gap-2 sm:gap-3">
                  {teamContact.email && (
                    <a
                      href={`mailto:${teamContact.email}`}
                      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      aria-label="Email da equipe"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Group Photo */}
              {teamContact.image && (
                <div className="relative w-full md:w-64 h-40 sm:h-48 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={teamContact.image}
                    alt="Equipe do Projeto"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-6 sm:mb-8">
            {t.developer}
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 sm:p-6 max-w-md hover:shadow-lg transition-shadow">
            <h3 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              {developer.name}
            </h3>
            <div className="flex gap-2 sm:gap-3">
              {developer.email && (
                <a
                  href={`mailto:${developer.email}`}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={`Email ${developer.name}`}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
              {developer.linkedin && (
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={`LinkedIn ${developer.name}`}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
              {developer.github && (
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={`GitHub ${developer.name}`}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer currentLanguage={language} />
    </div>
  )
}
