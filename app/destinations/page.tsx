'use client';

import React from 'react';
import { MapPin, Star, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/shared/Header';
import { PageHeader } from '@/components/sections/PageHeader';

export default function ClinicsPage() {
	const clinics = [
		{
			id: 1,
			name: 'Aeger Prima Medical Center',
			address: 'Rua Mãe de Água, 15 B, Lisboa',
			neighborhood: 'Príncipe Real',
			image:
				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
			specialties: [
				'Urology Treatments',
				'Gastroenterology',
				'Plastic & Aesthetic Medicine',
				'General Surgery',
				'Gynecology & Obstetrics',
				'Eye Surgery & Ophthalmology',
			],
			rating: 4.9,
			phone: '+351 211 510 600',
			workingHours: 'Mon-Fri: 9am-7pm',
			description:
				'State-of-the-art medical facility in the heart of Lisbon with 8 modern medical rooms and 2 advanced surgery suites.',
			features: [
				'8 Medical Rooms',
				'2 Surgery Rooms',
				'Advanced Equipment',
				'JCI Accredited',
				'Multilingual Staff',
				'Central Location',
			],
			established: '2018',
			doctors: 7,
		},
		{
			id: 2,
			name: 'Lisboa Health & Wellness Clinic',
			address: 'Avenida da Liberdade, 225, Lisboa',
			neighborhood: 'Avenidas Novas',
			image:
				'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
			specialties: [
				'Family Medicine & General Practice',
				'Travel Medicine',
				'Clinical Psychology',
				'Diagnostic Services & Clinical Tests',
				'Vascular Surgery',
				'Plastic & Aesthetic Medicine',
			],
			rating: 4.8,
			phone: '+351 21 123 4567',
			workingHours: 'Mon-Sat: 8am-8pm',
			description:
				'Comprehensive healthcare facility specializing in preventive medicine and wellness services with modern diagnostic equipment.',
			features: [
				'12 Consultation Rooms',
				'Full Laboratory',
				'Imaging Center',
				'Wellness Programs',
				'Extended Hours',
				'Modern Facilities',
			],
			established: '2015',
			doctors: 12,
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/destinations" />

			<PageHeader
				title="Our Medical Clinics"
				subtitle="Premium healthcare facilities in the heart of Lisbon"
			/>

			{/* Clinics Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
					{clinics.map((clinic) => (
						<Card
							key={clinic.id}
							className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
						>
							<div className="relative">
								<img
									src={clinic.image}
									alt={`${clinic.name} medical facility`}
									className="w-full h-64 object-cover"
								/>
								<div className="absolute top-4 right-4 bg-white rounded-full px-3 py-2 text-sm font-medium flex items-center shadow-lg">
									<Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
									{clinic.rating}
								</div>
								<div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">
									Est. {clinic.established}
								</div>
							</div>

							<CardContent className="p-6">
								{/* Clinic Header */}
								<div className="mb-4">
									<h3 className="font-bold text-gray-900 text-xl mb-2">
										{clinic.name}
									</h3>
									<div className="flex items-start text-gray-600 mb-2">
										<MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
										<div>
											<p className="text-sm">{clinic.address}</p>
											<p className="text-sm text-gray-500">
												{clinic.neighborhood}
											</p>
										</div>
									</div>
								</div>

								{/* Description */}
								<p className="text-gray-600 text-sm mb-4 leading-relaxed">
									{clinic.description}
								</p>

								{/* Contact Info */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm">
									<div className="flex items-center text-gray-600">
										<Phone className="h-4 w-4 mr-2" />
										{clinic.phone}
									</div>
									<div className="flex items-center text-gray-600">
										<Clock className="h-4 w-4 mr-2" />
										{clinic.workingHours}
									</div>
								</div>

								{/* Features */}
								<div className="mb-4">
									<h4 className="font-semibold text-gray-900 mb-2 text-sm">
										Clinic Features:
									</h4>
									<div className="flex flex-wrap gap-1">
										{clinic.features.slice(0, 4).map((feature, index) => (
											<span
												key={index}
												className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
											>
												{feature}
											</span>
										))}
										{clinic.features.length > 4 && (
											<span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded">
												+{clinic.features.length - 4} more
											</span>
										)}
									</div>
								</div>

								{/* Specialties */}
								<div className="mb-4">
									<h4 className="font-semibold text-gray-900 mb-2 text-sm">
										Medical Specialties:
									</h4>
									<div className="flex flex-wrap gap-1">
										{clinic.specialties.slice(0, 3).map((specialty, index) => (
											<span
												key={index}
												className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded"
											>
												{specialty}
											</span>
										))}
										{clinic.specialties.length > 3 && (
											<span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded">
												+{clinic.specialties.length - 3} more specialties
											</span>
										)}
									</div>
								</div>

								{/* Stats */}
								<div className="flex justify-between items-center pt-4 border-t border-gray-200 text-sm">
									<span className="text-gray-600">
										{clinic.doctors} Specialist Doctors
									</span>
									<span className="font-semibold text-blue-600">
										View Details →
									</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Additional Info Section */}
			<section className="bg-gray-50 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Why Choose Our Lisbon Clinics?
						</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Both facilities are strategically located in premium areas of
							Lisbon, offering easy access via metro and parking, while
							maintaining the highest standards of medical care and patient
							comfort.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<MapPin className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">
								Prime Locations
							</h3>
							<p className="text-gray-600 text-sm">
								Conveniently located in central Lisbon with excellent transport
								links
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">Quality Care</h3>
							<p className="text-gray-600 text-sm">
								Highly rated facilities with experienced medical professionals
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Clock className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">
								Flexible Hours
							</h3>
							<p className="text-gray-600 text-sm">
								Extended operating hours to accommodate your schedule
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
