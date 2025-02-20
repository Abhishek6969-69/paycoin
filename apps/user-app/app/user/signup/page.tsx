


import Signupcomponent from "components/signup";
import { Suspense } from "react";
export default function Signup(){


    return(
        <Suspense fallback={<div>Loading...</div>}>
           <Signupcomponent />
        </Suspense>
    )
}