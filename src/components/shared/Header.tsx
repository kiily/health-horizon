'use client';

import React, { useState } from 'react';
import { Heart, Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
	activePage?: string;
}

export function Header({ activePage }: HeaderProps) {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

	const getMobileLinkClassName = (path: string) => {
		const activeClasses = isActive(path)
			? 'text-gray-900 font-medium bg-gray-50'
			: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50';

		return `block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeClasses}`;
	};

	const navigationLinks = [
		{ href: '/treatments', label: 'Treatments' },
		{ href: '/destinations', label: 'Destinations' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="bg-white border-b sticky top-0 z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center space-x-2 flex-shrink-0"
						onClick={closeMobileMenu}
					>
						<Heart className="h-6 w-6 text-red-500" />
						<span className="text-xl font-bold text-gray-900">
							Health Horizon
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-6">
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

					{/* Mobile menu button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
						aria-expanded="false"
						aria-label="Toggle navigation menu"
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
							<Link
								href="/"
								className={getMobileLinkClassName('/')}
								onClick={closeMobileMenu}
							>
								<div className="flex items-center space-x-2">
									<Home className="h-4 w-4" />
									<span>Home</span>
								</div>
							</Link>
							{navigationLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={getMobileLinkClassName(link.href)}
									onClick={closeMobileMenu}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
