# Cartilha - Website Multilíngue com Tema Escuro

Este é um projeto [Next.js](https://nextjs.org) com suporte completo a múltiplos idiomas e tema escuro/claro.

## ✨ Funcionalidades

- 🌍 **Suporte Multilíngue**: Português, Inglês, Espanhol e Francês
- 🌓 **Tema Escuro/Claro**: Alterne entre temas com um switch
- 📱 **Totalmente Responsivo**: Design adaptável para mobile e desktop
- 🎨 **shadcn/ui**: Componentes modernos e acessíveis
- ⚡ **Next.js 16**: Performance e velocidade

## 🚀 Como Usar

Primeiro, instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
cartilha/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   ├── header.tsx            # Cabeçalho com controles
│   ├── language-switcher.tsx # Seletor de idioma
│   ├── theme-toggle.tsx      # Botão de tema
│   └── theme-provider.tsx    # Provedor de tema
├── hooks/
│   └── use-translations.ts   # Hook para traduções
├── public/
│   └── languages/            # Arquivos de tradução JSON
│       ├── pt.json
│       ├── en.json
│       ├── es.json
│       └── fr.json
└── lib/
    └── utils.ts              # Utilitários
```

## 🌍 Adicionando Novos Idiomas

1. Crie um novo arquivo JSON em `public/languages/` (ex: `de.json`)
2. Adicione as traduções seguindo a estrutura:

```json
{
  "title": "Seu Título",
  "welcome": "Bem-vindo",
  "description": "Sua descrição"
}
```

3. Adicione o idioma no arquivo `components/language-switcher.tsx`:

```typescript
const languages: Language[] = [
  // ... idiomas existentes
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]
```

## 🎨 Personalizando o Tema

O tema pode ser personalizado editando o arquivo `app/globals.css`. As variáveis CSS customizadas podem ser ajustadas para cada tema (light/dark).

## 📦 Tecnologias Utilizadas

- **Next.js 16**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Biblioteca de componentes
- **next-themes**: Gerenciamento de tema
- **lucide-react**: Ícones

## 🛠️ Desenvolvimento

Para adicionar novos componentes shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
