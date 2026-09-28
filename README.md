# Portfolio

This is my portfolio where i will be uploading the projects that ive worked on.

Stack: React + TypeScript, Vite, Bootstrap/react-bootstrap, SCSS, react-router y EmailJS para el formulario de contacto.

## Requisitos

- Node.js `^20.19` o `>=22.12` (recomendado: 24, fijado en `.nvmrc`). Con nvm: `nvm use`.

## Desarrollo local

```bash
npm ci        # instala dependencias exactas del package-lock
npm run dev   # servidor de desarrollo en http://localhost:3000 (npm start hace lo mismo)
```

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Chequeo de tipos (`tsc`) + build de producción en `build/` |
| `npm run preview` | Sirve `build/` en http://localhost:5050 para probar el build |
| `npm test` | Tests con Vitest (modo watch; `npm test -- --run` para una sola pasada) |
| `npm run typecheck` | Solo chequeo de tipos |

## Publicar (Vercel)

El sitio se publica en [Vercel](https://vercel.com) conectado a este repositorio de GitHub:

- Cada push a `main` genera un deploy de producción automáticamente.
- Cada pull request genera una URL de preview.
- La configuración está en `vercel.json`: build con `npm run build`, salida en `build/` y reescritura de todas las rutas a `index.html` (necesaria para recargar en rutas internas como `/projects/flixer`).
- La versión de Node la toma del campo `engines` de `package.json`.

Configuración inicial (una sola vez): en Vercel, **Add New → Project**, importar el repo `portafolio` y desplegar; los valores de `vercel.json` se aplican solos. Para usar un dominio propio: **Project → Settings → Domains**.

### Alternativa: cPanel

1. `npm run build` y comprimir el **contenido** de `build/` desde la terminal (así se incluye el `.htaccess`, que Finder oculta): `cd build && zip -r ../build.zip . && cd ..`.
2. En cPanel → Administrador de archivos, subir `build.zip` a la carpeta del dominio y extraerlo.

El `.htaccess` (en `public/`) redirige las rutas internas a `index.html`; sin él, recargar en una ruta interna da 404.
