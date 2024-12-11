import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-subtitle font-semibold mb-2 text-primary">Vintage Apple Store</h3>
            <p className="text-body text-secondary">Rediscover the magic of classic Apple products.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-subtitle font-semibold mb-2 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-body text-link hover:text-link-hover transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-body text-link hover:text-link-hover transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-body text-link hover:text-link-hover transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-subtitle font-semibold mb-2 text-primary">Contact Us</h3>
            <p className="text-body text-secondary">Email: info@retroapple.com</p>
            <p className="text-body text-secondary">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-spacing pt-spacing border-t text-center text-secondary">
          <p>&copy; 2024 Vintage Apple Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}