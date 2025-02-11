'use client'
import { Suspense } from 'react'
import SignInPage from "components/signincomponent";
import { useSearchParams } from 'next/navigation'

export default function SignIn() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignInContent />
        </Suspense>
    )
}

function SignInContent() {
    const searchParams = useSearchParams()
    
    return (
        <div>
            <SignInPage />
        </div>
    )
}