import React from 'react';

interface PageHeaderProps {
	title: string;
	subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
	return (
		<section className="py-8 sm:py-12 lg:py-16 text-center">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{title}
				</h1>
				{subtitle && (
					<p className="text-base sm:text-lg text-gray-600">{subtitle}</p>
				)}
			</div>
		</section>
	);
}
