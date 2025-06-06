import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ClinicCardProps {
	id: number;
	name: string;
	location: string;
	image: string;
	rating: number;
	price: number;
	specialty: string;
	onClick?: () => void;
}

export function ClinicCard({
	name,
	location,
	image,
	rating,
	price,
	specialty,
	onClick,
}: ClinicCardProps) {
	return (
		<Card
			className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
			onClick={onClick}
		>
			<div className="relative">
				<img
					src={image}
					alt={`${name} medical facility`}
					className="w-full h-48 object-cover"
				/>
				<div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center shadow-sm">
					<Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
					{rating}
				</div>
			</div>
			<CardContent className="p-4">
				<h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">
					{name}
				</h3>
				<p className="text-gray-600 text-sm mb-3">{location}</p>
				<div className="flex justify-between items-center">
					<span className="text-lg font-bold text-gray-900">
						${price.toLocaleString()}
					</span>
					<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
						{specialty}
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
