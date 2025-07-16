import { API_CONFIG } from '@/config/api';
import { tokenStorage } from '@/lib/tokenStorage';

// Types based on the backend API
export interface User {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  role: 'ADMIN' | 'MANAGER' | 'FRONT_DESK' | 'TECHNICIAN' | 'CUSTOMER';
  enabled: boolean;
  lastVisit?: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  lastVisit?: string;
  notes?: string;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  role: 'ADMIN' | 'MANAGER' | 'FRONT_DESK' | 'TECHNICIAN';
  available: boolean;
  specialties?: string[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}

export interface Appointment {
  id: number;
  customer: Customer;
  employee: Employee;
  service: Service;
  scheduledTime: string;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
}

export interface QueueEntry {
  id: number;
  customer: Customer;
  service: Service;
  status: 'WAITING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  estimatedWaitTime: number;
  checkInTime: string;
  priority: number;
  notes?: string;
}

export interface CheckInRequest {
  customerName: string;
  phoneNumber: string;
  email?: string;
  serviceId?: number;
  notes?: string;
}

export interface CheckInRequestDTO {
  name: string;
  contact?: string;
  phoneNumber?: string;
  email?: string;
  note?: string;
  requestedService?: string;
  guest?: boolean;
  phoneOrEmail?: string;
  contactEmail?: boolean;
}

export interface CheckInResponseDTO {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  note?: string;
  guest: boolean;
  checkedInAt: string;
  message: string;
  success: boolean;
  estimatedWaitTime: number;
  queuePosition: number;
  queueId: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  role: 'ADMIN' | 'MANAGER' | 'FRONT_DESK' | 'TECHNICIAN' | 'CUSTOMER';
}

export interface AuthenticationResponse {
  access_token: string;
  token_type: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: 'ADMIN' | 'MANAGER' | 'FRONT_DESK' | 'TECHNICIAN' | 'CUSTOMER';
  lastVisit?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = tokenStorage.getAccessToken();
    if (token && !tokenStorage.isTokenExpired()) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      
      // Handle authentication errors
      if (response.status === 401 || response.status === 403) {
        // Clear invalid session
        tokenStorage.clearSession();
        throw new Error(`Authentication failed: ${response.status} ${response.statusText}`);
      }
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return {} as T;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication endpoints
  async login(credentials: LoginRequest): Promise<AuthenticationResponse> {
    const response = await this.request<AuthenticationResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    return response;
  }

  async register(userData: RegisterRequest): Promise<AuthenticationResponse> {
    const response = await this.request<AuthenticationResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    return response;
  }

  async getCurrentUser(): Promise<AuthenticationResponse> {
    return this.request<AuthenticationResponse>('/auth/me');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return tokenStorage.hasValidSession();
  }

  // Get current user from storage
  getCurrentUserFromStorage() {
    return tokenStorage.getUser();
  }

  // Logout (clear tokens)
  logout(): void {
    tokenStorage.clearSession();
  }

  // Customer endpoints
  async getCustomers(): Promise<Customer[]> {
    return this.request<Customer[]>('/customers');
  }

  async getCustomerById(id: number): Promise<Customer> {
    return this.request<Customer>(`/customers/${id}`);
  }

  async getCustomerByEmail(email: string): Promise<Customer> {
    return this.request<Customer>(`/customers?email=${encodeURIComponent(email)}`);
  }

