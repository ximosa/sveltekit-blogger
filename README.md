# Blog con SvelteKit y API de Blogger

## 🚀 Demo
[Ver demo en vivo](https://sveltekit-blogger-pphr.vercel.app/blog)

## ✨ Características

- 📝 Integración con API de Google Blogger
- 🔍 Búsqueda y filtrado por categorías
- 📱 Diseño responsive
- 🌓 Modo oscuro/claro
- 📧 Sistema de contacto por email
- 📄 Paginación dinámica

## 🛠️ Tecnologías

- SvelteKit
- Vite
- Node.js
- Nodemailer
- Google Blogger API

## 🚦 Inicio rápido

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repo.git

## 📦 Estructura del proyecto


src/
├── components/
│   ├── Header.svelte
│   └── Footer.svelte
├── routes/
│   ├── blog/
│   │   ├── +page.svelte
│   │   └── [slug]/
│   ├── contacto/
│   └── api/
└── app.html

## 🔧 Configuración

### Variables de entorno necesarias:

- `VITE_GMAIL_USER`: Email para el sistema de contacto
- `VITE_GMAIL_PASS`: Contraseña de aplicación de Gmail
- `VITE_API_KEY`: API Key de Google Blogger
- `VITE_BLOG_ID`: ID del blog en Blogger

## 📝 Uso

### Blog
- Vista de posts con imágenes y extractos
- Filtrado por categorías
- Paginación
- Vista detallada de cada post

### Contacto
- Formulario de contacto funcional
- Envío de emails automático
- Validación de campos

## 🚀 Despliegue

1. Instala las dependencias:
```bash
npm install
npm run dev
