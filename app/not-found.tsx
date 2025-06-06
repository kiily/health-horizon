import Link from 'next/link';
import { Heart, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white flex flex-col">
			{/* Header */}
			<header className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<Link href="/" className="flex items-center space-x-2">
							<Heart className="h-6 w-6 text-red-500" />
							<span className="text-xl font-bold text-gray-900">
								Health Horizon
							</span>
						</Link>
					</div>
				</div>
			</header>

			{/* 404 Content */}
			<div className="flex-1 flex items-center justify-center px-4">
				<div className="max-w-md text-center">
					<div className="mb-8">
						<h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
						<h2 className="text-2xl font-semibold text-gray-700 mb-4">
							Page Not Found
						</h2>
						<p className="text-gray-600 mb-8">
							Sorry, we couldn&apos;t find the page you&apos;re looking for. The
							page might have been moved, deleted, or you entered the wrong URL.
						</p>
					</div>

					<div className="space-y-4">
						<Button asChild className="w-full bg-red-500 hover:bg-red-600">
							<Link href="/" className="flex items-center justify-center">
								<Home className="h-4 w-4 mr-2" />
								Go to Homepage
							</Link>
						</Button>

						<Button asChild variant="outline" className="w-full">
							<Link
								href="javascript:history.back()"
								className="flex items-center justify-center"
							>
								<ArrowLeft className="h-4 w-4 mr-2" />
								Go Back
							</Link>
						</Button>
					</div>

					<div className="mt-8 text-sm text-gray-500">
						<p>
							Need help?{' '}
							<Link href="/contact" className="text-red-500 hover:text-red-600">
								Contact us
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
