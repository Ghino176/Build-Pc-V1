
-- Modificar las políticas de pc_builds para permitir acceso público
DROP POLICY IF EXISTS "Users can create their own builds" ON public.pc_builds;
DROP POLICY IF EXISTS "Users can view their own builds" ON public.pc_builds;
DROP POLICY IF EXISTS "Users can update their own builds" ON public.pc_builds;
DROP POLICY IF EXISTS "Users can delete their own builds" ON public.pc_builds;

-- Crear nuevas políticas públicas para pc_builds
CREATE POLICY "Allow public read access to pc_builds" 
  ON public.pc_builds 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public create access to pc_builds" 
  ON public.pc_builds 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public update access to pc_builds" 
  ON public.pc_builds 
  FOR UPDATE 
  USING (true);

CREATE POLICY "Allow public delete access to pc_builds" 
  ON public.pc_builds 
  FOR DELETE 
  USING (true);

-- Modificar las políticas de build_components para permitir acceso público
DROP POLICY IF EXISTS "Users can create components for their own builds" ON public.build_components;
DROP POLICY IF EXISTS "Users can view components of their own builds" ON public.build_components;
DROP POLICY IF EXISTS "Users can update components of their own builds" ON public.build_components;
DROP POLICY IF EXISTS "Users can delete components of their own builds" ON public.build_components;

-- Crear nuevas políticas públicas para build_components
CREATE POLICY "Allow public read access to build_components" 
  ON public.build_components 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public create access to build_components" 
  ON public.build_components 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public update access to build_components" 
  ON public.build_components 
  FOR UPDATE 
  USING (true);

CREATE POLICY "Allow public delete access to build_components" 
  ON public.build_components 
  FOR DELETE 
  USING (true);

-- Hacer que el campo user_id sea nullable y opcional para builds públicos
ALTER TABLE public.pc_builds ALTER COLUMN user_id DROP NOT NULL;
