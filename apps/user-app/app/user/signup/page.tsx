'use client'
import { Suspense } from 'react'
import Input from "@repo/ui/input";
import { useSearchParams } from 'next/navigation'

import Signupcomponent from "components/signup";

export default function SignUp() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignUpContent />
        </Suspense>
    )
}

function SignUpContent() {
    const searchParams = useSearchParams()

    return (
        <div>
            <Signupcomponent />
        </div>
    )
}