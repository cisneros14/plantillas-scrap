import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import a11yPlugin from "colord/plugins/a11y";

extend([mixPlugin, namesPlugin, a11yPlugin]);

export type ColorPalette = {
  [key: number]: string;
  DEFAULT: string;
  foreground: string;
};

export type ThemeVariables = {
  "--primary": string;
  "--primary-foreground": string;
  [key: string]: string;
};

/**
 * Generates a consistent 50-950 color palette from a single base color.
 * Uses mixing with white/black to create shades, similar to Tailwind's default logic.
 */
export function generatePalette(baseColor: string): ColorPalette {
  const base = colord(baseColor);
  
  const mix = (color: string, target: string, ratio: number) => 
    colord(color).mix(target, ratio).toHex();

  // We assign the user's color to '600' often as a standard "primary" in UI, 
  // or '500'. Let's stick to 600 as the main 'branding' color usually needs to be accessible text-on-white.
  
  const p: ColorPalette = {
    50: mix(baseColor, "#ffffff", 0.95),
    100: mix(baseColor, "#ffffff", 0.9),
    200: mix(baseColor, "#ffffff", 0.75),
    300: mix(baseColor, "#ffffff", 0.6),
    400: mix(baseColor, "#ffffff", 0.3),
    500: baseColor,
    600: mix(baseColor, "#000000", 0.1),
    700: mix(baseColor, "#000000", 0.25),
    800: mix(baseColor, "#000000", 0.45),
    900: mix(baseColor, "#000000", 0.65),
    950: mix(baseColor, "#000000", 0.8),
    DEFAULT: baseColor,
    foreground: base.isDark() ? "#ffffff" : "#000000"
  };

  return p;
}

export function generateThemeVariables(primaryColorHex: string, secondaryColorHex?: string): string {
    const palette = generatePalette(primaryColorHex);
    // If secondary color is provided, generate its palette, otherwise default to a slate-like gray if you want, 
    // or we can just skip it. But the user asked to use the "same logic".
    // Let's assume if it's provided, we generate it. 
    // If not provided, we might want to let the CSS defaults take over, 
    // but the function overrides everything. 
    // So let's make it optional but recommended to be passed.
    const secondaryPalette = secondaryColorHex ? generatePalette(secondaryColorHex) : null;
    
    let css = ":root {\n";
    
    // Main Primary
    css += `  --primary: ${palette[500]};\n`; 
    css += `  --primary-foreground: ${palette.foreground};\n`;
    
    // Shade variables for Primary
    Object.keys(palette).forEach((key) => {
        if (key !== "DEFAULT" && key !== "foreground") {
             css += `  --primary-${key}: ${palette[key as any]};\n`;
        }
    });

    // Secondary
    if (secondaryPalette) {
      css += `  --secondary: ${secondaryPalette[500]};\n`;
      css += `  --secondary-foreground: ${secondaryPalette.foreground};\n`;
       // Shade variables for Secondary
       Object.keys(secondaryPalette).forEach((key) => {
        if (key !== "DEFAULT" && key !== "foreground") {
             css += `  --secondary-${key}: ${secondaryPalette[key as any]};\n`;
        }
    });
    }
    
    // Update Ring to match primary
    css += `  --ring: ${palette[500]};\n`; 
    
    css += "}\n";
    
    // Dark mode overrides
    css += ".dark {\n";
    css += `  --primary: ${palette[500]};\n`; 
    css += `  --primary-foreground: ${palette.foreground};\n`;

    if (secondaryPalette) {
        // For dark mode, typically secondary might be inverted or just the same. 
        // In the previous logic, the palette was just one set. 
        // Standard shadcn often uses the same variable values unless manually tweaked.
        // However, usually dark mode needs different lightness. 
        // But `generatePalette` returns a fixed set of hex codes based on the input.
        // If we want "same logic as primary", looking at lines 75-76:
        // css += `  --primary: ${palette[500]};\n`;
        // Use the same 500 shade.
        css += `  --secondary: ${secondaryPalette[500]};\n`;
        css += `  --secondary-foreground: ${secondaryPalette.foreground};\n`;
    }
    css += "}\n";
    
    return css;
}
