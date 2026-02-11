import { LoginForm } from "@/components/login-form";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ScrollAnimationWrapper>
          <LoginForm />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
