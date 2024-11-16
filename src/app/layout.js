import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';

export const metadata = {
  title: "Prfec AI",
  description: "",
};

export default function RootLayout({ children}) {

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar/>
          {children}
          <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  );
}
