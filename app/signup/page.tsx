import Typography from "@/components/Typography/Typography";
import cls from "@/app/contact/contact.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className={cls.main}>
      <Typography variant="heading">
        Reno helps contractors <br /> in 2 ways
      </Typography>
      <div className={cls.hero}>
        <div className={cls.textPart}>
          <div className={cls.first}>
            <div className={cls.number}>1</div>
            <Typography variant="subheading" className={cls.subHeading}>
              We bring more clients to contractors.
            </Typography>
            <Typography variant="body">
              Clients will submit their requirements on the Reno platform. You choose which customers to bid for, and
              the customers choose which bid to accept.
            </Typography>
          </div>
          <div className={cls.second}>
            <div className={cls.number}>2</div>
            <Typography variant="subheading" className={cls.subHeading}>
              We ensure that contractors are paid on time.
            </Typography>
            <Typography variant="body">
              An estimated 70% of projects have issues with on-time payments. Reno acts as a go-between to ensure that
              both projects and payments are on time.
            </Typography>
          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};
export default SignUp;
