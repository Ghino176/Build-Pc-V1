// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kltaajpkpoqcvvvcfcct.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdGFhanBrcG9xY3Z2dmNmY2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1ODAwODgsImV4cCI6MjA2NDE1NjA4OH0.RaRLv3BT12UduOG-KqiY7LadwvAhu1n4SFsJmmY4gUw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);