import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , useLocation} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ScrollToTop />
    <App />
  </BrowserRouter>
)
