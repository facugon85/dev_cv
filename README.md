# Portfolio - CV de Facundo Gonzalez

Este es el código fuente de mi portfolio profesional y CV online, desarrollado con **React**, **Vite** y **TailwindCSS**.

## 🚀 Demo en vivo
[https://facugon85.github.io/dev_cv/](https://facugon85.github.io/dev_cv/)

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🛠️ Scripts útiles

- `npm run dev` — Inicia el entorno de desarrollo local.
- `npm run build` — Genera el build de producción en la carpeta `dist`.
- `npm run preview` — Previsualiza el build localmente.

## 🌐 Deploy en GitHub Pages

1. Asegúrate de que el archivo `vite.config.ts` tenga:
   ```js
   export default defineConfig({
     base: '/dev_cv/',
     // ...
   })
   ```
2. Haz el build:
   ```bash
   npm run build
   ```
3. Copia la carpeta `img` a `dist/img` si tienes imágenes personalizadas:
   ```bash
   cp -r public/img dist/
   ```
4. Sube el contenido de `dist` a la rama/carpeta configurada en GitHub Pages.

## 📁 Estructura principal

- `src/` — Código fuente de la app (componentes, estilos, etc.)
- `public/img/` — Imágenes usadas en el portfolio
- `dist/` — Build listo para deploy

## ✨ Tecnologías usadas
- React
- Vite
- TailwindCSS
- Framer Motion

---

**Desarrollado por [Facundo Gonzalez](https://github.com/facugon85)**
