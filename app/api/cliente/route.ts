import { supabase } from "@/lib/dataBase";  
import { NextResponse } from "next/server";

// funcion que me devuelve los clientes
export async function GET() {
  const { data: clientes, error } = await supabase
    .from('cliente-minow')
    .select('*');
  
    //si sale error devuelve el mensaje error
  if (error) {
   return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Si no hay clientes, retornar un mensaje adecuado
  return NextResponse.json(clientes, { status: 200 });
}



