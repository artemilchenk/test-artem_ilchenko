import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/providers/auth-provider";
import { Link } from "react-router-dom";

const schema = z.object({
  username: z
    .string()
    .min(1)
    .max(150)
    .refine(
      (value) => /^[\w.@+-]+$/.test(value ?? ""),
      "String should consist of one or more word characters (letters, digits, or underscores), dots, at signs, plus signs, or hyphens"
    ),
  password: z.string().min(1).max(128),
});

type FormFields = z.infer<typeof schema>;

export const LoginForm = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await login({
        username: data.username,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
      setError("root", {
        message: error.response.statusText,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("username")} type="text" placeholder="Username" />
          {errors.username && (
            <div style={{ color: "darkred" }}>{errors.username.message}</div>
          )}
        </div>

        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <div style={{ color: "darkred" }}>{errors.password.message}</div>
          )}
        </div>

        <div>
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
          {errors.root && (
            <div style={{ color: "darkred" }}>{errors.root.message}</div>
          )}
        </div>
      </form>
      <div>
        Have no account <Link to={"/signup"}>SignUp</Link>
      </div>
    </div>
  );
};
