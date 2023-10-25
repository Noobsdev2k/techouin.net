// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  watchers: {
    rewatchOnRawEvents: true,
  },
  alias: {
    "@": "/<rootDir>",
  },
  devServer: {
    port: 5000,
  },
  buildDir: "nuxt-build",
  app: {
    baseURL: "/admin",
  },
});
