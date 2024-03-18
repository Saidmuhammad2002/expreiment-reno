"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./SignUpForm.module.css";
import { useState } from "react";
import Image from "next/image";
import eyeOpened from "@/public/icons/eye-open.svg";
import eyeClosed from "@/public/icons/eye-closed.svg";
import googleIcon from "@/public/icons/google.svg";

interface FormValues {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const SignUpForm: React.FC = () => {
  const initialValues: FormValues = {
    username: "",
    email: "",
    phone: "+971",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = (values: FormValues, actions: any) => {
    // Handle form submission
    console.log(values);
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.signUpForm}>
      <h2 className={styles.title}>Create an account</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="username" className={styles.label}>
                Username:
              </label>
              <Field type="text" id="username" name="username" className={styles.input} placeholder="Your username" />
              <ErrorMessage name="username" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <Field type="email" id="email" name="email" className={styles.input} placeholder="Email address" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone" className={styles.label}>
                Phone:
              </label>
              <PhoneInput
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
                inputClass={styles.inputPhone}
                buttonClass={styles.buttonClass}
              />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>
            <div className={styles.passwords}>
              <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>
                  Password:
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className={styles.input}
                    placeholder="Password"
                  />
                  <Image
                    src={showPassword ? eyeOpened : eyeClosed}
                    alt={showPassword ? "Hide password" : "Show password"}
                    className={styles.eyeIcon}
                    onClick={togglePasswordVisibility}
                  />
                </label>
                <ErrorMessage name="password" component="div" className={styles.error} />
              </div>
              <div className={styles.field}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm Password:
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={styles.input}
                    placeholder="Confirm password"
                  />
                  <Image
                    src={showConfirmPassword ? eyeOpened : eyeClosed}
                    alt={showConfirmPassword ? "Hide password" : "Show password"}
                    className={styles.eyeIcon}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </label>
                <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="acceptTerms" className={styles.termsLabel}>
                <Field type="checkbox" id="acceptTerms" name="acceptTerms" className={styles.checkbox} />
                <span>
                  Accept <a href="#">Terms and conditions</a>
                </span>
              </label>
              <ErrorMessage name="acceptTerms" component="div" className={styles.error} />
            </div>
            <button type="submit" className={styles.submitButton}>
              Continue
            </button>
            <div className={styles.dividerText}>OR</div>
            <button type="button" className={styles.googleButton}>
              <Image src={googleIcon} alt="Google" width={20} height={20} />
              <span>Continue with Google</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
