'use client';

import React from 'react';
import { Heart, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
	activePage?: string;
}

export function Header({ activePage }: HeaderProps) {
	const pathname = usePathname();

	const isActive = (path: string) => {
		if (activePage) return activePage === path;
		return pathname === path;
	};

	const getLinkClassName = (path: string) => {
		const activeClasses = isActive(path)
			? 'text-gray-900 font-medium'
			: 'text-gray-700 hover:text-gray-900';

		return `transition-colors ${activeClasses}`;
	};

	const navigationLinks = [
		{ href: '/treatments', label: 'Treatments' },
		{ href: '/destinations', label: 'Destinations' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<header className="bg-white border-b sticky top-0 z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 flex-shrink-0">
						<Heart className="h-6 w-6 text-red-500" />
						<span className="text-xl font-bold text-gray-900">
							Health Horizon
						</span>
					</Link>

					{/* Navigation */}
					<nav className="flex items-center space-x-6">
						{navigationLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={getLinkClassName(link.href)}
							>
								{link.label}
							</Link>
						))}
						<Link
							href="/"
							className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-2 py-1 rounded-md transition-colors"
						>
							<Home className="h-4 w-4" />
							<span>Home</span>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
