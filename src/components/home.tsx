import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import WaitListBoard from "./WaitListBoard";
import { Button } from "@/components/ui/button";
import { LockIcon, Clock, UserPlus } from "lucide-react";
import SalonShowcase from "./SalonShowcase";

const Home = () => {
  const navigate = useNavigate();

  // Mock data for the salon information
  const salonInfo = {
    name: "Elegant Nails & Spa",
    address: "123 Beauty Lane, Styleville",
    phone: "(555) 123-4567",
    currentWaitTime: "~25 minutes",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              {salonInfo.name}
            </h1>
            <p className="text-gray-500">
              {salonInfo.address} | {salonInfo.phone}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 px-4 py-2 rounded-md flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">
                Current Wait:{" "}
                <span className="text-primary">
                  {salonInfo.currentWaitTime}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/login" className="text-primary hover:text-primary/80">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <LockIcon className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                className="text-primary hover:text-primary/80"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
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
        {/* Salon Showcase Section */}
        <section className="mb-16">
          <SalonShowcase />
        </section>

        {/* Check-in Button */}
        <section className="mb-8 text-center">
          <Button
            size="lg"
            onClick={() => navigate("/check-in")}
            className="text-lg px-8 py-6 h-auto"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Check In Now
          </Button>
          <p className="mt-2 text-muted-foreground">
            Join our wait list and we'll notify you when it's your turn
          </p>
        </section>

        {/* Wait List Board */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Current Wait List
          </h2>
          <Card>
            <CardContent className="pt-6">
              <WaitListBoard />
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
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

export default Home;
