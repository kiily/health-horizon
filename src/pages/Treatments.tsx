
import React from 'react';
import { Heart, ArrowRight, Star, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Treatments = () => {
  const treatments = [
    {
      id: 1,
      name: "Dental Care",
      description: "Complete dental solutions from routine checkups to advanced procedures",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
      procedures: ["Dental Implants", "Veneers", "Orthodontics", "Root Canal"],
      averagePrice: "$1,200 - $3,500",
      duration: "3-7 days",
      popularity: 4.8
    },
    {
      id: 2,
      name: "Cosmetic Surgery",
      description: "Aesthetic procedures to enhance your appearance and confidence",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      procedures: ["Rhinoplasty", "Breast Augmentation", "Liposuction", "Facelift"],
      averagePrice: "$2,500 - $8,000",
      duration: "5-14 days",
      popularity: 4.6
    },
    {
      id: 3,
      name: "Heart Surgery",
      description: "Advanced cardiac procedures with world-renowned specialists",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      procedures: ["Bypass Surgery", "Valve Replacement", "Angioplasty", "Pacemaker"],
      averagePrice: "$15,000 - $35,000",
      duration: "14-21 days",
      popularity: 4.9
    },
    {
      id: 4,
      name: "Orthopedics",
      description: "Joint replacements and bone surgeries for better mobility",
      image: "https://images.unsplash.com/photo-1559757199-62d3d6e4c7a8?w=400&h=300&fit=crop",
      procedures: ["Hip Replacement", "Knee Surgery", "Spine Surgery", "Sports Medicine"],
      averagePrice: "$8,000 - $20,000",
      duration: "7-14 days",
      popularity: 4.7
    },
    {
      id: 5,
      name: "Eye Surgery",
      description: "Vision correction and eye procedures with cutting-edge technology",
      image: "https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=400&h=300&fit=crop",
      procedures: ["LASIK", "Cataract Surgery", "Retinal Surgery", "Glaucoma Treatment"],
      averagePrice: "$1,500 - $5,000",
      duration: "2-5 days",
      popularity: 4.8
    },
    {
      id: 6,
      name: "Fertility Treatment",
      description: "Comprehensive reproductive health and fertility solutions",
      image: "https://images.unsplash.com/photo-1559757212-6cc0d7b4c2a7?w=400&h=300&fit=crop",
      procedures: ["IVF", "IUI", "Egg Freezing", "Fertility Testing"],
      averagePrice: "$3,000 - $12,000",
      duration: "10-30 days",
      popularity: 4.5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-900">MediTravel</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/treatments" className="text-gray-900 font-medium">Treatments</Link>
              <Link to="/destinations" className="text-gray-700 hover:text-gray-900">Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Treatments Worldwide
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Access world-class medical treatments at affordable prices with comprehensive travel packages
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Treatment Categories
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our comprehensive range of medical specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  {treatment.popularity}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{treatment.name}</CardTitle>
                <CardDescription>{treatment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Common Procedures:</h4>
                    <div className="flex flex-wrap gap-1">
                      {treatment.procedures.map((procedure, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {procedure}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{treatment.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">Popular</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-lg font-semibold text-green-600">{treatment.averagePrice}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Explore Options
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized treatment recommendations and package quotes
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
