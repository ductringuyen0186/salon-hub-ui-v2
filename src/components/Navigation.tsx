import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Calendar, 
  UserPlus, 
  LockIcon, 
  TestTube,
  ArrowLeft 
} from 'lucide-react';
import { USE_MOCK_API } from '@/services/mockApi';

interface NavigationProps {
  showBackButton?: boolean;
  backTo?: string;
  title?: string;
  subtitle?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  showBackButton = false, 
  backTo = '/',
  title,
  subtitle 
}) => {
  const navigate = useNavigate();

  return (
    <header className="bg-dynamic-surface shadow-sm border-b border-dynamic-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(backTo)}
                className="flex items-center gap-2 text-dynamic-text hover:text-dynamic-primary hover:bg-dynamic-primary/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            )}
            <div>
              <Link to="/">
                <h1 className="text-3xl font-light text-dynamic-text hover:text-dynamic-primary transition-colors tracking-wide">
                  {title || 'Five Nails & Spa'}
                </h1>
              </Link>
              {subtitle && (
                <p className="text-dynamic-text-secondary font-light">{subtitle}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Home Button */}
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-dynamic-text hover:text-dynamic-primary hover:bg-dynamic-primary/10"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>

            {/* Book Button */}
            <Link to="/book">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-dynamic-text hover:text-dynamic-primary hover:bg-dynamic-primary/10"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book</span>
              </Button>
            </Link>

            {/* Check-in Button */}
            <Link to="/check-in">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-dynamic-text hover:text-dynamic-primary hover:bg-dynamic-primary/10"
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Check-in</span>
              </Button>
            </Link>

            {/* Testing Guide (only in mock mode) */}
            {USE_MOCK_API && (
              <Link to="/testing">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-dynamic-accent hover:text-dynamic-primary hover:bg-dynamic-accent/10"
                >
                  <TestTube className="h-4 w-4" />
                  <span className="hidden sm:inline">Testing</span>
                </Button>
              </Link>
            )}

            {/* Login Button */}
            <Link to="/login">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-dynamic-border text-dynamic-text hover:bg-dynamic-primary hover:text-white hover:border-dynamic-primary"
              >
                <LockIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
