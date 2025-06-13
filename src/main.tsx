import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/button';
// import './index.css'
// import App from './App.tsx'

// export { default as Button } from './components/button';
// export { default as Image } from './components/image';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button children='111' />
  </StrictMode>,
)


