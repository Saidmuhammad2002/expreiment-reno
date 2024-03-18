"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import Image from "next/image";
import eyeOpened from "@/public/icons/eye-open.svg";
import eyeClosed from "@/public/icons/eye-closed.svg";
import googleIcon from "@/public/icons/google.svg";
import Link from "next/link";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: FormValues, actions: any) => {
    // Handle login
    console.log("Logging in with:", values);
    // You can make API calls or handle authentication here
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.title}>Log in</h2>
      <div className={styles.divider}></div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <Field type="email" id="email" name="email" className={styles.input} placeholder="Email address" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
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
            <Link href="/#" className={styles.forgotPassword}>
              Forgot password?
            </Link>
            <button type="submit" className={styles.submitButton}>
              Continue
            </button>
            <div className={styles.dividerText}>OR</div>
            <button type="button" className={styles.googleButton}>
              <Image src={googleIcon} alt="Google" width={20} height={20} />
              <span>Log in with Google</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
