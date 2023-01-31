// FORM VALIDATION SCHEMAS
import * as Yup from "yup";

// create account validation schema
const CreateAccountSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .max(18, "Name can not be more that 18 characters")
    .min(4, "Name must be at least 4 characters")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .notOneOf(
      [Yup.ref("email"), Yup.ref("name")],
      "Name or email can't be password"
    ),
});

// login user validation schema
const LoginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export { CreateAccountSchema, LoginSchema };
