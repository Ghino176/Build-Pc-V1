
import { Component } from '@/data/components';

export interface CompatibilityWarning {
  type: 'socket_mismatch' | 'power_insufficient' | 'size_incompatible';
  message: string;
  components: string[];
}

export const checkCpuMotherboardCompatibility = (
  cpu: Component | null, 
  motherboard: Component | null
): CompatibilityWarning | null => {
  // If either component is missing, no compatibility issue
  if (!cpu || !motherboard) {
    return null;
  }

  const cpuSocket = cpu.specs.socket as string;
  const motherboardSocket = motherboard.specs.socket as string;

  // Check if sockets match
  if (cpuSocket && motherboardSocket && cpuSocket !== motherboardSocket) {
    return {
      type: 'socket_mismatch',
      message: `Socket incompatible: El CPU requiere socket ${cpuSocket} pero la tarjeta madre tiene socket ${motherboardSocket}`,
      components: [cpu.name, motherboard.name]
    };
  }

  return null;
};

export const checkAllCompatibility = (selectedComponents: Record<string, Component | null>): CompatibilityWarning[] => {
  const warnings: CompatibilityWarning[] = [];
  
  const cpu = selectedComponents['cpu'];
  const motherboard = selectedComponents['motherboard'];
  
  // Check CPU-Motherboard compatibility
  const socketWarning = checkCpuMotherboardCompatibility(cpu, motherboard);
  if (socketWarning) {
    warnings.push(socketWarning);
  }

  return warnings;
};
