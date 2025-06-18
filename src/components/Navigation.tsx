import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Menu,
  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dynamic-surface shadow-sm border-b border-dynamic-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Left side - Back button and Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(backTo)}
                className="lg:hidden flex items-center gap-2 text-dynamic-text hover:text-dynamic-primary hover:bg-dynamic-primary/10 transition-colors font-light"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            )}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-dynamic-text hover:text-dynamic-primary transition-colors tracking-wide">
                  {title || 'Five Nails & Spa'}
                </h1>
              </Link>
              {subtitle && (
                <p className="text-xs sm:text-sm text-dynamic-text-secondary mt-1 font-light tracking-wider">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/book"
                className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide"
              >
                Services
              </Link>
              <Link
                to="/check-in"
                className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide"
              >
                Check In
              </Link>
              {USE_MOCK_API && (
                <Link
                  to="/testing"
                  className="text-dynamic-accent hover:text-dynamic-primary transition-colors font-light tracking-wide text-sm"
                >
                  Testing
                </Link>
              )}
            </nav>
          </div>

          {/* Right side - CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide"
            >
              Sign In
            </Link>
            <Link
              to="/book"
              className="bg-dynamic-primary text-white px-6 py-2 rounded-full hover:bg-dynamic-primary-hover transition-colors font-light tracking-wide shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dynamic-text hover:text-dynamic-primary hover:bg-dynamic-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Mobile menu backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu content */}
            <div className="lg:hidden absolute top-full left-0 right-0 bg-dynamic-surface border-b border-dynamic-border shadow-lg z-50 animate-in slide-in-from-top duration-300">
              <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/book"
                  className="block text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/check-in"
                  className="block text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Check In
                </Link>
                {USE_MOCK_API && (
                  <Link
                    to="/testing"
                    className="block text-dynamic-accent hover:text-dynamic-primary transition-colors font-light tracking-wide py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testing
                  </Link>
                )}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-dynamic-border space-y-3">
                <Link
                  to="/login"
                  className="block w-full text-center text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide py-3 border border-dynamic-border rounded-full hover:border-dynamic-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/book"
                  className="block w-full text-center bg-dynamic-primary text-white py-3 rounded-full hover:bg-dynamic-primary-hover transition-colors font-light tracking-wide shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navigation;
