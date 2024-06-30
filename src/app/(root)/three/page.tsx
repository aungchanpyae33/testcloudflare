import React from "react";
import { validateRequest } from "@/auth/auth";
import { redirect } from "next/navigation";

async function page() {
  console.time("b");
  const { user } = await validateRequest();
  console.timeEnd("b");
  // console.log(data);

  if (!user) {
    return redirect("/login");
  }
  return <div>this is three page</div>;
}

export default page;
