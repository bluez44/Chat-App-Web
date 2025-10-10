import type { loginFormModel } from "../../constant/model/auth";
import { loginApi } from "../../lib/api/auth";
import { loginSchema } from "../../validation/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye } from "lucide-react";
import { createToastMessage } from "../../lib/utils/ToastMessage";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

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
      await loginApi(data);
      createToastMessage("Login successfully!", "success");
      setTimeout(() => navigate("/chats"), 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setServerError("Username or password is incorrect!");
        createToastMessage(
          `An error occurred: ${error.response?.data.message}`,
          "error"
        );
      }
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

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Password
        </label>
        <div className="relative">
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {showPassword ? (
              <Eye onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <Eye onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
          />
        </div>
      </div>

      {serverError && (
        <p className="text-red-500 text-center mb-4">{serverError}</p>
      )}

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
