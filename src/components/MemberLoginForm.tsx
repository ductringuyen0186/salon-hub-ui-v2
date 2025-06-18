import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { UserIcon, KeyIcon, CheckCircleIcon, XCircleIcon, Settings } from "lucide-react";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";
import { setUserData, clearAuthData, type User } from "@/lib/auth";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface MemberPreferences {
  name: string;
  email: string;
  role: string;
  preferredServices?: string[];
  lastVisit?: string;
}

const MemberLoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [checkInError, setCheckInError] = useState<string | null>(null);
  const [memberPreferences, setMemberPreferences] =
    useState<MemberPreferences | null>(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setLoginError(null);

    try {
      const response = await api.post('/auth/login', {
        email: data.email,
        password: data.password
      });

      const userData: User = {
        name: response.data.user.name,
        email: response.data.user.email,
        role: response.data.user.role,
        preferredServices: response.data.user.preferredServices ?
          response.data.user.preferredServices.split(',').map((s: string) => s.trim()) : [],
        lastVisit: response.data.user.lastVisit
      };

      setIsLoggedIn(true);
      setMemberPreferences(userData);

      // Store user data in localStorage for session management
      setUserData(userData, response.data.accessToken);
    } catch (error: any) {
      setLoginError(error.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckIn = async () => {
    setIsLoading(true);
    setCheckInError(null);

    try {
      const response = await api.post('/checkin', {
        email: memberPreferences?.email,
        isGuest: false
      });

      if (response.data.success) {
        setIsCheckedIn(true);
      } else {
        setCheckInError(response.data.message || "Check-in failed");
      }
    } catch (error: any) {
      console.error("Check-in failed:", error);
      setCheckInError(error.response?.data?.message || "Check-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsCheckedIn(false);
    setMemberPreferences(null);
    setLoginError(null);
    setCheckInError(null);
    clearAuthData();
    form.reset();
  };

  const handleAdminToggle = () => {
    navigate('/admin');
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Member Login
        </CardTitle>
        <CardDescription className="text-center">
          Login to your account for quick check-in and access to your
          preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isLoggedIn ? (
          <>
            {loginError && (
              <Alert variant="destructive" className="mb-4">
                <XCircleIcon className="h-4 w-4" />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            placeholder="your.email@example.com"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <KeyIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Remember me</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
              <Separator className="my-4" />
              <p>
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {isCheckedIn ? (
              <div className="text-center p-4 space-y-4">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                <h3 className="text-xl font-medium">Check-in Successful!</h3>
                <p>You've been added to the wait list.</p>
                <div className="bg-muted p-3 rounded-md">
                  <p className="font-medium">Estimated wait time:</p>
                  <p className="text-2xl font-bold">25 minutes</p>
                </div>
                <div className="space-y-2 mt-4">
                  {memberPreferences?.role === 'ADMIN' && (
                    <Button
                      onClick={handleAdminToggle}
                      variant="secondary"
                      className="w-full"
                      disabled={isLoading}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Admin Dashboard
                    </Button>
                  )}
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full"
                    disabled={isLoading}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-medium">
                    Welcome back, {memberPreferences?.name}!
                  </h3>
                </div>
                {checkInError && (
                  <Alert variant="destructive" className="mb-4">
                    <XCircleIcon className="h-4 w-4" />
                    <AlertDescription>{checkInError}</AlertDescription>
                  </Alert>
                )}
                <div className="bg-muted p-4 rounded-md space-y-3">
                  <h4 className="font-medium">Your Preferences</h4>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Preferred Services:
                    </p>
                    <p>{memberPreferences?.preferredServices && memberPreferences.preferredServices.length > 0
                        ? memberPreferences.preferredServices.join(", ")
                        : "No preferences set"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Visit:</p>
                    <p>{memberPreferences?.lastVisit || "No previous visits"}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Button
                    onClick={handleCheckIn}
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Check In Now"}
                  </Button>
                  {memberPreferences?.role === 'ADMIN' && (
                    <Button
                      onClick={handleAdminToggle}
                      variant="secondary"
                      className="w-full"
                      disabled={isLoading}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Admin Dashboard
                    </Button>
                  )}
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full"
                    disabled={isLoading}
                  >
                    Logout
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-xs text-muted-foreground">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  );
};

export default MemberLoginForm;
