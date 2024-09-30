import { cn } from "@/lib/utils";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "10s"
   */
  duration?: string;

  contentClassName?: string;

  trailColor?: string;
  trailSize?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

// Extend CSSProperties to allow custom CSS properties
interface CustomCSSProperties extends React.CSSProperties {
  "--duration"?: string;
  "--angle"?: string;
}

export default function AnimatedBorderTrail({
  children,
  className,
  duration = "10s",
  trailColor = "purple",
  trailSize = "md",
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative h-fit w-fit overflow-hidden rounded-2xl bg-gray-300 p-px",
        className
      )}
    >
      <div
        className="absolute inset-0 h-full w-full animate-trail"
        // Use the CustomCSSProperties interface here
        style={
          {
            "--duration": duration,
            "--angle": "0deg",
            background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${
              100 - sizes[trailSize]
            }%, ${trailColor})`,
          } as CustomCSSProperties
        } // Casting the style object to CustomCSSProperties
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[15px] bg-white",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
