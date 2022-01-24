import defu from 'defu'
import { resolve } from 'pathe'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import { TroisOptions } from './types'

export default defineNuxtModule<TroisOptions>({
  name: '@alvarosabu/nuxt3-trois',
  configKey: 'nuxt3-trois',
  setup (options: TroisOptions, nuxt: Nuxt) {
    nuxt.options.publicRuntimeConfig.trois = defu(nuxt.options.publicRuntimeConfig.trois, {
      debug: options.debug
    })
    addPlugin(resolve(__dirname, './plugins/trois'))

    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(__dirname, './composables'))
    })
  }
})

export * from './types'

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      trois?: TroisOptions
    }
  }
  interface NuxtConfig {
    trois?: TroisOptions
  }
  interface NuxtOptions {
    trois?: TroisOptions
  }
}
