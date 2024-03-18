import cls from "./Typography.module.css";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: "heading" | "subheading" | "body";
  children: React.ReactNode;
}

const variantMap = {
  heading: "h1",
  subheading: "h2",
  body: "p",
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className, ...rest }) => {
  const Tag = variantMap[variant] as keyof JSX.IntrinsicElements;
  return <Tag className={`${cls[variant]} ${className}`}>{children}</Tag>;
};

export default Typography;
