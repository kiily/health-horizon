'use client';

import React from 'react';
import { MapPin, Star, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/shared/Header';
import { PageHeader } from '@/components/sections/PageHeader';

export default function DestinationsPage() {
	const destinations = [
		{
			id: 1,
			name: 'Thailand',
			city: 'Bangkok',
			image:
				'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
			specialties: ['Cosmetic Surgery', 'Dental Care'],
			savings: '60-80%',
			rating: 4.8,
			clinics: 45,
		},
		{
			id: 2,
			name: 'India',
			city: 'Mumbai',
			image:
				'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop',
			specialties: ['Heart Surgery', 'Orthopedics'],
			savings: '70-90%',
			rating: 4.9,
			clinics: 67,
		},
		{
			id: 3,
			name: 'Turkey',
			city: 'Istanbul',
			image:
				'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop',
			specialties: ['Eye Surgery', 'Hair Transplant'],
			savings: '50-70%',
			rating: 4.7,
			clinics: 38,
		},
		{
			id: 4,
			name: 'Mexico',
			city: 'Cancun',
			image:
				'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop',
			specialties: ['Dental Care', 'Weight Loss'],
			savings: '40-60%',
			rating: 4.6,
			clinics: 29,
		},
		{
			id: 5,
			name: 'South Korea',
			city: 'Seoul',
			image:
				'https://images.unsplash.com/photo-1549693578-d683be217e58?w=600&h=400&fit=crop',
			specialties: ['Cosmetic Surgery', 'Advanced Tech'],
			savings: '30-50%',
			rating: 4.8,
			clinics: 42,
		},
		{
			id: 6,
			name: 'Singapore',
			city: 'Singapore',
			image:
				'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&h=400&fit=crop',
			specialties: ['Complex Surgery', 'Cancer Care'],
			savings: '20-40%',
			rating: 4.9,
			clinics: 25,
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/destinations" />

			<PageHeader
				title="Medical Destinations"
				subtitle="World-class healthcare in beautiful locations"
			/>

			{/* Destinations Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{destinations.map((destination) => (
						<Card
							key={destination.id}
							className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
						>
							<div className="relative">
								<img
									src={destination.image}
									alt={`${destination.name} medical tourism destination`}
									className="w-full h-48 object-cover"
								/>
								<div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center shadow-sm">
									<Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
									{destination.rating}
								</div>
							</div>
							<CardContent className="p-4">
								<div className="flex items-start mb-2">
									<MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-gray-900 text-base sm:text-lg">
											{destination.name}
										</h3>
										<span className="text-gray-500 text-sm">
											{destination.city}
										</span>
									</div>
								</div>

								<div className="flex flex-wrap gap-1 mb-3">
									{destination.specialties.map((specialty, index) => (
										<span
											key={index}
											className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
										>
											{specialty}
										</span>
									))}
								</div>

								<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
									<div className="flex items-center text-green-600">
										<DollarSign className="h-4 w-4 mr-1" />
										Save {destination.savings}
									</div>
									<span className="text-gray-500">
										{destination.clinics} clinics
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
