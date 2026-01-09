import Link from 'next/link';
import { config } from '@/data/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold">AO</span>
              </div>
              <span className="font-bold text-lg">{config.site.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{config.site.description}</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-3">
              {config.products.map((product) => (
                <li key={product.id}>
                  {product.href ? (
                    <Link href={product.href} className="text-gray-400 hover:text-white transition text-sm">
                      {product.name}
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm">{product.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">Solutions</h3>
            <ul className="space-y-3">
              {config.solutions.map((solution) => (
                <li key={solution.id}>
                  {solution.href ? (
                    <Link href={solution.href} className="text-gray-400 hover:text-white transition text-sm">
                      {solution.name}
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm">{solution.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} {config.site.name}. All rights reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
