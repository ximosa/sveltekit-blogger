import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { VITE_GMAIL_USER, VITE_GMAIL_PASS } from '$env/static/private';

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: VITE_GMAIL_USER,
      pass: VITE_GMAIL_PASS
    }
  });

  const mailOptions = {
    from: VITE_GMAIL_USER,
    to: VITE_GMAIL_USER,
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return json({ success: true, message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}
