export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cases: {
        Row: {
          brand: string
          created_at: string
          description: string | null
          dimensions: string | null
          form_factor: string
          id: string
          image: string | null
          motherboard_support: string
          name: string
          price: number
          updated_at: string
        }
        Insert: {
          brand: string
          created_at?: string
          description?: string | null
          dimensions?: string | null
          form_factor: string
          id?: string
          image?: string | null
          motherboard_support: string
          name: string
          price: number
          updated_at?: string
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string | null
          dimensions?: string | null
          form_factor?: string
          id?: string
          image?: string | null
          motherboard_support?: string
          name?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      cooling: {
        Row: {
          brand: string
          created_at: string
          description: string | null
          fan_size: string | null
          height: string | null
          id: string
          image: string | null
          name: string
          price: number
          radiator_size: string | null
          type: string
          updated_at: string
        }
        Insert: {
          brand: string
          created_at?: string
          description?: string | null
          fan_size?: string | null
          height?: string | null
          id?: string
          image?: string | null
          name: string
          price: number
          radiator_size?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string | null
          fan_size?: string | null
          height?: string | null
          id?: string
          image?: string | null
          name?: string
          price?: number
          radiator_size?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      cpus: {
        Row: {
          base_clock: string
          boost_clock: string
          brand: string
          cores: number
          created_at: string
          description: string | null
          id: string
          image: string | null
          name: string
          price: number
          socket: string
          tdp: string
          threads: number
          updated_at: string
        }
        Insert: {
          base_clock: string
          boost_clock: string
          brand: string
          cores: number
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name: string
          price: number
          socket: string
          tdp: string
          threads: number
          updated_at?: string
        }
        Update: {
          base_clock?: string
          boost_clock?: string
          brand?: string
          cores?: number
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name?: string
          price?: number
          socket?: string
          tdp?: string
          threads?: number
          updated_at?: string
        }
        Relationships: []
      }
      GPU: {
        Row: {
          id: number
          Nombre: string
          VRAM: string | null
        }
        Insert: {
          id?: number
          Nombre: string
          VRAM?: string | null
        }
        Update: {
          id?: number
          Nombre?: string
          VRAM?: string | null
        }
        Relationships: []
      }
      graphics_cards: {
        Row: {
          boost_clock: string
          brand: string
          core_clock: string
          created_at: string
          description: string | null
          id: string
          image: string | null
          memory: string
          name: string
          price: number
          tdp: string
          updated_at: string
        }
        Insert: {
          boost_clock: string
          brand: string
          core_clock: string
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          memory: string
          name: string
          price: number
          tdp: string
          updated_at?: string
        }
        Update: {
          boost_clock?: string
          brand?: string
          core_clock?: string
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          memory?: string
          name?: string
          price?: number
          tdp?: string
          updated_at?: string
        }
        Relationships: []
      }
      motherboards: {
        Row: {
          brand: string
          chipset: string
          created_at: string
          description: string | null
          form_factor: string
          id: string
          image: string | null
          max_memory: string
          memory_slots: number
          name: string
          price: number
          socket: string
          updated_at: string
        }
        Insert: {
          brand: string
          chipset: string
          created_at?: string
          description?: string | null
          form_factor: string
          id?: string
          image?: string | null
          max_memory: string
          memory_slots: number
          name: string
          price: number
          socket: string
          updated_at?: string
        }
        Update: {
          brand?: string
          chipset?: string
          created_at?: string
          description?: string | null
          form_factor?: string
          id?: string
          image?: string | null
          max_memory?: string
          memory_slots?: number
          name?: string
          price?: number
          socket?: string
          updated_at?: string
        }
        Relationships: []
      }
      power_supplies: {
        Row: {
          brand: string
          created_at: string
          description: string | null
          efficiency: string
          id: string
          image: string | null
          modular: string
          name: string
          price: number
          updated_at: string
          wattage: string
        }
        Insert: {
          brand: string
          created_at?: string
          description?: string | null
          efficiency: string
          id?: string
          image?: string | null
          modular: string
          name: string
          price: number
          updated_at?: string
          wattage: string
        }
        Update: {
          brand?: string
          created_at?: string
          description?: string | null
          efficiency?: string
          id?: string
          image?: string | null
          modular?: string
          name?: string
          price?: number
          updated_at?: string
          wattage?: string
        }
        Relationships: []
      }
      ram: {
        Row: {
          brand: string
          capacity: string
          cas_latency: string | null
          created_at: string
          description: string | null
          id: string
          image: string | null
          name: string
          price: number
          speed: string
          type: string
          updated_at: string
        }
        Insert: {
          brand: string
          capacity: string
          cas_latency?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name: string
          price: number
          speed: string
          type: string
          updated_at?: string
        }
        Update: {
          brand?: string
          capacity?: string
          cas_latency?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name?: string
          price?: number
          speed?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      storage: {
        Row: {
          brand: string
          cache_size: string | null
          capacity: string
          created_at: string
          description: string | null
          id: string
          image: string | null
          interface: string
          name: string
          price: number
          read_speed: string | null
          rpm: number | null
          type: string
          updated_at: string
          write_speed: string | null
        }
        Insert: {
          brand: string
          cache_size?: string | null
          capacity: string
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          interface: string
          name: string
          price: number
          read_speed?: string | null
          rpm?: number | null
          type: string
          updated_at?: string
          write_speed?: string | null
        }
        Update: {
          brand?: string
          cache_size?: string | null
          capacity?: string
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          interface?: string
          name?: string
          price?: number
          read_speed?: string | null
          rpm?: number | null
          type?: string
          updated_at?: string
          write_speed?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
