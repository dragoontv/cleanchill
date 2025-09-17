// lib/supabaseClient.js
"use client";

import { createClient } from "@supabase/supabase-js";

let supabase = null;

export const getSupabaseClient = () => {
  if (supabase) return supabase;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase credentials");
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
};
