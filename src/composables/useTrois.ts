import { useNuxtApp } from '#app'

export const useTrois = () => {
  const nuxtApp = useNuxtApp()
  const trois = nuxtApp.$trois

  return trois
}
