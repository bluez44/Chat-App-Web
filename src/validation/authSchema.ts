import * as z from "zod";

const loginSchema = z.object({
  userName: z.string().nonempty({ message: "Username is required" }),
  password: z.string().nonempty({ message: "Password is required" }),
});

export { loginSchema };
