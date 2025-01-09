export default defineNuxtConfig({
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "Josue Zazueta - Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Josue Zazueta Portfolio Website" },
      ],
    },
    baseURL: "/webdevjosue.github.io/",
  },
});
