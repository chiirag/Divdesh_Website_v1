export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">Divdesh Wealth</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
            <a href="mailto:gulti.div@gmail.com?subject=Book Appointment" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Secure Your Financial Future
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert guidance on investing and insurance to help you make informed decisions
          </p>
          <a href="mailto:gulti.div@gmail.com?subject=Book Appointment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Divdesh Wealth?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-600">Personalized guidance from experienced financial advisors</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Approach</h3>
              <p className="text-gray-600">We simplify complex topics to help you understand and decide</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🚫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Spam</h3>
              <p className="text-gray-600">Respectful communication at your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Investing Guidance</h3>
              <p className="text-gray-600 mb-4">
                Learn about mutual funds, stocks, and other investment options. We help you build a portfolio that suits your risk appetite and goals.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Portfolio analysis</li>
                <li>Risk assessment</li>
                <li>Market insights</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Insurance Advisory</h3>
              <p className="text-gray-600 mb-4">
                Protect your family and assets with the right insurance policies. We compare options and guide you through the process.
              </p>
              <ul className="list-disc list-inside text-gray-600">
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
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">&ldquo;Divdesh Wealth helped me understand investing without the jargon. Now I feel confident about my financial future.&rdquo;</p>
              <p className="font-semibold">- Client A</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">&ldquo;Their insurance advisory was straightforward and no pressure. Highly recommend!&rdquo;</p>
              <p className="font-semibold">- Client B</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8">Book a free consultation today and start your journey towards financial security.</p>
          <a href="mailto:gulti.div@gmail.com?subject=Book Appointment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
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
