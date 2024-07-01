import { logout } from "@/auth/auth";
import React from "react";

async function page() {
  return (
    <div>
      this is logout page
      <form action={logout}>
        <button>logout</button>
      </form>
    </div>
  );
}

export default page;
