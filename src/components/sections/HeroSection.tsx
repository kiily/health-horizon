'use client';

import React, { useState } from 'react';
import { Search, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';

interface HeroSectionProps {
	title: string;
	subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
	const [checkInDate, setCheckInDate] = useState<Date>();
	const [checkOutDate, setCheckOutDate] = useState<Date>();
	const [selectedTreatment, setSelectedTreatment] = useState('');
	const [destination, setDestination] = useState('');
	const [patients, setPatients] = useState(1);

	const treatments = [
		'Urology Treatments',
		'Gynecology & Obstetrics',
		'Gastroenterology',
		'Vascular Surgery',
		'Plastic & Aesthetic Medicine',
		'General Surgery',
		'Eye Surgery & Ophthalmology',
		'Family Medicine & General Practice',
		'Travel Medicine',
		'Clinical Psychology',
		'Diagnostic Services & Clinical Tests',
	];

	const popularDestinations = [
		'Bangkok, Thailand',
		'Seoul, South Korea',
		'Mumbai, India',
		'Istanbul, Turkey',
		'Mexico City, Mexico',
		'Dubai, UAE',
	];

	const handleSearch = () => {
		// Handle search functionality
		console.log({
			treatment: selectedTreatment,
			destination,
			checkIn: checkInDate,
			checkOut: checkOutDate,
			patients,
		});
	};

	return (
		<section className="relative py-16 sm:py-20 lg:py-24 text-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				{/* <Image
					src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop"
					alt="Modern medical facility"
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/> */}
				<div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/60"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-white mb-8 sm:mb-12">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
						{title}
					</h1>
					<p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
						{subtitle}
					</p>
				</div>

				{/* Enhanced Search Bar */}
				<Card className="p-6 sm:p-8 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
						{/* Treatment Selection */}
						<div className="space-y-2">
							<label
								htmlFor="treatment-select"
								className="text-sm font-semibold text-gray-700 block text-left"
							>
								Treatment Type
							</label>
							<select
								id="treatment-select"
								value={selectedTreatment}
								onChange={(e) => setSelectedTreatment(e.target.value)}
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white"
								aria-label="Select medical treatment type"
							>
								<option value="">Select treatment</option>
								{treatments.map((treatment) => (
									<option key={treatment} value={treatment}>
										{treatment}
									</option>
								))}
							</select>
						</div>

						{/* Destination */}
						<div className="space-y-2">
							<label
								htmlFor="destination-input"
								className="text-sm font-semibold text-gray-700 block text-left"
							>
								Destination
							</label>
							<div className="relative">
								<MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<input
									id="destination-input"
									type="text"
									value={destination}
									onChange={(e) => setDestination(e.target.value)}
									placeholder="Where would you like to go?"
									list="destinations"
									className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
									aria-label="Destination city or country"
								/>
								<datalist id="destinations">
									{popularDestinations.map((dest) => (
										<option key={dest} value={dest} />
									))}
								</datalist>
							</div>
						</div>

						{/* Check-in Date */}
						<div className="space-y-2">
							<label className="text-sm font-semibold text-gray-700 block text-left">
								Check-in Date
							</label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className="w-full justify-start text-left font-normal h-12 text-base border-gray-300 hover:border-blue-500"
										aria-label="Select check-in date"
									>
										<Calendar className="mr-2 h-4 w-4" />
										{checkInDate
											? format(checkInDate, 'MMM dd, yyyy')
											: 'Check-in'}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<CalendarComponent
										mode="single"
										selected={checkInDate}
										onSelect={setCheckInDate}
										disabled={(date) => date < new Date()}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>

						{/* Check-out Date */}
						<div className="space-y-2">
							<label className="text-sm font-semibold text-gray-700 block text-left">
								Check-out Date
							</label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className="w-full justify-start text-left font-normal h-12 text-base border-gray-300 hover:border-blue-500"
										aria-label="Select check-out date"
									>
										<Calendar className="mr-2 h-4 w-4" />
										{checkOutDate
											? format(checkOutDate, 'MMM dd, yyyy')
											: 'Check-out'}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<CalendarComponent
										mode="single"
										selected={checkOutDate}
										onSelect={setCheckOutDate}
										disabled={(date) => date < (checkInDate || new Date())}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>

						{/* Number of Patients */}
						<div className="space-y-2">
							<label
								htmlFor="patients-select"
								className="text-sm font-semibold text-gray-700 block text-left"
							>
								Patients
							</label>
							<div className="relative">
								<Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<select
									id="patients-select"
									value={patients}
									onChange={(e) => setPatients(Number(e.target.value))}
									className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white"
									aria-label="Number of patients"
								>
									{[1, 2, 3, 4, 5].map((num) => (
										<option key={num} value={num}>
											{num} {num === 1 ? 'Patient' : 'Patients'}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					{/* Search Button */}
					<div className="mt-8 flex justify-center">
						<Button
							onClick={handleSearch}
							className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-12 py-4 rounded-full text-lg font-semibold min-h-[56px] shadow-lg transition-all duration-200 hover:shadow-xl"
						>
							<Search className="mr-2 h-5 w-5" />
							Search Treatments
						</Button>
					</div>
				</Card>

				{/* Quick Stats */}
				<div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
					<div className="text-center">
						<div className="text-3xl sm:text-4xl font-bold text-blue-200">
							500+
						</div>
						<div className="text-blue-100 mt-1">Medical Centers</div>
					</div>
					<div className="text-center">
						<div className="text-3xl sm:text-4xl font-bold text-blue-200">
							50+
						</div>
						<div className="text-blue-100 mt-1">Countries</div>
					</div>
					<div className="text-center">
						<div className="text-3xl sm:text-4xl font-bold text-blue-200">
							100K+
						</div>
						<div className="text-blue-100 mt-1">Happy Patients</div>
					</div>
				</div>
			</div>
		</section>
	);
}
