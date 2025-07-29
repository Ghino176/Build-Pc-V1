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

  console.log('Admin page - isAuthenticated:', isAuthenticated, 'adminUser:', adminUser);

  useEffect(() => {
    console.log('Admin useEffect - isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) {
      console.log('Not authenticated, redirecting to login');
      navigate('/admin-login');
    } else {
      console.log('User is authenticated, showing admin panel');
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
    console.log('Rendering null because not authenticated');
    return null; // El useEffect redirigirá
  }

  console.log('Rendering admin panel for user:', adminUser);

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
          <TabsTrigger value="cpu" className="flex items-center space-x-2 data-[state=active]:bg-component-cpu/10 data-[state=active]:border-component-cpu data-[state=active]:text-component-cpu">
            <Cpu className="h-4 w-4" />
            <span className="hidden sm:inline">CPU</span>
          </TabsTrigger>
          <TabsTrigger value="motherboard" className="flex items-center space-x-2 data-[state=active]:bg-component-motherboard/10 data-[state=active]:border-component-motherboard data-[state=active]:text-component-motherboard">
            <Layers className="h-4 w-4" />
            <span className="hidden sm:inline">Motherboard</span>
          </TabsTrigger>
          <TabsTrigger value="ram" className="flex items-center space-x-2 data-[state=active]:bg-component-ram/10 data-[state=active]:border-component-ram data-[state=active]:text-component-ram">
            <MemoryStick className="h-4 w-4" />
            <span className="hidden sm:inline">RAM</span>
          </TabsTrigger>
          <TabsTrigger value="gpu" className="flex items-center space-x-2 data-[state=active]:bg-component-gpu/10 data-[state=active]:border-component-gpu data-[state=active]:text-component-gpu">
            <Monitor className="h-4 w-4" />
            <span className="hidden sm:inline">GPU</span>
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex items-center space-x-2 data-[state=active]:bg-component-storage/10 data-[state=active]:border-component-storage data-[state=active]:text-component-storage">
            <HardDrive className="h-4 w-4" />
            <span className="hidden sm:inline">Storage</span>
          </TabsTrigger>
          <TabsTrigger value="psu" className="flex items-center space-x-2 data-[state=active]:bg-component-psu/10 data-[state=active]:border-component-psu data-[state=active]:text-component-psu">
            <Zap className="h-4 w-4" />
            <span className="hidden sm:inline">PSU</span>
          </TabsTrigger>
          <TabsTrigger value="case" className="flex items-center space-x-2 data-[state=active]:bg-component-case/10 data-[state=active]:border-component-case data-[state=active]:text-component-case">
            <Box className="h-4 w-4" />
            <span className="hidden sm:inline">Case</span>
          </TabsTrigger>
          <TabsTrigger value="cooling" className="flex items-center space-x-2 data-[state=active]:bg-component-cooling/10 data-[state=active]:border-component-cooling data-[state=active]:text-component-cooling">
            <Fan className="h-4 w-4" />
            <span className="hidden sm:inline">Cooling</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="cpu">
            <Card className="border-component-cpu/20">
              <CardHeader className="border-b border-component-cpu/10 bg-component-cpu/5">
                <CardTitle className="flex items-center space-x-2 text-component-cpu">
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
            <Card className="border-component-motherboard/20">
              <CardHeader className="border-b border-component-motherboard/10 bg-component-motherboard/5">
                <CardTitle className="flex items-center space-x-2 text-component-motherboard">
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
            <Card className="border-component-ram/20">
              <CardHeader className="border-b border-component-ram/10 bg-component-ram/5">
                <CardTitle className="flex items-center space-x-2 text-component-ram">
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
            <Card className="border-component-gpu/20">
              <CardHeader className="border-b border-component-gpu/10 bg-component-gpu/5">
                <CardTitle className="flex items-center space-x-2 text-component-gpu">
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
            <Card className="border-component-storage/20">
              <CardHeader className="border-b border-component-storage/10 bg-component-storage/5">
                <CardTitle className="flex items-center space-x-2 text-component-storage">
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
            <Card className="border-component-psu/20">
              <CardHeader className="border-b border-component-psu/10 bg-component-psu/5">
                <CardTitle className="flex items-center space-x-2 text-component-psu">
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
            <Card className="border-component-case/20">
              <CardHeader className="border-b border-component-case/10 bg-component-case/5">
                <CardTitle className="flex items-center space-x-2 text-component-case">
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
            <Card className="border-component-cooling/20">
              <CardHeader className="border-b border-component-cooling/10 bg-component-cooling/5">
                <CardTitle className="flex items-center space-x-2 text-component-cooling">
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