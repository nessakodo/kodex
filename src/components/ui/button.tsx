import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gradient-to-br from-card to-neutral-50/50 text-neutral-950 hover:shadow-xl hover:shadow-sky-blue/15 active:shadow-glow-blue focus-visible:ring-sky-blue font-medium",
        outline:
          "border border-neutral-300 bg-transparent text-neutral-950 hover:bg-neutral-50 hover:border-sky-blue/50 font-medium focus-visible:ring-sky-blue",
        secondary:
          "bg-neutral-100 text-neutral-950 hover:bg-neutral-200 focus-visible:ring-aqua-mint",
        ghost: "hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950 focus-visible:ring-sky-blue",
        link: "text-sky-blue underline-offset-4 hover:underline hover:text-aqua-mint focus-visible:ring-sky-blue",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-6 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {variant === 'default' && !asChild && (
          <>
            {/* Gradient background overlay */}
            <span
              className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-md"
              style={{ zIndex: 0 }}
            />
            {/* Gradient border - always visible */}
            <span
              className="absolute inset-0 rounded-md transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                zIndex: 1,
              }}
            />
          </>
        )}
        <span className="relative z-10">{children}</span>
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), variant === 'default' && 'group')}
        ref={ref}
        {...props}
      >
        {asChild ? children : content}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
