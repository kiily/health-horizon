
import React from 'react';
import { Heart, MapPin, Star, Plane, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Thailand",
      city: "Bangkok",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      specialties: ["Cosmetic Surgery", "Dental Care"],
      savings: "60-80%",
      rating: 4.8,
      clinics: 45
    },
    {
      id: 2,
      name: "India",
      city: "Mumbai",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
      specialties: ["Heart Surgery", "Orthopedics"],
      savings: "70-90%",
      rating: 4.9,
      clinics: 67
    },
    {
      id: 3,
      name: "Turkey",
      city: "Istanbul",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop",
      specialties: ["Eye Surgery", "Hair Transplant"],
      savings: "50-70%",
      rating: 4.7,
      clinics: 38
    },
    {
      id: 4,
      name: "Mexico",
      city: "Cancun",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop",
      specialties: ["Dental Care", "Weight Loss"],
      savings: "40-60%",
      rating: 4.6,
      clinics: 29
    },
    {
      id: 5,
      name: "South Korea",
      city: "Seoul",
      image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=600&h=400&fit=crop",
      specialties: ["Cosmetic Surgery", "Advanced Tech"],
      savings: "30-50%",
      rating: 4.8,
      clinics: 42
    },
    {
      id: 6,
      name: "Singapore",
      city: "Singapore",
      image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&h=400&fit=crop",
      specialties: ["Complex Surgery", "Cancer Care"],
      savings: "20-40%",
      rating: 4.9,
      clinics: 25
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-gray-900">MediTravel</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/treatments" className="text-gray-700 hover:text-gray-900">Treatments</Link>
              <Link to="/destinations" className="text-gray-900 font-medium">Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Destinations
          </h1>
          <p className="text-lg text-gray-600">
            World-class healthcare in beautiful locations
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  {destination.rating}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <h3 className="font-semibold text-gray-900">{destination.name}</h3>
                  <span className="text-gray-500 text-sm ml-2">{destination.city}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {destination.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Save {destination.savings}
                  </div>
                  <span className="text-gray-500">{destination.clinics} clinics</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
