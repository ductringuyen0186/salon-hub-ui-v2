import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown, Clock, User } from "lucide-react";
import { mockBookings } from "@/lib/bookingData";
import { mockCustomersQueue } from "@/lib/mockData";

interface Customer {
  id: string;
  name: string;
  status: "online" | "in-store";
  estimatedWaitTime: number; // in minutes
  checkInTime: Date;
  service?: string;
  type?: "booking" | "walk-in";
}

interface WaitListBoardProps {
  customers?: Customer[];
  onSort?: (field: keyof Customer) => void;
  onSearch?: (query: string) => void;
}

const WaitListBoard = ({
  customers,
  onSort = () => {},
  onSearch = () => {},
}: WaitListBoardProps) => {
  // Combine bookings and walk-ins for display
  const defaultCustomers: Customer[] = [
    // Today's bookings that are in progress or confirmed
    ...mockBookings
      .filter(booking =>
        booking.date === new Date().toISOString().split('T')[0] &&
        ['confirmed', 'in-progress'].includes(booking.status)
      )
      .map(booking => ({
        id: booking.id,
        name: booking.customerName,
        status: booking.status === 'in-progress' ? 'in-store' as const : 'online' as const,
        estimatedWaitTime: booking.duration,
        checkInTime: new Date(`${booking.date}T${booking.time}`),
        service: booking.services.map(s => s.name).join(', '),
        type: 'booking' as const
      })),
    // Walk-in customers from queue
    ...mockCustomersQueue.map(customer => ({
      id: customer.id.toString(),
      name: customer.name,
      status: customer.inStore ? 'in-store' as const : 'online' as const,
      estimatedWaitTime: customer.estimatedWaitTime,
      checkInTime: new Date(customer.checkInTime),
      service: customer.requestedService,
      type: 'walk-in' as const
    }))
  ];

  const displayCustomers = customers || defaultCustomers;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Customer | null;
    direction: "ascending" | "descending";
  }>({
    key: "checkInTime",
    direction: "ascending",
  });

  const handleSort = (key: keyof Customer) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    onSort(key);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const formatTime = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const getStatusBadge = (status: "online" | "in-store") => {
    return status === "online" ? (
      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
        Online
      </Badge>
    ) : (
      <Badge variant="secondary" className="bg-green-100 text-green-800">
        In-store
      </Badge>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Current Wait List</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <Button onClick={handleSearch} variant="outline">
            Search
          </Button>
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableCaption>
            Current wait list as of {new Date().toLocaleTimeString()}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Service</TableHead>
              <TableHead>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("estimatedWaitTime")}
                >
                  Wait Time
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("checkInTime")}
                >
                  Check-in Time
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayCustomers.length > 0 ? (
              displayCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {customer.service || 'Not specified'}
                  </TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
                  <TableCell>
                    <Badge variant={customer.type === 'booking' ? 'default' : 'outline'}>
                      {customer.type === 'booking' ? 'Appointment' : 'Walk-in'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {formatTime(customer.estimatedWaitTime)}
                  </TableCell>
                  <TableCell>
                    {customer.checkInTime.toLocaleTimeString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-6 text-gray-500"
                >
                  No customers in the wait list
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Total customers waiting: {customers.length}</p>
        {customers.length > 0 && (
          <p>
            Average wait time:{" "}
            {formatTime(
              Math.round(
                customers.reduce(
                  (sum, customer) => sum + customer.estimatedWaitTime,
                  0,
                ) / customers.length,
              ),
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default WaitListBoard;
