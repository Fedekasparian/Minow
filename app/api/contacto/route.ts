import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/dataBase';

export async function POST(req: Request) {
  try {
    const { nombre, empresa, email, mensaje } = await req.json();
    const fecha = new Date().toISOString();

    // Guardar en la base de datos
    const { error } = await supabase
      .from('formCliente')
      .insert([{ fecha, nombre, empresa, email, mensaje }]);

    // Configuramos el transportador con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviamos el mail
    await transporter.sendMail({
      to: 'federicokunlu@gmail.com',
      subject: 'Contacto desde formulario',
      text: `
Nuevo mensaje de contacto recibido

- Nombre: ${nombre}
- Email: ${email}
- Empresa: ${empresa || 'No especificada'}
- Mensaje: ${mensaje}
- Base de datos: ${error ? 'No se pudo guardar en la base de datos' : 'Guardado correctamente en la base de datos'}
`,
      replyTo: email,
    });

    // Si hubo error en la base, pero el mail se envió, avisar igual éxito pero con detalle
    if (error) {
      return NextResponse.json({
        ok: true,
        message: 'El mensaje fue enviado correctamente, pero no se pudo guardar en la base de datos.',
        dbError: error.message,
      });
    }

    // Todo OK
    return NextResponse.json({ ok: true, message: 'Correo enviado correctamente' });

  } catch (err: any) {
    // Si falla cualquier cosa (por ejemplo, el mail)
    return NextResponse.json({
      ok: false,
      message: 'Ocurrió un error al enviar el mensaje.',
      error: err.message,
    }, { status: 500 });
  }
}
