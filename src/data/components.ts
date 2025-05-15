
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
    description: "Central Processing Unit - The brain of your computer",
    icon: "cpu"
  },
  {
    id: "motherboard",
    name: "Motherboard",
    description: "Connects all components together",
    icon: "pc-case"
  },
  {
    id: "ram",
    name: "Memory (RAM)",
    description: "Temporary storage for running applications",
    icon: "memory-stick"
  },
  {
    id: "gpu",
    name: "Graphics Card",
    description: "Renders images, video and 3D applications",
    icon: "monitor"
  },
  {
    id: "storage",
    name: "Storage",
    description: "SSDs and HDDs for storing your data",
    icon: "hard-drive"
  },
  {
    id: "psu",
    name: "Power Supply",
    description: "Provides power to all components",
    icon: "pc-case"
  },
  {
    id: "case",
    name: "Case",
    description: "Housing for all your components",
    icon: "pc-case"
  },
  {
    id: "cooling",
    name: "Cooling",
    description: "Keeps your components from overheating",
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
    image: "/placeholder.svg",
    specs: {
      cores: 8,
      threads: 16,
      baseClock: "3.8 GHz",
      boostClock: "4.7 GHz",
      tdp: "105W",
      socket: "AM4"
    },
    description: "8-core, 16-thread desktop processor with exceptional performance for gaming and content creation."
  },
  {
    id: "cpu2",
    name: "Intel Core i9-12900K",
    category: "cpu",
    price: 589.99,
    image: "/placeholder.svg",
    specs: {
      cores: 16,
      threads: 24,
      baseClock: "3.2 GHz",
      boostClock: "5.2 GHz",
      tdp: "125W",
      socket: "LGA 1700"
    },
    description: "Intel's flagship desktop processor with hybrid architecture for extreme performance."
  },
  {
    id: "cpu3",
    name: "AMD Ryzen 5 5600X",
    category: "cpu",
    price: 199.99,
    image: "/placeholder.svg",
    specs: {
      cores: 6,
      threads: 12,
      baseClock: "3.7 GHz",
      boostClock: "4.6 GHz",
      tdp: "65W",
      socket: "AM4"
    },
    description: "6-core, 12-thread desktop processor ideal for gaming and everyday productivity."
  },

  // Motherboards
  {
    id: "motherboard1",
    name: "ASUS ROG Strix B550-F Gaming",
    category: "motherboard",
    price: 189.99,
    image: "/placeholder.svg",
    specs: {
      chipset: "AMD B550",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: "128GB",
      socket: "AM4"
    },
    description: "Feature-rich ATX motherboard with advanced cooling and networking options."
  },
  {
    id: "motherboard2",
    name: "MSI MPG Z690 Gaming Edge WiFi",
    category: "motherboard",
    price: 289.99,
    image: "/placeholder.svg",
    specs: {
      chipset: "Intel Z690",
      formFactor: "ATX",
      memorySlots: 4,
      maxMemory: "128GB",
      socket: "LGA 1700"
    },
    description: "High-performance motherboard with DDR5 support and robust power delivery."
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
    description: "High-performance RGB memory with aluminum heat spreaders for enhanced thermal management."
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
    description: "Optimized for AMD Ryzen systems with stunning RGB lighting effects."
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
    description: "Powerful graphics card for 4K gaming and creative workflows."
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
    description: "Competitive high-end graphics card with large VRAM buffer."
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
    description: "High-speed NVMe SSD for fast boot times and application loading."
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
    description: "High-capacity hard drive for mass storage needs."
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
    description: "Reliable power supply with 80 Plus Gold certification and silent operation."
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
    description: "Fully modular power supply with high efficiency and reliable performance."
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
    description: "Dual-chamber layout for optimal cooling and clean cable management."
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
    description: "High-airflow case with excellent build quality and versatile internal layout."
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
    description: "280mm AIO liquid cooler with RGB infinity mirror design."
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
    description: "Premium dual-tower CPU cooler with excellent heat dissipation."
  }
];

// Helper function to get components by category
export const getComponentsByCategory = (category: string): Component[] => {
  return components.filter(component => component.category === category);
};
