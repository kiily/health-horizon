
import React, { useState } from 'react';
import { Search, MapPin, Star, Heart, Calendar, Users, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const treatments = [
    'Dental Care', 'Cosmetic Surgery', 'Heart Surgery', 'Orthopedics', 
    'Eye Surgery', 'Fertility Treatment', 'Weight Loss Surgery', 'Cancer Treatment'
  ];

  const clinics = [
    {
      id: 1,
      name: "Bangkok Medical Center",
      location: "Bangkok, Thailand",
      specialties: ["Cosmetic Surgery", "Dental Care"],
      rating: 4.8,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      price: "$2,500",
      packagePrice: "$4,200",
      description: "Leading medical facility with international standards"
    },
    {
      id: 2,
      name: "Mumbai Heart Institute",
      location: "Mumbai, India",
      specialties: ["Heart Surgery", "Orthopedics"],
      rating: 4.9,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      price: "$3,800",
      packagePrice: "$5,500",
      description: "Specialized cardiac care with world-class surgeons"
    },
    {
      id: 3,
      name: "Istanbul Eye Clinic",
      location: "Istanbul, Turkey",
      specialties: ["Eye Surgery", "Cosmetic Surgery"],
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
      price: "$1,800",
      packagePrice: "$3,200",
      description: "Advanced eye care and vision correction procedures"
    },
    {
      id: 4,
      name: "Mexico Dental Paradise",
      location: "Cancun, Mexico",
      specialties: ["Dental Care", "Cosmetic Surgery"],
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      price: "$1,200",
      packagePrice: "$2,800",
      description: "Premium dental care in a tropical paradise"
    }
  ];

  const filteredClinics = clinics.filter(clinic => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         clinic.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTreatment = !selectedTreatment || clinic.specialties.includes(selectedTreatment);
    return matchesSearch && matchesTreatment;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-900">MediTravel</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Treatments</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Destinations</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Health Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find world-class medical treatments with all-inclusive travel packages. 
            Quality healthcare, beautiful destinations, unbeatable value.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Treatments</option>
                  {treatments.map(treatment => (
                    <option key={treatment} value={treatment}>{treatment}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="When?" className="pl-10" />
              </div>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Medical Destinations
          </h2>
          <p className="text-gray-600">{filteredClinics.length} clinics found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredClinics.map((clinic) => (
            <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{clinic.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {clinic.rating} ({clinic.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {clinic.location}
                </p>
                <p className="text-gray-700 mb-4">{clinic.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {clinic.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Treatment only</p>
                      <p className="text-lg font-semibold">{clinic.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">All-inclusive package</p>
                      <p className="text-lg font-semibold text-green-600">{clinic.packagePrice}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Plane className="h-4 w-4 mr-2" />
                      Book Package
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose MediTravel?
            </h2>
            <p className="text-xl text-gray-600">
              We make medical tourism simple, safe, and affordable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class Care</h3>
              <p className="text-gray-600">
                Access to internationally accredited hospitals and certified specialists
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All-Inclusive Packages</h3>
              <p className="text-gray-600">
                Treatment, flights, accommodation, and recovery - all taken care of
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Personal care coordinators to guide you through your entire journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">MediTravel</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for medical tourism worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Treatments</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dental Care</li>
                <li>Cosmetic Surgery</li>
                <li>Heart Surgery</li>
                <li>Orthopedics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Thailand</li>
                <li>India</li>
                <li>Turkey</li>
                <li>Mexico</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediTravel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
