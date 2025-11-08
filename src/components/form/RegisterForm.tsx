import type { registerFormModel } from "../../constant/model/auth";
import { registerSchema } from "../../validation/authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordCriteria from "../../ui/PasswordCriteria";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { registerApi } from "../../lib/api/auth";
import axios from "axios";
import { createToastMessage } from "../../lib/utils/ToastMessage";
import { useNavigate } from "react-router";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      birthday: "",
      address: "",
    },
  });

  const passwordValue = watch("password");

  const onSubmit = async (data: registerFormModel) => {
    try {
      await registerApi(data);

      createToastMessage("Register successfully!", "success");
      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        createToastMessage(
          `An error occurred: ${error.response?.data.message}`,
          "error"
        );
      }
    }
  };

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
        {errors.userName && (
          <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
        )}
      </div>

      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Password
        </label>
        <div className="relative">
          <div className="absolute right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:bg-gray-300 duration-150 p-2 rounded-full">
            {showPassword ? (
              <Eye onClick={toggleShowPassword} />
            ) : (
              <EyeClosed onClick={toggleShowPassword} />
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

      <div className="mb-6">
        <PasswordCriteria password={passwordValue} />
      </div>

      <div className="mb-6 relative">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 font-medium mb-2"
        >
          Confirm Password
        </label>
        <div className="relative">
          <div className="absolute right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:bg-gray-300 duration-150 p-2 rounded-full">
            {showConfirmPassword ? (
              <Eye onClick={toggleShowConfirmPassword} />
            ) : (
              <EyeClosed onClick={toggleShowConfirmPassword} />
            )}
          </div>
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
          />
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="fullName"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.fullName
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="birthday"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Birthday
        </label>
        <input
          id="birthday"
          type="date"
          {...register("birthday")}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.birthday
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {errors.birthday && (
          <p className="text-red-500 text-sm mt-1">{errors.birthday.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="address"
          className="block text-gray-700 font-medium mb-2"
        >
          Your Address
        </label>
        <input
          id="address"
          type="text"
          {...register("address")}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.address
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}

export default RegisterForm;
