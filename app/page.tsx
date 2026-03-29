import { Hero } from "@/components/features/hero";
import { HowItWorks } from "@/components/features/how-it-works";
import { Values } from "@/components/features/values";
import { WaitlistForm } from "@/components/features/waitlist-form";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Values />
      <WaitlistForm />
    </>
  );
}
