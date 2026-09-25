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

## Publicar en cPanel

1. `npm run build` y comprimir el **contenido** de `build/` en un `.zip` (incluye el `.htaccess`; en macOS, los archivos que empiezan con punto quedan ocultos en Finder, así que conviene comprimir desde la terminal: `cd build && zip -r ../build.zip . && cd ..`).
2. Entrar a cPanel → Administrador de archivos → `public_html/nicolasjorquera.com`.
3. Subir `build.zip` y extraerlo en esa carpeta.

Notas:

- Los archivos de `assets/` llevan un hash en el nombre, así que en cada deploy se acumulan los antiguos. No rompen nada, pero se pueden borrar los de `assets/` que no estén referenciados por el `index.html` nuevo (o vaciar la carpeta antes de extraer).
- El `.htaccess` (en `public/`, se copia al build) redirige cualquier ruta interna a `index.html` para que funcione recargar en, por ejemplo, `/projects/flixer`. Si falta en el servidor, esas recargas dan 404.
