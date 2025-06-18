import React from "react";
import MemberLoginForm from "../components/MemberLoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {

  return (
    <div className="min-h-screen bg-dynamic-background flex flex-col">
      {/* Header */}
      <header className="bg-dynamic-surface shadow-sm border-b border-dynamic-border">
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <h1 className="text-3xl font-bold text-dynamic-primary hover:text-dynamic-primary transition-colors">
              Five Nails & Spa
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <MemberLoginForm />

          <div className="text-center mt-8">
            <Link to="/" className="text-dynamic-primary hover:text-dynamic-primary hover:underline transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dynamic-surface border-t border-dynamic-border">
        <div className="container mx-auto px-4 py-6 text-center text-dynamic-text-secondary">
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
