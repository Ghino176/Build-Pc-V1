
import { supabase } from '@/integrations/supabase/client';

export interface DatabaseComponent {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface CPU extends DatabaseComponent {
  cores: number;
  threads: number;
  base_clock: string;
  boost_clock: string;
  tdp: string;
  socket: string;
}

export interface Motherboard extends DatabaseComponent {
  chipset: string;
  form_factor: string;
  memory_slots: number;
  max_memory: string;
  socket: string;
}

export interface RAM extends DatabaseComponent {
  capacity: string;
  type: string;
  speed: string;
  cas_latency: string | null;
}

export interface GraphicsCard extends DatabaseComponent {
  memory: string;
  core_clock: string;
  boost_clock: string;
  tdp: string;
}

export interface Storage extends DatabaseComponent {
  capacity: string;
  type: string;
  interface: string;
  read_speed: string | null;
  write_speed: string | null;
  rpm: number | null;
  cache_size: string | null;
}

export interface PowerSupply extends DatabaseComponent {
  wattage: string;
  efficiency: string;
  modular: string;
}

export interface Case extends DatabaseComponent {
  form_factor: string;
  motherboard_support: string;
  dimensions: string | null;
}

export interface Cooling extends DatabaseComponent {
  type: string;
  radiator_size: string | null;
  fan_size: string | null;
  height: string | null;
}

export type ComponentData = CPU | Motherboard | RAM | GraphicsCard | Storage | PowerSupply | Case | Cooling;

const componentTableMap = {
  cpu: 'cpus',
  motherboard: 'motherboards',
  ram: 'ram',
  gpu: 'graphics_cards',
  storage: 'storage',
  psu: 'power_supplies',
  case: 'cases',
  cooling: 'cooling'
} as const;

export const getComponentsByCategory = async (category: keyof typeof componentTableMap): Promise<ComponentData[]> => {
  const tableName = componentTableMap[category];
  
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('price', { ascending: true });

  if (error) {
    console.error(`Error fetching ${category} components:`, error);
    return [];
  }

  return data || [];
};

export const getAllComponents = async (): Promise<Record<string, ComponentData[]>> => {
  const categories = Object.keys(componentTableMap) as Array<keyof typeof componentTableMap>;
  const components: Record<string, ComponentData[]> = {};

  for (const category of categories) {
    components[category] = await getComponentsByCategory(category);
  }

  return components;
};
