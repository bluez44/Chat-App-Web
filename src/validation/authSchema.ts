import * as z from "zod";
import { PASSWORD_REGEX } from "../constant/regex";

const loginSchema = z.object({
  userName: z.string().nonempty({ message: "Username is required" }),
  password: z.string().nonempty({ message: "Password is required" }),
});

const registerSchema = z
  .object({
    userName: z
      .string()
      .nonempty({ message: "Username is required" })
      .min(4, "Username must be at least 4 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(
        /^[A-Za-z0-9]+$/,
        "Username must contain only letters and numbers"
      ),
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .regex(
        PASSWORD_REGEX,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
      ),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm Password is required" }),
    fullName: z.string().nonempty({ message: "Full name is required" }),
    birthday: z.string(),
    address: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { loginSchema, registerSchema };
