'use client';

import React from 'react';
import { Star, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function TreatmentPackagesSection() {
	const packages = [
		{
			id: 1,
			name: 'Complete Dental Makeover',
			location: 'Bangkok, Thailand',
			image:
				'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=400&fit=crop',
			rating: 4.9,
			reviews: 2340,
			originalPrice: 12000,
			packagePrice: 3500,
			savings: 8500,
			duration: '7 days',
			includes: [
				'Dental implants',
				'Veneers',
				'Teeth whitening',
				'Luxury hotel',
				'Airport transfers',
			],
			highlight: 'Most Popular',
			badge: 'bestseller',
		},
		{
			id: 2,
			name: 'Cosmetic Surgery Package',
			location: 'Seoul, South Korea',
			image:
				'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=400&fit=crop',
			rating: 4.8,
			reviews: 1856,
			originalPrice: 15000,
			packagePrice: 6500,
			savings: 8500,
			duration: '10-14 days',
			includes: [
				'Rhinoplasty',
				'Face lift',
				'Recovery care',
				'5-star accommodation',
				'Personal translator',
			],
			highlight: 'Premium Care',
			badge: 'premium',
		},
		{
			id: 3,
			name: 'Heart Surgery Excellence',
			location: 'Mumbai, India',
			image:
				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop',
			rating: 4.9,
			reviews: 987,
			originalPrice: 45000,
			packagePrice: 18000,
			savings: 27000,
			duration: '21 days',
			includes: [
				'Bypass surgery',
				'ICU care',
				'Rehabilitation',
				'Family accommodation',
				'Medical escort',
			],
			highlight: 'Expert Care',
			badge: 'expert',
		},
		{
			id: 4,
			name: 'LASIK Vision Correction',
			location: 'Istanbul, Turkey',
			image:
				'https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=500&h=400&fit=crop',
			rating: 4.8,
			reviews: 1234,
			originalPrice: 8000,
			packagePrice: 2800,
			savings: 5200,
			duration: '3-5 days',
			includes: [
				'LASIK surgery',
				'Post-op checkups',
				'Hotel stay',
				'City tour',
				'Transportation',
			],
			highlight: 'Quick Recovery',
			badge: 'quick',
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				className={`h-4 w-4 ${
					index < Math.floor(rating)
						? 'text-yellow-400 fill-current'
						: index < rating
						? 'text-yellow-400 fill-current opacity-50'
						: 'text-gray-300'
				}`}
			/>
		));
	};

	const getBadgeColor = (badge: string) => {
		switch (badge) {
			case 'bestseller':
				return 'bg-green-500 text-white';
			case 'premium':
				return 'bg-purple-500 text-white';
			case 'expert':
				return 'bg-blue-500 text-white';
			case 'quick':
				return 'bg-orange-500 text-white';
			default:
				return 'bg-gray-500 text-white';
		}
	};

	return (
		<section className="py-16 sm:py-20 lg:py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Featured Treatment Packages
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
						Carefully curated medical packages combining world-class treatments
						with exceptional travel experiences
					</p>
				</div>

				{/* Packages Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
					{packages.map((pkg) => (
						<Card
							key={pkg.id}
							className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
						>
							{/* Package Image */}
							<div className="relative h-48 sm:h-52">
								<Image
									src={pkg.image}
									alt={`${pkg.name} package in ${pkg.location}`}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
									sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
								/>

								{/* Badge */}
								<div
									className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-semibold ${getBadgeColor(
										pkg.badge
									)}`}
								>
									{pkg.highlight}
								</div>

								{/* Savings Badge */}
								<div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
									Save ${pkg.savings.toLocaleString()}
								</div>
							</div>

							<CardContent className="p-6">
								{/* Package Header */}
								<div className="mb-4">
									<h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
										{pkg.name}
									</h3>
									<p className="text-gray-600 font-medium">{pkg.location}</p>
								</div>

								{/* Rating & Reviews */}
								<div className="flex items-center space-x-2 mb-4">
									<div
										className="flex space-x-1"
										role="img"
										aria-label={`${pkg.rating} out of 5 stars`}
									>
										{renderStars(pkg.rating)}
									</div>
									<span className="font-semibold text-gray-900">
										{pkg.rating}
									</span>
									<span className="text-gray-500 text-sm">
										({pkg.reviews.toLocaleString()} reviews)
									</span>
								</div>

								{/* Pricing */}
								<div className="mb-4">
									<div className="flex items-baseline space-x-2">
										<span className="text-2xl font-bold text-green-600">
											${pkg.packagePrice.toLocaleString()}
										</span>
										<span className="text-gray-500 line-through text-lg">
											${pkg.originalPrice.toLocaleString()}
										</span>
									</div>
									<p className="text-sm text-gray-600 mt-1">
										All-inclusive package price
									</p>
								</div>

								{/* Duration */}
								<div className="flex items-center space-x-2 mb-4 text-gray-600">
									<Clock className="h-4 w-4" />
									<span className="text-sm">{pkg.duration} stay</span>
								</div>

								{/* Includes */}
								<div className="mb-6">
									<h4 className="font-semibold text-gray-900 mb-2 text-sm">
										Package Includes:
									</h4>
									<ul className="space-y-1">
										{pkg.includes.slice(0, 3).map((item, index) => (
											<li
												key={index}
												className="text-sm text-gray-600 flex items-center"
											>
												<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
												{item}
											</li>
										))}
										{pkg.includes.length > 3 && (
											<li className="text-sm text-gray-500 italic">
												+{pkg.includes.length - 3} more services
											</li>
										)}
									</ul>
								</div>

								{/* Action Button */}
								<Button
									className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-200"
									aria-label={`View details for ${pkg.name} package`}
								>
									View Package Details
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-12 sm:mt-16">
					<Button
						variant="outline"
						size="lg"
						className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
					>
						<Users className="mr-2 h-5 w-5" />
						View All Treatment Packages
					</Button>
				</div>

				{/* Trust Indicators */}
				<div className="mt-16 pt-12 border-t border-gray-200">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div>
							<Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
							<div className="text-2xl font-bold text-gray-900">JCI</div>
							<div className="text-sm text-gray-600">Accredited Hospitals</div>
						</div>
						<div>
							<Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
							<div className="text-2xl font-bold text-gray-900">100K+</div>
							<div className="text-sm text-gray-600">Patients Served</div>
						</div>
						<div>
							<Star className="h-12 w-12 text-yellow-500 mx-auto mb-3 fill-current" />
							<div className="text-2xl font-bold text-gray-900">4.9/5</div>
							<div className="text-sm text-gray-600">Average Rating</div>
						</div>
						<div>
							<Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
							<div className="text-2xl font-bold text-gray-900">24/7</div>
							<div className="text-sm text-gray-600">Support Available</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
