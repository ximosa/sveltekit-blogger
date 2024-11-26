import nodemailer from 'nodemailer';
import { VITE_GMAIL_USER, VITE_GMAIL_PASS } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nombre = data.get('nombre');
    const email = data.get('email');
    const mensaje = data.get('mensaje');

    if (!nombre || !email || !mensaje) {
      return {
        success: false,
        message: 'Todos los campos son requeridos'
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: VITE_GMAIL_USER,
        pass: VITE_GMAIL_PASS
      }
    });

    try {
      await transporter.sendMail({
        from: VITE_GMAIL_USER,
        to: VITE_GMAIL_USER,
        subject: `Nuevo mensaje de contacto de ${nombre}`,
        text: `
          Nombre: ${nombre}
          Email: ${email}
          Mensaje: ${mensaje}
        `
      });

      return {
        success: true,
        message: 'Mensaje enviado correctamente'
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'Error al enviar el mensaje'
      };
    }
  }
};