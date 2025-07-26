-- Allow public insert access to all component tables
CREATE POLICY "Allow public insert access to cpus" 
ON public.cpus 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to motherboards" 
ON public.motherboards 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to ram" 
ON public.ram 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to graphics_cards" 
ON public.graphics_cards 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to storage" 
ON public.storage 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to power_supplies" 
ON public.power_supplies 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to cases" 
ON public.cases 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert access to cooling" 
ON public.cooling 
FOR INSERT 
WITH CHECK (true);