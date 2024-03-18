"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const ContactForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = (values: FormValues, actions: any) => {
    // Handle form submission
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={styles.contactCard}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.divider}></div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <Field type="text" id="name" name="name" className={styles.input} placeholder="Your name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
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
              Phone number:
            </label>
            <Field type="tel" id="phone" name="phone" className={styles.input} placeholder="Phone number " />
            <ErrorMessage name="phone" component="div" className={styles.error} />
          </div>
          <button type="submit" className={styles.submitButton}>
            Get OTP
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
