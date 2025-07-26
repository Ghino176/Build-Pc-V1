-- Add RLS policies for GPU table
CREATE POLICY "Allow public read access to GPU" 
ON public.GPU 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert access to GPU" 
ON public.GPU 
FOR INSERT 
WITH CHECK (true);