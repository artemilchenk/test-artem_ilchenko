import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";
import { LoginForm } from "@/modules/auth/components";

export default function SignInPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  return (
    <div>
      <h1>Sign In</h1>
      <LoginForm />
    </div>
  );
}
