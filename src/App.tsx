import { useState } from 'react'
import { Tweet } from './components/Tweet'

import './App.css'
import { AppRoutes } from './Routes'
import { AuthProvider } from './context/AuthProvider'

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}

export default App
