"use client"

import { send } from "process"


export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Validar que formData existe
    if (!formData) {
      return {
        success: false,
        message: "Error: No se recibieron datos del formulario.",
      }
    }

    // Simular procesamiento del formulario
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const nombre = formData.get("nombre") as string
    const email = formData.get("email") as string
    const empresa = formData.get("empresa") as string
    const mensaje = formData.get("mensaje") as string

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

 
      // Por ejemplo, usando nodemailer:
      // const transporter = nodemailer.createTransport({ ... });
      // await transporter.sendMail({ to: email, subject: "Contacto", text: mensaje });

    const res = await fetch("/api/contacto", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        empresa: empresa,
        email: email,
        mensaje: mensaje,
      }),
    })

    const data = await res.json()

    if (data.ok) {
      return { success: true, message: "¡Gracias! Hemos recibido tu mensaje." }
    } else {
      return { success: false, message: data.error || "Error al enviar el mensaje." }
      }
    }
   catch (error) {
    console.error("Error en submitContactForm:", error)
    return {
      success: false,
      message: "Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.",
    }
  }
}
