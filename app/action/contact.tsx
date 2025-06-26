"use server"

import { Resend } from "resend"
import {supabase} from "@/lib/dataBase"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(_: any, formData: FormData) {
  try{
    // Validar que formData existe
    if (!formData) {
      return {
        success: false,
        message: "Error: No se recibieron datos del formulario.",
      }
    }

    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const empresa = formData.get("empresa") as string
    const mensaje = formData.get("mensaje") as string
    const fecha = new Date().toISOString()

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      }
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Por favor ingresa un email válido.",
      }
    }

    const { error } = await supabase
      .from("formCliente")
      .insert([{ fecha, nombre, empresa, mensaje, email }])

    if (error){
      console.error("Error al guardar en la base de datos:", error)
      return {
        success: false,
        message: "Ocurrió un error al guardar los datos. Por favor intenta más tarde.",
      }
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'federicokasparian@gmail.com',
      subject: `Nuevo mensaje de Contacto`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje}</p>
        <p></p>
        <p>${error? 'No se pudo guardar en la base de datos': 'Guardado correctamente en la base de datos'}</p>
      `,
    })
    return{
      success: true,
      message: "¡Gracias! Hemos recibido tu mensaje.",
      status: 200,
    } 
  }catch (error) {
    console.error("Error en submitContactForm:", error)
    return {
      success: false,
      message: "Ocurrió un error al enviar el mensaje. Por favor intenta mas tarde.",
      status: 500,
    }
  }
}
