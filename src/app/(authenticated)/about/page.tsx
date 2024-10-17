import type { Metadata } from "next";

export const metadata = { title: "About" } satisfies Metadata;

export default function Page() {
	return <h1>About</h1>;
}
