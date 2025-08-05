import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { getComponentsByCategory, updateComponent, deleteComponent, type ComponentData } from '@/services/componentService';
import { useToast } from '@/hooks/use-toast';

type ComponentCategory = 'cpu' | 'motherboard' | 'ram' | 'gpu' | 'storage' | 'psu' | 'case' | 'cooling';

const AdminComponentManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory>('cpu');
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingComponent, setEditingComponent] = useState<ComponentData | null>(null);
  const [formData, setFormData] = useState<any>({});
  const { toast } = useToast();

  const categories = [
    { value: 'cpu', label: 'CPU' },
    { value: 'motherboard', label: 'Motherboard' },
    { value: 'ram', label: 'RAM' },
    { value: 'gpu', label: 'GPU' },
    { value: 'storage', label: 'Storage' },
    { value: 'psu', label: 'PSU' },
    { value: 'case', label: 'Case' },
    { value: 'cooling', label: 'Cooling' }
  ];

  useEffect(() => {
    loadComponents();
  }, [selectedCategory]);

  const loadComponents = async () => {
    setLoading(true);
    try {
      const data = await getComponentsByCategory(selectedCategory);
      setComponents(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al cargar componentes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditComponent = (component: ComponentData) => {
    setEditingComponent(component);
    setFormData({ ...component });
  };

  const handleUpdateComponent = async () => {
    if (!editingComponent) return;

    try {
      const { error } = await updateComponent(selectedCategory, editingComponent.id, formData);
      
      if (error) {
        toast({
          title: "Error",
          description: "Error al actualizar el componente",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Éxito",
        description: "Componente actualizado correctamente",
      });
      
      setEditingComponent(null);
      loadComponents();
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al actualizar el componente",
        variant: "destructive",
      });
    }
  };

  const handleDeleteComponent = async (id: string) => {
    try {
      const { error } = await deleteComponent(selectedCategory, id);
      
      if (error) {
        toast({
          title: "Error",
          description: "Error al eliminar el componente",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Éxito",
        description: "Componente eliminado correctamente",
      });
      
      loadComponents();
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al eliminar el componente",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: field === 'price' ? parseFloat(value as string) : value
    }));
  };

  const renderEditForm = () => {
    if (!editingComponent) return null;

    return (
      <Dialog open={!!editingComponent} onOpenChange={() => setEditingComponent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Componente</DialogTitle>
            <DialogDescription>
              Modifica los detalles del componente
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="brand">Marca</Label>
                <Input
                  id="brand"
                  value={formData.brand || ''}
                  onChange={(e) => handleInputChange('brand', e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Precio</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price || ''}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="image">URL de Imagen</Label>
                <Input
                  id="image"
                  value={formData.image || ''}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descripción</Label>
              <Input
                id="description"
                value={formData.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            {/* Campos específicos por categoría */}
            {selectedCategory === 'cpu' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cores">Núcleos</Label>
                  <Input
                    id="cores"
                    type="number"
                    value={formData.cores || ''}
                    onChange={(e) => handleInputChange('cores', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="threads">Hilos</Label>
                  <Input
                    id="threads"
                    type="number"
                    value={formData.threads || ''}
                    onChange={(e) => handleInputChange('threads', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="socket">Socket</Label>
                  <Input
                    id="socket"
                    value={formData.socket || ''}
                    onChange={(e) => handleInputChange('socket', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="tdp">TDP</Label>
                  <Input
                    id="tdp"
                    value={formData.tdp || ''}
                    onChange={(e) => handleInputChange('tdp', e.target.value)}
                  />
                </div>
              </div>
            )}

            {selectedCategory === 'ram' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="capacity">Capacidad</Label>
                  <Input
                    id="capacity"
                    value={formData.capacity || ''}
                    onChange={(e) => handleInputChange('capacity', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="type">Tipo</Label>
                  <Input
                    id="type"
                    value={formData.type || ''}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="speed">Velocidad</Label>
                  <Input
                    id="speed"
                    value={formData.speed || ''}
                    onChange={(e) => handleInputChange('speed', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setEditingComponent(null)}>
              Cancelar
            </Button>
            <Button onClick={handleUpdateComponent}>
              Guardar Cambios
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestionar Componentes</CardTitle>
        <CardDescription>
          Visualiza, edita y elimina componentes existentes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label htmlFor="category">Categoría</Label>
          <Select value={selectedCategory} onValueChange={(value: ComponentCategory) => setSelectedCategory(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="text-center py-8">Cargando componentes...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {components.map((component) => (
                <TableRow key={component.id}>
                  <TableCell>{component.name}</TableCell>
                  <TableCell>{component.brand}</TableCell>
                  <TableCell>${component.price}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditComponent(component)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta acción no se puede deshacer. Esto eliminará permanentemente el componente.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteComponent(component.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Eliminar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {renderEditForm()}
      </CardContent>
    </Card>
  );
};

export default AdminComponentManager;