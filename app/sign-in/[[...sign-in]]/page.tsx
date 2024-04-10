import { Logo } from "@/components/logo";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between h-full space-y-8 my-10">
      <Logo full />
      <h2>Enter details to get access</h2>
      <SignIn />
    </main>
  );
}
