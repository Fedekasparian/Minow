import { supabase } from "@/lib/dataBase";  
import { NextResponse } from "next/server";

export async function GET() {
  const { data: clientes, error } = await supabase
    .from('cliente-minow')
    .select('*');
  
  if (error) {
   return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(clientes, { status: 200 });
}

