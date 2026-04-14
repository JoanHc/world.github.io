import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oflwnmsynauffvwzpvcj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbHdubXN5bmF1ZmZ2d3pwdmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMjM2NzYsImV4cCI6MjA5MTY5OTY3Nn0.W0_iczBWEdwReJcURPwXkHCCqRHMu65M3GNH-FhOvQY";
export const supabase = createClient(supabaseUrl, supabaseKey);
