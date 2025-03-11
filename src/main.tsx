import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeSetter} from "./components/ThemeSetter.js";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeSetter>
        <App/>
      </ThemeSetter>
  </StrictMode>,
)
