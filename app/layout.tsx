import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cartilha Imigrantes e Refugiados",
  description: "Guia completo multilíngue (Português, English, Español, Français) com informações essenciais sobre direitos de imigrantes e refugiados no Brasil. Conheça a legislação, organizações de apoio e recursos disponíveis para migração e refúgio.",
  keywords: ["imigrantes", "refugiados", "direitos humanos", "migração", "refúgio", "Brasil", "legislação", "apoio humanitário"],
  authors: [{ name: "Cartilha Informativa" }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Cartilha Informativa - Imigrantes e Refugiados",
    description: "Guia multilíngue com informações essenciais sobre direitos de imigrantes e refugiados no Brasil",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES", "fr_FR"],
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Cartilha Informativa - Imigrantes e Refugiados',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartilha Informativa - Imigrantes e Refugiados",
    description: "Guia multilíngue com informações essenciais sobre direitos de imigrantes e refugiados no Brasil",
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
