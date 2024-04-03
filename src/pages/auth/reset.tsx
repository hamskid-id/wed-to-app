import {ResetPasswordForm} from "@/components/customui/auth/resetpassword"
import { AuthLayout } from "@/components/customui/auth/layout"
export const ResetPage =()=>{
    return(
        <AuthLayout
            route="/auth/signup"
            routeText="Login"
        >
            <ResetPasswordForm/>
        </AuthLayout>
    )
}