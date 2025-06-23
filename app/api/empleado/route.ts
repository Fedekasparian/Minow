import { supabase } from "@/lib/dataBase";  
import { NextResponse } from "next/server";

export async function GET() {
  const { data: empleados, error } = await supabase
    .from('empleados')
    .select('*');
  
   if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(empleados, { status: 200 });
}