import React, { useState } from "react";
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
import { Search, ArrowUpDown } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  status: "online" | "in-store";
  estimatedWaitTime: number; // in minutes
  checkInTime: Date;
}

interface WaitListBoardProps {
  customers?: Customer[];
  onSort?: (field: keyof Customer) => void;
  onSearch?: (query: string) => void;
}

const WaitListBoard = ({
  customers = [
    {
      id: "1",
      name: "John Smith",
      status: "online",
      estimatedWaitTime: 15,
      checkInTime: new Date(Date.now() - 10 * 60000),
    },
    {
      id: "2",
      name: "Sarah Johnson",
      status: "in-store",
      estimatedWaitTime: 25,
      checkInTime: new Date(Date.now() - 5 * 60000),
    },
    {
      id: "3",
      name: "Michael Brown",
      status: "online",
      estimatedWaitTime: 35,
      checkInTime: new Date(),
    },
    {
      id: "4",
      name: "Emily Davis",
      status: "in-store",
      estimatedWaitTime: 45,
      checkInTime: new Date(),
    },
    {
      id: "5",
      name: "David Wilson",
      status: "online",
      estimatedWaitTime: 55,
      checkInTime: new Date(),
    },
  ],
  onSort = () => {},
  onSearch = () => {},
}: WaitListBoardProps) => {
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
              <TableHead className="w-[250px]">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("estimatedWaitTime")}
                >
                  Estimated Wait Time
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
            {customers.length > 0 ? (
              customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
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
                  colSpan={4}
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