  async createCustomer(customer: Omit<Customer, 'id'>): Promise<Customer> {
    return this.request<Customer>('/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  }

  async updateCustomer(id: number, customer: Partial<Customer>): Promise<Customer> {
    return this.request<Customer>(`/customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customer),
    });
  }

  async deleteCustomer(id: number): Promise<void> {
    return this.request<void>(`/customers/${id}`, {
      method: 'DELETE',
    });
  }

  // Employee endpoints
  async getEmployees(): Promise<Employee[]> {
    return this.request<Employee[]>('/employees');
  }

  async getEmployeeById(id: number): Promise<Employee> {
    return this.request<Employee>(`/employees/${id}`);
  }

  async createEmployee(employee: Omit<Employee, 'id'>): Promise<Employee> {
    return this.request<Employee>('/employees', {
      method: 'POST',
      body: JSON.stringify(employee),
    });
  }

  async updateEmployee(id: number, employee: Partial<Employee>): Promise<Employee> {
    return this.request<Employee>(`/employees/${id}`, {
      method: 'PUT',
      body: JSON.stringify(employee),
    });
  }

  async deleteEmployee(id: number): Promise<void> {
    return this.request<void>(`/employees/${id}`, {
      method: 'DELETE',
    });
  }

  async updateEmployeeAvailability(id: number, available: boolean): Promise<void> {
    return this.request<void>(`/employees/${id}/availability?available=${available}`, {
      method: 'PATCH',
    });
  }

  // Appointment endpoints
  async getAppointmentById(id: number): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}`);
  }

  async getAppointmentsByCustomer(customerId: number): Promise<Appointment[]> {
    return this.request<Appointment[]>(`/appointments/customer/${customerId}`);
  }

  async getAppointmentsByEmployee(employeeId: number): Promise<Appointment[]> {
    return this.request<Appointment[]>(`/appointments/employee/${employeeId}`);
  }

  async createAppointment(appointment: Omit<Appointment, 'id'>): Promise<Appointment> {
    return this.request<Appointment>('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointment),
    });
  }

  async updateAppointment(id: number, appointment: Partial<Appointment>): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(appointment),
    });
  }

  async updateAppointmentStatus(id: number, status: Appointment['status']): Promise<Appointment> {
    return this.request<Appointment>(`/appointments/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async deleteAppointment(id: number): Promise<void> {
    return this.request<void>(`/appointments/${id}`, {
      method: 'DELETE',
    });
  }

  // Queue endpoints
  async getQueue(): Promise<QueueEntry[]> {
    return this.request<QueueEntry[]>('/queue');
  }

  async getQueueEntry(id: number): Promise<QueueEntry> {
    return this.request<QueueEntry>(`/queue/${id}`);
  }

  async updateQueueEntry(id: number, entry: Partial<QueueEntry>): Promise<QueueEntry> {
    return this.request<QueueEntry>(`/queue/${id}`, {
      method: 'PUT',
      body: JSON.stringify(entry),
    });
  }

  async updateQueueStatus(id: number, status: QueueEntry['status']): Promise<QueueEntry> {
    return this.request<QueueEntry>(`/queue/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async removeFromQueue(id: number): Promise<void> {
    return this.request<void>(`/queue/${id}`, {
      method: 'DELETE',
    });
  }

  async getQueueStats(): Promise<{ totalWaiting: number; averageWaitTime: number }> {
    return this.request<{ totalWaiting: number; averageWaitTime: number }>('/queue/stats');
  }

  async refreshQueue(): Promise<void> {
    return this.request<void>('/queue/refresh', {
      method: 'POST',
    });
  }

  // Check-in endpoints (public)
  async checkIn(checkInData: CheckInRequestDTO): Promise<CheckInResponseDTO> {
    return this.request<CheckInResponseDTO>('/checkin', {
      method: 'POST',
      body: JSON.stringify(checkInData),
    });
  }

  async checkInExisting(phoneOrEmail: string): Promise<Customer> {
    return this.request<Customer>(`/checkin/existing?phoneOrEmail=${encodeURIComponent(phoneOrEmail)}`, {
      method: 'POST',
    });
  }

  async checkInGuest(name: string, phoneNumber: string): Promise<Customer> {
    return this.request<Customer>(`/checkin/guest?name=${encodeURIComponent(name)}&phoneNumber=${encodeURIComponent(phoneNumber)}`, {
      method: 'POST',
    });
  }

  async getTodaysGuests(): Promise<QueueEntry[]> {
    return this.request<QueueEntry[]>('/checkin/guests/today');
  }

  // Services endpoints (if they exist)
  async getServices(): Promise<Service[]> {
    return this.request<Service[]>('/services');
  }

  async getServiceById(id: number): Promise<Service> {
    return this.request<Service>(`/services/${id}`);
  }

  async createService(service: Omit<Service, 'id'>): Promise<Service> {
    return this.request<Service>('/services', {
      method: 'POST',
      body: JSON.stringify(service),
    });
  }

  async updateService(id: number, service: Partial<Service>): Promise<Service> {
    return this.request<Service>(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(service),
    });
  }

  async deleteService(id: number): Promise<void> {
    return this.request<void>(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  // Utility methods
  getToken(): string | null {
    return tokenStorage.getAccessToken();
  }
}

export const apiService = new ApiService();