import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z
    .string()
    .min(1, "Your email is required")
    .email("Invalid email format"),
  message: z.string().min(1, "Your message is required"),
});

export type FormSchema = z.infer<typeof formSchema>;
