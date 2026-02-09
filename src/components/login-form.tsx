"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { login } from "@/app/actions/auth";
import { useActionState } from "react";
import { siteConfig } from "@/config/site";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, action, isPending] = useActionState(login, null);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{siteConfig.auth.login.title}</CardTitle>
          <CardDescription>{siteConfig.auth.login.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">
                  {siteConfig.auth.login.email_label}
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@ejemplo.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    {siteConfig.auth.login.password_label}
                  </FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {siteConfig.auth.login.forgot_password}
                  </a>
                </div>
                <Input id="password" name="password" type="password" required />
              </Field>

              {state?.error && (
                <p className="text-sm text-red-500 text-center">
                  {state.error}
                </p>
              )}

              <Field>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending
                    ? "Ingresando..."
                    : siteConfig.auth.login.submit_button}
                </Button>
                <Button variant="outline" type="button" className="w-full">
                  {siteConfig.auth.login.google_button}
                </Button>
                <FieldDescription className="text-center">
                  {siteConfig.auth.login.register_text}{" "}
                  <a href="#">{siteConfig.auth.login.register_link}</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
