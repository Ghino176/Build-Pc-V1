import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { addComponent } from '@/services/componentService';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Plus } from 'lucide-react';

interface AdminComponentFormProps {
  category: 'cpu' | 'motherboard' | 'ram' | 'gpu' | 'storage' | 'psu' | 'case' | 'cooling';
}

const AdminComponentForm: React.FC<AdminComponentFormProps> = ({ category }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({
    name: '',
    brand: '',
    price: '',
    image: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      brand: '',
      price: '',
      image: '',
      description: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Convertir precio a número
      const componentData = {
        ...formData,
        price: parseFloat(formData.price)
      };

      const result = await addComponent(category, componentData);
      
      if (result.error) {
        throw result.error;
      }

      toast({
        title: "¡Componente agregado!",
        description: `${formData.name} se ha agregado exitosamente a la base de datos.`,
      });

      resetForm();
    } catch (error) {
      console.error('Error adding component:', error);
      toast({
        title: "Error",
        description: "No se pudo agregar el componente. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderCategorySpecificFields = () => {
    switch (category) {
      case 'cpu':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cores">Núcleos</Label>
                <Input
                  id="cores"
                  type="number"
                  value={formData.cores || ''}
                  onChange={(e) => handleInputChange('cores', parseInt(e.target.value))}
                  placeholder="6"
                />
              </div>
              <div>
                <Label htmlFor="threads">Hilos</Label>
                <Input
                  id="threads"
                  type="number"
                  value={formData.threads || ''}
                  onChange={(e) => handleInputChange('threads', parseInt(e.target.value))}
                  placeholder="12"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="base_clock">Frecuencia Base</Label>
                <Input
                  id="base_clock"
                  value={formData.base_clock || ''}
                  onChange={(e) => handleInputChange('base_clock', e.target.value)}
                  placeholder="3.7 GHz"
                />
              </div>
              <div>
                <Label htmlFor="boost_clock">Frecuencia Boost</Label>
                <Input
                  id="boost_clock"
                  value={formData.boost_clock || ''}
                  onChange={(e) => handleInputChange('boost_clock', e.target.value)}
                  placeholder="4.6 GHz"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="socket">Socket</Label>
                <Select onValueChange={(value) => handleInputChange('socket', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar socket" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AM4">AM4</SelectItem>
                    <SelectItem value="AM5">AM5</SelectItem>
                    <SelectItem value="LGA1700">LGA1700</SelectItem>
                    <SelectItem value="LGA1200">LGA1200</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tdp">TDP</Label>
                <Input
                  id="tdp"
                  value={formData.tdp || ''}
                  onChange={(e) => handleInputChange('tdp', e.target.value)}
                  placeholder="65W"
                />
              </div>
            </div>
          </>
        );

      case 'motherboard':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="chipset">Chipset</Label>
                <Input
                  id="chipset"
                  value={formData.chipset || ''}
                  onChange={(e) => handleInputChange('chipset', e.target.value)}
                  placeholder="AMD B550"
                />
              </div>
              <div>
                <Label htmlFor="form_factor">Factor de Forma</Label>
                <Select onValueChange={(value) => handleInputChange('form_factor', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar factor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ATX">ATX</SelectItem>
                    <SelectItem value="Micro-ATX">Micro-ATX</SelectItem>
                    <SelectItem value="Mini-ITX">Mini-ITX</SelectItem>
                    <SelectItem value="E-ATX">E-ATX</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="socket">Socket</Label>
                <Select onValueChange={(value) => handleInputChange('socket', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar socket" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AM4">AM4</SelectItem>
                    <SelectItem value="AM5">AM5</SelectItem>
                    <SelectItem value="LGA1700">LGA1700</SelectItem>
                    <SelectItem value="LGA1200">LGA1200</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="memory_slots">Slots de Memoria</Label>
                <Input
                  id="memory_slots"
                  type="number"
                  value={formData.memory_slots || ''}
                  onChange={(e) => handleInputChange('memory_slots', parseInt(e.target.value))}
                  placeholder="4"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="max_memory">Memoria Máxima</Label>
              <Input
                id="max_memory"
                value={formData.max_memory || ''}
                onChange={(e) => handleInputChange('max_memory', e.target.value)}
                placeholder="128GB"
              />
            </div>
          </>
        );

      case 'ram':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="capacity">Capacidad</Label>
                <Input
                  id="capacity"
                  value={formData.capacity || ''}
                  onChange={(e) => handleInputChange('capacity', e.target.value)}
                  placeholder="16GB"
                />
              </div>
              <div>
                <Label htmlFor="type">Tipo</Label>
                <Select onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DDR4">DDR4</SelectItem>
                    <SelectItem value="DDR5">DDR5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="speed">Velocidad</Label>
                <Input
                  id="speed"
                  value={formData.speed || ''}
                  onChange={(e) => handleInputChange('speed', e.target.value)}
                  placeholder="3200 MHz"
                />
              </div>
              <div>
                <Label htmlFor="cas_latency">CAS Latency</Label>
                <Input
                  id="cas_latency"
                  value={formData.cas_latency || ''}
                  onChange={(e) => handleInputChange('cas_latency', e.target.value)}
                  placeholder="CL16"
                />
              </div>
            </div>
          </>
        );

      case 'gpu':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="memory">Memoria VRAM</Label>
                <Input
                  id="memory"
                  value={formData.memory || ''}
                  onChange={(e) => handleInputChange('memory', e.target.value)}
                  placeholder="8GB GDDR6"
                />
              </div>
              <div>
                <Label htmlFor="core_clock">Frecuencia Base</Label>
                <Input
                  id="core_clock"
                  value={formData.core_clock || ''}
                  onChange={(e) => handleInputChange('core_clock', e.target.value)}
                  placeholder="1515 MHz"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="boost_clock">Frecuencia Boost</Label>
                <Input
                  id="boost_clock"
                  value={formData.boost_clock || ''}
                  onChange={(e) => handleInputChange('boost_clock', e.target.value)}
                  placeholder="1770 MHz"
                />
              </div>
              <div>
                <Label htmlFor="tdp">TDP</Label>
                <Input
                  id="tdp"
                  value={formData.tdp || ''}
                  onChange={(e) => handleInputChange('tdp', e.target.value)}
                  placeholder="220W"
                />
              </div>
            </div>
          </>
        );

      case 'storage':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="capacity">Capacidad</Label>
                <Input
                  id="capacity"
                  value={formData.capacity || ''}
                  onChange={(e) => handleInputChange('capacity', e.target.value)}
                  placeholder="1TB"
                />
              </div>
              <div>
                <Label htmlFor="type">Tipo</Label>
                <Select onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SSD">SSD</SelectItem>
                    <SelectItem value="HDD">HDD</SelectItem>
                    <SelectItem value="NVMe">NVMe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interface">Interfaz</Label>
                <Select onValueChange={(value) => handleInputChange('interface', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar interfaz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SATA">SATA</SelectItem>
                    <SelectItem value="PCIe">PCIe</SelectItem>
                    <SelectItem value="M.2">M.2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="read_speed">Velocidad de Lectura</Label>
                <Input
                  id="read_speed"
                  value={formData.read_speed || ''}
                  onChange={(e) => handleInputChange('read_speed', e.target.value)}
                  placeholder="3500 MB/s"
                />
              </div>
            </div>
          </>
        );

      case 'psu':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="wattage">Potencia</Label>
                <Input
                  id="wattage"
                  value={formData.wattage || ''}
                  onChange={(e) => handleInputChange('wattage', e.target.value)}
                  placeholder="650W"
                />
              </div>
              <div>
                <Label htmlFor="efficiency">Eficiencia</Label>
                <Select onValueChange={(value) => handleInputChange('efficiency', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar eficiencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="80+ Bronze">80+ Bronze</SelectItem>
                    <SelectItem value="80+ Silver">80+ Silver</SelectItem>
                    <SelectItem value="80+ Gold">80+ Gold</SelectItem>
                    <SelectItem value="80+ Platinum">80+ Platinum</SelectItem>
                    <SelectItem value="80+ Titanium">80+ Titanium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="modular">Modularidad</Label>
              <Select onValueChange={(value) => handleInputChange('modular', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar modularidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full Modular">Full Modular</SelectItem>
                  <SelectItem value="Semi Modular">Semi Modular</SelectItem>
                  <SelectItem value="No Modular">No Modular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );

      case 'case':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="form_factor">Factor de Forma</Label>
                <Select onValueChange={(value) => handleInputChange('form_factor', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar factor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mid Tower">Mid Tower</SelectItem>
                    <SelectItem value="Full Tower">Full Tower</SelectItem>
                    <SelectItem value="Mini ITX">Mini ITX</SelectItem>
                    <SelectItem value="Micro ATX">Micro ATX</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="motherboard_support">Soporte de Motherboard</Label>
                <Input
                  id="motherboard_support"
                  value={formData.motherboard_support || ''}
                  onChange={(e) => handleInputChange('motherboard_support', e.target.value)}
                  placeholder="E-ATX, ATX, Micro-ATX, Mini-ITX"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="dimensions">Dimensiones</Label>
              <Input
                id="dimensions"
                value={formData.dimensions || ''}
                onChange={(e) => handleInputChange('dimensions', e.target.value)}
                placeholder="445mm x 272mm x 446mm"
              />
            </div>
          </>
        );

      case 'cooling':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Tipo</Label>
                <Select onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Air Cooler">Air Cooler</SelectItem>
                    <SelectItem value="AIO">AIO</SelectItem>
                    <SelectItem value="Custom Loop">Custom Loop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="fan_size">Tamaño de Ventilador</Label>
                <Input
                  id="fan_size"
                  value={formData.fan_size || ''}
                  onChange={(e) => handleInputChange('fan_size', e.target.value)}
                  placeholder="120mm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="radiator_size">Tamaño de Radiador</Label>
                <Input
                  id="radiator_size"
                  value={formData.radiator_size || ''}
                  onChange={(e) => handleInputChange('radiator_size', e.target.value)}
                  placeholder="240mm"
                />
              </div>
              <div>
                <Label htmlFor="height">Altura</Label>
                <Input
                  id="height"
                  value={formData.height || ''}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  placeholder="160mm"
                />
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos básicos */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre del Componente *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nombre del producto"
              />
            </div>
            <div>
              <Label htmlFor="brand">Marca *</Label>
              <Input
                id="brand"
                required
                value={formData.brand}
                onChange={(e) => handleInputChange('brand', e.target.value)}
                placeholder="AMD, Intel, NVIDIA, etc."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Precio (USD) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                required
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                placeholder="199.99"
              />
            </div>
            <div>
              <Label htmlFor="image">URL de Imagen</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => handleInputChange('image', e.target.value)}
                placeholder="/ryzen.svg"
              />
            </div>
          </div>

          {/* Campos específicos por categoría */}
          {renderCategorySpecificFields()}

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descripción del producto (opcional)"
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-tech-blue hover:bg-tech-lightBlue"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Agregando...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Agregar Componente
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdminComponentForm;