import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">

      <h1 className="text-8xl font-extrabold text-blue-700">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-3 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition"
      >
        ⬅ Back to Dashboard
      </Link>

    </div>
  );
};

export default NotFound;