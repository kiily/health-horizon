'use client';

import React from 'react';
import { Header } from '@/components/shared/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { TreatmentPackagesSection } from '@/components/sections/TreatmentPackagesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/" />

			<HeroSection
				title="Medical care, anywhere"
				subtitle="World-class medical treatments combined with travel experiences"
			/>

			<TreatmentPackagesSection />

			<TestimonialsSection />

			<Footer />
		</div>
	);
}
