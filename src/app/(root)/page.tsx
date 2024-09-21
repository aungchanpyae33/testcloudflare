import Container from "@/ui/albumContainer/Container";

async function page() {
  return (
    <div>
      <audio
        src="https://jolly-sun-bbad.bubblemusic990.workers.dev/api"
        controls
      ></audio>
      <Container songs={["hi"]} description="Hit Song of the week" />
    </div>
  );
}
export default page;
