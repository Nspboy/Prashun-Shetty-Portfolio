import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

export async function setupVite(app: Express) {
  if (!isProduction) {
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: {
        middlewareMode: true,
        hmr: {
          protocol: "ws",
          host: "localhost",
          port: 5173,
        },
      },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      try {
        let template = fs.readFileSync(
          path.resolve(__dirname, "..", "client", "index.html"),
          "utf-8",
        );
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.resolve(__dirname, "..", "dist", "public")));

    app.use("*", (req, res) => {
      res.sendFile(
        path.resolve(__dirname, "..", "dist", "public", "index.html"),
      );
    });
  }
}
