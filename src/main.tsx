import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global.ts'
import theme  from './Styles/theme.ts'
import {App} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
        <App />
    </ThemeProvider>
  </StrictMode>,
)
