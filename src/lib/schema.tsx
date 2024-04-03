import * as z from "zod";

export const RegisterformSchema = z.object({
    fullname: z.string({
        required_error: "full Name field is required.",
    }),
  email: z.string({
    required_error: "email field is required.",
  }),
  password: z.string({
    required_error: "password field is required.",
  }),
})

export const SigninformSchema = z.object({
  email: z.string({
    required_error: "email field is required.",
  }),
  password: z.string({
    required_error: "password field is required.",
  }),
})

export const ResetPasswordformSchema = z.object({
  email: z.string({
    required_error: "email field is required.",
  })
})