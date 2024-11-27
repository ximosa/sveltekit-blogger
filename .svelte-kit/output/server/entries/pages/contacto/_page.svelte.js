import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".page-container.svelte-2goe8e.svelte-2goe8e{max-width:1200px;margin:2rem auto;padding:0 1rem}.content-wrapper.svelte-2goe8e.svelte-2goe8e{display:grid;grid-template-columns:1fr 300px;gap:2rem;align-items:start}.contact-container.svelte-2goe8e.svelte-2goe8e{background:white;padding:2rem;border-radius:10px;box-shadow:0 0 20px rgba(0, 0, 0, 0.1)}.cta-section.svelte-2goe8e.svelte-2goe8e{position:sticky;top:2rem}.cta-card.svelte-2goe8e.svelte-2goe8e{background:#f8f9fa;padding:2rem;border-radius:10px;text-align:center;border:1px solid #e9ecef;transition:transform 0.3s ease}.cta-card.svelte-2goe8e.svelte-2goe8e:hover{transform:translateY(-5px)}.cta-card.svelte-2goe8e h2.svelte-2goe8e{color:#2c3e50;font-size:1.5rem;margin-bottom:1rem}.cta-card.svelte-2goe8e p.svelte-2goe8e{color:#6c757d;margin-bottom:1.5rem}.social-link.svelte-2goe8e.svelte-2goe8e{display:flex;align-items:center;gap:1rem;padding:1rem;background:#f8f9fa;border-radius:4px;color:#333;text-decoration:none;transition:all 0.3s ease}.social-link.svelte-2goe8e.svelte-2goe8e:hover{background:#333;color:white;transform:translateX(10px)}.contact-form.svelte-2goe8e.svelte-2goe8e{display:flex;flex-direction:column;gap:1.5rem}.form-group.svelte-2goe8e.svelte-2goe8e{display:flex;flex-direction:column;gap:0.5rem}label.svelte-2goe8e.svelte-2goe8e{font-weight:500;color:#555}input.svelte-2goe8e.svelte-2goe8e,textarea.svelte-2goe8e.svelte-2goe8e{padding:0.8rem;border:1px solid #ddd;border-radius:5px;font-size:1rem;transition:border-color 0.3s}input.svelte-2goe8e.svelte-2goe8e:focus,textarea.svelte-2goe8e.svelte-2goe8e:focus{outline:none;border-color:#4CAF50}button.svelte-2goe8e.svelte-2goe8e{background-color:#021403;color:white;padding:1rem;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color 0.3s}button.svelte-2goe8e.svelte-2goe8e:hover{background-color:#162017}@media(max-width: 768px){.content-wrapper.svelte-2goe8e.svelte-2goe8e{grid-template-columns:1fr}.cta-section.svelte-2goe8e.svelte-2goe8e{position:static}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  let formData = {\\r\\n    name: '',\\r\\n    email: '',\\r\\n    message: ''\\r\\n  };\\r\\n  \\r\\n  async function handleSubmit() {\\r\\n    const response = await fetch('/api/contact', {\\r\\n      method: 'POST',\\r\\n      body: JSON.stringify(formData),\\r\\n      headers: {\\r\\n        'Content-Type': 'application/json'\\r\\n      }\\r\\n    });\\r\\n    \\r\\n    if (response.ok) {\\r\\n      formData = { name: '', email: '', message: '' };\\r\\n      alert('¡Mensaje enviado con éxito!');\\r\\n    }\\r\\n  }\\r\\n  <\/script>\\r\\n  \\r\\n  <div class=\\"page-container\\">\\r\\n    <div class=\\"contact-container\\">\\r\\n      <h1>Contáctanos</h1>\\r\\n      \\r\\n      <div class=\\"content-wrapper\\">\\r\\n        <form on:submit|preventDefault={handleSubmit} class=\\"contact-form\\">\\r\\n          <div class=\\"form-group\\">\\r\\n            <label for=\\"name\\">Nombre</label>\\r\\n            <input\\r\\n              type=\\"text\\"\\r\\n              id=\\"name\\"\\r\\n              bind:value={formData.name}\\r\\n              required\\r\\n            />\\r\\n          </div>\\r\\n  \\r\\n          <div class=\\"form-group\\">\\r\\n            <label for=\\"email\\">Email</label>\\r\\n            <input\\r\\n              type=\\"email\\"\\r\\n              id=\\"email\\"\\r\\n              bind:value={formData.email}\\r\\n              required\\r\\n            />\\r\\n          </div>\\r\\n  \\r\\n          <div class=\\"form-group\\">\\r\\n            <label for=\\"message\\">Mensaje</label>\\r\\n            <textarea\\r\\n              id=\\"message\\"\\r\\n              bind:value={formData.message}\\r\\n              rows=\\"5\\"\\r\\n              required\\r\\n            ></textarea>\\r\\n          </div>\\r\\n  \\r\\n          <button type=\\"submit\\">Enviar mensaje</button>\\r\\n        </form>\\r\\n  \\r\\n        <div class=\\"cta-section\\">\\r\\n          <div class=\\"cta-card\\">\\r\\n            <h2>¿Necesitas más opciones?</h2>\\r\\n            <p>Otras formas de ponerte en contacto con nosotros</p>\\r\\n            <a href=\\"https://wa.me/667590554\\" target=\\"_blank\\" class=\\"social-link\\">\\r\\n              <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\r\\n                <path d=\\"M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z\\"/>\\r\\n              </svg>\\r\\n              WhatsApp\\r\\n            </a>\\r\\n            \\r\\n            <a href=\\"https://t.me/ximosaez\\" target=\\"_blank\\" class=\\"social-link\\">\\r\\n              <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\r\\n                <path d=\\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z\\"/>\\r\\n              </svg>\\r\\n              Telegram\\r\\n            </a>\\r\\n            \\r\\n            <a href=\\"https://github.com/ximosa/\\" target=\\"_blank\\" class=\\"social-link\\">\\r\\n              <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\r\\n                <path d=\\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\\"/>\\r\\n              </svg>\\r\\n              Github\\r\\n            </a>\\r\\n            \\r\\n            <a href=\\"mailto:ximosa@gmail.com\\" class=\\"social-link\\">\\r\\n              <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"currentColor\\">\\r\\n                <path d=\\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 15.707l-1.414 1.414-5.293-5.293 1.414-1.414 4.586 4.586 8.293-8.293 1.414 1.414-9 9z\\"/>\\r\\n              </svg>\\r\\n              Email directo\\r\\n            </a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n  \\r\\n  <style>\\r\\n .page-container {\\r\\n    max-width: 1200px;\\r\\n    margin: 2rem auto;\\r\\n    padding: 0 1rem;\\r\\n  }\\r\\n\\r\\n  .content-wrapper {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 300px;\\r\\n    gap: 2rem;\\r\\n    align-items: start;\\r\\n  }\\r\\n\\r\\n  .contact-container {\\r\\n    background: white;\\r\\n    padding: 2rem;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\r\\n  }\\r\\n\\r\\n  .cta-section {\\r\\n    position: sticky;\\r\\n    top: 2rem;\\r\\n  }\\r\\n\\r\\n  .cta-card {\\r\\n    background: #f8f9fa;\\r\\n    padding: 2rem;\\r\\n    border-radius: 10px;\\r\\n    text-align: center;\\r\\n    border: 1px solid #e9ecef;\\r\\n    transition: transform 0.3s ease;\\r\\n  }\\r\\n\\r\\n  .cta-card:hover {\\r\\n    transform: translateY(-5px);\\r\\n  }\\r\\n\\r\\n  .cta-card h2 {\\r\\n    color: #2c3e50;\\r\\n    font-size: 1.5rem;\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  .cta-card p {\\r\\n    color: #6c757d;\\r\\n    margin-bottom: 1.5rem;\\r\\n  }\\r\\n\\r\\n  .social-link {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      gap: 1rem;\\r\\n      padding: 1rem;\\r\\n      background: #f8f9fa;\\r\\n      border-radius: 4px;\\r\\n      color: #333;\\r\\n      text-decoration: none;\\r\\n      transition: all 0.3s ease;\\r\\n    }\\r\\n  \\r\\n    .social-link:hover {\\r\\n      background: #333;\\r\\n      color: white;\\r\\n      transform: translateX(10px);\\r\\n    }\\r\\n  \\r\\n  \\r\\n   /* Agregar estos estilos al bloque style existente */\\r\\n  .alternate-contact {\\r\\n    margin-top: 2rem;\\r\\n    text-align: center;\\r\\n    padding-top: 1rem;\\r\\n    border-top: 1px solid #eee;\\r\\n  }\\r\\n\\r\\n  .contact-link {\\r\\n    display: inline-block;\\r\\n    color: #4CAF50;\\r\\n    text-decoration: none;\\r\\n    margin-top: 0.5rem;\\r\\n    font-weight: 500;\\r\\n    transition: color 0.3s;\\r\\n  }\\r\\n\\r\\n  .contact-link:hover {\\r\\n    color: #45a049;\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n  \\r\\n    .contact-form {\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      gap: 1.5rem;\\r\\n    }\\r\\n  \\r\\n    .form-group {\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      gap: 0.5rem;\\r\\n    }\\r\\n  \\r\\n    label {\\r\\n      font-weight: 500;\\r\\n      color: #555;\\r\\n    }\\r\\n  \\r\\n    input, textarea {\\r\\n      padding: 0.8rem;\\r\\n      border: 1px solid #ddd;\\r\\n      border-radius: 5px;\\r\\n      font-size: 1rem;\\r\\n      transition: border-color 0.3s;\\r\\n    }\\r\\n  \\r\\n    input:focus, textarea:focus {\\r\\n      outline: none;\\r\\n      border-color: #4CAF50;\\r\\n    }\\r\\n  \\r\\n    button {\\r\\n      background-color: #021403;\\r\\n      color: white;\\r\\n      padding: 1rem;\\r\\n      border: none;\\r\\n      border-radius: 5px;\\r\\n      font-size: 1rem;\\r\\n      cursor: pointer;\\r\\n      transition: background-color 0.3s;\\r\\n    }\\r\\n  \\r\\n    button:hover {\\r\\n      background-color: #162017;\\r\\n    }\\r\\n    @media (max-width: 768px) {\\r\\n    .content-wrapper {\\r\\n      grid-template-columns: 1fr;\\r\\n    }\\r\\n    \\r\\n    .cta-section {\\r\\n      position: static;\\r\\n    }\\r\\n  }\\r\\n  </style>\\r\\n  "],"names":[],"mappings":"AAoGC,2CAAgB,CACb,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,OAAO,CAAE,CAAC,CAAC,IACb,CAEA,4CAAiB,CACf,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,KAAK,CAChC,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,KACf,CAEA,8CAAmB,CACjB,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACxC,CAEA,wCAAa,CACX,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,IACP,CAEA,qCAAU,CACR,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAC7B,CAEA,qCAAS,MAAO,CACd,SAAS,CAAE,WAAW,IAAI,CAC5B,CAEA,uBAAS,CAAC,gBAAG,CACX,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACjB,CAEA,uBAAS,CAAC,eAAE,CACV,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,MACjB,CAEA,wCAAa,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACvB,CAEA,wCAAY,MAAO,CACjB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,WAAW,IAAI,CAC5B,CAyBA,yCAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MACP,CAEA,uCAAY,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MACP,CAEA,iCAAM,CACJ,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IACT,CAEA,iCAAK,CAAE,oCAAS,CACd,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,YAAY,CAAC,IAC3B,CAEA,iCAAK,MAAM,CAAE,oCAAQ,MAAO,CAC1B,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,OAChB,CAEA,kCAAO,CACL,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAC/B,CAEA,kCAAM,MAAO,CACX,gBAAgB,CAAE,OACpB,CACA,MAAO,YAAY,KAAK,CAAE,CAC1B,4CAAiB,CACf,qBAAqB,CAAE,GACzB,CAEA,wCAAa,CACX,QAAQ,CAAE,MACZ,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formData = { name: "", email: "", message: "" };
  $$result.css.add(css);
  return `<div class="page-container svelte-2goe8e"><div class="contact-container svelte-2goe8e"><h1 data-svelte-h="svelte-160zoqh">Contáctanos</h1> <div class="content-wrapper svelte-2goe8e"><form class="contact-form svelte-2goe8e"><div class="form-group svelte-2goe8e"><label for="name" class="svelte-2goe8e" data-svelte-h="svelte-zbkkig">Nombre</label> <input type="text" id="name" required class="svelte-2goe8e"${add_attribute("value", formData.name)}></div> <div class="form-group svelte-2goe8e"><label for="email" class="svelte-2goe8e" data-svelte-h="svelte-1p9d3fm">Email</label> <input type="email" id="email" required class="svelte-2goe8e"${add_attribute("value", formData.email)}></div> <div class="form-group svelte-2goe8e"><label for="message" class="svelte-2goe8e" data-svelte-h="svelte-184g7ky">Mensaje</label> <textarea id="message" rows="5" required class="svelte-2goe8e">${escape("")}</textarea></div> <button type="submit" class="svelte-2goe8e" data-svelte-h="svelte-palmxj">Enviar mensaje</button></form> <div class="cta-section svelte-2goe8e" data-svelte-h="svelte-1tjks23"><div class="cta-card svelte-2goe8e"><h2 class="svelte-2goe8e">¿Necesitas más opciones?</h2> <p class="svelte-2goe8e">Otras formas de ponerte en contacto con nosotros</p> <a href="https://wa.me/667590554" target="_blank" class="social-link svelte-2goe8e"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"></path></svg>
              WhatsApp</a> <a href="https://t.me/ximosaez" target="_blank" class="social-link svelte-2goe8e"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path></svg>
              Telegram</a> <a href="https://github.com/ximosa/" target="_blank" class="social-link svelte-2goe8e"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              Github</a> <a href="mailto:ximosa@gmail.com" class="social-link svelte-2goe8e"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 15.707l-1.414 1.414-5.293-5.293 1.414-1.414 4.586 4.586 8.293-8.293 1.414 1.414-9 9z"></path></svg>
              Email directo</a></div></div></div></div> </div>`;
});
export {
  Page as default
};