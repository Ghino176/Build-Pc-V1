
-- Crear tabla para CPUs
CREATE TABLE public.cpus (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  cores INTEGER NOT NULL,
  threads INTEGER NOT NULL,
  base_clock TEXT NOT NULL,
  boost_clock TEXT NOT NULL,
  tdp TEXT NOT NULL,
  socket TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Tarjetas Madre
CREATE TABLE public.motherboards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  chipset TEXT NOT NULL,
  form_factor TEXT NOT NULL,
  memory_slots INTEGER NOT NULL,
  max_memory TEXT NOT NULL,
  socket TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Memoria RAM
CREATE TABLE public.ram (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  capacity TEXT NOT NULL,
  type TEXT NOT NULL,
  speed TEXT NOT NULL,
  cas_latency TEXT,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Tarjetas Gráficas
CREATE TABLE public.graphics_cards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  memory TEXT NOT NULL,
  core_clock TEXT NOT NULL,
  boost_clock TEXT NOT NULL,
  tdp TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Almacenamiento
CREATE TABLE public.storage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  capacity TEXT NOT NULL,
  type TEXT NOT NULL,
  interface TEXT NOT NULL,
  read_speed TEXT,
  write_speed TEXT,
  rpm INTEGER,
  cache_size TEXT,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Fuentes de Poder
CREATE TABLE public.power_supplies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  wattage TEXT NOT NULL,
  efficiency TEXT NOT NULL,
  modular TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Cases
CREATE TABLE public.cases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  form_factor TEXT NOT NULL,
  motherboard_support TEXT NOT NULL,
  dimensions TEXT,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para Refrigeración
CREATE TABLE public.cooling (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  type TEXT NOT NULL,
  radiator_size TEXT,
  fan_size TEXT,
  height TEXT,
  price DECIMAL(10,2) NOT NULL,
  image TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security para todas las tablas (datos públicos de solo lectura)
ALTER TABLE public.cpus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.motherboards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ram ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.graphics_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.storage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.power_supplies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cooling ENABLE ROW LEVEL SECURITY;

-- Crear políticas para permitir lectura pública de todos los componentes
CREATE POLICY "Allow public read access to cpus" ON public.cpus FOR SELECT USING (true);
CREATE POLICY "Allow public read access to motherboards" ON public.motherboards FOR SELECT USING (true);
CREATE POLICY "Allow public read access to ram" ON public.ram FOR SELECT USING (true);
CREATE POLICY "Allow public read access to graphics_cards" ON public.graphics_cards FOR SELECT USING (true);
CREATE POLICY "Allow public read access to storage" ON public.storage FOR SELECT USING (true);
CREATE POLICY "Allow public read access to power_supplies" ON public.power_supplies FOR SELECT USING (true);
CREATE POLICY "Allow public read access to cases" ON public.cases FOR SELECT USING (true);
CREATE POLICY "Allow public read access to cooling" ON public.cooling FOR SELECT USING (true);

-- Insertar datos de ejemplo para CPUs
INSERT INTO public.cpus (name, brand, cores, threads, base_clock, boost_clock, tdp, socket, price, image, description) VALUES
('AMD Ryzen 7 5800X', 'AMD', 8, 16, '3.8 GHz', '4.7 GHz', '105W', 'AM4', 299.99, '/ryzen.svg', 'Procesador de escritorio de 8 núcleos y 16 hilos con rendimiento excepcional para juegos y creación de contenido.'),
('Intel Core i9-12900K', 'Intel', 16, 24, '3.2 GHz', '5.2 GHz', '125W', 'LGA 1700', 589.99, '/intel.svg', 'Procesador insignia de escritorio de Intel con arquitectura híbrida para un rendimiento extremo.'),
('AMD Ryzen 5 5600X', 'AMD', 6, 12, '3.7 GHz', '4.6 GHz', '65W', 'AM4', 199.99, '/ryzen.svg', 'Procesador de escritorio de 6 núcleos y 12 hilos ideal para juegos y productividad diaria.');

-- Insertar datos de ejemplo para Tarjetas Madre
INSERT INTO public.motherboards (name, brand, chipset, form_factor, memory_slots, max_memory, socket, price, image, description) VALUES
('ASUS ROG Strix B550-F Gaming', 'ASUS', 'AMD B550', 'ATX', 4, '128GB', 'AM4', 189.99, '/asus.svg', 'Placa base ATX con gran cantidad de características, opciones avanzadas de refrigeración y redes.'),
('MSI MPG Z690 Gaming Edge WiFi', 'MSI', 'Intel Z690', 'ATX', 4, '128GB', 'LGA 1700', 289.99, '/msi.svg', 'Placa base de alto rendimiento con soporte para DDR5 y suministro de energía robusto.');

-- Insertar datos de ejemplo para RAM
INSERT INTO public.ram (name, brand, capacity, type, speed, cas_latency, price, image, description) VALUES
('Corsair Vengeance RGB Pro 32GB', 'Corsair', '32GB (2x16GB)', 'DDR4', '3600MHz', 'CL18', 149.99, '/corsair.svg', 'Memoria RGB de alto rendimiento con disipadores de calor de aluminio para una mejor gestión térmica.'),
('G.Skill Trident Z Neo 16GB', 'G.Skill', '16GB (2x8GB)', 'DDR4', '3600MHz', 'CL16', 119.99, '/g.skill.svg', 'Optimizada para sistemas AMD Ryzen con impresionantes efectos de iluminación RGB.');

-- Insertar datos de ejemplo para Tarjetas Gráficas
INSERT INTO public.graphics_cards (name, brand, memory, core_clock, boost_clock, tdp, price, image, description) VALUES
('NVIDIA GeForce RTX 3080', 'NVIDIA', '10GB GDDR6X', '1440 MHz', '1710 MHz', '320W', 799.99, '/nvidia.svg', 'Potente tarjeta gráfica para juegos en 4K y flujos de trabajo creativos.'),
('AMD Radeon RX 6800 XT', 'AMD', '16GB GDDR6', '1825 MHz', '2250 MHz', '300W', 649.99, '/radeon.svg', 'Tarjeta gráfica de gama alta competitiva con gran búfer de VRAM.');

-- Insertar datos de ejemplo para Almacenamiento
INSERT INTO public.storage (name, brand, capacity, type, interface, read_speed, write_speed, price, image, description) VALUES
('Samsung 970 EVO Plus 1TB', 'Samsung', '1TB', 'NVMe SSD', 'PCIe 3.0 x4', '3500 MB/s', '3300 MB/s', 129.99, '/samsung.svg', 'SSD NVMe de alta velocidad para tiempos de arranque rápidos y carga de aplicaciones.'),
('WD Black 4TB HDD', 'WD', '4TB', 'HDD', 'SATA 6.0 Gb/s', NULL, NULL, 149.99, '/wd.svg', 'Disco duro de alta capacidad para necesidades de almacenamiento masivo.');

-- Insertar datos de ejemplo para Fuentes de Poder
INSERT INTO public.power_supplies (name, brand, wattage, efficiency, modular, price, image, description) VALUES
('Corsair RM850x', 'Corsair', '850W', '80+ Gold', 'Fully Modular', 144.99, '/corsair.svg', 'Fuente de alimentación confiable con certificación 80 Plus Gold y operación silenciosa.'),
('EVGA SuperNOVA 750 G5', 'EVGA', '750W', '80+ Gold', 'Fully Modular', 129.99, '/evga.svg', 'Fuente de alimentación totalmente modular con alta eficiencia y rendimiento confiable.');

-- Insertar datos de ejemplo para Cases
INSERT INTO public.cases (name, brand, form_factor, motherboard_support, dimensions, price, image, description) VALUES
('Lian Li PC-O11 Dynamic', 'Lian Li', 'Mid Tower', 'E-ATX, ATX, Micro-ATX, Mini-ITX', '445mm x 272mm x 446mm', 149.99, '/lian-li.svg', 'Diseño de doble cámara para una refrigeración óptima y una gestión limpia de cables.'),
('Fractal Design Meshify 2', 'Fractal Design', 'Mid Tower', 'E-ATX, ATX, Micro-ATX, Mini-ITX', '474mm x 229mm x 466mm', 139.99, '/fractal.svg', 'Carcasa de alto flujo de aire con excelente calidad de construcción y diseño interno versátil.');

-- Insertar datos de ejemplo para Refrigeración
INSERT INTO public.cooling (name, brand, type, radiator_size, fan_size, height, price, image, description) VALUES
('NZXT Kraken X63', 'NZXT', 'Liquid Cooler', '280mm', '2x 140mm', NULL, 149.99, '/nzxt.svg', 'Refrigerador líquido AIO de 280mm con diseño de espejo infinito RGB.'),
('Noctua NH-D15', 'Noctua', 'Air Cooler', NULL, '2x 140mm', '165mm', 99.99, '/noctua.svg', 'Refrigerador de CPU de torre dual premium con excelente disipación de calor.');
