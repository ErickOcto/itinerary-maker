import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mb-8">
        <Image
          src="/world.png"
          alt="Hero Image"
          width={1080}
          height={1080}
          className="object-cover animate-[spin_60s_linear_infinite]"
          priority
        />

        <div className="absolute inset-0 backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,transparent_40%,black_100%)] pointer-events-none"></div>
      </div>

      <div className="-mt-64 container w-1/2 flex flex-col text-center items-center justify-center gap-4 px-4 py-16 z-10">
        <Badge className="mx-auto mb-2 px-3 py-4" variant={"outline"}>
          ⭐️{"  "}Trusted by over 34k travelers
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          Create <span className="text-primary">Itinerary with AI</span>
        </h1>
        <p className="text-center text-md text-muted-foreground mb-2">
          Itinerary Maker is an AI-powered web application that helps you create
          personalized travel itineraries based on your preferences and
          interests.
        </p>
        <Button size="lg">Try for free</Button>
      </div>
    </div>
  );
}
