
import React, { useState } from 'react';
import { Search, Calendar, MapPin, Users, Heart, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const treatments = [
    'Dental Care',
    'Cosmetic Surgery',
    'Heart Surgery',
    'Orthopedics',
    'Eye Surgery',
    'Fertility Treatment'
  ];

  const featuredClinics = [
    {
      id: 1,
      name: "Bangkok Dental Center",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 245,
      price: 1200,
      specialty: "Dental Care",
      packageIncludes: "Treatment + Hotel + Flights"
    },
    {
      id: 2,
      name: "Seoul Cosmetic Institute",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 189,
      price: 3500,
      specialty: "Cosmetic Surgery",
      packageIncludes: "Treatment + Recovery Resort + Flights"
    },
    {
      id: 3,
      name: "Mumbai Heart Institute",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 312,
      price: 15000,
      specialty: "Heart Surgery",
      packageIncludes: "Treatment + Hospital Stay + Accommodation"
    },
    {
      id: 4,
      name: "Istanbul Eye Clinic",
      location: "Istanbul, Turkey",
      image: "https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      price: 2800,
      specialty: "Eye Surgery",
      packageIncludes: "Treatment + City Hotel + Airport Transfer"
    }
  ];

  const destinations = [
    {
      name: "Thailand",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      treatments: "Dental & Cosmetic"
    },
    {
      name: "India",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=200&fit=crop",
      treatments: "Heart & Complex Surgery"
    },
    {
      name: "Turkey",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=300&h=200&fit=crop",
      treatments: "Eye & Hair Transplant"
    },
    {
      name: "Mexico",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=300&h=200&fit=crop",
      treatments: "Dental & Weight Loss"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-red-500">MediTravel</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/treatments" className="text-gray-700 hover:text-gray-900 font-medium">Treatments</Link>
              <Link to="/destinations" className="text-gray-700 hover:text-gray-900 font-medium">Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex">Become a Partner</Button>
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Medical care,<br />
              <span className="text-red-500">anywhere</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              World-class medical treatments combined with unforgettable travel experiences
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 shadow-xl border-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Treatment Type */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Treatment</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Select treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Where to?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Check-in Date */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Check-in</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal h-12">
                        <Calendar className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "MMM dd") : "Add dates"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out Date */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Check-out</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal h-12">
                        <Calendar className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "MMM dd") : "Add dates"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 text-lg rounded-full">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Clinics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Treatment Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredClinics.map((clinic) => (
              <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{clinic.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{clinic.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{clinic.location}</p>
                  <p className="text-gray-700 text-sm mb-3">{clinic.packageIncludes}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold">${clinic.price.toLocaleString()}</span>
                      <span className="text-gray-600 text-sm"> total</span>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {clinic.specialty}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold">{destination.name}</h3>
                  <p className="text-white text-sm opacity-90">{destination.treatments}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MediTravel?</h2>
            <p className="text-xl text-gray-600">Comprehensive medical tourism made simple</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Clinics</h3>
              <p className="text-gray-600">All our partner clinics are internationally accredited and verified</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">World-renowned specialists and cutting-edge medical technology</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All-Inclusive</h3>
              <p className="text-gray-600">Treatment, accommodation, and travel all arranged for you</p>
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
              <p className="text-gray-400">Your trusted partner for medical tourism worldwide.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Treatments</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/treatments" className="hover:text-white">Dental Care</Link></li>
                <li><Link to="/treatments" className="hover:text-white">Cosmetic Surgery</Link></li>
                <li><Link to="/treatments" className="hover:text-white">Heart Surgery</Link></li>
                <li><Link to="/treatments" className="hover:text-white">Eye Surgery</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/destinations" className="hover:text-white">Thailand</Link></li>
                <li><Link to="/destinations" className="hover:text-white">India</Link></li>
                <li><Link to="/destinations" className="hover:text-white">Turkey</Link></li>
                <li><Link to="/destinations" className="hover:text-white">Mexico</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
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
