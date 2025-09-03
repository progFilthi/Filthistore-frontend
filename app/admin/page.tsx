import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-8 items-center justify-center min-h-screen">
      {/* card 1 */}
      <Card className="flex flex-col items-center justify-center">
        <CardTitle>Basic license</CardTitle>
        <CardContent>mp3 version only</CardContent>
        <CardFooter>
          <Button>$29.99</Button>
        </CardFooter>
      </Card>
      {/* card 2 */}
      <Card className="flex flex-col items-center justify-center">
        <CardTitle>Unlimited license</CardTitle>
        <CardContent>mp3 + WAV version</CardContent>
        <CardFooter>
          <Button>$59.99</Button>
        </CardFooter>
      </Card>
      {/* card 3 */}
      <Card className="flex flex-col items-center justify-center">
        <CardTitle>Exclusive license</CardTitle>
        <CardContent>mp3 + WAV + Stems</CardContent>
        <CardFooter>
          <Button>$299.99</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
