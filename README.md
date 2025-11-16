# Bayona Digital Systems - Linktree

Página web tipo Linktree desarrollada con Next.js 14, con diseño moderno, minimalista y responsive.

## Características

- Diseño moderno y minimalista con gradientes
- Totalmente responsive (mobile-first)
- Animaciones suaves y efectos hover
- Botones estilizados con iconos
- Optimizado para SEO
- Desarrollado con Next.js 14 y TypeScript

## Instalación

1. Instalar dependencias:
```bash
npm install
```

## Uso

### Modo desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Compilar para producción
```bash
npm run build
```

### Iniciar en producción
```bash
npm start
```

## Personalización

### Agregar o editar enlaces

Edita el archivo `app/page.tsx` y modifica el array `links`:

```tsx
const links = [
  {
    title: 'Nombre del enlace',
    url: 'https://tu-url.com',
    icon: '🎯' // Emoji de tu elección
  },
  // ... más enlaces
]
```

### Cambiar colores

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent: #6366f1;
  /* ... más variables */
}
```

### Agregar foto de perfil real

1. Coloca tu imagen en la carpeta `public/` (ej: `public/profile.jpg`)
2. En `app/page.tsx`, reemplaza el div `.profile-image` con:

```tsx
<Image
  src="/profile.jpg"
  alt="Bayona Digital Systems"
  width={120}
  height={120}
  className="profile-image"
/>
```

## Deploy

### Vercel (Recomendado)

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Deploy automático

### Netlify

1. Sube el proyecto a GitHub
2. Conecta en [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## Estructura del proyecto

```
bds-1/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── public/              # Archivos estáticos
├── package.json         # Dependencias
└── next.config.js       # Configuración de Next.js
```

## Tecnologías

- Next.js 14
- React 18
- TypeScript
- CSS Modules

## Licencia

© 2024 Bayona Digital Systems
