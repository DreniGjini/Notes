import { HtmlHTMLAttributes, ReactNode } from "react";

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`${className}  bg-white rounded-md p-3 `}>
      {children}
    </div>
  );
};

export default Card;
