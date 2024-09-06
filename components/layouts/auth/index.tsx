'use client'

import { useState } from "react"
import Signup from "./Signup"
import Signin from "./SignIn"

export default function AuthPage() {
    const [view, setView] = useState('SIGNUP')

    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-light-blue-50">
            {view === 'SIGNUP' ? <Signup setView={setView} /> : <Signin setView={setView}/>}
        </main>
    )
}