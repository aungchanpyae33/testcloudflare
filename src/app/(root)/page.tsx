"use client";

import Container from "@/ui/albumContainer/Container";

async function page() {
  console.log("hello");
  return (
    <div>
      <button
        onClick={async () => {
          fetch("/api/data");
        }}
      >
        get data
      </button>
      <Container songs={["hi"]} description="Hit Song of the week" />
    </div>
  );
}
export default page;
