import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowRight } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Header() {
	const session = await getServerSession(authOptions);
	const isAuthenticated = !!session;

	return (
		<header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm supports-backdrop-filter:bg-black/50">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between py-4">
					<div className="flex items-center gap-8">
						<Link href="/" className="text-xl font-bold tracking-tighter">
							Vercount
						</Link>
						<nav className="hidden md:flex items-center gap-8">
							<Link
								href="/#usage"
								className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
							>
								Usage
							</Link>
							<Link
								href="/#features"
								className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
							>
								Features
							</Link>
							<Link
								href="/#sponsorship"
								className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
							>
								Sponsorship
							</Link>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<Button
							variant="outline"
							size="sm"
							className="rounded-full border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white py-4 flex items-center gap-2"
							asChild
						>
							<Link
								href="https://github.com/EvanNotFound/vercount"
								target="_blank"
								rel="noopener noreferrer"
							>
								<SiGithub className="h-4 w-4 mr-1" />
								<span>GitHub</span>
							</Link>
						</Button>

						{isAuthenticated ? (
							<Button
								size="sm"
								className="rounded-full bg-zinc-50 hover:bg-zinc-200 text-black py-4 px-4 flex items-center gap-2"
								asChild
							>
								<Link href="/dashboard">Dashboard</Link>
							</Button>
						) : (
							<Button
								size="sm"
								className="rounded-full bg-zinc-50 hover:bg-zinc-200 text-black py-4 px-4 flex items-center gap-2"
								asChild
							>
								<Link href="/auth/signin">
									<span>Sign in</span>
									<ArrowRight className="h-3 w-3" strokeWidth={2.5} />
								</Link>
							</Button>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
