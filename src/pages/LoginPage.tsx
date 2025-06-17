import React, { useState } from "react";
import api from "@/services/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MemberLoginForm from "@/components/MemberLoginForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("member");
  const navigate = useNavigate();

  // Add state for admin login
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoginError, setAdminLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAdminLoginError(null);
    
    try {
      const response = await api.post('/auth/admin/login', {
        email: adminEmail,
        password: adminPassword
      });
      
      // Store admin token or session info
      localStorage.setItem('adminToken', response.data.token);
      navigate('/admin');
    } catch (error: any) {
      setAdminLoginError(error.response?.data?.message || "Invalid admin credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <h1 className="text-3xl font-bold text-primary">
              Five Nails & Spa
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="member">Member Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
            </TabsList>

            <TabsContent value="member">
              <Card>
                <CardContent className="pt-6">
                  <MemberLoginForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Login</CardTitle>
                  <CardDescription>
                    Enter your credentials to access the admin dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAdminLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-username">Username</Label>
                      <Input id="admin-username" placeholder="admin" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Login to Dashboard
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Five Nails & Spa. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
