import React from "react";
import BeatCard from "../BeatCard";

export default function BeatsSection() {
  return (
    <section className="my-8">
      {/* take it back to my-24 after dodo payment approval */}
      <h1 className="text-center text-3xl">Beats</h1>
      <h2 className="text-center text-muted-foreground my-2">
        Browse through your favorite beats & gain inspiration!
      </h2>
      <section>
        <BeatCard />
      </section>
    </section>
  );
}
