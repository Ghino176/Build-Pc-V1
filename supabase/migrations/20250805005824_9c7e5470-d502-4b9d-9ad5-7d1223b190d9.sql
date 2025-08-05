-- Add UPDATE and DELETE policies for all component tables

-- CPUs table
CREATE POLICY "Allow public update access to cpus" 
ON public.cpus 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to cpus" 
ON public.cpus 
FOR DELETE 
USING (true);

-- Motherboards table  
CREATE POLICY "Allow public update access to motherboards" 
ON public.motherboards 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to motherboards" 
ON public.motherboards 
FOR DELETE 
USING (true);

-- RAM table
CREATE POLICY "Allow public update access to ram" 
ON public.ram 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to ram" 
ON public.ram 
FOR DELETE 
USING (true);

-- Graphics Cards table
CREATE POLICY "Allow public update access to graphics_cards" 
ON public.graphics_cards 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to graphics_cards" 
ON public.graphics_cards 
FOR DELETE 
USING (true);

-- Storage table
CREATE POLICY "Allow public update access to storage" 
ON public.storage 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to storage" 
ON public.storage 
FOR DELETE 
USING (true);

-- Power Supplies table
CREATE POLICY "Allow public update access to power_supplies" 
ON public.power_supplies 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to power_supplies" 
ON public.power_supplies 
FOR DELETE 
USING (true);

-- Cases table
CREATE POLICY "Allow public update access to cases" 
ON public.cases 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to cases" 
ON public.cases 
FOR DELETE 
USING (true);

-- Cooling table
CREATE POLICY "Allow public update access to cooling" 
ON public.cooling 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public delete access to cooling" 
ON public.cooling 
FOR DELETE 
USING (true);