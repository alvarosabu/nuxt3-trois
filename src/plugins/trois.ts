import { TroisJSVuePlugin } from 'troisjs'
import { defineNuxtPlugin, NuxtApp } from '#app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.use(TroisJSVuePlugin)
})
