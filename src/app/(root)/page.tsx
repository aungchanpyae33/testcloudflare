import Container from "@/ui/albumContainer/Container";

async function page() {
  return (
    <div>
      <Container songs={["hi"]} description="Hit Song of the week" />
      <Container songs={["hi"]} description="Recommend Song For you" />
      <Container songs={["hi"]} description="Top PlayList" />
      <Container songs={["hi"]} description="Today Mode" />
      <Container songs={["hi"]} description="Top Artist" />
    </div>
  );
}
export default page;
