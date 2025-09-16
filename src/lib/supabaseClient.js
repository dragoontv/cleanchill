import { createClient } from "@supabase/supabase-js"


export const getSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if(!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Missing Supabase credentials");
    }
    return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = getSupabaseClient();