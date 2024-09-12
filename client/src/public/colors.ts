export const green = {
  '50': '#e7f9f3',
  '100': '#c2f0e0',
  '200': '#8ee0c4',
  '300': '#4ac9a1',
  '400': '#2cb782',
  '500': '#1a9465',  // Verde principal
  '600': '#177e56',
  '700': '#136747',
  '800': '#10523a',
  '900': '#0d422f',
  '950': '#072822',
}; // Tono verde renovado

export const blue = {
  '50': '#f1f6ff',
  '100': '#e5ebff',
  '200': '#cedbff',
  '300': '#a7bbff',
  '400': '#768fff',
  '500': '#3f58ff',  // Azul vibrante principal
  '600': '#182aff',
  '700': '#071afa',
  '800': '#0515d2',
  '900': '#0613ac',
  '950': '#000c66',
}; // Azul original, sin cambios

export const pink = {
  '50': '#fff0f0',
  '100': '#ffe0e0',
  '200': '#ffbaba',
  '300': '#ff8e8e',
  '400': '#ff6d6d',
  '500': '#ff4b4b',  // Rojo principal
  '600': '#e63d3d',
  '700': '#cc2e2e',
  '800': '#b31f1f',
  '900': '#991616',
  '950': '#660d0d',
}; // Rojo renovado

const primary = {
  50: '#f4ffeb',
  100: '#e6f8d4',
  200: '#c8eaa3',
  300: '#a0d46d',
  400: '#7bb23a',
  500: '#5f931f',  // Tono verde más neutral para balancear
  600: '#4f7b17',
  700: '#3d6310',
  800: '#304f0c',
  900: '#283e09',
  950: '#162406',
}; // Paleta primaria renovada en verde

export const colors = {
  primary: primary,
  background: {
    DEFAULT: '#ffffff',
    dark: '#0d0d0d',  // Fondo oscuro neutral
  },
  text: {
    DEFAULT: '#2f2f2f',  // Texto en tono oscuro para mejor legibilidad
  },
  neutral: {
    100: '#f9f9f9',
    200: '#f1f1f1',
    300: '#e2e2e2',
    500: '#9e9e9e',
    700: '#5a5a5a',
    900: '#333333',
  },
} as const;
