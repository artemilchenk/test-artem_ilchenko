import { useAuth } from "@/providers/auth-provider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "@/modules/auth/components";

export default function SignUpPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  return (
    <div>
      <h1>Sign Up</h1>
      <RegisterForm />
    </div>
  );
}
