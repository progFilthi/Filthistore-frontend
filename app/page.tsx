"use client";
import BeatsSection from "@/components/beats-components/page";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      {/* Remove this after dodo payment approval is just for demo purpose */}
      <div className="space-y-4 mt-24">
        <p className="text-center">
          Admin Route has a summary of what the product is all about Click below
          to be redirected to admin route
        </p>
        <div className="text-center">
          <Link href={"/admin"}>
            <Button variant={"destructive"}>Admin</Button>
          </Link>
        </div>
      </div>
      <BeatsSection />
    </div>
  );
}
