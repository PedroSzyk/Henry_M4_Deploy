'use client'

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/contexts/UserContext";
import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/validate";
import { ILoginErrors, ILoginProps, IUser } from "@/interfaces/Types";

const LoginComponent = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const [dataUser, setDataUser] = useState<ILoginProps>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginErrors>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataUser((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({ email: "", password: "" });

    const validationErrors = validateLoginForm(dataUser);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      const res: IUser = await login(dataUser);

      if (res.login && res.user) {
        setUser(res);
        router.push("/");
      } else {
        setErrors({
          email: "",
          password: "Login failed. Please check your credentials.",
        });
      }
    } catch (error) {
      setErrors({
        email: "",
        password: "An unexpected error occurred. Please try again later.",
      });
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 max-w-sm mx-auto">
      <div>
        <label htmlFor="email" className="text-body mb-1 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={dataUser.email}
          onChange={handleChange}
          className="input-field"
          disabled={isLoading}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1 block">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="password" className="text-body mb-1 block">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={dataUser.password}
          onChange={handleChange}
          className="input-field"
          disabled={isLoading}
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1 block">
            {errors.password}
          </span>
        )}
      </div>

      <button type="submit" className="button-primary" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginComponent;