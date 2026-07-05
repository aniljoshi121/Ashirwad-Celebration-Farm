import { forwardRef } from "react";
import { motion } from "motion/react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-[var(--font-label)] uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--maroon)] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-[var(--maroon)] text-[var(--ivory)] border border-[var(--maroon)]",
        gold: "bg-[var(--gold)] text-[var(--charcoal)] border border-[var(--gold)]",
        bright: "bg-[var(--marigold)] text-[var(--charcoal)] border border-[var(--marigold)] shadow-[0_0_0_0_rgba(255,140,0,0.5)]",
        outline: "bg-transparent text-[var(--ivory)] border border-[var(--gold)]",
        "outline-dark": "bg-transparent text-[var(--maroon)] border border-[var(--maroon)]",
      },
      size: {
        default: "text-[0.72rem] px-7 py-[13px]",
        lg: "text-[0.78rem] px-9 py-4",
        sm: "text-[0.65rem] px-5 py-2.5",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

const Button = forwardRef(({ className, variant, size, href, children, ...props }, ref) => {
  const Component = href ? motion.a : motion.button;
  return (
    <Component
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";
export default Button;
