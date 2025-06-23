
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Component } from '@/data/components';
import { getComponentsByCategory as getDbComponentsByCategory } from '@/services/componentService';

// Transform database component to app component format
const transformComponent = (dbComponent: any, category: string): Component => {
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
      specs = {
        cores: dbComponent.cores,
        threads: dbComponent.threads,
        baseClock: dbComponent.base_clock,
        boostClock: dbComponent.boost_clock,
        tdp: dbComponent.tdp,
        socket: dbComponent.socket
      };
      break;
    case 'motherboard':
      specs = {
        chipset: dbComponent.chipset,
        formFactor: dbComponent.form_factor,
        memorySlots: dbComponent.memory_slots,
        maxMemory: dbComponent.max_memory,
        socket: dbComponent.socket
      };
      break;
    case 'ram':
      specs = {
        capacity: dbComponent.capacity,
        type: dbComponent.type,
        speed: dbComponent.speed,
        cas: dbComponent.cas_latency || 'N/A'
      };
      break;
    case 'gpu':
      specs = {
        memory: dbComponent.memory,
        coreClock: dbComponent.core_clock,
        boostClock: dbComponent.boost_clock,
        tdp: dbComponent.tdp
      };
      break;
    case 'storage':
      specs = {
        capacity: dbComponent.capacity,
        type: dbComponent.type,
        interface: dbComponent.interface,
        readSpeed: dbComponent.read_speed || 'N/A',
        writeSpeed: dbComponent.write_speed || 'N/A'
      };
      if (dbComponent.rpm) specs.rpm = dbComponent.rpm;
      if (dbComponent.cache_size) specs.cacheSize = dbComponent.cache_size;
      break;
    case 'psu':
      specs = {
        wattage: dbComponent.wattage,
        efficiency: dbComponent.efficiency,
        modular: dbComponent.modular
      };
      break;
    case 'case':
      specs = {
        formFactor: dbComponent.form_factor,
        motherboardSupport: dbComponent.motherboard_support,
        dimensions: dbComponent.dimensions || 'N/A'
      };
      break;
    case 'cooling':
      specs = {
        type: dbComponent.type,
        fanSize: dbComponent.fan_size || 'N/A'
      };
      if (dbComponent.radiator_size) specs.radiatorSize = dbComponent.radiator_size;
      if (dbComponent.height) specs.height = dbComponent.height;
      break;
  }

  return { ...baseComponent, specs };
};

export const useComponents = (category: string) => {
  return useQuery({
    queryKey: ['components', category],
    queryFn: async () => {
      const dbComponents = await getDbComponentsByCategory(category as any);
      return dbComponents.map(component => transformComponent(component, category));
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useAllComponents = () => {
  const [allComponents, setAllComponents] = useState<Record<string, Component[]>>({});
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['cpu', 'motherboard', 'ram', 'gpu', 'storage', 'psu', 'case', 'cooling'];

  useEffect(() => {
    const fetchAllComponents = async () => {
      setIsLoading(true);
      const components: Record<string, Component[]> = {};
      
      for (const category of categories) {
        try {
          const dbComponents = await getDbComponentsByCategory(category as any);
          components[category] = dbComponents.map(component => transformComponent(component, category));
        } catch (error) {
          console.error(`Error fetching ${category} components:`, error);
          components[category] = [];
        }
      }
      
      setAllComponents(components);
      setIsLoading(false);
    };

    fetchAllComponents();
  }, []);

  return { components: allComponents, isLoading };
};
