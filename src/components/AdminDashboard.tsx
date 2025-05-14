import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ColorPalette from "@/components/ColorPalette";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Clock,
  UserCheck,
  RefreshCw,
} from "lucide-react";

interface Customer {
  id: string;
  name: string;
  contact: string;
  status: "online" | "in-store";
  waitTime: number;
  checkInTime: string;
  service: string;
}

const AdminDashboard = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "Jane Smith",
      contact: "555-123-4567",
      status: "online",
      waitTime: 15,
      checkInTime: "10:30 AM",
      service: "Manicure",
    },
    {
      id: "2",
      name: "John Doe",
      contact: "555-987-6543",
      status: "in-store",
      waitTime: 25,
      checkInTime: "10:45 AM",
      service: "Pedicure",
    },
    {
      id: "3",
      name: "Alice Johnson",
      contact: "alice@example.com",
      status: "online",
      waitTime: 35,
      checkInTime: "11:00 AM",
      service: "Full Set",
    },
    {
      id: "4",
      name: "Robert Brown",
      contact: "555-555-5555",
      status: "in-store",
      waitTime: 40,
      checkInTime: "11:15 AM",
      service: "Manicure & Pedicure",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleStatusChange = (
    customerId: string,
    newStatus: "online" | "in-store",
  ) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === customerId
          ? { ...customer, status: newStatus }
          : customer,
      ),
    );
  };

  const handleWaitTimeChange = (customerId: string, minutes: number) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === customerId
          ? { ...customer, waitTime: minutes }
          : customer,
      ),
    );
  };

  const handleRemoveCustomer = (customerId: string) => {
    setCustomers(customers.filter((customer) => customer.id !== customerId));
  };

  const handleEditCustomer = (customer: Customer) => {
    setEditingCustomer({ ...customer });
    setIsDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingCustomer) {
      setCustomers(
        customers.map((customer) =>
          customer.id === editingCustomer.id ? editingCustomer : customer,
        ),
      );
      setIsDialogOpen(false);
      setEditingCustomer(null);
    }
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.contact.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-background p-6 min-h-screen">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Salon Admin Dashboard</CardTitle>
            <CardDescription>
              Manage customer queue, update statuses, and adjust wait times
            </CardDescription>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm">
              Return to Home
            </Button>
          </Link>
        </CardHeader>
      </Card>

      <Tabs defaultValue="queue" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="queue">Current Queue</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="queue" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-72">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or contact..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Customer
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Check-in Time</TableHead>
                    <TableHead>Wait Time (min)</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">
                        {customer.name}
                      </TableCell>
                      <TableCell>{customer.contact}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            customer.status === "online"
                              ? "secondary"
                              : "default"
                          }
                          className="cursor-pointer"
                          onClick={() =>
                            handleStatusChange(
                              customer.id,
                              customer.status === "online"
                                ? "in-store"
                                : "online",
                            )
                          }
                        >
                          {customer.status === "online" ? "Online" : "In-store"}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.service}</TableCell>
                      <TableCell>{customer.checkInTime}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              handleWaitTimeChange(
                                customer.id,
                                Math.max(0, customer.waitTime - 5),
                              )
                            }
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">
                            {customer.waitTime}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() =>
                              handleWaitTimeChange(
                                customer.id,
                                customer.waitTime + 5,
                              )
                            }
                          >
                            +
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEditCustomer(customer)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleRemoveCustomer(customer.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-green-600"
                          >
                            <UserCheck className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Salon Statistics</CardTitle>
              <CardDescription>
                View performance metrics and customer data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Average Wait Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">28 min</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Customers Today
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Online Check-ins
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12 (50%)</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Settings</CardTitle>
              <CardDescription>
                Configure wait time calculations and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Default Service Times (minutes)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs">Manicure</label>
                      <Input type="number" defaultValue="30" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs">Pedicure</label>
                      <Input type="number" defaultValue="45" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs">Full Set</label>
                      <Input type="number" defaultValue="60" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs">Manicure & Pedicure</label>
                      <Input type="number" defaultValue="75" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Notification Settings
                  </label>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SMS Notifications</span>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Notifications</span>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Customer</DialogTitle>
            <DialogDescription>
              Update customer information and preferences.
            </DialogDescription>
          </DialogHeader>
          {editingCustomer && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right text-sm">Name</label>
                <Input
                  className="col-span-3"
                  value={editingCustomer.name}
                  onChange={(e) =>
                    setEditingCustomer({
                      ...editingCustomer,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right text-sm">Contact</label>
                <Input
                  className="col-span-3"
                  value={editingCustomer.contact}
                  onChange={(e) =>
                    setEditingCustomer({
                      ...editingCustomer,
                      contact: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right text-sm">Status</label>
                <Select
                  value={editingCustomer.status}
                  onValueChange={(value: "online" | "in-store") =>
                    setEditingCustomer({ ...editingCustomer, status: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="in-store">In-store</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right text-sm">Service</label>
                <Select
                  value={editingCustomer.service}
                  onValueChange={(value) =>
                    setEditingCustomer({ ...editingCustomer, service: value })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Manicure">Manicure</SelectItem>
                    <SelectItem value="Pedicure">Pedicure</SelectItem>
                    <SelectItem value="Full Set">Full Set</SelectItem>
                    <SelectItem value="Manicure & Pedicure">
                      Manicure & Pedicure
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right text-sm">Wait Time (min)</label>
                <Input
                  className="col-span-3"
                  type="number"
                  value={editingCustomer.waitTime}
                  onChange={(e) =>
                    setEditingCustomer({
                      ...editingCustomer,
                      waitTime: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
