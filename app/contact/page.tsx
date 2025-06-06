'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-white">
			<Header activePage="/contact" />

			<PageHeader
				title="Contact Us"
				subtitle="Get in touch with our medical tourism experts"
			/>

			{/* Contact Info & Form */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
				{/* Contact Methods */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
					<Card className="text-center p-6">
						<CardContent className="p-0">
							<Mail className="h-8 w-8 text-red-500 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Email
							</h3>
							<p className="text-gray-600">info@healthhorizon.com</p>
						</CardContent>
					</Card>
					<Card className="text-center p-6">
						<CardContent className="p-0">
							<Phone className="h-8 w-8 text-red-500 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Phone
							</h3>
							<p className="text-gray-600">+1 (555) 123-4567</p>
						</CardContent>
					</Card>
					<Card className="text-center p-6">
						<CardContent className="p-0">
							<MapPin className="h-8 w-8 text-red-500 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Address
							</h3>
							<p className="text-gray-600">
								123 Medical Plaza, Healthcare City
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Contact Form */}
				<Card className="max-w-2xl mx-auto">
					<CardContent className="p-6 sm:p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
							Send us a Message
						</h2>
						<form className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										First Name
									</label>
									<input
										type="text"
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
										placeholder="John"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Last Name
									</label>
									<input
										type="text"
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
										placeholder="Doe"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
									placeholder="john.doe@example.com"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Treatment Interest
								</label>
								<select
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
									aria-label="Select treatment interest"
								>
									<option>Select a treatment</option>
									<option>Urology Treatments</option>
									<option>Gynecology & Obstetrics</option>
									<option>Gastroenterology</option>
									<option>Vascular Surgery</option>
									<option>Plastic & Aesthetic Medicine</option>
									<option>General Surgery</option>
									<option>Eye Surgery & Ophthalmology</option>
									<option>Family Medicine & General Practice</option>
									<option>Travel Medicine</option>
									<option>Clinical Psychology</option>
									<option>Diagnostic Services & Clinical Tests</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									rows={4}
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
									placeholder="Tell us about your medical needs and how we can help..."
								/>
							</div>
							<Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3">
								<Send className="h-4 w-4 mr-2" />
								Send Message
							</Button>
						</form>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
