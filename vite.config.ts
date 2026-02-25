import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  // SUSTITUYE 'nombre-de-tu-repo' por el nombre exacto de tu repositorio en GitHub
  // Si vas a usar un dominio propio o Vercel, puedes dejarlo como '/'
  base: '/RoadToMundial/',

  plugins: [
    vue(),
    tailwindcss(),

    Icons({
      autoInstall: true,
    }),

    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          enabledCollections: ['lucide'],
        }),
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Opcional: Esto ayuda a que el servidor de desarrollo sea accesible desde tu celular
  // en la misma red WiFi para probar la cámara físicamente
  server: {
    host: true,
  },
})
