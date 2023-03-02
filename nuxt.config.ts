// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/style/main.postcss"],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },
  runtimeConfig: {
    notionApiKey: process.env.NOTION_API_KEY,
    public: {
      postsDbId: process.env.NOTION_POSTS_DB_ID
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxtjs/color-mode'
  ],
})
