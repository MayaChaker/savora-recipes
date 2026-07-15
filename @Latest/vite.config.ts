import { defineConfig, loadEnv, type ProxyOptions } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const apiKey = env.SPOONACULAR_API_KEY;

  const spoonacularProxy: ProxyOptions = {
    target: "https://api.spoonacular.com",
    changeOrigin: true,
    secure: true,
    rewrite: (path) => {
      const upstreamPath = path.replace(/^\/api\/spoonacular/, "");
      const separator = upstreamPath.includes("?") ? "&" : "?";
      return `${upstreamPath}${separator}apiKey=${encodeURIComponent(apiKey ?? "")}`;
    },
  };

  return {
    plugins: [react()],
    server: { proxy: { "/api/spoonacular": spoonacularProxy } },
    preview: { proxy: { "/api/spoonacular": spoonacularProxy } },
  };
});
