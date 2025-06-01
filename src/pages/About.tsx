import React from 'react';
import { Heart, Shield, Users, Award, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
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
              <Link to="/about" className="text-gray-900 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
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
            About MediTravel
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted partner in making quality healthcare accessible worldwide
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe everyone deserves access to world-class healthcare. MediTravel connects 
            patients with internationally accredited hospitals and experienced medical professionals 
            around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">
                Internationally accredited hospitals with proven track records
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personal Care</h3>
              <p className="text-gray-600 text-sm">
                Dedicated coordinators guide you through every step
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">
                Top-rated facilities meeting international standards
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Compassionate</h3>
              <p className="text-gray-600 text-sm">
                Empathetic, personalized support throughout your journey
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-600">Patients Helped</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">25</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Partner Hospitals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
