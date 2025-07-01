
-- Create a table to store PC builds
CREATE TABLE public.pc_builds (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  total_price NUMERIC NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table to store build components (junction table)
CREATE TABLE public.build_components (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  build_id UUID REFERENCES public.pc_builds(id) ON DELETE CASCADE NOT NULL,
  component_id UUID NOT NULL,
  component_category TEXT NOT NULL,
  component_name TEXT NOT NULL,
  component_brand TEXT NOT NULL,
  component_price NUMERIC NOT NULL,
  component_image TEXT,
  component_specs JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.pc_builds ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.build_components ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for pc_builds
CREATE POLICY "Users can view their own builds" 
  ON public.pc_builds 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own builds" 
  ON public.pc_builds 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own builds" 
  ON public.pc_builds 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own builds" 
  ON public.pc_builds 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for build_components
CREATE POLICY "Users can view components of their own builds" 
  ON public.build_components 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.pc_builds 
      WHERE id = build_components.build_id 
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create components for their own builds" 
  ON public.build_components 
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.pc_builds 
      WHERE id = build_components.build_id 
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update components of their own builds" 
  ON public.build_components 
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.pc_builds 
      WHERE id = build_components.build_id 
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete components of their own builds" 
  ON public.build_components 
  FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.pc_builds 
      WHERE id = build_components.build_id 
      AND user_id = auth.uid()
    )
  );
