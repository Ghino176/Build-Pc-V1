
export interface Component {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  specs: Record<string, string | number>;
  description: string;
}

export type ComponentCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const componentCategories: ComponentCategory[] = [
  {
    id: "cpu",
    name: "CPU",
    description: "Unidad Central de Procesamiento - El cerebro de tu computadora",
    icon: "cpu"
  },
  {
    id: "motherboard",
    name: "Tarjeta Madre",
    description: "Conecta todos los componentes entre sí",
    icon: "pc-case"
  },
  {
    id: "ram",
    name: "Memoria (RAM)",
    description: "Almacenamiento temporal para aplicaciones en ejecución",
    icon: "memory-stick"
  },
  {
    id: "gpu",
    name: "Tarjeta Grafica",
    description: "Renderiza imágenes, video y aplicaciones 3D",
    icon: "monitor"
  },
  {
    id: "storage",
    name: "Disco Duro",
    description: "SSDs y HDDs para almacenar tus datos",
    icon: "hard-drive"
  },
  {
    id: "psu",
    name: "Fuente de Poder",
    description: "Proporciona energía a todos los componentes",
    icon: "pc-case"
  },
  {
    id: "case",
    name: "Case",
    description: "Carcasa para todos tus componentes",
    icon: "pc-case"
  },
  {
    id: "cooling",
    name: "Refrigeración",
    description: "Mantiene tus componentes sin sobrecalentarse",
    icon: "pc-case"
  }
];

