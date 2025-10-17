import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-primary">Divdesh Wealth</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
              <a href="/about" className="text-gray-700 hover:text-primary">About Us</a>
              <a href="/insurance" className="text-gray-700 hover:text-primary">Insurance</a>
              <a href="/investing" className="text-gray-700 hover:text-primary">Investing</a>
            </nav>
            <a href="mailto:gulti.div@gmail.com?subject=Book Appointment" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80">
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-primary text-white py-20 bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')"}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Secure Your Financial Future
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert guidance on investing and insurance to help you make informed decisions
          </p>
          <a href="mailto:gulti.div@gmail.com?subject=Book Appointment" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse">500+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse">₹50Cr+</div>
              <p className="text-gray-600">Assets Managed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse">95%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2 animate-pulse">5+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Divdesh Wealth?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-700">Personalized guidance from experienced financial advisors</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Approach</h3>
              <p className="text-gray-700">We simplify complex topics to help you understand and decide</p>
            </div>
            <div className="text-center group">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 0l3.65-3.65m-3.65 3.65L21 3m-3.228 3.228L9 21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Spam</h3>
              <p className="text-gray-700">Respectful communication at your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Investing Guidance</h3>
              <p className="text-gray-700 mb-4">
                Learn about mutual funds, stocks, and other investment options. We help you build a portfolio that suits your risk appetite and goals.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Portfolio analysis</li>
                <li>Risk assessment</li>
                <li>Market insights</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Insurance Advisory</h3>
              <p className="text-gray-700 mb-4">
                Protect your family and assets with the right insurance policies. We compare options and guide you through the process.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Term life insurance</li>
                <li>Health insurance</li>
                <li>Claims assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-800 mb-4">&ldquo;Divdesh Wealth helped me understand investing without the jargon. Now I feel confident about my financial future.&rdquo;</p>
              <p className="font-semibold text-primary">- Chirag Jain</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-800 mb-4">&ldquo;Their insurance advisory was straightforward and no pressure. Highly recommend!&rdquo;</p>
              <p className="font-semibold text-primary">- Naman Nanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8">Book a free consultation today and start your journey towards financial security.</p>
          <a href="mailto:gulti.div@gmail.com?subject=Book Appointment" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Divdesh Wealth</h3>
              <p className="text-gray-400">Expert financial guidance for investing and insurance.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: gulti.div@gmail.com</p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-400">Social media links</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Divdesh Wealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
