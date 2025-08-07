
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ShoppingCart } from 'lucide-react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { saveBuild } from '@/services/buildService';
import { useToast } from '@/hooks/use-toast';
import BuildSuccessDialog from './BuildSuccessDialog';

const SaveBuildDialog: React.FC = () => {
  const { selectedComponents, totalPrice } = usePcBuilder();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [savedBuildName, setSavedBuildName] = useState('');
  const { toast } = useToast();

  const handleSave = async () => {
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for your build.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      console.log('Attempting to save build with components:', selectedComponents);
      
      const { data, error } = await saveBuild(
        name.trim(),
        description.trim(),
        totalPrice,
        selectedComponents
      );

      if (error) {
        console.error('Save build error:', error);
        toast({
          title: "Error",
          description: `Failed to save build: ${error.message}`,
          variant: "destructive",
        });
        return;
      }

      // Show success dialog instead of toast
      setSavedBuildName(name);
      setOpen(false);
      setShowSuccessDialog(true);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Unexpected save build error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const hasComponents = Object.values(selectedComponents).some(component => component !== null);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            className="w-full bg-tech-blue hover:bg-tech-lightBlue"
            disabled={!hasComponents}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Guardar Build
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Guardar Build</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                placeholder="Mi nuevo build"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descripción
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
                placeholder="Descripción opcional del build..."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Precio Total:
              </Label>
              <div className="col-span-3 font-medium">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar Build'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <BuildSuccessDialog 
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        buildName={savedBuildName}
      />
    </>
  );
};

export default SaveBuildDialog;
