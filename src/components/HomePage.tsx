import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dynamic-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-light text-dynamic-text tracking-wide">
                  Five Nails & Spa
                </h1>
                <p className="text-sm text-dynamic-text-secondary mt-1 font-light tracking-wider">
                  PREMIUM WELLNESS EXPERIENCE
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                <Link to="/book" className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide">Services</Link>
                <Link to="/check-in" className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide">Check In</Link>
                <Link to="/testing" className="text-dynamic-accent hover:text-dynamic-primary transition-colors font-light tracking-wide text-sm">Testing</Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-dynamic-text hover:text-dynamic-primary transition-colors font-light tracking-wide">
                Sign In
              </Link>
              <Link to="/register" className="bg-dynamic-primary text-white px-6 py-2 rounded-full hover:bg-dynamic-primary-hover transition-colors font-light tracking-wide">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dynamic-background pt-20 pb-8">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-3 py-2 sm:px-4 bg-dynamic-surface rounded-full text-xs sm:text-sm font-light tracking-widest text-dynamic-text-secondary border border-dynamic-border">
              LUXURY NAIL CARE & WELLNESS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-dynamic-text mb-6 sm:mb-8 leading-tight">
            <span className="block">Indulge in</span>
            <span className="block text-dynamic-primary font-extralight italic">Pure Elegance</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dynamic-text-secondary max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4">
            Experience the art of nail care in our serene sanctuary. Where luxury meets wellness,
            and every detail is crafted for your complete rejuvenation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <button
              onClick={() => navigate("/book")}
              className="group w-full sm:w-auto bg-dynamic-primary text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-dynamic-primary-hover transition-all duration-300 font-light tracking-wide text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Reserve Your Experience
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => navigate("/check-in")}
              className="group w-full sm:w-auto border-2 border-dynamic-border text-dynamic-text px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:border-dynamic-primary hover:text-dynamic-primary transition-all duration-300 font-light tracking-wide text-base sm:text-lg"
            >
              <span className="flex items-center justify-center">
                Walk-in Welcome
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            <div className="bg-dynamic-surface rounded-2xl p-4 sm:p-6 border border-dynamic-border shadow-sm">
              <div className="text-dynamic-primary mb-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-light text-dynamic-text mb-2">Current Wait</h3>
              <p className="text-xl sm:text-2xl font-light text-dynamic-primary">25 minutes</p>
            </div>

            <div className="bg-dynamic-surface rounded-2xl p-4 sm:p-6 border border-dynamic-border shadow-sm">
              <div className="text-dynamic-accent mb-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-light text-dynamic-text mb-2">Premium Service</h3>
              <p className="text-sm font-light text-dynamic-text-secondary">Expert Care</p>
            </div>

            <div className="bg-dynamic-surface rounded-2xl p-4 sm:p-6 border border-dynamic-border shadow-sm">
              <div className="text-green-500 mb-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-light text-dynamic-text mb-2">Open Today</h3>
              <p className="text-sm font-light text-dynamic-text-secondary">9AM - 7PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-dynamic-surface">
        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-dynamic-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-dynamic-accent/20 rounded-full text-xs sm:text-sm font-light tracking-widest text-dynamic-primary border border-dynamic-accent/30 mb-6 sm:mb-8 shadow-sm">
                OUR SIGNATURE TREATMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-dynamic-text mb-4 sm:mb-6 leading-tight px-4">
                <span className="block">Curated Wellness</span>
                <span className="block text-dynamic-primary font-extralight italic">Experiences</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-dynamic-text-secondary max-w-3xl mx-auto font-light leading-relaxed px-4">
                Each treatment is thoughtfully designed to restore, rejuvenate, and inspire.
                Discover the perfect harmony of luxury and wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Classic Manicure */}
              <div className="group relative bg-dynamic-surface rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 border border-dynamic-border">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-light tracking-wider bg-dynamic-primary/10 text-dynamic-primary border border-dynamic-primary/20">
                    MOST LOVED
                  </span>
                </div>

                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dynamic-background rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-dynamic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-dynamic-text mb-3 sm:mb-4">Classic Manicure</h3>
                  <p className="text-sm sm:text-base text-dynamic-text-secondary font-light leading-relaxed mb-4 sm:mb-6">
                    Artful nail shaping, gentle cuticle care, luxurious hand massage, and your choice of premium polish.
                    A timeless treatment for elegant hands.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-dynamic-border">
                  <div className="flex items-center text-dynamic-text-secondary">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-light text-sm sm:text-base">30 minutes</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-dynamic-text">$25</div>
                </div>
              </div>

              {/* Spa Pedicure */}
              <div className="group relative bg-dynamic-surface rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 border border-dynamic-border">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-light tracking-wider bg-dynamic-accent/10 text-dynamic-accent border border-dynamic-accent/20">
                    SIGNATURE
                  </span>
                </div>

                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dynamic-background rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-dynamic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-dynamic-text mb-3 sm:mb-4">Spa Pedicure</h3>
                  <p className="text-sm sm:text-base text-dynamic-text-secondary font-light leading-relaxed mb-4 sm:mb-6">
                    Indulgent foot ritual featuring aromatic soaks, gentle exfoliation, therapeutic massage,
                    and meticulous nail care in our luxurious spa chairs.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-dynamic-border">
                  <div className="flex items-center text-dynamic-text-secondary">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-light text-sm sm:text-base">45 minutes</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-dynamic-text">$35</div>
                </div>
              </div>

              {/* Mani-Pedi Combo */}
              <div className="group relative bg-dynamic-surface rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 border border-dynamic-border md:col-span-2 lg:col-span-1">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-light tracking-wider bg-green-100 text-green-600 border border-green-200">
                    BEST VALUE
                  </span>
                </div>

                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dynamic-background rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-light text-dynamic-text mb-3 sm:mb-4">Complete Wellness</h3>
                  <p className="text-sm sm:text-base text-dynamic-text-secondary font-light leading-relaxed mb-4 sm:mb-6">
                    The ultimate indulgence combining our signature manicure and spa pedicure.
                    A complete journey of relaxation and beauty for hands and feet.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-dynamic-border">
                  <div className="flex items-center text-dynamic-text-secondary">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-light text-sm sm:text-base">75 minutes</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-dynamic-text">$55</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 sm:mt-16 px-4">
              <button
                onClick={() => navigate("/book")}
                className="group inline-flex items-center px-6 sm:px-10 py-3 sm:py-4 border-2 border-dynamic-border text-dynamic-text rounded-full hover:border-dynamic-primary hover:text-dynamic-primary hover:bg-dynamic-primary/5 transition-all duration-300 font-light tracking-wide text-base sm:text-lg shadow-sm"
              >
                Explore All Treatments
                <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-dynamic-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-dynamic-surface rounded-full text-xs sm:text-sm font-light tracking-widest text-dynamic-text-secondary border border-dynamic-border mb-6 sm:mb-8 shadow-sm">
                THE FIVE NAILS DIFFERENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-dynamic-text mb-4 sm:mb-6 leading-tight px-4">
                <span className="block">Where Wellness</span>
                <span className="block text-dynamic-primary font-extralight italic">Meets Luxury</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-dynamic-text-secondary max-w-3xl mx-auto font-light leading-relaxed px-4">
                Every detail of your experience is thoughtfully curated to provide the ultimate in relaxation,
                beauty, and personal care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-dynamic-surface rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-dynamic-border">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full border-2 border-dynamic-surface"></div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-dynamic-text mb-3 sm:mb-4 px-4">Flexible Scheduling</h3>
                <p className="text-sm sm:text-base text-dynamic-text-secondary font-light leading-relaxed mb-4 sm:mb-6 px-4">
                  Open daily from 9:00 AM to 7:00 PM with convenient online booking and welcoming walk-in service.
                </p>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-dynamic-surface rounded-full text-xs sm:text-sm font-light tracking-wider text-green-600 border border-green-100">
                  Walk-ins Always Welcome
                </div>
              </div>

              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-dynamic-surface rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-dynamic-border">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-dynamic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-dynamic-primary/20 rounded-full border-2 border-dynamic-surface"></div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-dynamic-text mb-3 sm:mb-4 px-4">Premium Excellence</h3>
                <p className="text-sm sm:text-base text-dynamic-text-secondary font-light leading-relaxed mb-4 sm:mb-6 px-4">
                  Master technicians using only the finest products and techniques to ensure exceptional results every time.
                </p>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-dynamic-surface rounded-full text-xs sm:text-sm font-light tracking-wider text-dynamic-primary border border-dynamic-primary/20">
                  Satisfaction Guaranteed
                </div>
              </div>

              <div className="text-center group">
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-dynamic-surface rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-dynamic-border">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-dynamic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-dynamic-accent/20 rounded-full border-2 border-dynamic-surface"></div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-dynamic-text mb-3 sm:mb-4 px-4">Serene Sanctuary</h3>
                <p className="text-sm sm:text-base text-dynamic-text-secondary font-light leading-relaxed mb-4 sm:mb-6 px-4">
                  Immaculate, tranquil environment designed for your complete relaxation and rejuvenation.
                </p>
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-dynamic-surface rounded-full text-xs sm:text-sm font-light tracking-wider text-dynamic-accent border border-dynamic-accent/20">
                  Hygiene Excellence
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wait List Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-dynamic-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-dynamic-background rounded-full text-xs sm:text-sm font-light tracking-widest text-dynamic-text-secondary border border-dynamic-border mb-6 sm:mb-8 shadow-sm">
                LIVE AVAILABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-dynamic-text mb-4 sm:mb-6 leading-tight px-4">
                <span className="block">Current Wait</span>
                <span className="block text-dynamic-primary font-extralight italic">Status</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-dynamic-text-secondary max-w-2xl mx-auto font-light leading-relaxed px-4">
                Real-time updates on availability and wait times for your convenience
              </p>
            </div>

            <div className="relative">
              {/* Live indicator */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center space-x-2 bg-dynamic-surface px-6 py-3 rounded-full shadow-sm border border-dynamic-border">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-light tracking-wider text-dynamic-text-secondary">LIVE STATUS</span>
                </div>
              </div>

              <div className="bg-dynamic-surface rounded-3xl p-6 sm:p-8 lg:p-12 border border-dynamic-border shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                  <div className="text-center group">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-dynamic-background rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-dynamic-border">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-dynamic-text mb-1 sm:mb-2">15 min</div>
                    <div className="text-sm sm:text-base text-dynamic-text-secondary font-light tracking-wide">Next Available</div>
                  </div>

                  <div className="text-center group">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-dynamic-background rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-dynamic-border">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-dynamic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-dynamic-text mb-1 sm:mb-2">3</div>
                    <div className="text-sm sm:text-base text-dynamic-text-secondary font-light tracking-wide">Currently Waiting</div>
                  </div>

                  <div className="text-center group">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-dynamic-background rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-dynamic-border">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-dynamic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-dynamic-text mb-1 sm:mb-2">25 min</div>
                    <div className="text-sm sm:text-base text-dynamic-text-secondary font-light tracking-wide">Average Wait</div>
                  </div>
                </div>

                <div className="text-center mt-8 sm:mt-12 px-4">
                  <button
                    onClick={() => navigate("/check-in")}
                    className="group w-full sm:w-auto bg-dynamic-primary text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-dynamic-primary-hover transition-all duration-300 font-light tracking-wide text-base sm:text-lg shadow-sm hover:shadow-md transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center">
                      Join Our Wait List
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dynamic-text text-dynamic-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-light text-dynamic-surface mb-4 sm:mb-6 tracking-wide">Five Nails & Spa</h3>
              <p className="text-dynamic-surface/80 mb-6 sm:mb-8 max-w-md font-light leading-relaxed text-base sm:text-lg">
                Your sanctuary for luxury nail care and wellness. Where every detail is crafted
                to provide an exceptional experience of beauty and relaxation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-dynamic-surface/80">
                  <svg className="w-5 h-5 mr-3 text-dynamic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-light">123 Beauty Lane, Styleville</span>
                </div>
                <div className="flex items-center text-dynamic-surface/80">
                  <svg className="w-5 h-5 mr-3 text-dynamic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-light">(555) 123-4567</span>
                </div>
                <div className="flex items-center text-dynamic-surface/80">
                  <svg className="w-5 h-5 mr-3 text-dynamic-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-light">Open Daily 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-light text-dynamic-surface mb-6 tracking-wide">Services</h4>
              <div className="space-y-3">
                <Link to="/book" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">Classic Manicure</Link>
                <Link to="/book" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">Spa Pedicure</Link>
                <Link to="/book" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">Complete Wellness</Link>
                <Link to="/book" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">View All Services</Link>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-light text-dynamic-surface mb-6 tracking-wide">Quick Access</h4>
              <div className="space-y-3">
                <Link to="/book" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">Book Appointment</Link>
                <Link to="/check-in" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">Walk-in Check In</Link>
                <Link to="/login" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">Member Sign In</Link>
                <Link to="/register" className="block text-dynamic-surface/80 hover:text-dynamic-primary transition-colors font-light">New Member</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-dynamic-surface/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-dynamic-surface/60 font-light">&copy; 2024 Five Nails & Spa. All rights reserved.</p>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-dynamic-surface/60 font-light text-sm">Crafted with care for your wellness journey</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
