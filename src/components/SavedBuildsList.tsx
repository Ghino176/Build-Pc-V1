
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserBuilds, getBuildComponents } from '@/services/buildService';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, DollarSign, Monitor, Eye } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BuildDetailsDialog from './BuildDetailsDialog';

const SavedBuildsList: React.FC = () => {
  const { data: builds, isLoading, error } = useQuery({
    queryKey: ['saved-builds'],
    queryFn: getUserBuilds
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="tech-card animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-20 bg-muted rounded"></div>
            </CardContent>
            <CardFooter>
              <div className="h-10 bg-muted rounded w-full"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Error al cargar las builds guardadas. Por favor, intenta de nuevo.
        </AlertDescription>
      </Alert>
    );
  }

  if (!builds?.data || builds.data.length === 0) {
    return (
      <div className="text-center py-12">
        <Monitor className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
        <h3 className="text-2xl font-semibold mb-2">No hay builds guardadas</h3>
        <p className="text-muted-foreground mb-6">
          Aún no has guardado ninguna configuración de PC. 
          ¡Comienza creando tu primera build!
        </p>
        <Button asChild className="bg-tech-blue hover:bg-tech-lightBlue">
          <a href="/">Crear Build</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {builds.data.map((build) => (
        <Card key={build.id} className="tech-card hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-tech-blue">{build.name}</CardTitle>
            {build.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {build.description}
              </p>
            )}
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-lg">
                  {formatPrice(build.total_price)}
                </span>
              </div>
              <Badge variant="outline" className="border-tech-blue/50">
                Build Completa
              </Badge>
            </div>
            
            <Separator className="bg-tech-blue/20" />
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                Creada: {new Date(build.created_at).toLocaleDateString('es-ES')}
              </span>
            </div>
          </CardContent>
          
          <CardFooter>
            <BuildDetailsDialog buildId={build.id}>
              <Button className="w-full bg-tech-blue hover:bg-tech-lightBlue">
                <Eye className="mr-2 h-4 w-4" />
                Ver Detalles
              </Button>
            </BuildDetailsDialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SavedBuildsList;
