import {createClient} from '@supabase/supabase-js'

const URL = 'https://jseplhrvhrbxgfjpfccn.supabase.co'
const API_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZXBsaHJ2aHJieGdmanBmY2NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNzczNjAsImV4cCI6MTk5Nzk1MzM2MH0.sXhCmdtzjvcWSwC3HRENsmRsj5H5ZPNrnr34Xm4ca4Q`
export const supabase = createClient(URL, API_KEY)
