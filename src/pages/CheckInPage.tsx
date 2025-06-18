import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CheckInForm from "@/components/CheckInForm";
import MemberLoginForm from "@/components/MemberLoginForm";
import Navigation from "@/components/Navigation";
import { UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CheckInPage = () => {
  return (
    <div className="min-h-screen bg-dynamic-background">
      {/* Header */}
      <Navigation
        showBackButton={true}
        title="Check In"
        subtitle="Join our wait list or login as a member"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">

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
            <Link to="/" className="text-dynamic-primary hover:text-dynamic-primary hover:underline transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dynamic-surface border-t border-dynamic-border mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-dynamic-text-secondary">
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
