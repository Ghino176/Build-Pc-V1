
import { ComponentData, getComponentsByCategory as getComponentsByCategoryFromDB, getAllComponents } from '@/services/componentService';

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

// Transform database component to app component format
const transformComponent = (dbComponent: ComponentData, category: string): Component => {
  const baseComponent = {
    id: dbComponent.id,
    name: dbComponent.name,
    category,
    price: Number(dbComponent.price),
    image: dbComponent.image || '/placeholder.svg',
    description: dbComponent.description || ''
  };

  // Create specs object based on component type
  let specs: Record<string, string | number> = {};

  switch (category) {
    case 'cpu':
      const cpu = dbComponent as any;
      specs = {
        cores: cpu.cores,
        threads: cpu.threads,
        baseClock: cpu.base_clock,
        boostClock: cpu.boost_clock,
        tdp: cpu.tdp,
        socket: cpu.socket
      };
      break;
    case 'motherboard':
      const motherboard = dbComponent as any;
      specs = {
        chipset: motherboard.chipset,
        formFactor: motherboard.form_factor,
        memorySlots: motherboard.memory_slots,
        maxMemory: motherboard.max_memory,
        socket: motherboard.socket
      };
      break;
    case 'ram':
      const ram = dbComponent as any;
      specs = {
        capacity: ram.capacity,
        type: ram.type,
        speed: ram.speed,
        cas: ram.cas_latency || 'N/A'
      };
      break;
    case 'gpu':
      const gpu = dbComponent as any;
      specs = {
        memory: gpu.memory,
        coreClock: gpu.core_clock,
        boostClock: gpu.boost_clock,
        tdp: gpu.tdp
      };
      break;
    case 'storage':
      const storage = dbComponent as any;
      specs = {
        capacity: storage.capacity,
        type: storage.type,
        interface: storage.interface,
        readSpeed: storage.read_speed || 'N/A',
        writeSpeed: storage.write_speed || 'N/A'
      };
      if (storage.rpm) specs.rpm = storage.rpm;
      if (storage.cache_size) specs.cacheSize = storage.cache_size;
      break;
    case 'psu':
      const psu = dbComponent as any;
      specs = {
        wattage: psu.wattage,
        efficiency: psu.efficiency,
        modular: psu.modular
      };
      break;
    case 'case':
      const caseComponent = dbComponent as any;
      specs = {
        formFactor: caseComponent.form_factor,
        motherboardSupport: caseComponent.motherboard_support,
        dimensions: caseComponent.dimensions || 'N/A'
      };
      break;
    case 'cooling':
      const cooling = dbComponent as any;
      specs = {
        type: cooling.type,
        fanSize: cooling.fan_size || 'N/A'
      };
      if (cooling.radiator_size) specs.radiatorSize = cooling.radiator_size;
      if (cooling.height) specs.height = cooling.height;
      break;
  }

  return { ...baseComponent, specs };
};

// Función auxiliar para obtener componentes por categoría
export const getComponentsByCategory = async (category: string): Promise<Component[]> => {
  const dbComponents = await getComponentsByCategoryFromDB(category as any);
  return dbComponents.map(component => transformComponent(component, category));
};

// Función para obtener todos los componentes
export const getAllComponentsData = async (): Promise<Component[]> => {
  const allComponents: Component[] = [];
  
  for (const category of componentCategories) {
    const categoryComponents = await getComponentsByCategory(category.id);
    allComponents.push(...categoryComponents);
  }
  
  return allComponents;
};

// Export empty array for backward compatibility
export const components: Component[] = [];
