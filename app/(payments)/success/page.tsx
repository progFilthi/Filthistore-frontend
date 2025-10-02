import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex space-y-2 flex-col items-center justify-center min-h-screen">
      <p>
        Thanks for the <span className="text-green-400">purchase</span>
      </p>
      <p> Please check your email to download your kit!</p>

      <Link href={"/"}>
        <Button>Continue Shopping ... </Button>
      </Link>
    </div>
  );
}
