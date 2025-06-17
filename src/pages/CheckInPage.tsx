import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CheckInForm from "@/components/CheckInForm";
import MemberLoginForm from "@/components/MemberLoginForm";
import { UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CheckInPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-bold text-primary">
                Five Nails & Spa
              </h1>
            </Link>
            <p className="text-gray-500">
              123 Beauty Lane, Styleville | (555) 123-4567
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Check In</h2>

          <Tabs defaultValue="guest" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="guest" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Guest Check-in
              </TabsTrigger>
              <TabsTrigger value="member" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Member Login
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guest" className="mt-6">
              <div className="max-w-md mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <CheckInForm />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="member" className="mt-6">
              <div className="max-w-md mx-auto">
                <Card>
                  <CardContent className="pt-6">
                    <MemberLoginForm />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Link to="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Five Nails & Spa. All rights
            reserved.
          </p>
          <p className="text-sm mt-1">
            Book your appointment online or walk in today!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CheckInPage;
