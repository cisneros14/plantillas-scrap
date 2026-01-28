import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = ImageProps & {
  className?: string;
};

export function OptimizedImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-muted/20", className)}>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        quality={80} // Balanced for performance/quality
        {...props}
        className={cn("object-cover", className)} // Ensure object-cover by default
      />
    </div>
  );
}
