<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  async function handleSubmit() {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      formData = { name: '', email: '', message: '' };
      alert('¡Mensaje enviado con éxito!');
    }
  }
  </script>
  
  <div class="page-container">
    <div class="contact-container">
      <h1>Contáctanos</h1>
      
      <div class="content-wrapper">
        <form on:submit|preventDefault={handleSubmit} class="contact-form">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
            />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
            />
          </div>
  
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              bind:value={formData.message}
              rows="5"
              required
            ></textarea>
          </div>
  
          <button type="submit">Enviar mensaje</button>
        </form>
  
        <div class="cta-section">
          <div class="cta-card">
            <h2>¿Necesitas más opciones?</h2>
            <p>Otras formas de ponerte en contacto con nosotros</p>
            <a href="https://wa.me/667590554" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              WhatsApp
            </a>
            
            <a href="https://t.me/ximosaez" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </a>
            
            <a href="https://github.com/ximosa/" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Github
            </a>
            
            <a href="mailto:ximosa@gmail.com" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 15.707l-1.414 1.414-5.293-5.293 1.414-1.414 4.586 4.586 8.293-8.293 1.414 1.414-9 9z"/>
              </svg>
              Email directo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
 .page-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
    align-items: start;
  }

  .contact-container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .cta-section {
    position: sticky;
    top: 2rem;
  }

  .cta-card {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    border: 1px solid #e9ecef;
    transition: transform 0.3s ease;
  }

  .cta-card:hover {
    transform: translateY(-5px);
  }

  .cta-card h2 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .cta-card p {
    color: #6c757d;
    margin-bottom: 1.5rem;
  }

  .social-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 4px;
      color: #333;
      text-decoration: none;
      transition: all 0.3s ease;
    }
  
    .social-link:hover {
      background: #333;
      color: white;
      transform: translateX(10px);
    }
  
  
   /* Agregar estos estilos al bloque style existente */
  .alternate-contact {
    margin-top: 2rem;
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  .contact-link {
    display: inline-block;
    color: #4CAF50;
    text-decoration: none;
    margin-top: 0.5rem;
    font-weight: 500;
    transition: color 0.3s;
  }

  .contact-link:hover {
    color: #45a049;
    text-decoration: underline;
  }
  
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  
    label {
      font-weight: 500;
      color: #555;
    }
  
    input, textarea {
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }
  
    input:focus, textarea:focus {
      outline: none;
      border-color: #4CAF50;
    }
  
    button {
      background-color: #021403;
      color: white;
      padding: 1rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #162017;
    }
    @media (max-width: 768px) {
    .content-wrapper {
      grid-template-columns: 1fr;
    }
    
    .cta-section {
      position: static;
    }
  }
  </style>
  