"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-md bg-gray-800 px-3.5 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-700 hover:bg-gray-700 hover:ring-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all duration-200"
    >
      Sign out
    </button>
  );
}