export const components: Component[] = [
  // CPUs
  {
    id: "cpu1",
    name: "AMD Ryzen 7 5800X",
    category: "cpu",
    price: 299.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/AMD_Logo.png",
    specs: {
      cores: 8,
      threads: 16,
      baseClock: "3.8 GHz",
      boostClock: "4.7 GHz",
      tdp: "105W",
      socket: "AM4"
    },
    description: "Procesador de escritorio de 8 núcleos y 16 hilos con rendimiento excepcional para juegos y creación de contenido."
  },
  {
    id: "cpu2",
    name: "Intel Core i9-12900K",
    category: "cpu",
    price: 589.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY10KWvt29PS7f6vybwxQiZaFaAlDIu0qIow&s",
    specs: {
      cores: 16,
      threads: 24,
      baseClock: "3.2 GHz",
      boostClock: "5.2 GHz",
      tdp: "125W",
      socket: "LGA 1700"
    },
    description: "Procesador insignia de escritorio de Intel con arquitectura híbrida para un rendimiento extremo."
  },
  {
    id: "cpu3",
    name: "AMD Ryzen 5 5600X",
    category: "cpu",
    price: 199.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/AMD_Logo.png",
    specs: {
      cores: 6,
      threads: 12,
      baseClock: "3.7 GHz",
      boostClock: "4.6 GHz",
      tdp: "65W",
      socket: "AM4"
    },
    description: "Procesador de escritorio de 6 núcleos y 12 hilos ideal para juegos y productividad diaria."
  },

  // Motherboards
  {
    id: "motherboard1",
    name: "ASUS ROG Strix B550-F Gaming",
    category: "motherboard",
    price: 189.99,
    image: "https://www.pinterest.com/pin/269864202667515746/",
    specs: {
      chipset: "AMD B550",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: "128GB",
      socket: "AM4"
    },
    description: "Placa base ATX con gran cantidad de características, opciones avanzadas de refrigeración y redes."
  },
  {
    id: "motherboard2",
    name: "MSI MPG Z690 Gaming Edge WiFi",
    category: "motherboard",
    price: 289.99,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Msi-Logo.jpg",
    specs: {
      chipset: "Intel Z690",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: "128GB",
      socket: "LGA 1700"
    },
    description: "Placa base de alto rendimiento con soporte para DDR5 y suministro de energía robusto."
  },

  // RAM
  {
    id: "ram1",
    name: "Corsair Vengeance RGB Pro 32GB",
    category: "ram",
    price: 149.99,
    image: "/placeholder.svg",
    specs: {
      capacity: "32GB (2x16GB)",
      type: "DDR4",
      speed: "3600MHz",
      cas: "CL18"
    },
    description: "Memoria RGB de alto rendimiento con disipadores de calor de aluminio para una mejor gestión térmica."
  },
  {
    id: "ram2",
    name: "G.Skill Trident Z Neo 16GB",
    category: "ram",
    price: 119.99,
    image: "/placeholder.svg",
    specs: {
      capacity: "16GB (2x8GB)",
      type: "DDR4",
      speed: "3600MHz",
      cas: "CL16"
    },
    description: "Optimizada para sistemas AMD Ryzen con impresionantes efectos de iluminación RGB."
  },

  // GPUs
  {
    id: "gpu1",
    name: "NVIDIA GeForce RTX 3080",
    category: "gpu",
    price: 799.99,
    image: "/placeholder.svg",
    specs: {
      memory: "10GB GDDR6X",
      coreClock: "1440 MHz",
      boostClock: "1710 MHz",
      tdp: "320W"
    },
    description: "Potente tarjeta gráfica para juegos en 4K y flujos de trabajo creativos."
  },
  {
    id: "gpu2",
    name: "AMD Radeon RX 6800 XT",
    category: "gpu",
    price: 649.99,
    image: "/placeholder.svg",
    specs: {
      memory: "16GB GDDR6",
      coreClock: "1825 MHz",
      boostClock: "2250 MHz",
      tdp: "300W"
    },
    description: "Tarjeta gráfica de gama alta competitiva con gran búfer de VRAM."
  },

  // Storage
  {
    id: "storage1",
    name: "Samsung 970 EVO Plus 1TB",
    category: "storage",
    price: 129.99,
    image: "/placeholder.svg",
    specs: {
      capacity: "1TB",
      type: "NVMe SSD",
      interface: "PCIe 3.0 x4",
      readSpeed: "3500 MB/s",
      writeSpeed: "3300 MB/s"
    },
    description: "SSD NVMe de alta velocidad para tiempos de arranque rápidos y carga de aplicaciones."
  },
  {
    id: "storage2",
    name: "WD Black 4TB HDD",
    category: "storage",
    price: 149.99,
    image: "/placeholder.svg",
    specs: {
      capacity: "4TB",
      type: "HDD",
      interface: "SATA 6.0 Gb/s",
      rpm: 7200,
      cacheSize: "256MB"
    },
    description: "Disco duro de alta capacidad para necesidades de almacenamiento masivo."
  },

  // PSUs
  {
    id: "psu1",
    name: "Corsair RM850x",
    category: "psu",
    price: 144.99,
    image: "/placeholder.svg",
    specs: {
      wattage: "850W",
      efficiency: "80+ Gold",
      modular: "Fully Modular"
    },
    description: "Fuente de alimentación confiable con certificación 80 Plus Gold y operación silenciosa."
  },
  {
    id: "psu2",
    name: "EVGA SuperNOVA 750 G5",
    category: "psu",
    price: 129.99,
    image: "/placeholder.svg",
    specs: {
      wattage: "750W",
      efficiency: "80+ Gold",
      modular: "Fully Modular"
    },
    description: "Fuente de alimentación totalmente modular con alta eficiencia y rendimiento confiable."
  },

  // Cases
  {
    id: "case1",
    name: "Lian Li PC-O11 Dynamic",
    category: "case",
    price: 149.99,
    image: "/placeholder.svg",
    specs: {
      formFactor: "Mid Tower",
      motherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      dimensions: "445mm x 272mm x 446mm"
    },
    description: "Diseño de doble cámara para una refrigeración óptima y una gestión limpia de cables."
  },
  {
    id: "case2",
    name: "Fractal Design Meshify 2",
    category: "case",
    price: 139.99,
    image: "/placeholder.svg",
    specs: {
      formFactor: "Mid Tower",
      motherboardSupport: "E-ATX, ATX, Micro-ATX, Mini-ITX",
      dimensions: "474mm x 229mm x 466mm"
    },
    description: "Carcasa de alto flujo de aire con excelente calidad de construcción y diseño interno versátil."
  },

  // Cooling
  {
    id: "cooling1",
    name: "NZXT Kraken X63",
    category: "cooling",
    price: 149.99,
    image: "/placeholder.svg",
    specs: {
      type: "Liquid Cooler",
      radiatorSize: "280mm",
      fanSize: "2x 140mm"
    },
    description: "Refrigerador líquido AIO de 280mm con diseño de espejo infinito RGB."
  },
  {
    id: "cooling2",
    name: "Noctua NH-D15",
    category: "cooling",
    price: 99.99,
    image: "/placeholder.svg",
    specs: {
      type: "Air Cooler",
      height: "165mm",
      fanSize: "2x 140mm"
    },
    description: "Refrigerador de CPU de torre dual premium con excelente disipación de calor."
  }
];

// Función auxiliar para obtener componentes por categoría
export const getComponentsByCategory = (category: string): Component[] => {
  return components.filter(component => component.category === category);
};
