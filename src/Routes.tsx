import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'

import { Cart } from './pages/Cart'
import { Catalogo } from './pages/Catalogo'
import { Login } from './pages/Login'

export function AppRoutes() {
    return (
        <ProtectedLayout>
            <Router>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Catalogo" element={<Catalogo />} />
                </Routes>
            </Router>
        </ProtectedLayout>
    )
}
