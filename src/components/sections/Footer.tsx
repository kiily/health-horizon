'use client';

import React from 'react';
import {
	Heart,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Youtube,
} from 'lucide-react';
import Link from 'next/link';

export function Footer() {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ href: '/treatments', label: 'All Treatments' },
		{ href: '/destinations', label: 'Destinations' },
		{ href: '/about', label: 'About Us' },
		{ href: '/contact', label: 'Contact' },
	];

	const treatments = [
		{ href: '/treatments?category=dental', label: 'Dental Care' },
		{ href: '/treatments?category=cosmetic', label: 'Cosmetic Surgery' },
		{ href: '/treatments?category=cardiac', label: 'Heart Surgery' },
		{ href: '/treatments?category=orthopedic', label: 'Orthopedics' },
		{ href: '/treatments?category=eye', label: 'Eye Surgery' },
		{ href: '/treatments?category=fertility', label: 'Fertility' },
	];

	const destinations = [
		{ href: '/destinations?country=thailand', label: 'Thailand' },
		{ href: '/destinations?country=india', label: 'India' },
		{ href: '/destinations?country=turkey', label: 'Turkey' },
		{ href: '/destinations?country=south-korea', label: 'South Korea' },
		{ href: '/destinations?country=mexico', label: 'Mexico' },
		{ href: '/destinations?country=uae', label: 'UAE' },
	];

	const supportLinks = [
		{ href: '/help', label: 'Help Center' },
		{ href: '/insurance', label: 'Insurance' },
		{ href: '/privacy', label: 'Privacy Policy' },
		{ href: '/terms', label: 'Terms of Service' },
		{ href: '/safety', label: 'Safety Guidelines' },
		{ href: '/faq', label: 'FAQ' },
	];

	const socialLinks = [
		{
			href: 'https://facebook.com/healthhorizon',
			icon: Facebook,
			label: 'Facebook',
			color: 'hover:text-blue-600',
		},
		{
			href: 'https://twitter.com/healthhorizon',
			icon: Twitter,
			label: 'Twitter',
			color: 'hover:text-blue-400',
		},
		{
			href: 'https://instagram.com/healthhorizon',
			icon: Instagram,
			label: 'Instagram',
			color: 'hover:text-pink-600',
		},
		{
			href: 'https://linkedin.com/company/healthhorizon',
			icon: Linkedin,
			label: 'LinkedIn',
			color: 'hover:text-blue-700',
		},
		{
			href: 'https://youtube.com/healthhorizon',
			icon: Youtube,
			label: 'YouTube',
			color: 'hover:text-red-600',
		},
	];

	return (
		<footer className="bg-gray-900 text-white">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center space-x-2 mb-6">
							<Heart className="h-8 w-8 text-blue-400" />
							<span className="text-2xl font-bold">Health Horizon</span>
						</Link>
						<p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
							Connecting patients worldwide with world-class medical treatments
							at affordable prices. Your journey to better health starts here.
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
								<a
									href="tel:+1-800-HEALTH"
									className="text-gray-300 hover:text-white transition-colors"
									aria-label="Call us at 1-800-HEALTH"
								>
									+1 (800) HEALTH-1
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
								<a
									href="mailto:support@healthhorizon.com"
									className="text-gray-300 hover:text-white transition-colors"
									aria-label="Email us at support@healthhorizon.com"
								>
									support@healthhorizon.com
								</a>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
								<address className="text-gray-300 not-italic leading-relaxed">
									123 Medical Plaza
									<br />
									Health District
									<br />
									New York, NY 10001
								</address>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-6">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors block"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Treatments */}
					<div>
						<h3 className="text-lg font-semibold mb-6">Popular Treatments</h3>
						<ul className="space-y-3">
							{treatments.map((treatment) => (
								<li key={treatment.href}>
									<Link
										href={treatment.href}
										className="text-gray-300 hover:text-white transition-colors block"
									>
										{treatment.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Destinations & Support */}
					<div>
						<h3 className="text-lg font-semibold mb-6">Top Destinations</h3>
						<ul className="space-y-3 mb-8">
							{destinations.slice(0, 4).map((destination) => (
								<li key={destination.href}>
									<Link
										href={destination.href}
										className="text-gray-300 hover:text-white transition-colors block"
									>
										{destination.label}
									</Link>
								</li>
							))}
						</ul>

						<h3 className="text-lg font-semibold mb-6">Support</h3>
						<ul className="space-y-3">
							{supportLinks.slice(0, 3).map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors block"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className="mt-12 pt-8 border-t border-gray-700">
					<div className="max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
						<div className="lg:flex-1 lg:mr-8">
							<h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
							<p className="text-gray-300">
								Get the latest medical tourism news, treatment updates, and
								exclusive offers.
							</p>
						</div>
						<div className="mt-6 lg:mt-0 lg:flex-shrink-0">
							<form className="flex flex-col sm:flex-row gap-3">
								<label htmlFor="newsletter-email" className="sr-only">
									Email address for newsletter
								</label>
								<input
									id="newsletter-email"
									type="email"
									placeholder="Enter your email"
									className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[250px]"
									aria-label="Email address for newsletter subscription"
									required
								/>
								<button
									type="submit"
									className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors min-h-[48px]"
								>
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="border-t border-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between">
						{/* Copyright */}
						<div className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
							© {currentYear} Health Horizon. All rights reserved. |
							<Link href="/privacy" className="hover:text-white ml-1">
								Privacy
							</Link>{' '}
							|
							<Link href="/terms" className="hover:text-white ml-1">
								Terms
							</Link>
						</div>

						{/* Social Media */}
						<div className="flex justify-center md:justify-end space-x-4">
							{socialLinks.map((social) => {
								const IconComponent = social.icon;
								return (
									<a
										key={social.href}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`text-gray-400 ${social.color} transition-colors p-2 rounded-full hover:bg-gray-800`}
										aria-label={`Follow us on ${social.label}`}
									>
										<IconComponent className="h-5 w-5" />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
