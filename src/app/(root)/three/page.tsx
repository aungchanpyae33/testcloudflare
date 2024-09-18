import React from "react";

import { redirect } from "next/navigation";
export const runtime = "edge";
async function page() {
  return <div>hi</div>;
}

export default page;
