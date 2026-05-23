import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass rounded-[20px] px-10 py-12 text-center max-w-md w-full">
        <h1 className="text-7xl md:text-8xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-200">
          404
        </h1>
        <p className="mt-4 mb-6 text-lg text-white/80">
          Oops! That page doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 hover:bg-white/15 hover:text-cyan-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
