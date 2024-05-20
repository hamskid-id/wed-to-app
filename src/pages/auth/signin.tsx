import { SigninForm } from "@/components/customui/auth/signin";
import { AuthLayout } from "@/components/customui/auth/layout";
export const SigninPage = () => {
  return (
    <AuthLayout
      route="/auth/signup"
      routeText="Dont have an account? Register here"
    >
      <SigninForm />
    </AuthLayout>
  );
};
