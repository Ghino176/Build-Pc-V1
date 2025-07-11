
import { supabase } from '@/integrations/supabase/client';

export interface SavedBuild {
  id: string;
  name: string;
  description?: string;
  total_price: number;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface BuildComponent {
  id: string;
  build_id: string;
  component_id: string;
  component_category: string;
  component_name: string;
  component_brand: string;
  component_price: number;
  component_image?: string;
  component_specs?: any;
  created_at: string;
}

export const saveBuild = async (
  name: string,
  description: string,
  totalPrice: number,
  components: Record<string, any>
): Promise<{ data: SavedBuild | null; error: Error | null }> => {
  try {
    console.log('Attempting to save build with components:', components);

    // First, create the build (without requiring authentication)
    const { data: buildData, error: buildError } = await supabase
      .from('pc_builds')
      .insert([
        {
          name,
          description,
          total_price: totalPrice,
          user_id: null // Set to null for public builds
        }
      ])
      .select()
      .single();

    if (buildError) {
      console.error('Build creation error:', buildError);
      throw buildError;
    }

    console.log('Build created successfully:', buildData);

    // Then, insert all components
    const buildComponents = Object.values(components)
      .filter(component => component !== null && component !== undefined)
      .map(component => {
        console.log('Processing component:', component);
        return {
          build_id: buildData.id,
          component_id: component.id || 'unknown',
          component_category: component.category || 'unknown',
          component_name: component.name || 'Unknown Component',
          component_brand: component.brand || 'Unknown Brand',
          component_price: component.price || 0,
          component_image: component.image || null,
          component_specs: component.specs || null
        };
      });

    if (buildComponents.length > 0) {
      console.log('Saving components:', buildComponents);
      
      const { error: componentsError } = await supabase
        .from('build_components')
        .insert(buildComponents);

      if (componentsError) {
        console.error('Components creation error:', componentsError);
        // If component insertion fails, we should cleanup the build
        await supabase.from('pc_builds').delete().eq('id', buildData.id);
        throw componentsError;
      }

      console.log('Components saved successfully');
    }

    return { data: buildData, error: null };
  } catch (error) {
    console.error('Error saving build:', error);
    return { data: null, error: error as Error };
  }
};

export const getUserBuilds = async (): Promise<{ data: SavedBuild[] | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .from('pc_builds')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error fetching builds:', error);
    return { data: null, error: error as Error };
  }
};

export const getBuildComponents = async (buildId: string): Promise<{ data: BuildComponent[] | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .from('build_components')
      .select('*')
      .eq('build_id', buildId);

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error fetching build components:', error);
    return { data: null, error: error as Error };
  }
};
