import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
	if (req.nextUrl.pathname === "/login") {
		return req.cookies.has("token")
			? NextResponse.redirect(new URL("/", req.url))
			: NextResponse.next();
	}

	const path = req.nextUrl.pathname;
	if (!req.cookies.has("token")) {
		const res = NextResponse.redirect(new URL("/login", req.url));
		res.cookies.set("next-url", path);
		return res;
	}

	const nextUrl = req.cookies.get("next-url")?.value;
	if (nextUrl) {
		const res = NextResponse.redirect(new URL(nextUrl, req.url));
		res.cookies.delete("next-url");
		return res;
	}

	return NextResponse.next();
};

export const config = {
	matcher: [
		{
			source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
			missing: [
				{ type: "header", key: "next-router-prefetch" },
				{ type: "header", key: "purpose", value: "prefetch" },
			],
		},
	],
};
