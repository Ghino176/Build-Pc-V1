import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, XCircle, AlertTriangle, Cpu, Monitor, HardDrive, Zap } from 'lucide-react';
const Compatibility = () => {
  const compatibilityRules = [{
    title: "CPU y Tarjeta Madre",
    icon: <Cpu className="h-8 w-8 text-tech-blue" />,
    description: "El socket del procesador debe coincidir con el socket de la tarjeta madre",
    examples: [{
      cpu: "AMD Ryzen 7 5800X",
      socket: "AM4",
      compatible: "ASUS ROG Strix B550-F",
      status: "compatible"
    }, {
      cpu: "Intel Core i9-12900K",
      socket: "LGA 1700",
      compatible: "MSI MPG Z690",
      status: "compatible"
    }, {
      cpu: "AMD Ryzen 7 5800X",
      socket: "AM4",
      compatible: "MSI MPG Z690",
      status: "incompatible"
    }]
  }, {
    title: "Memoria RAM",
    icon: <HardDrive className="h-8 w-8 text-tech-blue" />,
    description: "La memoria debe ser compatible con la tarjeta madre y el procesador",
    examples: [{
      component: "DDR4-3600",
      compatible: "Tarjetas madre B550/X570",
      status: "compatible"
    }, {
      component: "DDR5-5600",
      compatible: "Tarjetas madre Z690/B660",
      status: "compatible"
    }, {
      component: "DDR4-3600",
      compatible: "Tarjetas madre Z690",
      status: "warning"
    }]
  }, {
    title: "Tarjeta Gráfica",
    icon: <Monitor className="h-8 w-8 text-tech-blue" />,
    description: "Espacio en el case y alimentación suficiente",
    examples: [{
      component: "RTX 3080",
      requirement: "750W PSU mínimo",
      status: "compatible"
    }, {
      component: "RX 6800 XT",
      requirement: "650W PSU mínimo",
      status: "compatible"
    }, {
      component: "RTX 4090",
      requirement: "850W PSU + espacio 320mm",
      status: "warning"
    }]
  }, {
    title: "Fuente de Poder",
    icon: <Zap className="h-8 w-8 text-tech-blue" />,
    description: "Debe proporcionar suficiente energía para todos los componentes",
    examples: [{
      build: "Gaming básico",
      wattage: "550W",
      status: "compatible"
    }, {
      build: "Gaming alto rendimiento",
      wattage: "750W",
      status: "compatible"
    }, {
      build: "Workstation extrema",
      wattage: "1000W+",
      status: "warning"
    }]
  }];
  const StatusIcon = ({
    status
  }: {
    status: string;
  }) => {
    switch (status) {
      case 'compatible':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'incompatible':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Guía de Compatibilidad de Componentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprende sobre la compatibilidad entre componentes de PC para construir 
            un sistema estable y optimizado. Evita errores costosos con nuestra guía completa.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="rules" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rules">Reglas de Compatibilidad</TabsTrigger>
            
            <TabsTrigger value="tips">Consejos Avanzados</TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {compatibilityRules.map((rule, index) => <Card key={index} className="tech-card">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {rule.icon}
                      <div>
                        <CardTitle className="text-foreground">{rule.title}</CardTitle>
                        <CardDescription>{rule.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {rule.examples.map((example, exampleIndex) => <div key={exampleIndex} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="text-sm">
                            {'cpu' in example ? <div>
                                <p className="font-medium">{example.cpu} ({example.socket})</p>
                                <p className="text-muted-foreground">+ {example.compatible}</p>
                              </div> : 'component' in example ? <div>
                                <p className="font-medium">{example.component}</p>
                                <p className="text-muted-foreground">{example.compatible}</p>
                              </div> : <div>
                                <p className="font-medium">{example.build}</p>
                                <p className="text-muted-foreground">{example.wattage}</p>
                              </div>}
                          </div>
                          <StatusIcon status={example.status} />
                        </div>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </TabsContent>

          <TabsContent value="checker" className="space-y-6">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-foreground">Verificador de Compatibilidad</CardTitle>
                <CardDescription>
                  Usa nuestro constructor de PC para verificar automáticamente la compatibilidad 
                  entre tus componentes seleccionados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Monitor className="h-16 w-16 text-tech-blue mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    El verificador de compatibilidad está integrado en nuestro constructor de PC
                  </p>
                  <a href="/" className="tech-button inline-flex items-center">
                    Ir al Constructor
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <div className="grid gap-6">
              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Consejos Avanzados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30">
                      <h4 className="font-semibold text-foreground mb-2">🔧 Planificación de Upgrades</h4>
                      <p className="text-muted-foreground">
                        Considera la compatibilidad futura al elegir una tarjeta madre. 
                        Algunas plataformas tienen mayor longevidad que otras.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30">
                      <h4 className="font-semibold text-foreground mb-2">⚡ Cálculo de Energía</h4>
                      <p className="text-muted-foreground">
                        Suma el TDP de todos los componentes y agrega un 20% de margen 
                        para determinar la capacidad mínima de la fuente de poder.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30">
                      <h4 className="font-semibold text-foreground mb-2">🌡️ Gestión Térmica</h4>
                      <p className="text-muted-foreground">
                        Verifica que el case tenga suficiente flujo de aire y que 
                        el cooler del CPU sea compatible con el socket y altura del case.
                      </p>
                    </div>

                    <div className="p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30">
                      <h4 className="font-semibold text-foreground mb-2">🌡️ Gestión Térmica</h4>
                      <p className="text-muted-foreground">
                        Verifica que el case tenga suficiente flujo de aire y que 
                        el del CPU sea compatible con el socket y altura del case.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-tech-blue/10 rounded-lg border border-tech-blue/30">
                      <h4 className="font-semibold text-foreground mb-2">📏 Dimensiones Físicas</h4>
                      <p className="text-muted-foreground">
                        Mide el espacio disponible en tu case antes de comprar 
                        tarjetas gráficas largas o coolers de CPU altos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>;
};
export default Compatibility;