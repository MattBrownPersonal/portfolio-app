// src/plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#6200ea',
        secondary: '#03dac6',
        accent: '#03a9f4',
        error: '#f44336',
        warning: '#ff9800',
        info: '#00bcd4',
        success: '#4caf50'
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify
