'use client';

import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HeroSectionProps {
	title: string;
	subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
	const treatments = [
		'Dental Care',
		'Cosmetic Surgery',
		'Heart Surgery',
		'Orthopedics',
		'Eye Surgery',
		'Fertility Treatment',
	];

	return (
		<section className="py-8 sm:py-12 lg:py-16 text-center">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{title}
				</h1>
				<p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
					{subtitle}
				</p>

				{/* Search Bar */}
				<Card className="p-4 sm:p-6 shadow-lg border-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						<div className="space-y-2">
							<label className="text-sm font-medium text-gray-700 block text-left">
								Treatment
							</label>
							<select
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
								aria-label="Select treatment type"
							>
								<option>Select treatment</option>
								{treatments.map((treatment) => (
									<option key={treatment} value={treatment}>
										{treatment}
									</option>
								))}
							</select>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-gray-700 block text-left">
								Destination
							</label>
							<div className="relative">
								<MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<input
									type="text"
									placeholder="Where to?"
									className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
									aria-label="Destination"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-gray-700 block text-left">
								Check-in
							</label>
							<Button
								variant="outline"
								className="w-full justify-start text-left font-normal h-12 text-base"
							>
								<Calendar className="mr-2 h-4 w-4" />
								Add dates
							</Button>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium text-gray-700 block text-left">
								Check-out
							</label>
							<Button
								variant="outline"
								className="w-full justify-start text-left font-normal h-12 text-base"
							>
								<Calendar className="mr-2 h-4 w-4" />
								Add dates
							</Button>
						</div>
					</div>

					<div className="mt-6 flex justify-center">
						<Button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg min-h-[48px]">
							<Search className="mr-2 h-5 w-5" />
							Search
						</Button>
					</div>
				</Card>
			</div>
		</section>
	);
}
