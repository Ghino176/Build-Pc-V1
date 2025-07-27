import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Settings, Cpu, Monitor, HardDrive, Zap, Box, Fan, MemoryStick, Layers, LogOut, User } from 'lucide-react';
import AdminComponentForm from '@/components/AdminComponentForm';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { isAuthenticated, adminUser, logout } = useAdminAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin-login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Sesión cerrada",
      description: "Has salido del panel de administración",
    });
    navigate('/');
  };

  if (!isAuthenticated) {
    return null; // El useEffect redirigirá
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Settings className="h-8 w-8 text-tech-blue" />
            <h1 className="text-3xl font-bold text-tech-blue">Panel de Administración</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{adminUser}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Agrega nuevos componentes a la base de datos que aparecerán automáticamente en el builder de PCs.
        </p>
      </div>

      <Tabs defaultValue="cpu" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="cpu" className="flex items-center space-x-2">
            <Cpu className="h-4 w-4" />
            <span className="hidden sm:inline">CPU</span>
          </TabsTrigger>
          <TabsTrigger value="motherboard" className="flex items-center space-x-2">
            <Layers className="h-4 w-4" />
            <span className="hidden sm:inline">Motherboard</span>
          </TabsTrigger>
          <TabsTrigger value="ram" className="flex items-center space-x-2">
            <MemoryStick className="h-4 w-4" />
            <span className="hidden sm:inline">RAM</span>
          </TabsTrigger>
          <TabsTrigger value="gpu" className="flex items-center space-x-2">
            <Monitor className="h-4 w-4" />
            <span className="hidden sm:inline">GPU</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center space-x-2">
            <HardDrive className="h-4 w-4" />
            <span className="hidden sm:inline">Storage</span>
          </TabsTrigger>
          <TabsTrigger value="psu" className="flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">PSU</span>
          </TabsTrigger>
          <TabsTrigger value="case" className="flex items-center space-x-2">
            <Box className="h-4 w-4" />
            <span className="hidden sm:inline">Case</span>
          </TabsTrigger>
          <TabsTrigger value="cooling" className="flex items-center space-x-2">
            <Fan className="h-4 w-4" />
            <span className="hidden sm:inline">Cooling</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="cpu">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5" />
                  <span>Agregar Procesador (CPU)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="cpu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="motherboard">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Layers className="h-5 w-5" />
                  <span>Agregar Motherboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="motherboard" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ram">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MemoryStick className="h-5 w-5" />
                  <span>Agregar Memoria RAM</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="ram" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gpu">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5" />
                  <span>Agregar Tarjeta Gráfica</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="gpu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storage">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HardDrive className="h-5 w-5" />
                  <span>Agregar Almacenamiento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="storage" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="psu">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Agregar Fuente de Poder</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="psu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="case">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Box className="h-5 w-5" />
                  <span>Agregar Case/Gabinete</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="case" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cooling">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Fan className="h-5 w-5" />
                  <span>Agregar Sistema de Cooling</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="cooling" />
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
      </div>
    </div>
  );
};

export default Admin;