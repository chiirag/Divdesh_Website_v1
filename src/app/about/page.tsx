import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Divdesh Wealth</h1>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-6">
              At Divdesh Wealth, we believe that everyone deserves access to expert financial guidance.
              Our mission is to empower individuals and families to make informed decisions about their financial future.
            </p>
            <p className="text-lg text-gray-600">
              With years of experience in the financial industry, our team provides personalized advice
              on investing and insurance, ensuring you feel confident and secure in your choices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted financial advisory firm, helping people achieve financial freedom
                through education and personalized guidance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Values</h2>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Integrity and transparency</li>
                <li>Client-first approach</li>
                <li>Continuous learning and education</li>
                <li>Personalized service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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
