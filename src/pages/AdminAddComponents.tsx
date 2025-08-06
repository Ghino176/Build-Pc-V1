import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminComponentForm from '@/components/AdminComponentForm';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const AdminAddComponents = () => {
  const { isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin-login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Agregar Componentes</h1>
          <p className="text-muted-foreground">Gestiona el inventario de componentes de PC</p>
        </div>

        <Tabs defaultValue="cpu" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="cpu">CPU</TabsTrigger>
            <TabsTrigger value="motherboard">Placa</TabsTrigger>
            <TabsTrigger value="ram">RAM</TabsTrigger>
            <TabsTrigger value="gpu">GPU</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="psu">PSU</TabsTrigger>
            <TabsTrigger value="case">Case</TabsTrigger>
            <TabsTrigger value="cooling">Cooling</TabsTrigger>
          </TabsList>

          <TabsContent value="cpu">
            <Card>
              <CardHeader>
                <CardTitle>Agregar CPU</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="cpu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="motherboard">
            <Card>
              <CardHeader>
                <CardTitle>Agregar Motherboard</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="motherboard" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ram">
            <Card>
              <CardHeader>
                <CardTitle>Agregar RAM</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="ram" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gpu">
            <Card>
              <CardHeader>
                <CardTitle>Agregar GPU</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="gpu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storage">
            <Card>
              <CardHeader>
                <CardTitle>Agregar Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="storage" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="psu">
            <Card>
              <CardHeader>
                <CardTitle>Agregar PSU</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="psu" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="case">
            <Card>
              <CardHeader>
                <CardTitle>Agregar Case</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="case" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cooling">
            <Card>
              <CardHeader>
                <CardTitle>Agregar Cooling</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminComponentForm category="cooling" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminAddComponents;