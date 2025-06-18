import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, LockIcon, UserPlus } from "lucide-react";

const ServicesPage = () => {
  // Mock data for salon services
  const services = [
    {
      id: 1,
      category: "Manicure",
      services: [
        { name: "Basic Manicure", price: 25, duration: 30 },
        { name: "Gel Manicure", price: 35, duration: 45 },
        { name: "Luxury Manicure", price: 45, duration: 60 },
        { name: "Polish Change (Hands)", price: 15, duration: 15 },
      ],
    },
    {
      id: 2,
      category: "Pedicure",
      services: [
        { name: "Basic Pedicure", price: 35, duration: 30 },
        { name: "Spa Pedicure", price: 45, duration: 45 },
        { name: "Luxury Pedicure", price: 55, duration: 60 },
        { name: "Polish Change (Feet)", price: 15, duration: 15 },
      ],
    },
    {
      id: 3,
      category: "Nail Enhancements",
      services: [
        { name: "Acrylic Full Set", price: 45, duration: 60 },
        { name: "Acrylic Fill", price: 35, duration: 45 },
        { name: "Gel Full Set", price: 50, duration: 60 },
        { name: "Gel Fill", price: 40, duration: 45 },
        { name: "Nail Repair (per nail)", price: 5, duration: 10 },
      ],
    },
    {
      id: 4,
      category: "Nail Art & Add-ons",
      services: [
        { name: "Simple Design (per nail)", price: 5, duration: 5 },
        { name: "Complex Design (per nail)", price: 10, duration: 10 },
        { name: "French Tips", price: 10, duration: 15 },
        { name: "Gems/Rhinestones (per nail)", price: 3, duration: 5 },
        { name: "Chrome/Holographic Finish", price: 15, duration: 15 },
      ],
    },
    {
      id: 5,
      category: "Waxing",
      services: [
        { name: "Eyebrow Wax", price: 15, duration: 15 },
        { name: "Lip Wax", price: 10, duration: 10 },
        { name: "Chin Wax", price: 10, duration: 10 },
        { name: "Full Face Wax", price: 40, duration: 30 },
      ],
    },
  ];

  // Mock data for the salon information
  const salonInfo = {
    name: "Five Nails & Spa",
    address: "123 Beauty Lane, Styleville",
    phone: "(555) 123-4567",
    currentWaitTime: "~25 minutes",
  };

  return (
    <div className="min-h-screen bg-dynamic-background">
      {/* Header */}
      <header className="bg-dynamic-surface shadow-sm border-b border-dynamic-border">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-dynamic-primary">
              {salonInfo.name}
            </h1>
            <p className="text-dynamic-text-secondary">
              {salonInfo.address} | {salonInfo.phone}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-dynamic-primary/10 px-4 py-2 rounded-md flex items-center border border-dynamic-border">
              <Clock className="h-5 w-5 text-dynamic-primary mr-2" />
              <span className="font-medium text-dynamic-text">
                Current Wait:{" "}
                <span className="text-dynamic-primary">
                  {salonInfo.currentWaitTime}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/login" className="text-dynamic-primary hover:text-dynamic-primary">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-dynamic-border text-dynamic-text hover:bg-dynamic-background"
                >
                  <LockIcon className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                className="text-dynamic-primary hover:text-dynamic-primary"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-dynamic-border text-dynamic-text hover:bg-dynamic-background"
                >
                  <UserPlus className="h-4 w-4" />
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-dynamic-primary">
            Our Services
          </h2>
          <p className="text-center text-lg text-dynamic-text-secondary mb-12">
            Browse our comprehensive list of nail care services. All services
            include sanitized tools and premium products for your safety and
            satisfaction.
          </p>

          <div className="space-y-12">
            {services.map((category) => (
              <Card key={category.id} className="overflow-hidden bg-dynamic-surface border-dynamic-border">
                <CardHeader className="bg-dynamic-primary/5">
                  <CardTitle className="text-2xl text-dynamic-primary">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-dynamic-border">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 hover:bg-dynamic-background transition-colors"
                      >
                        <div>
                          <h3 className="font-medium text-dynamic-text">{service.name}</h3>
                          <p className="text-sm text-dynamic-text-secondary">
                            Approx. {service.duration} minutes
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-dynamic-text">${service.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => (window.location.href = "/check-in")}
              className="text-lg px-8 bg-dynamic-primary hover:bg-dynamic-primary-hover text-white"
            >
              Check In Now
            </Button>
            <p className="mt-2 text-dynamic-text-secondary">
              Ready for your service? Join our wait list now!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dynamic-surface border-t border-dynamic-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-dynamic-text-secondary">
          <p>
            © {new Date().getFullYear()} {salonInfo.name}. All rights reserved.
          </p>
          <p className="text-sm mt-1">
            Book your appointment online or walk in today!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
