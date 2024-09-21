"use client";
import Container from "@/ui/albumContainer/Container";

async function page() {
  console.log("hello");
  return (
    <div>
      <button
        onClick={async () => {
          const fetchData = await fetch(
            "https://jolly-sun-bbad.bubblemusic990.workers.dev/api"
          );
          const data = await fetchData.json();
          console.log(data);
        }}
      >
        get data
      </button>
      <Container songs={["hi"]} description="Hit Song of the week" />
    </div>
  );
}
export default page;
