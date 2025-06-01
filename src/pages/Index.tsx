import React, { useState } from 'react';
import { Search, Calendar, MapPin, Heart, Star, Home } from 'lucide-react';
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
      price: 1200,
      specialty: "Dental Care"
    },
    {
      id: 2,
      name: "Seoul Cosmetic Institute",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      rating: 4.8,
      price: 3500,
      specialty: "Cosmetic Surgery"
    },
    {
      id: 3,
      name: "Mumbai Heart Institute",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      rating: 4.9,
      price: 15000,
      specialty: "Heart Surgery"
    },
    {
      id: 4,
      name: "Istanbul Eye Clinic",
      location: "Istanbul, Turkey",
      image: "https://images.unsplash.com/photo-1559757176-4d7e41d2c671?w=400&h=300&fit=crop",
      rating: 4.7,
      price: 2800,
      specialty: "Eye Surgery"
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
              <Link to="/destinations" className="text-gray-700 hover:text-gray-900">Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              <Link to="/" className="flex items-center space-x-1 text-gray-900 font-medium">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical care, anywhere
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            World-class medical treatments combined with travel experiences
          </p>

          {/* Search Bar */}
          <Card className="p-6 shadow-lg border-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Treatment</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Select treatment</option>
                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>{treatment}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Where to?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Check-in</label>
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

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Check-out</label>
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
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Clinics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Treatment Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredClinics.map((clinic) => (
            <Card key={clinic.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  {clinic.rating}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{clinic.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{clinic.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${clinic.price.toLocaleString()}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {clinic.specialty}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
