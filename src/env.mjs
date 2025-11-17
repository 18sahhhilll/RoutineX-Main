// src/env.ts
import { z } from "zod";

// Step 1: Define the schema
const envSchema = z.object({
  VITE_OPENROUTER_API_KEY: z.string().min(1),
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_ANON_KEY: z.string().min(1),
  VITE_APP_URL: z.string().url(), // Optional if you use it
});

// Step 2: Parse and validate the env vars
const env = envSchema.parse(import.meta.env);

export default env;
