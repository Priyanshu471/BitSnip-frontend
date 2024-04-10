import { Logo } from "@/components/logo";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between h-full space-y-8 my-10">
      <Logo full />
      <h2>Create an account to use Services</h2>
      <SignUp />
    </main>
  );
}
