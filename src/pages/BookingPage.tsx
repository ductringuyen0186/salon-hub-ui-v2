import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BookingForm from '@/components/BookingForm';
import Navigation from '@/components/Navigation';
import {
  Calendar,
  Clock,
  Users,
  Star,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { services, employees } from '@/lib/bookingData';

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState('appointment');
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleBookingComplete = (booking: any) => {
    setBookingComplete(true);
    console.log('Booking completed:', booking);
  };

  const popularServices = services.filter(service => service.popular);
  const availableEmployees = employees.filter(emp => emp.available);

  return (
    <div className="min-h-screen bg-dynamic-background">
      {/* Header */}
      <Navigation
        showBackButton={true}
        title="Book Your Appointment"
        subtitle="Schedule your visit or join our walk-in list"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Info Bar */}
          <div className="bg-dynamic-surface border border-dynamic-border rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dynamic-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-dynamic-primary" />
                  </div>
                  <div>
                    <span className="font-light text-dynamic-text text-base sm:text-lg">Available Today</span>
                    <p className="text-dynamic-primary font-medium text-sm sm:text-base">{availableEmployees.length} Expert Technicians</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dynamic-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-dynamic-accent" />
                  </div>
                  <div>
                    <span className="font-light text-dynamic-text text-base sm:text-lg">Open Daily</span>
                    <p className="text-dynamic-accent font-medium text-sm sm:text-base">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-auto text-center sm:text-right">
                <div className="bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  Walk-ins Always Welcome
                </div>
              </div>
            </div>
          </div>
          {/* Service Overview */}
          <div className="mb-8 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8 px-4">
              <h2 className="text-2xl sm:text-3xl font-light text-dynamic-text mb-3">Curated Wellness Experiences</h2>
              <p className="text-sm sm:text-base text-dynamic-text-secondary font-light max-w-2xl mx-auto">
                Discover our signature treatments and meet our expert artisans dedicated to your beauty and wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Popular Services */}
              <Card className="bg-dynamic-surface border-dynamic-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-dynamic-text">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <span className="font-light text-xl">Signature Treatments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularServices.map((service) => (
                      <div key={service.id} className="flex justify-between items-center p-3 bg-dynamic-background rounded-lg border border-dynamic-border/50">
                        <div>
                          <p className="font-medium text-dynamic-text">{service.name}</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">
                            {service.duration} minutes • ${service.price}
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Most Loved</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Expert Artisans */}
              <Card className="bg-dynamic-surface border-dynamic-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-dynamic-text">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-light text-xl">Expert Artisans</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {availableEmployees.map((employee) => (
                      <div key={employee.id} className="flex justify-between items-center p-3 bg-dynamic-background rounded-lg border border-dynamic-border/50">
                        <div>
                          <p className="font-medium text-dynamic-text">{employee.name}</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">
                            {employee.specialties.join(', ')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-medium">Available</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Live Status */}
              <Card className="bg-dynamic-surface border-dynamic-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-dynamic-text">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-light text-xl">Live Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-dynamic-background rounded-lg border border-dynamic-border/50">
                      <span className="text-dynamic-text-secondary font-light">Hours Today</span>
                      <span className="text-dynamic-text font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-dynamic-background rounded-lg border border-dynamic-border/50">
                      <span className="text-dynamic-text-secondary font-light">Current Wait</span>
                      <span className="text-dynamic-text font-medium">~25 minutes</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-dynamic-background rounded-lg border border-dynamic-border/50">
                      <span className="text-dynamic-text-secondary font-light">Walk-ins</span>
                      <span className="text-green-600 font-medium">Always Welcome</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-dynamic-background rounded-lg border border-dynamic-border/50">
                      <span className="text-dynamic-text-secondary font-light">Online Booking</span>
                      <span className="text-blue-600 font-medium">Available Now</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Options */}
          <div className="text-center mb-6 sm:mb-8 px-4">
            <h2 className="text-2xl sm:text-3xl font-light text-dynamic-text mb-3">Choose Your Experience</h2>
            <p className="text-sm sm:text-base text-dynamic-text-secondary font-light max-w-2xl mx-auto">
              Select your preferred booking method for the perfect spa experience tailored to your schedule.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 sm:mb-12 bg-dynamic-surface border border-dynamic-border rounded-xl p-1 shadow-sm">
              <TabsTrigger
                value="appointment"
                className="flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 px-2 sm:px-4 rounded-lg font-light text-sm sm:text-base lg:text-lg data-[state=active]:bg-dynamic-primary data-[state=active]:text-white transition-all duration-300"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Schedule Appointment</span>
                <span className="sm:hidden">Schedule</span>
              </TabsTrigger>
              <TabsTrigger
                value="walkin"
                className="flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 px-2 sm:px-4 rounded-lg font-light text-sm sm:text-base lg:text-lg data-[state=active]:bg-dynamic-primary data-[state=active]:text-white transition-all duration-300"
              >
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Walk-in Check-in</span>
                <span className="sm:hidden">Walk-in</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appointment">
              <div className="space-y-8">
                <Card className="bg-dynamic-surface border-dynamic-border shadow-sm">
                  <CardHeader className="text-center pb-4 sm:pb-6 px-4">
                    <CardTitle className="flex flex-col sm:flex-row items-center justify-center gap-3 text-dynamic-text text-xl sm:text-2xl font-light">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dynamic-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-dynamic-primary" />
                      </div>
                      <span className="text-center sm:text-left">Reserve Your Wellness Experience</span>
                    </CardTitle>
                    <CardDescription className="text-dynamic-text-secondary font-light text-base sm:text-lg max-w-2xl mx-auto px-4">
                      Secure your preferred time slot and technician for a guaranteed, personalized spa experience.
                      Perfect for planning your wellness journey with complete peace of mind.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dynamic-text">Guaranteed Time</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">No waiting, arrive and begin</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dynamic-text">Choose Your Artisan</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">Select your preferred expert</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dynamic-text">Instant Confirmation</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">Receive detailed booking info</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <BookingForm
                  onBookingComplete={handleBookingComplete}
                  isWalkIn={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="walkin">
              <div className="space-y-8">
                <Card className="bg-dynamic-surface border-dynamic-border shadow-sm">
                  <CardHeader className="text-center pb-4 sm:pb-6 px-4">
                    <CardTitle className="flex flex-col sm:flex-row items-center justify-center gap-3 text-dynamic-text text-xl sm:text-2xl font-light">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dynamic-accent/10 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-dynamic-accent" />
                      </div>
                      <span className="text-center sm:text-left">Join Our Wellness Queue</span>
                    </CardTitle>
                    <CardDescription className="text-dynamic-text-secondary font-light text-base sm:text-lg max-w-2xl mx-auto px-4">
                      Experience spontaneous luxury with our walk-in service. Perfect for when you're ready to indulge
                      in immediate wellness and beauty care.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dynamic-text">Current Wait</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">Approximately 25 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dynamic-text">Same Day Luxury</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">No advance planning required</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-dynamic-text">Live Updates</p>
                          <p className="text-sm text-dynamic-text-secondary font-light">SMS notifications when ready</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <BookingForm
                  onBookingComplete={handleBookingComplete}
                  isWalkIn={true}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Luxury Footer */}
      <footer className="bg-dynamic-surface border-t border-dynamic-border/50 mt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-dynamic-text mb-4">Ready to Begin Your Wellness Journey?</h3>
            <p className="text-dynamic-text-secondary font-light mb-6">
              Our expert team is here to provide you with an exceptional spa experience tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-dynamic-text-secondary">
                <Clock className="h-4 w-4 text-dynamic-primary" />
                <span className="font-light">Open Daily 9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-dynamic-text-secondary">
                <Users className="h-4 w-4 text-dynamic-primary" />
                <span className="font-light">Walk-ins Always Welcome</span>
              </div>
            </div>
            <div className="border-t border-dynamic-border/30 pt-6">
              <p className="text-dynamic-text-secondary font-light">
                © {new Date().getFullYear()} Five Nails & Spa. All rights reserved.
              </p>
              <p className="text-sm text-dynamic-text-secondary font-light mt-2">
                Questions? Call us at (555) 123-4567 or visit us in person for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
