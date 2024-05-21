import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider";

type ProtectedRouteProps = PropsWithChildren;

export function AuthGuardRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/signin", { replace: true });
    }
  }, [navigate, user]);

  if (user) return children;

  return null;
}
