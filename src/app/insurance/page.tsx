import Link from 'next/link';

export default function Insurance() {
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

      {/* Insurance Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Insurance Principles</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">What is Insurance?</h2>
            <p className="text-gray-600 mb-6">
              Insurance is a contract between an individual and an insurance company where the individual pays a premium
              in exchange for financial protection against potential losses or damages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Risk Pooling</h3>
              <p className="text-gray-600">
                Many people contribute small amounts (premiums) to create a pool of funds that covers
                the losses of the few who experience covered events.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Indemnification</h3>
              <p className="text-gray-600">
                The insurance company compensates the insured for actual financial losses suffered,
                up to the policy limits.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Insurable Interest</h3>
              <p className="text-gray-600">
                You must have a financial interest in the insured item or person to purchase
                insurance coverage.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Utmost Good Faith</h3>
              <p className="text-gray-600">
                Both parties must disclose all relevant information honestly when entering
                into the insurance contract.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Subrogation</h3>
              <p className="text-gray-600">
                After paying a claim, the insurance company may pursue recovery from the
                responsible third party.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Proximate Cause</h3>
              <p className="text-gray-600">
                The loss must be caused by a peril covered by the policy, and the chain of events
                leading to the loss must be unbroken.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Types of Insurance We Cover</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Life Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Provides financial protection for your family in case of your untimely death.
                  Includes term life, whole life, and universal life insurance.
                </p>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Term Life Insurance</li>
                  <li>Whole Life Insurance</li>
                  <li>Universal Life Insurance</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Health Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Covers medical expenses for hospitalization, doctor visits, and other health-related costs.
                  Helps manage healthcare costs and provides peace of mind.
                </p>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Individual Health Insurance</li>
                  <li>Family Health Insurance</li>
                  <li>Critical Illness Coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Insurance?</h2>
          <p className="text-xl mb-8">Let us guide you through the complex world of insurance to find the right coverage for your needs.</p>
          <a href="mailto:gulti.div@gmail.com?subject=Book Insurance Consultation" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
            Book Consultation
          </a>
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
