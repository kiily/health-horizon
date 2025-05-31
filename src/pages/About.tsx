
import React from 'react';
import { Heart, Shield, Users, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
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
              <Link to="/destinations" className="text-gray-700 hover:text-gray-900">Destinations</Link>
              <Link to="/about" className="text-gray-900 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About MediTravel
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner in making quality healthcare accessible and affordable worldwide
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe everyone deserves access to world-class healthcare. MediTravel bridges the gap 
            between quality medical care and affordability by connecting patients with internationally 
            accredited hospitals and experienced medical professionals around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                All our partner hospitals are internationally accredited with proven track records of excellence and safety.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Personal Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Dedicated care coordinators guide you through every step of your medical journey from start to finish.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Quality Assured</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We partner only with top-rated medical facilities that meet or exceed international healthcare standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2018, MediTravel was born from a simple belief: quality healthcare should be 
                  accessible to everyone, regardless of geographic or economic barriers.
                </p>
                <p>
                  Our founders experienced firsthand the challenges of finding affordable, high-quality 
                  medical care. This personal journey led to the creation of a platform that connects 
                  patients with world-class medical facilities in destinations known for their excellence 
                  in healthcare.
                </p>
                <p>
                  Today, we've helped thousands of patients receive life-changing treatments while 
                  experiencing the rich cultures and beautiful destinations our partner countries have to offer.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Medical team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our commitment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Patients Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Partner Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                We provide clear, honest information about treatments, costs, and expectations with no hidden fees.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from partner selection to patient care.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We understand the challenges of medical travel and provide empathetic, personalized support.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our services using technology and feedback to enhance patient experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
