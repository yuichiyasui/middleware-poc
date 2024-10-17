"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async () => {
    await sleep(1000);
  cookies().set("token", "1234", { secure: true, httpOnly: true });
  redirect("/");
};

export const logout = async () => {
    await sleep(1000);
  cookies().delete("token");
  redirect("/login");
};
