
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBuildComponents } from '@/services/buildService';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

interface BuildDetailsDialogProps {
  buildId: string;
  children: React.ReactNode;
}

const BuildDetailsDialog: React.FC<BuildDetailsDialogProps> = ({ buildId, children }) => {
  const [open, setOpen] = useState(false);

  const { data: components, isLoading, error } = useQuery({
    queryKey: ['build-components', buildId],
    queryFn: () => getBuildComponents(buildId),
    enabled: open
  });

  const totalPrice = components?.data?.reduce((sum, component) => sum + component.component_price, 0) || 0;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-tech-blue">Detalles de la Build</DialogTitle>
          <DialogDescription>
            Especificaciones completas y componentes de tu configuración
          </DialogDescription>
        </DialogHeader>

        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-tech-blue" />
            <span className="ml-2">Cargando componentes...</span>
          </div>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>
              Error al cargar los componentes de la build.
            </AlertDescription>
          </Alert>
        )}

        {components?.data && components.data.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Componentes</h3>
              <Badge variant="outline" className="border-tech-blue text-tech-blue">
                {components.data.length} componentes
              </Badge>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Componente</TableHead>
                  <TableHead>Marca</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {components.data.map((component) => (
                  <TableRow key={component.id}>
                    <TableCell>
                      <Badge variant="secondary" className="capitalize">
                        {component.component_category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      {component.component_name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {component.component_brand}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {formatPrice(component.component_price)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Separator className="bg-tech-blue/20" />

            <div className="flex justify-between items-center py-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-tech-blue">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        )}

        {components?.data && components.data.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No se encontraron componentes para esta build.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BuildDetailsDialog;
