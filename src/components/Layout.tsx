import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
           <Header />
           
            {/* Add padding-top to main content to prevent it from being hidden under fixed header */}
            <main className="flex-grow mx-auto w-full px-6 py-8 mt-16">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
