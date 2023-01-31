import { Formik, Form } from "formik";
import { LoginSchema } from "../validation/yup-schema";
import { axiosAPI } from "../../axios/axios-api";
// COMPONENTS
import Main from "../../components/layout/main/main";
import FormSection from "../components/form-section";
import FormControl from "../components/form-control";
import PageNavigationLink from "../components/page-navigation-link";
import ButtonSubmit from "../components/button-submit";
// END OF IMPORTS

const LoginPage = () => {
  // formik
  const initialValues = { email: "", password: "" };

  return (
    <Main>
      {/* Logic for form submission start */}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          try {
            // TODO: LOGIC TO CREATE USER ACCOUNT
            const result = await axiosAPI.create("/auth/login", values);
            console.log(result.data);
          } catch (error: any) {
            console.log(error.message);
          }
          resetForm({
            values: { email: "", password: "" },
          });
        }}
      >
        {/* Logic for form submission end */}

        <FormSection>
          <h1>Log into Account</h1>
          <p className="text-center mb-10">
            Please enter your email address. And we'll send you a verification
            email to finish your account creation process.
          </p>
          <Form className="flex flex-col gap-6">
            {/* Email field start */}
            <FormControl
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {/* Email field end */}

            {/* Password field start */}
            <FormControl
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {/* Password field end */}
            <PageNavigationLink
              title="Don't have an account yet?"
              linkTo="/auth/create-account"
              linkTitle="Create one now."
            />
            <ButtonSubmit />
          </Form>
        </FormSection>
      </Formik>
    </Main>
  );
};

export default LoginPage;
