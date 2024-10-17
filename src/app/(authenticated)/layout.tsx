import { logout } from "@/actions/auth";
import { LogoutButton } from "@/components/logout-button";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col justify-between">
			<header className="flex justify-between items-center py-4 px-8 border-b border-b-gray-900">
				<div>
					<Link href="/" className="text-3xl font-bold">
						Middleware PoC
					</Link>
				</div>
				<nav>
					<ul>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="py-4 px-8 flex-grow">{children}</main>
			<footer className="py-4 px-8 border-t border-gray-900">
				<form action={logout}>
					<LogoutButton />
				</form>
			</footer>
		</div>
	);
}
