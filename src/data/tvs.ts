
export interface Marca {
  id: number;
  nombre: string;
}

export interface ModeloTV {
  id: number;
  marca_id: number;
  nombre: string; // e.g., "Crystal", "QLED", "Nanocell"
  anio?: number;
}

export interface Televisor {
  id: number;
  marca_id: number;
  modelo_id?: number;
  sistema: string; // Android 14, Google TV, etc.
  tecnologia: string; // LED, QLED, etc.
  garantia_anios: number;
  pais_origen: string;
  descripcion: string;
}

export type Resolucion = 'HD' | 'FHD' | '4K' | '8K';

export interface TVVariante {
  id: number;
  televisor_id: number;
  pulgadas: number;
  resolucion: Resolucion;
  precio: number;
  stock: number;
  oferta: boolean;
  nota?: string;
}

// DATA POPULATION

export const marcas: Marca[] = [
  { id: 1, nombre: "HOUSE TV" },
  { id: 2, nombre: "ZITRO" },
  { id: 3, nombre: "TCL" },
  { id: 4, nombre: "PHILIPS" },
  { id: 5, nombre: "JVC" },
  { id: 6, nombre: "RCA" },
  { id: 7, nombre: "HYUNDAI" },
  { id: 8, nombre: "SAMSUNG" },
  { id: 9, nombre: "LG" },
  { id: 10, nombre: "XIAOMI" },
];

export const modelos: ModeloTV[] = [
  { id: 1, marca_id: 2, nombre: "Italiana Model 2025", anio: 2025 },
  { id: 2, marca_id: 8, nombre: "Crystal", anio: 2024 },
  { id: 3, marca_id: 8, nombre: "QLED", anio: 2024 },
  { id: 4, marca_id: 8, nombre: "QLED Serif", anio: 2024 },
  { id: 5, marca_id: 9, nombre: "Nanocell", anio: 2024 },
  { id: 6, marca_id: 9, nombre: "UR78", anio: 2024 },
  { id: 7, marca_id: 10, nombre: "A Pro", anio: 2024 },
  { id: 8, marca_id: 3, nombre: "C655", anio: 2024 },
];

export const televisores: Televisor[] = [
  // HOUSE TV
  { id: 1, marca_id: 1, sistema: "Android 14.0", tecnologia: "LED", garantia_anios: 2, pais_origen: "Japón", descripcion: "Magis TV Gratis" },
  { id: 2, marca_id: 1, sistema: "Android 14.0", tecnologia: "QLED", garantia_anios: 2, pais_origen: "Japón", descripcion: "Magis TV Gratis" },
  { id: 3, marca_id: 1, sistema: "Google TV", tecnologia: "QLED", garantia_anios: 2, pais_origen: "Japón", descripcion: "Magis TV Gratis" },
  
  // ZITRO
  { id: 4, marca_id: 2, modelo_id: 1, sistema: "Android", tecnologia: "LED", garantia_anios: 2, pais_origen: "Italia", descripcion: "Modelo 2025" },
  { id: 5, marca_id: 2, modelo_id: 1, sistema: "Google TV", tecnologia: "LED", garantia_anios: 2, pais_origen: "Italia", descripcion: "Comando de voz y Bluetooth" },
  { id: 6, marca_id: 2, modelo_id: 1, sistema: "Google TV", tecnologia: "QLED", garantia_anios: 2, pais_origen: "Italia", descripcion: "QLED Google TV Modelo 2025" },

  // TCL
  { id: 7, marca_id: 3, sistema: "Google TV", tecnologia: "LED", garantia_anios: 1, pais_origen: "China", descripcion: "Android Google TV" },
  { id: 8, marca_id: 3, modelo_id: 8, sistema: "Google TV", tecnologia: "QLED", garantia_anios: 1, pais_origen: "China", descripcion: "QLED Android Google TV" },

  // PHILIPS
  { id: 9, marca_id: 4, sistema: "Google TV", tecnologia: "LED", garantia_anios: 2, pais_origen: "Holanda", descripcion: "Android Google TV" },

  // JVC
  { id: 10, marca_id: 5, sistema: "Google TV", tecnologia: "LED", garantia_anios: 2, pais_origen: "Japón", descripcion: "Android Google TV" },

  // RCA
  { id: 11, marca_id: 6, sistema: "Google TV", tecnologia: "LED", garantia_anios: 2, pais_origen: "USA", descripcion: "Americana Android Google TV" },
  { id: 12, marca_id: 6, sistema: "Google TV", tecnologia: "QLED", garantia_anios: 2, pais_origen: "USA", descripcion: "Americana QLED Android Google TV" },

  // HYUNDAI
  { id: 13, marca_id: 7, sistema: "Google TV", tecnologia: "LED", garantia_anios: 1, pais_origen: "Corea", descripcion: "Koreana Android Google TV" },

  // SAMSUNG
  { id: 14, marca_id: 8, modelo_id: 2, sistema: "Tizen", tecnologia: "Crystal", garantia_anios: 1, pais_origen: "México", descripcion: "Smart TV Crystal" },
  { id: 15, marca_id: 8, modelo_id: 3, sistema: "Tizen", tecnologia: "QLED", garantia_anios: 1, pais_origen: "México", descripcion: "Smart TV QLED" },
  { id: 16, marca_id: 8, modelo_id: 4, sistema: "Tizen", tecnologia: "QLED", garantia_anios: 1, pais_origen: "México", descripcion: "Serif Gama Alta Tipo Cuadro" },

  // LG
  { id: 17, marca_id: 9, modelo_id: 6, sistema: "WebOS", tecnologia: "LED", garantia_anios: 1, pais_origen: "Corea", descripcion: "Modelos UR78" },
  { id: 18, marca_id: 9, modelo_id: 5, sistema: "WebOS", tecnologia: "Nanocell", garantia_anios: 1, pais_origen: "Corea", descripcion: "Nanocell" },

  // XIAOMI
  { id: 19, marca_id: 10, modelo_id: 7, sistema: "Google TV", tecnologia: "LED", garantia_anios: 1, pais_origen: "China", descripcion: "Smart TV A Pro" },
];

