import React from "react";
import { redirect } from "next/navigation";
import { validateRequest } from "@/app/auth/auth";

async function page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }
  return <h1>Hi, {user.username}!</h1>;
}

export default page;
