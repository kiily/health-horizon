'use client';

import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/shared/Header';
import { PageHeader } from '@/components/sections/PageHeader';

export default function TreatmentsPage() {
	const treatments = [
		{
			id: 1,
			name: 'Dental Care',
			description:
				'Complete dental solutions from routine checkups to advanced procedures',
			image:
				'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
			procedures: ['Dental Implants', 'Veneers', 'Orthodontics', 'Root Canal'],
			averagePrice: '$1,200 - $3,500',
			duration: '3-7 days',
			popularity: 4.8,
		},
		{
			id: 2,
			name: 'Cosmetic Surgery',
			description:
				'Aesthetic procedures to enhance your appearance and confidence',
			image:
				'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
			procedures: [
				'Rhinoplasty',
				'Breast Augmentation',
				'Liposuction',
				'Facelift',
			],
			averagePrice: '$2,500 - $8,000',
			duration: '5-14 days',
			popularity: 4.6,
		},
		{
			id: 3,
			name: 'Heart Surgery',
			description:
				'Advanced cardiac procedures with world-renowned specialists',
			image:
				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
			procedures: [
				'Bypass Surgery',
				'Valve Replacement',
				'Angioplasty',
				'Pacemaker',
			],
			averagePrice: '$15,000 - $35,000',
			duration: '14-21 days',
			popularity: 4.9,
		},
		{
			id: 4,
			name: 'Orthopedics',
			description: 'Joint replacements and bone surgeries for better mobility',
			image:
				'https://images.unsplash.com/photo-1559757199-62d3d6e4c7a8?w=400&h=300&fit=crop',
			procedures: [
				'Hip Replacement',
				'Knee Surgery',
				'Spine Surgery',
				'Sports Medicine',
			],
			averagePrice: '$8,000 - $20,000',
			duration: '7-14 days',
			popularity: 4.7,
		},
		{
			id: 5,
			name: 'Eye Surgery',
			description:
				'Vision correction and eye procedures with cutting-edge technology',
			image:
				'https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=400&h=300&fit=crop',
			procedures: [
				'LASIK',
				'Cataract Surgery',
				'Retinal Surgery',
				'Glaucoma Treatment',
			],
			averagePrice: '$1,500 - $5,000',
			duration: '2-5 days',
			popularity: 4.8,
		},
		{
			id: 6,
			name: 'Fertility Treatment',
			description: 'Comprehensive reproductive health and fertility solutions',
			image:
				'https://images.unsplash.com/photo-1559757212-6cc0d7b4c2a7?w=400&h=300&fit=crop',
			procedures: ['IVF', 'IUI', 'Egg Freezing', 'Fertility Testing'],
			averagePrice: '$3,000 - $12,000',
			duration: '10-30 days',
			popularity: 4.5,
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/treatments" />

			<PageHeader
				title="Medical Treatments"
				subtitle="World-class medical treatments at affordable prices"
			/>

			{/* Treatments Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{treatments.map((treatment) => (
						<Card
							key={treatment.id}
							className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
						>
							<div className="relative">
								<img
									src={treatment.image}
									alt={`${treatment.name} medical treatment`}
									className="w-full h-48 object-cover"
								/>
								<div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center shadow-sm">
									<Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
									{treatment.popularity}
								</div>
							</div>
							<CardContent className="p-4">
								<h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
									{treatment.name}
								</h3>
								<p className="text-gray-600 text-sm mb-3 leading-relaxed">
									{treatment.description}
								</p>

								<div className="flex flex-wrap gap-1 mb-3">
									{treatment.procedures.slice(0, 2).map((procedure, index) => (
										<span
											key={index}
											className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
										>
											{procedure}
										</span>
									))}
									{treatment.procedures.length > 2 && (
										<span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded">
											+{treatment.procedures.length - 2} more
										</span>
									)}
								</div>

								<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
									<div className="flex items-center text-gray-500">
										<Clock className="h-4 w-4 mr-1" />
										{treatment.duration}
									</div>
									<span className="font-semibold text-green-600">
										{treatment.averagePrice}
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
