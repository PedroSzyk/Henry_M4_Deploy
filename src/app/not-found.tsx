import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-title text-primary mb-4">404</h1>
      <h2 className="text-subtitle text-secondary mb-8">Page Not Found</h2>
      <p className="text-body text-secondary mb-8 text-center">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg shadow-md transition duration-300">
        Return to Home Page
      </Link>
    </div>
  );
}
