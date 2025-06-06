'use client';

import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/shared/Header';
import { PageHeader } from '@/components/sections/PageHeader';

export default function TreatmentsPage() {
	const treatments = [
		// UROLOGY
		{
			id: 1,
			name: 'Urology Treatments',
			description:
				'Comprehensive urological procedures and consultations for male reproductive and urinary system health',
			image:
				'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
			procedures: [
				'Circumcision',
				'Vasectomy',
				'Hydrocele Surgery',
				'Genital Warts Treatment',
				'Urinary Incontinence Treatment',
				'Urological Consultations',
			],
			averagePrice: '$800 - $3,500',
			duration: '1-3 days',
			popularity: 4.8,
			category: 'Urology',
		},
		// GYNECOLOGY & OBSTETRICS
		{
			id: 2,
			name: 'Gynecology & Obstetrics',
			description:
				"Complete women's health services including consultations, surgeries, and diagnostic examinations",
			image:
				'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
			procedures: [
				'Routine Gynecological Consultations',
				'Tubal Ligation',
				'Hysteroscopy',
				'Obstetric Ultrasound',
				'Gynecological Ultrasound',
				'Pregnancy Follow-up',
			],
			averagePrice: '$200 - $2,500',
			duration: '1-2 days',
			popularity: 4.9,
			category: 'Gynecology',
		},
		// GASTROENTEROLOGY
		{
			id: 3,
			name: 'Gastroenterology',
			description:
				'Advanced digestive system treatments and weight management procedures',
			image:
				'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
			procedures: [
				'Gastric Balloon',
				'Bariatric Surgery',
				'Endoscopy',
				'Colonoscopy',
				'Gastroenterology Consultations',
			],
			averagePrice: '$1,500 - $12,000',
			duration: '2-7 days',
			popularity: 4.7,
			category: 'Gastroenterology',
		},
		// VASCULAR SURGERY
		{
			id: 4,
			name: 'Vascular Surgery',
			description:
				'Specialized procedures for blood vessel and circulation system disorders',
			image:
				'https://images.unsplash.com/photo-1559757199-62d3d6e4c7a8?w=400&h=300&fit=crop',
			procedures: [
				'Isolated Ligation',
				'Ligation & Excision',
				'Vascular Surgery Consultations',
			],
			averagePrice: '$1,200 - $4,000',
			duration: '1-3 days',
			popularity: 4.6,
			category: 'Vascular Surgery',
		},
		// PLASTIC & AESTHETIC MEDICINE
		{
			id: 5,
			name: 'Plastic & Aesthetic Medicine',
			description:
				'Cosmetic surgeries and non-invasive aesthetic treatments for enhanced appearance',
			image:
				'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
			procedures: [
				'Liposuction',
				'Botox Injections',
				'Hyaluronic Acid Fillers',
				'Bioplasty',
				'PDO Thread Lift',
				'Chemical Peels',
				'Skinboosters',
				'Regenerative Medicine',
			],
			averagePrice: '$300 - $8,000',
			duration: '1-5 days',
			popularity: 4.8,
			category: 'Aesthetic Medicine',
		},
		// GENERAL SURGERY
		{
			id: 6,
			name: 'General Surgery',
			description:
				'Wide range of surgical procedures for various conditions and hernia repairs',
			image:
				'https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=400&h=300&fit=crop',
			procedures: [
				'Hernia Repair',
				'Hemorrhoidectomy',
				'Benign Tumor Removal',
				'Cyst Removal',
				'Fistulectomy',
				'Sphincteroctomy',
			],
			averagePrice: '$1,000 - $5,000',
			duration: '1-4 days',
			popularity: 4.7,
			category: 'General Surgery',
		},
		// OPHTHALMOLOGY
		{
			id: 7,
			name: 'Eye Surgery & Ophthalmology',
			description: 'Vision correction and comprehensive eye care procedures',
			image:
				'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?w=400&h=300&fit=crop',
			procedures: [
				'Cataract Surgery',
				'Strabismus Surgery',
				'Optometry Examinations',
			],
			averagePrice: '$800 - $3,000',
			duration: '1-2 days',
			popularity: 4.9,
			category: 'Ophthalmology',
		},
		// FAMILY MEDICINE & GENERAL PRACTICE
		{
			id: 8,
			name: 'Family Medicine & General Practice',
			description:
				'Comprehensive healthcare services for routine medical needs and health maintenance',
			image:
				'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
			procedures: [
				'General Practice Consultations',
				'Family Medicine Consultations',
				'Health Checkups',
			],
			averagePrice: '$100 - $300',
			duration: '1 day',
			popularity: 4.5,
			category: 'General Practice',
		},
		// TRAVEL MEDICINE
		{
			id: 9,
			name: 'Travel Medicine',
			description:
				'Pre-travel health assessments and specialized medical consultations for travelers',
			image:
				'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
			procedures: [
				'Travel Medicine Consultations',
				'Pre-travel Health Assessments',
				'Vaccination Recommendations',
			],
			averagePrice: '$150 - $400',
			duration: '1 day',
			popularity: 4.4,
			category: 'Travel Medicine',
		},
		// CLINICAL PSYCHOLOGY
		{
			id: 10,
			name: 'Clinical Psychology',
			description:
				'Mental health services and psychological consultations for emotional well-being',
			image:
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
			procedures: [
				'Clinical Psychology Consultations',
				'Mental Health Assessments',
				'Therapy Sessions',
			],
			averagePrice: '$80 - $200',
			duration: '1 day',
			popularity: 4.6,
			category: 'Psychology',
		},
		// DIAGNOSTIC SERVICES
		{
			id: 11,
			name: 'Diagnostic Services & Clinical Tests',
			description:
				'Comprehensive diagnostic procedures and laboratory testing services',
			image:
				'https://images.unsplash.com/photo-1559757212-6cc0d7b4c2a7?w=400&h=300&fit=crop',
			procedures: [
				'Blood Tests',
				'Biopsy Procedures',
				'Ultrasound',
				'Clinical Laboratory Tests',
				'Pathology Services',
			],
			averagePrice: '$50 - $800',
			duration: '1 day',
			popularity: 4.3,
			category: 'Diagnostics',
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/treatments" />

			<PageHeader
				title="Medical Treatments"
				subtitle="Comprehensive medical procedures and healthcare services at Aeger Prima Clinic, Lisbon"
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
								<div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 text-xs font-medium rounded">
									{treatment.category}
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
