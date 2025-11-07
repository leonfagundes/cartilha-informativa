# Guia de Traduções

Este arquivo explica como adicionar e gerenciar traduções no projeto.

## Estrutura dos Arquivos de Tradução

Cada arquivo de idioma em `public/languages/` segue esta estrutura:

```json
{
  "chave": "valor"
}
```

## Exemplo de Uso

### 1. Adicionar novas traduções

Edite cada arquivo de idioma (`pt.json`, `en.json`, `es.json`, `fr.json`) e adicione novos pares chave-valor:

```json
{
  "title": "Cartilha",
  "welcome": "Bem-vindo",
  "description": "Este é um website multilíngue",
  "about": "Sobre Nós",
  "contact": "Contato",
  "footer": "Todos os direitos reservados"
}
```

### 2. Usar as traduções no código

No componente React:

```tsx
import { useTranslations } from "@/hooks/use-translations"

export default function MyComponent() {
  const [language, setLanguage] = useState("pt")
  const { translations, loading } = useTranslations(language)

  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
    </div>
  )
}
```

## Traduções Atuais

### Português (pt.json)
- title: Cartilha
- welcome: Bem-vindo
- description: Este é um website multilíngue com suporte a modo escuro

### Inglês (en.json)
- title: Handbook
- welcome: Welcome
- description: This is a multilingual website with dark mode support

### Espanhol (es.json)
- title: Cartilla
- welcome: Bienvenido
- description: Este es un sitio web multilingüe con soporte para modo oscuro

### Francês (fr.json)
- title: Livret
- welcome: Bienvenue
- description: Ceci est un site web multilingue avec support du mode sombre

## Dicas

- Use chaves descritivas em inglês (snake_case ou camelCase)
- Mantenha a consistência entre todos os arquivos
- Teste todas as traduções após adicionar novas chaves
- Use o loading state para evitar flash de conteúdo não traduzido
