
import React from 'react';
import { Heart, MapPin, Star, Plane, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Thailand",
      city: "Bangkok",
      description: "Leading destination for cosmetic surgery and dental care with luxury recovery resorts",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      specialties: ["Cosmetic Surgery", "Dental Care", "Wellness"],
      averageSavings: "60-80%",
      flightTime: "15-20 hours",
      rating: 4.8,
      clinics: 45,
      highlights: ["JCI Accredited Hospitals", "English Speaking Staff", "Tourist Attractions"]
    },
    {
      id: 2,
      name: "India",
      city: "Mumbai & Delhi",
      description: "World-renowned for cardiac surgery and complex procedures at fraction of Western costs",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
      specialties: ["Heart Surgery", "Orthopedics", "Cancer Treatment"],
      averageSavings: "70-90%",
      flightTime: "12-16 hours",
      rating: 4.9,
      clinics: 67,
      highlights: ["Top Cardiac Centers", "Experienced Surgeons", "Cultural Experience"]
    },
    {
      id: 3,
      name: "Turkey",
      city: "Istanbul",
      description: "Perfect blend of European standards and affordable pricing for various treatments",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&h=400&fit=crop",
      specialties: ["Eye Surgery", "Hair Transplant", "Dental Care"],
      averageSavings: "50-70%",
      flightTime: "8-12 hours",
      rating: 4.7,
      clinics: 38,
      highlights: ["Modern Facilities", "European Standards", "Historic City"]
    },
    {
      id: 4,
      name: "Mexico",
      city: "Cancun & Tijuana",
      description: "Convenient location for North Americans with beautiful recovery destinations",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=400&fit=crop",
      specialties: ["Dental Care", "Weight Loss Surgery", "Cosmetic Surgery"],
      averageSavings: "40-60%",
      flightTime: "2-6 hours",
      rating: 4.6,
      clinics: 29,
      highlights: ["Close to US", "Beach Recovery", "FDA Approved Facilities"]
    },
    {
      id: 5,
      name: "South Korea",
      city: "Seoul",
      description: "Technology-advanced medical care with innovative procedures and techniques",
      image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=600&h=400&fit=crop",
      specialties: ["Cosmetic Surgery", "Advanced Diagnostics", "Robotics Surgery"],
      averageSavings: "30-50%",
      flightTime: "12-14 hours",
      rating: 4.8,
      clinics: 42,
      highlights: ["Cutting-edge Technology", "K-beauty Expertise", "Modern Infrastructure"]
    },
    {
      id: 6,
      name: "Singapore",
      city: "Singapore",
      description: "Premium healthcare hub with highest medical standards in Asia",
      image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&h=400&fit=crop",
      specialties: ["Complex Surgery", "Cancer Treatment", "Fertility Treatment"],
      averageSavings: "20-40%",
      flightTime: "18-22 hours",
      rating: 4.9,
      clinics: 25,
      highlights: ["World-class Standards", "English Speaking", "Medical Hub"]
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
              <Link to="/treatments" className="text-gray-700 hover:text-gray-900">Treatments</Link>
              <Link to="/destinations" className="text-gray-900 font-medium">Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Tourism Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover world-class healthcare in beautiful destinations around the globe
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Top Medical Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Combine quality healthcare with amazing travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  {destination.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white rounded-lg px-3 py-1">
                  <p className="text-sm">{destination.clinics} Clinics</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  {destination.name}
                </CardTitle>
                <p className="text-gray-600">{destination.city}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{destination.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600">Save {destination.averageSavings}</span>
                    </div>
                    <div className="flex items-center">
                      <Plane className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-600">{destination.flightTime}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {destination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Explore {destination.name}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Travel for Medical Care?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Significant Savings</h3>
              <p className="text-gray-600">
                Save 40-90% on medical procedures compared to home country costs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class Quality</h3>
              <p className="text-gray-600">
                Access to internationally accredited hospitals and top specialists
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recovery Vacation</h3>
              <p className="text-gray-600">
                Combine treatment with a relaxing vacation in beautiful destinations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
