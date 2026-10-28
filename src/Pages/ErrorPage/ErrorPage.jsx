
import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-6 text-center text-white">
      <h1 className="text-8xl font-extrabold text-violet-500 sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-sm text-gray-400">
        Sorry, the page you're looking for doesn't exist
        or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium transition hover:bg-violet-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
