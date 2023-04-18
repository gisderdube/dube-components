export type Theme = {
  rootSize: string
  breakpoints: { md: string }
  colors: {
    light: string
    dark: string
    primary: string
    secondary: string
  }
  borderRadius: string
  fonts: {
    heading: string
    body: string
  }
}

export const defaultTheme = {
  rootSize: '16px',
  breakpoints: { md: '950px' },
  colors: {
    light: '#fff',
    dark: '#333',
    primary: 'rgba(249, 100, 176, 1)',
    secondary: 'rgba(145, 112, 244, 1)',
  },
  borderRadius: '0.3rem',
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  },
}
