"use client";

import { useFormStatus } from "react-dom";

export const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="py-2 px-4 border border-gray-700 rounded-sm hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Logout
    </button>
  );
};
