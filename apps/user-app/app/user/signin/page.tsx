import SignInPage from "components/signincomponent";
import { Suspense } from "react";

 export default function Signin(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <SignInPage/>
        </Suspense>
    )
 }