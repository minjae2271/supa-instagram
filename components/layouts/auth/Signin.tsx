'use client'

import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

export default function Signin({ setView }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="flex flex-col gap-4">
            <div className="pt-10 pb-6 px-10 w-full flex flex-col items-center justify-center gap-2 max-w-lg border border-gray-400 bg-white">
                <img src={'images/insta.png'} alt="logo" className="w-60 mb-6"/>
                <Input value={email} onChange={(e) => setEmail(e.target.value)}
                    label="email"
                    type="email"
                    className="w-full rounded-sm"
                />
                                <Input value={password} onChange={(e) => setPassword(e.target.value)}
                    label="password"
                    type="password"
                    className="w-full rounded-sm"
                />
                <Button
                onClick={() => {
                    console.log('signin')
                }}
                color="light-blue"
                className="w-full text-md py-1"
                >
                    로그인하기
                </Button>
            </div>

            <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white">
                이미 계정이 없으신가요? <button className="text-light-blue-600 font-bold" onClick={() => setView("SIGNOUT")}>
                    가입하기
                </button>
            </div>
        </div>
    )
}