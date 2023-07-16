type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  color?: "primary" | "secondary";
  className?: string;
}
const Button = ({ className, children, onClick, type, color = 'primary',disabled }: ButtonProps) => {
  const handleColor = (colorType: string) => {
    switch (colorType) {
      case "primary":
        return "bg-blue-800 text-gray-50";
      case "secondary":
        return "bg-gray-80 text-gray-50";
      default:
        return "bg-blue-800 text-gray-50";
    }
  }  
  return (
      <button disabled={disabled} className={`${handleColor(color)} ${className} rounded-lg font-semibold text-gray-50 px-14 py-2`}>{children}</button>
    )
}
export default Button;