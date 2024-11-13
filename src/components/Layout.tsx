import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="w-full bg-gray-800 text-white">
        <nav className="min-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              Logo
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow min-w-full mx-auto w-full px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white">
        <div className="min-w-full mx-auto px-6 py-4">
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Anichur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
