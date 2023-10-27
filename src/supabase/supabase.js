import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrY2Jhd2t0dGRsZGhub21pbGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzOTc4MzIsImV4cCI6MjAxMzk3MzgzMn0.3fN-7o1iNh7vFtaptqPNa6cUOH-lxZXPNEI9A9vXj0c'
const supabaseUrl = 'https://vkcbawkttdldhnomilir.supabase.co'

const supabase = createClient(supabaseUrl, SUPABASE_KEY)

export default supabase
