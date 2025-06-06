'use client';

import React from 'react';
import { Header } from '@/components/shared/Header';
import { PageHeader } from '@/components/sections/PageHeader';

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/about" />

			<PageHeader title="About Health Horizon" />

			{/* Content */}
			<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
				<div className="prose prose-lg max-w-none">
					<p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
						Health Horizon is your trusted partner in medical tourism,
						connecting patients with world-class healthcare providers around the
						globe. We believe that quality healthcare should be accessible and
						affordable for everyone.
					</p>
					<p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
						Our platform offers comprehensive medical tourism solutions, from
						treatment planning to travel arrangements, ensuring a seamless
						experience for patients seeking medical care abroad.
					</p>
					<p className="text-base sm:text-lg text-gray-600 leading-relaxed">
						With partnerships across leading medical destinations, we provide
						access to top-tier treatments at significantly reduced costs,
						without compromising on quality or safety.
					</p>
				</div>

				{/* Mission & Values */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-gray-50 p-6 rounded-lg">
						<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
							Our Mission
						</h2>
						<p className="text-gray-600 leading-relaxed">
							To make high-quality healthcare accessible to everyone by
							connecting patients with the best medical facilities worldwide at
							affordable prices.
						</p>
					</div>
					<div className="bg-gray-50 p-6 rounded-lg">
						<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
							Our Values
						</h2>
						<ul className="text-gray-600 space-y-2">
							<li>• Quality and safety first</li>
							<li>• Transparent pricing</li>
							<li>• Personalized care</li>
							<li>• Cultural sensitivity</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
