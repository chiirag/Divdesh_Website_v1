import Link from 'next/link';

export default function Investing() {
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

      {/* Investing Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Investing Principles</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">What is Investing?</h2>
            <p className="text-gray-600 mb-6">
              Investing involves putting money into assets with the expectation of generating income or profit over time.
              It&apos;s about growing your wealth through various financial instruments and markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Risk and Return</h3>
              <p className="text-gray-600">
                Higher potential returns usually come with higher risk. Understanding your risk tolerance
                is crucial for successful investing.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Diversification</h3>
              <p className="text-gray-600">
                Don&apos;t put all your eggs in one basket. Spread your investments across different asset
                classes to reduce risk.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Compound Interest</h3>
              <p className="text-gray-600">
                The interest you earn on your investment also earns interest. This compounding effect
                can significantly grow your wealth over time.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Time Horizon</h3>
              <p className="text-gray-600">
                Your investment strategy should align with when you need the money. Long-term investing
                allows for more aggressive strategies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Dollar-Cost Averaging</h3>
              <p className="text-gray-600">
                Invest a fixed amount regularly regardless of market conditions. This reduces the impact
                of market volatility on your investments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Asset Allocation</h3>
              <p className="text-gray-600">
                Divide your investments among different asset classes (stocks, bonds, cash) based on
                your goals, risk tolerance, and time horizon.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Investment Options We Guide On</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Stocks</h3>
                <p className="text-gray-600 mb-4">
                  Ownership shares in companies. Can provide high returns but come with higher risk.
                  Includes individual stocks and ETFs.
                </p>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Individual Stocks</li>
                  <li>Exchange-Traded Funds (ETFs)</li>
                  <li>Index Funds</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Mutual Funds</h3>
                <p className="text-gray-600 mb-4">
                  Professionally managed investment funds that pool money from multiple investors
                  to invest in diversified portfolios.
                </p>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Equity Mutual Funds</li>
                  <li>Debt Mutual Funds</li>
                  <li>Balanced Funds</li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">Fixed Deposits & Bonds</h3>
                <p className="text-gray-600 mb-4">
                  Lower-risk investments that provide steady returns. Suitable for conservative
                  investors or as part of a diversified portfolio.
                </p>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Bank Fixed Deposits</li>
                  <li>Government Bonds</li>
                  <li>Corporate Bonds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-xl mb-8">Let us help you create a personalized investment plan that aligns with your goals and risk tolerance.</p>
          <a href="mailto:gulti.div@gmail.com?subject=Book Investment Consultation" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
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
