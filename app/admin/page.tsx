import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="space-y-6 max-w-3xl text-lg">
        <h1 className="text-4xl font-bold">Admin Dashboard - Filthistore</h1>

        <p>
          Welcome to the Filthistore Admin Dashboard. This is the control center
          where I, as the admin, manage all the beats available for purchase in
          my app. Here, I can add new beats, update existing ones, and configure
          prices and licenses for each beat. The interface is designed to be
          simple and intuitive.
        </p>

        <p>
          Each beat comes with multiple license options, allowing buyers to
          choose the right type of license for their project:
        </p>

        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <strong>Basic Lease:</strong> Affordable option for personal or
            casual use, typically priced around $29.99.
          </li>
          <li>
            <strong>Unlimited Lease:</strong> For more extensive use, suitable
            for commercial projects, priced around $99.99.
          </li>
          <li>
            <strong>Exclusive Lease:</strong> Full rights ownership of the beat,
            perfect for serious commercial projects, priced around $599.99.
          </li>
        </ol>

        <p>
          The dashboard also displays detailed information for each beat,
          including audio previews, cover art, BPM, key, and other metadata.
          This ensures buyers can make informed choices when purchasing beats.
        </p>

        <p>
          Filthistore is built for performance and ease of use. The frontend is
          hosted independently for fast loading, while the backend securely
          handles authentication and payments. Integration with Dodopayments
          allows smooth checkout, so buyers can pay easily while I manage the
          beats and licenses efficiently.
        </p>

        <p>
          Overall, this app is designed to showcase my beats and provide a
          professional, user-friendly experience for anyone looking to purchase
          high-quality music.
        </p>
        <Link href={"/"}>
          <Button>Back home</Button>
        </Link>
      </div>
    </div>
  );
}
