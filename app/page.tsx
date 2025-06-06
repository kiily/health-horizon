'use client';

import React from 'react';
import { Header } from '@/components/shared/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ClinicCard } from '@/components/cards/ClinicCard';

export default function HomePage() {
	const featuredClinics = [
		{
			id: 1,
			name: 'Bangkok Dental Center',
			location: 'Bangkok, Thailand',
			image:
				'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
			rating: 4.9,
			price: 1200,
			specialty: 'Dental Care',
		},
		{
			id: 2,
			name: 'Seoul Cosmetic Institute',
			location: 'Seoul, South Korea',
			image:
				'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
			rating: 4.8,
			price: 3500,
			specialty: 'Cosmetic Surgery',
		},
		{
			id: 3,
			name: 'Mumbai Heart Institute',
			location: 'Mumbai, India',
			image:
				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
			rating: 4.9,
			price: 15000,
			specialty: 'Heart Surgery',
		},
		{
			id: 4,
			name: 'Istanbul Eye Clinic',
			location: 'Istanbul, Turkey',
			image:
				'https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=400&h=300&fit=crop',
			rating: 4.7,
			price: 2800,
			specialty: 'Eye Surgery',
		},
	];

	const handleClinicClick = (clinicId: number) => {
		// Handle clinic selection - could navigate to detail page
		console.log(`Selected clinic: ${clinicId}`);
	};

	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/" />

			<HeroSection
				title="Medical care, anywhere"
				subtitle="World-class medical treatments combined with travel experiences"
			/>

			{/* Featured Clinics */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
					Featured Treatment Packages
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
					{featuredClinics.map((clinic) => (
						<ClinicCard
							key={clinic.id}
							{...clinic}
							onClick={() => handleClinicClick(clinic.id)}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
