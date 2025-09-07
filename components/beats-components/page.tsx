import React from "react";
import BeatCard from "../BeatCard";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export default function BeatsSection() {
  return (
    <section className="my-24">
      <h1 className="text-center text-3xl">Beats</h1>
      <h2 className="text-center text-sm px-4 md:text-lg md:px-2 text-muted-foreground my-2">
        Browse through your favorite beats & gain inspiration!
      </h2>
      {/* Search form */}
      <div className="max-w-3xl px-4 mx-auto mt-4 relative">
        <Input
          className="peer h-12 ps-8 pe-2"
          placeholder="Search..."
          type="search"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-6 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>

      <section>
        <BeatCard />
      </section>
    </section>
  );
}
