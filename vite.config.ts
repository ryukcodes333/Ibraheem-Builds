import { defineConfig } from "vite";
import path from "path";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  root: path.resolve(import.meta.dirname),
  publicDir: path.resolve(import.meta.dirname, "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:               path.resolve(import.meta.dirname, "index.html"),
        about:              path.resolve(import.meta.dirname, "about.html"),
        projects:           path.resolve(import.meta.dirname, "projects.html"),
        blog:               path.resolve(import.meta.dirname, "blog.html"),
        contact:            path.resolve(import.meta.dirname, "contact.html"),
        "project-shadow-garden": path.resolve(import.meta.dirname, "project-shadow-garden.html"),
        "project-nexora":   path.resolve(import.meta.dirname, "project-nexora.html"),
        "project-nextv":    path.resolve(import.meta.dirname, "project-nextv.html"),
        "project-iset":     path.resolve(import.meta.dirname, "project-iset.html"),
        "project-nexanime": path.resolve(import.meta.dirname, "project-nexanime.html"),
        "project-nexcodes": path.resolve(import.meta.dirname, "project-nexcodes.html"),
        "blog-whatsapp-bot":     path.resolve(import.meta.dirname, "blog-whatsapp-bot.html"),
        "blog-nodejs":           path.resolve(import.meta.dirname, "blog-nodejs.html"),
        "blog-claude-api":       path.resolve(import.meta.dirname, "blog-claude-api.html"),
        "blog-build-in-public":  path.resolve(import.meta.dirname, "blog-build-in-public.html"),
        "blog-nextv":            path.resolve(import.meta.dirname, "blog-nextv.html"),
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
