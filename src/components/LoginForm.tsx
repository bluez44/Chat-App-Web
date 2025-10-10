import type { loginFormModel } from "../constant/model/login";
import { login } from "../lib/api/auth";
import { loginSchema } from "../validation/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data: loginFormModel) => {
    setServerError(null);
    try {
      await login(data);
    } catch (error) {
      console.log(error);
      setServerError("Username or password is incorrect!");
    }
  };

  const [serverError, setServerError] = useState<string | null>(null);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-4">
        <label
          htmlFor="userName"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Username
        </label>
        <input
          id="userName"
          type="text"
          {...register("userName")}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.userName
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.password
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
      </div>

      {serverError && <p className="text-red-500 text-center mb-4">{serverError}</p>}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
