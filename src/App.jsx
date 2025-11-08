import { DeviceProvider } from './components/DeviceProvider.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import './App.css'

export default function App() {
  return (
    <DeviceProvider>
      <div className="app-root">
        <Navbar />
        <main role="main" id="content">
          <Home />
        </main>
        <Footer />
      </div>
    </DeviceProvider>
  )
}

