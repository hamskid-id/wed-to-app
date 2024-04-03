import {SignupForm} from "@/components/customui/auth/register"
import { AuthLayout } from "@/components/customui/auth/layout"
export const SignupPage =()=>{
    return(
        <AuthLayout
            route="/auth/signin"
            routeText="Already have an account? Register here"
        >
            <SignupForm/>
        </AuthLayout>
    )
}