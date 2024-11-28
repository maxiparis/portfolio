import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeSetter} from "./components/ThemeSetter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeSetter>
        <App />
      </ThemeSetter>
  </StrictMode>,
)
