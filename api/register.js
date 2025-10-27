// Vercel Serverless Function para capturar leads
export default async function handler(req, res) {
  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Configurar CORS para permitir requests desde el dominio
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, password } = req.body;

    // Validar datos requeridos
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Nombre y email son requeridos' 
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Email inválido' 
      });
    }

    // Preparar datos del lead
    const leadData = {
      name,
      email,
      timestamp: new Date().toISOString(),
      source: 'landing-page-registration'
    };

    // TEMPORAL: Log en consola (luego integraremos con base de datos)
    console.log('Nuevo lead capturado:', leadData);

    // Enviar email de notificación al admin
    // NOTA: Implementar integración con Resend o SendGrid después
    const adminNotification = {
      to: 'admin@inmogenius.com', // Cambiar por email real
      subject: '🎉 Nuevo Lead Registrado - InmoGenius',
      html: `
        <h2>Nuevo registro en InmoGenius</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
        <p><strong>Fuente:</strong> Landing Page</p>
      `
    };

    // Enviar email de bienvenida al usuario
    const welcomeEmail = {
      to: email,
      subject: '¡Bienvenido a InmoGenius! 🏡',
      html: `
        <h2>¡Gracias por registrarte, ${name}!</h2>
        <p>Estamos emocionados de tenerte en nuestra comunidad.</p>
        <p>InmoGenius utilizará inteligencia artificial para ayudarte a analizar propiedades inmobiliarias y tomar mejores decisiones de inversión.</p>
        <h3>¿Qué sigue?</h3>
        <ul>
          <li>Te notificaremos cuando la plataforma esté lista</li>
          <li>Recibirás acceso prioritario como usuario early bird</li>
          <li>Tendrás descuentos especiales por ser parte de los primeros</li>
        </ul>
        <p>¡Mantente atento a tu bandeja de entrada!</p>
        <p>Saludos,<br/>El equipo de InmoGenius</p>
      `
    };

    // AQUÍ se integrarán servicios de email (Resend, SendGrid, etc.)
    // Por ahora retornamos éxito

    // Responder con éxito
    return res.status(200).json({ 
      success: true,
      message: '¡Gracias por registrarte! Te notificaremos cuando la plataforma esté lista.',
      leadId: `lead_${Date.now()}` // ID temporal
    });

  } catch (error) {
    console.error('Error al procesar registro:', error);
    return res.status(500).json({ 
      error: 'Error al procesar tu registro. Por favor intenta de nuevo.' 
    });
  }
}
