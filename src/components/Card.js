import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const Card = ({
  children,
  className,
  hover = true,
  ...props
}) => {
  const baseStyles = "bg-white dark:bg-gray-800 rounded-2xl shadow-soft-xl dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden";
  const hoverStyles = hover ? "hover:shadow-soft-2xl hover:scale-[1.02] transition-all duration-300" : "";

  return (
    <motion.div
      className={cn(baseStyles, hoverStyles, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-6 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};