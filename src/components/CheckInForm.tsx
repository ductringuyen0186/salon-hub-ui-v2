import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import api from "@/services/api";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contact: z.string().min(5, {
    message: "Please enter a valid phone number or email.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CheckInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState<number | null>(
    null,
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await api.post('/checkin', {
        name: values.name,
        contact: values.contact,
        isGuest: true
      });
      
      if (response.data.success) {
        setEstimatedWaitTime(response.data.estimatedWaitTime || 25);
        setIsSuccess(true);
        form.reset();
      } else {
        // Handle error from API
        console.error("Check-in failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setEstimatedWaitTime(null);
    form.reset();
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Guest Check-In</CardTitle>
        <CardDescription>
          Enter your information below to join our wait list.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="space-y-4">
            <Alert className="bg-green-50 border-green-200">
              <Check className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800">
                Check-in Successful!
              </AlertTitle>
              <AlertDescription className="text-green-700">
                You have been added to our wait list. Your estimated wait time
                is approximately{" "}
                <span className="font-bold">{estimatedWaitTime} minutes</span>.
              </AlertDescription>
            </Alert>
            <Button onClick={resetForm} className="w-full">
              Check In Another Guest
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your full name as it will appear on the wait
                      list.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number or Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="555-123-4567 or example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We'll use this to notify you when it's your turn.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking In...
                  </>
                ) : (
                  "Check In Now"
                )}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-gray-500">
        Already a member? Use the Member Login for faster check-in.
      </CardFooter>
    </Card>
  );
};

export default CheckInForm;
