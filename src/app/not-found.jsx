export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition"
        >
          Back to Home
        </a>
      </div>
    );
  }