export const variantes: TVVariante[] = [
  // HOUSE TV
  { id: 1, televisor_id: 1, pulgadas: 32, resolucion: 'HD', precio: 129, stock: 10, oferta: true },
  { id: 2, televisor_id: 2, pulgadas: 40, resolucion: 'FHD', precio: 189, stock: 10, oferta: true },
  { id: 3, televisor_id: 2, pulgadas: 43, resolucion: 'FHD', precio: 209, stock: 10, oferta: true },
  { id: 4, televisor_id: 2, pulgadas: 50, resolucion: '4K', precio: 299, stock: 10, oferta: true },
  { id: 5, televisor_id: 3, pulgadas: 50, resolucion: '4K', precio: 349, stock: 10, oferta: true },
  { id: 6, televisor_id: 1, pulgadas: 55, resolucion: '4K', precio: 369, stock: 10, oferta: false },
  { id: 7, televisor_id: 3, pulgadas: 55, resolucion: '4K', precio: 399, stock: 10, oferta: true },
  { id: 8, televisor_id: 2, pulgadas: 65, resolucion: '4K', precio: 459, stock: 10, oferta: true },
  { id: 9, televisor_id: 3, pulgadas: 65, resolucion: '4K', precio: 499, stock: 10, oferta: true },

  // ZITRO
  { id: 10, televisor_id: 4, pulgadas: 32, resolucion: 'FHD', precio: 129, stock: 10, oferta: true },
  { id: 11, televisor_id: 5, pulgadas: 32, resolucion: 'FHD', precio: 159, stock: 10, oferta: false, nota: "Google TV" },
  { id: 12, televisor_id: 5, pulgadas: 40, resolucion: 'FHD', precio: 209, stock: 10, oferta: false },
  { id: 13, televisor_id: 4, pulgadas: 43, resolucion: 'FHD', precio: 219, stock: 10, oferta: true, nota: "QLED" }, // text says Zitro 43 QLED FHD
  { id: 14, televisor_id: 5, pulgadas: 43, resolucion: 'FHD', precio: 239, stock: 10, oferta: false, nota: "QLED Google TV" },
  { id: 15, televisor_id: 4, pulgadas: 50, resolucion: '4K', precio: 339, stock: 10, oferta: true },
  { id: 16, televisor_id: 4, pulgadas: 58, resolucion: '4K', precio: 419, stock: 10, oferta: true },
  { id: 17, televisor_id: 4, pulgadas: 65, resolucion: '4K', precio: 499, stock: 10, oferta: true },
  
  // ZITRO QLED
  { id: 18, televisor_id: 6, pulgadas: 50, resolucion: '4K', precio: 369, stock: 10, oferta: true },
  { id: 19, televisor_id: 6, pulgadas: 55, resolucion: '4K', precio: 419, stock: 10, oferta: true },
  { id: 20, televisor_id: 6, pulgadas: 65, resolucion: '4K', precio: 549, stock: 10, oferta: true },

  // TCL
  { id: 21, televisor_id: 7, pulgadas: 32, resolucion: 'FHD', precio: 179, stock: 10, oferta: false },
  { id: 22, televisor_id: 7, pulgadas: 43, resolucion: 'FHD', precio: 269, stock: 10, oferta: false },
  { id: 23, televisor_id: 7, pulgadas: 43, resolucion: '4K', precio: 319, stock: 10, oferta: true },
  { id: 24, televisor_id: 7, pulgadas: 50, resolucion: '4K', precio: 359, stock: 10, oferta: true },
  { id: 25, televisor_id: 7, pulgadas: 55, resolucion: '4K', precio: 399, stock: 10, oferta: true },
  { id: 26, televisor_id: 7, pulgadas: 65, resolucion: '4K', precio: 529, stock: 10, oferta: true },
  { id: 27, televisor_id: 7, pulgadas: 75, resolucion: '4K', precio: 899, stock: 5, oferta: true },
  { id: 28, televisor_id: 7, pulgadas: 85, resolucion: '4K', precio: 1199, stock: 2, oferta: true },

  // TCL QLED
  { id: 29, televisor_id: 8, pulgadas: 55, resolucion: '4K', precio: 499, stock: 10, oferta: true },
  { id: 30, televisor_id: 8, pulgadas: 65, resolucion: '4K', precio: 649, stock: 10, oferta: true },

  // PHILIPS
  { id: 31, televisor_id: 9, pulgadas: 65, resolucion: '4K', precio: 549, stock: 5, oferta: true },
  { id: 32, televisor_id: 9, pulgadas: 55, resolucion: '4K', precio: 419, stock: 5, oferta: true },
  { id: 33, televisor_id: 9, pulgadas: 50, resolucion: '4K', precio: 369, stock: 5, oferta: true },
  { id: 34, televisor_id: 9, pulgadas: 43, resolucion: 'FHD', precio: 259, stock: 5, oferta: false },
  { id: 35, televisor_id: 9, pulgadas: 40, resolucion: 'FHD', precio: 219, stock: 5, oferta: false },
  { id: 36, televisor_id: 9, pulgadas: 32, resolucion: 'FHD', precio: 169, stock: 5, oferta: false },

  // JVC
  { id: 37, televisor_id: 10, pulgadas: 32, resolucion: 'FHD', precio: 169, stock: 8, oferta: false },
  { id: 38, televisor_id: 10, pulgadas: 43, resolucion: 'FHD', precio: 259, stock: 8, oferta: false },
  { id: 39, televisor_id: 10, pulgadas: 50, resolucion: '4K', precio: 369, stock: 8, oferta: true },
  { id: 40, televisor_id: 10, pulgadas: 55, resolucion: '4K', precio: 429, stock: 8, oferta: true },
  { id: 41, televisor_id: 10, pulgadas: 58, resolucion: '4K', precio: 459, stock: 8, oferta: true },
  { id: 42, televisor_id: 10, pulgadas: 65, resolucion: '4K', precio: 549, stock: 8, oferta: true },

  // RCA
  { id: 43, televisor_id: 11, pulgadas: 32, resolucion: 'FHD', precio: 169, stock: 8, oferta: false },
  { id: 44, televisor_id: 11, pulgadas: 43, resolucion: 'FHD', precio: 249, stock: 8, oferta: true },
  { id: 45, televisor_id: 11, pulgadas: 50, resolucion: '4K', precio: 359, stock: 8, oferta: true },
  { id: 46, televisor_id: 11, pulgadas: 55, resolucion: '4K', precio: 399, stock: 8, oferta: true },
  { id: 47, televisor_id: 11, pulgadas: 58, resolucion: '4K', precio: 429, stock: 8, oferta: true },
  { id: 48, televisor_id: 11, pulgadas: 65, resolucion: '4K', precio: 529, stock: 8, oferta: true },
  { id: 49, televisor_id: 11, pulgadas: 70, resolucion: '4K', precio: 699, stock: 8, oferta: true },
  { id: 50, televisor_id: 11, pulgadas: 75, resolucion: '4K', precio: 799, stock: 4, oferta: true },
  { id: 51, televisor_id: 11, pulgadas: 86, resolucion: '4K', precio: 1149, stock: 2, oferta: true },

  // RCA QLED
  { id: 52, televisor_id: 12, pulgadas: 65, resolucion: '4K', precio: 599, stock: 5, oferta: true },
  { id: 53, televisor_id: 12, pulgadas: 55, resolucion: '4K', precio: 449, stock: 5, oferta: true },

  // HYUNDAI
  { id: 54, televisor_id: 13, pulgadas: 32, resolucion: 'FHD', precio: 169, stock: 6, oferta: false, nota: "Con barra de sonido" },
  { id: 55, televisor_id: 13, pulgadas: 43, resolucion: 'FHD', precio: 269, stock: 6, oferta: false, nota: "Con barra de sonido" },
  { id: 56, televisor_id: 13, pulgadas: 50, resolucion: '4K', precio: 369, stock: 6, oferta: true },
  { id: 57, televisor_id: 13, pulgadas: 55, resolucion: '4K', precio: 399, stock: 6, oferta: true },
  { id: 58, televisor_id: 13, pulgadas: 65, resolucion: '4K', precio: 549, stock: 6, oferta: true },
  { id: 59, televisor_id: 13, pulgadas: 70, resolucion: '4K', precio: 699, stock: 6, oferta: true },

  // SAMSUNG Crystal
  { id: 60, televisor_id: 14, pulgadas: 32, resolucion: 'FHD', precio: 199, stock: 10, oferta: false },
  { id: 61, televisor_id: 14, pulgadas: 43, resolucion: '4K', precio: 299, stock: 10, oferta: true, nota: "U8000 SOLO HOY" },
  { id: 62, televisor_id: 14, pulgadas: 50, resolucion: '4K', precio: 439, stock: 10, oferta: false, nota: "DU7000" },
  { id: 63, televisor_id: 14, pulgadas: 55, resolucion: '4K', precio: 529, stock: 10, oferta: false, nota: "DU8000" },
  { id: 64, televisor_id: 14, pulgadas: 55, resolucion: '4K', precio: 499, stock: 10, oferta: true, nota: "DU7000" },
  { id: 65, televisor_id: 14, pulgadas: 65, resolucion: '4K', precio: 699, stock: 10, oferta: false, nota: "DU7000" },
  { id: 66, televisor_id: 14, pulgadas: 70, resolucion: '4K', precio: 799, stock: 5, oferta: false, nota: "U8000" },
  { id: 67, televisor_id: 14, pulgadas: 75, resolucion: '4K', precio: 899, stock: 5, oferta: false, nota: "U8000" },
  { id: 68, televisor_id: 14, pulgadas: 85, resolucion: '4K', precio: 1399, stock: 2, oferta: false, nota: "U8000" },

  // SAMSUNG QLED
  { id: 69, televisor_id: 15, pulgadas: 75, resolucion: '4K', precio: 1199, stock: 4, oferta: false, nota: "Q65B" },
  { id: 70, televisor_id: 15, pulgadas: 70, resolucion: '4K', precio: 999, stock: 4, oferta: true, nota: "Q65B" },
  { id: 71, televisor_id: 15, pulgadas: 65, resolucion: '4K', precio: 899, stock: 4, oferta: false, nota: "Q70D" },
  { id: 72, televisor_id: 15, pulgadas: 65, resolucion: '4K', precio: 799, stock: 4, oferta: true, nota: "Q65D" },
  { id: 73, televisor_id: 15, pulgadas: 55, resolucion: '4K', precio: 549, stock: 4, oferta: false, nota: "Q60D" },
  { id: 74, televisor_id: 15, pulgadas: 43, resolucion: '4K', precio: 449, stock: 4, oferta: true, nota: "Q65D" },

  // SAMSUNG SERIF
  { id: 75, televisor_id: 16, pulgadas: 55, resolucion: '4K', precio: 699, stock: 2, oferta: false },

  // LG
  { id: 76, televisor_id: 17, pulgadas: 32, resolucion: 'FHD', precio: 229, stock: 8, oferta: false, nota: "LR65" },
  { id: 77, televisor_id: 17, pulgadas: 43, resolucion: 'FHD', precio: 319, stock: 8, oferta: false, nota: "LM63" },
  { id: 78, televisor_id: 17, pulgadas: 43, resolucion: '4K', precio: 359, stock: 8, oferta: true, nota: "UR78" },
  { id: 79, televisor_id: 17, pulgadas: 50, resolucion: '4K', precio: 449, stock: 8, oferta: true, nota: "UR78" },
  { id: 80, televisor_id: 17, pulgadas: 50, resolucion: '4K', precio: 449, stock: 8, oferta: true, nota: "AU75" },
  { id: 81, televisor_id: 17, pulgadas: 55, resolucion: '4K', precio: 499, stock: 8, oferta: true, nota: "UR78" },
  { id: 82, televisor_id: 17, pulgadas: 55, resolucion: '4K', precio: 499, stock: 8, oferta: true, nota: "UA85" },
  { id: 83, televisor_id: 17, pulgadas: 60, resolucion: '4K', precio: 599, stock: 8, oferta: false, nota: "UA85" },
  { id: 84, televisor_id: 17, pulgadas: 65, resolucion: '4K', precio: 679, stock: 8, oferta: true, nota: "UR78" },
  { id: 85, televisor_id: 17, pulgadas: 65, resolucion: '4K', precio: 699, stock: 8, oferta: false, nota: "UA75" },
  { id: 86, televisor_id: 17, pulgadas: 70, resolucion: '4K', precio: 859, stock: 6, oferta: false, nota: "UR78" },
  { id: 87, televisor_id: 17, pulgadas: 75, resolucion: '4K', precio: 999, stock: 4, oferta: false, nota: "UR78" },
  { id: 88, televisor_id: 17, pulgadas: 86, resolucion: '4K', precio: 1399, stock: 2, oferta: false, nota: "UA80" },

  // LG Nanocell
  { id: 89, televisor_id: 18, pulgadas: 85, resolucion: '4K', precio: 1699, stock: 1, oferta: false, nota: "NANO80" },
  { id: 90, televisor_id: 18, pulgadas: 75, resolucion: '4K', precio: 999, stock: 2, oferta: true, nota: "NANO80 SOLO HOY" },
  { id: 91, televisor_id: 18, pulgadas: 70, resolucion: '4K', precio: 929, stock: 2, oferta: false, nota: "NANO80" },
  { id: 92, televisor_id: 18, pulgadas: 65, resolucion: '4K', precio: 859, stock: 3, oferta: false, nota: "NANO80" },
  { id: 93, televisor_id: 18, pulgadas: 55, resolucion: '4K', precio: 599, stock: 4, oferta: false, nota: "NANO80" },
  { id: 94, televisor_id: 18, pulgadas: 50, resolucion: '4K', precio: 499, stock: 4, oferta: true, nota: "NANO80" },

  // XIAOMI
  { id: 95, televisor_id: 19, pulgadas: 55, resolucion: '4K', precio: 469, stock: 8, oferta: true },
  { id: 96, televisor_id: 19, pulgadas: 50, resolucion: '4K', precio: 399, stock: 8, oferta: true },
];

// Helper to get full object
export interface FullTVData extends TVVariante {
  marca: Marca;
  modelo?: ModeloTV;
  televisor: Televisor;
}

export function getAllTVs(): FullTVData[] {
  return variantes.map(v => {
    const tv = televisores.find(t => t.id === v.televisor_id)!;
    const marca = marcas.find(m => m.id === tv.marca_id)!;
    const modelo = tv.modelo_id ? modelos.find(m => m.id === tv.modelo_id) : undefined;
    return {
      ...v,
      televisor: tv,
      marca,
      modelo
    };
  });
}
