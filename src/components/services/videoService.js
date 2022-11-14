import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = "https://fowpitxrkxxuzpekygjt.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvd3BpdHhya3h4dXpwZWt5Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDY4MDYsImV4cCI6MTk4Mzc4MjgwNn0.I_B7kIKBh1bgGJinfvYiDvi1KwdaNUIDRCzYURmvyw4"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}