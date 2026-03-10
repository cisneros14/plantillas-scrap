import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";
import { generateThemeVariables } from "@/lib/theme-generator";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

import { constructMetadata } from "@/lib/seo";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeCss = generateThemeVariables(
    siteConfig.branding.primary,
    siteConfig.branding.secondary,
    siteConfig.branding.background,
  );

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-foreground overflow-x-hidden`}
      >
        <style
          id="theme-styles"
          dangerouslySetInnerHTML={{ __html: themeCss }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
          <div className="max-md:hidden">
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
