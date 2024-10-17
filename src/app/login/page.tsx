import { login } from "@/actions/auth";
import { LoginButton } from "@/components/login-button";
import type { Metadata } from "next";

export const metadata = { title: "Login" } satisfies Metadata;

export default function Page() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <form action={login}>
          <LoginButton />
        </form>
      </div>
    </div>
  );
}
