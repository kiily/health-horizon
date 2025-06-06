'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function TestimonialsSection() {
	const testimonials = [
		{
			id: 1,
			name: 'Sarah Johnson',
			location: 'New York, USA',
			treatment: 'Dental Implants',
			destination: 'Bangkok, Thailand',
			rating: 5,
			image:
				'https://images.unsplash.com/photo-1494790108755-2616b612b631?w=150&h=150&fit=crop&crop=face',
			content:
				'Exceptional care and significant savings! The dental team in Bangkok was professional, and the facilities were world-class. I saved 70% compared to US prices while receiving top-quality treatment.',
			date: '2024-11-15',
		},
		{
			id: 2,
			name: 'Michael Chen',
			location: 'Toronto, Canada',
			treatment: 'Heart Surgery',
			destination: 'Mumbai, India',
			rating: 5,
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
			content:
				'Life-changing experience! The cardiac surgeons in Mumbai were incredibly skilled. The post-operative care exceeded my expectations, and the cultural experience was an added bonus.',
			date: '2024-10-28',
		},
		{
			id: 3,
			name: 'Emma Rodriguez',
			location: 'Madrid, Spain',
			treatment: 'Cosmetic Surgery',
			destination: 'Seoul, South Korea',
			rating: 5,
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
			content:
				'Outstanding results and service! The cosmetic surgery center in Seoul was state-of-the-art. The surgeons were meticulous, and the recovery facilities were luxurious. Highly recommend!',
			date: '2024-09-12',
		},
		{
			id: 4,
			name: 'David Thompson',
			location: 'London, UK',
			treatment: 'Eye Surgery',
			destination: 'Istanbul, Turkey',
			rating: 5,
			image:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
			content:
				'Perfect vision restored! The LASIK procedure in Istanbul was seamless. The medical team spoke excellent English, and the technology was cutting-edge. Great value for money.',
			date: '2024-08-20',
		},
		{
			id: 5,
			name: 'Lisa Park',
			location: 'Sydney, Australia',
			treatment: 'Fertility Treatment',
			destination: 'Dubai, UAE',
			rating: 5,
			image:
				'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
			content:
				'Dreams came true! The fertility clinic in Dubai provided compassionate care throughout our IVF journey. The success rate was impressive, and the luxury amenities made the process comfortable.',
			date: '2024-07-10',
		},
		{
			id: 6,
			name: 'Robert Martinez',
			location: 'Los Angeles, USA',
			treatment: 'Orthopedic Surgery',
			destination: 'Mexico City, Mexico',
			rating: 5,
			image:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
			content:
				'Back to full mobility! The knee replacement surgery in Mexico City was expertly performed. The rehabilitation program was comprehensive, and I was walking pain-free within weeks.',
			date: '2024-06-25',
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				className={`h-4 w-4 ${
					index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
				}`}
			/>
		));
	};

	return (
		<section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Patient Success Stories
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
						Hear from thousands of patients who transformed their lives through
						our medical tourism platform
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.id}
							className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
						>
							<CardContent className="p-6 sm:p-8 h-full flex flex-col">
								{/* Quote Icon */}
								<div className="flex justify-between items-start mb-4">
									<Quote className="h-8 w-8 text-blue-600 opacity-60" />
									<div
										className="flex space-x-1"
										role="img"
										aria-label={`${testimonial.rating} out of 5 stars`}
									>
										{renderStars(testimonial.rating)}
									</div>
								</div>

								{/* Testimonial Content */}
								<blockquote className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
									&ldquo;{testimonial.content}&rdquo;
								</blockquote>

								{/* Treatment Info */}
								<div className="mb-4 p-3 bg-blue-50 rounded-lg">
									<div className="text-sm font-semibold text-blue-900 mb-1">
										{testimonial.treatment}
									</div>
									<div className="text-sm text-blue-700">
										{testimonial.destination}
									</div>
								</div>

								{/* Patient Info */}
								<div className="flex items-center space-x-4">
									<div className="relative w-12 h-12 flex-shrink-0">
										<Image
											src={testimonial.image}
											alt={`${testimonial.name} profile picture`}
											width={48}
											height={48}
											className="rounded-full object-cover border-2 border-gray-200"
											sizes="48px"
										/>
									</div>
									<div>
										<div className="font-semibold text-gray-900 text-base">
											{testimonial.name}
										</div>
										<div className="text-sm text-gray-600">
											{testimonial.location}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center mt-12 sm:mt-16">
					<p className="text-lg text-gray-600 mb-6">
						Join thousands of satisfied patients worldwide
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<div className="flex items-center space-x-2">
							<div className="flex space-x-1">{renderStars(5)}</div>
							<span className="text-lg font-semibold text-gray-900">4.9/5</span>
						</div>
						<div className="hidden sm:block w-px h-6 bg-gray-300"></div>
						<span className="text-gray-600">Based on 25,000+ reviews</span>
					</div>
				</div>
			</div>
		</section>
	);
}
