import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';
import { GoogleAnalytics } from '@next/third-parties/google'

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
          <GoogleAnalytics gaId="G-RWEGD69SRV" />

        </AuthContextProvider>
      </body>
    </html>
  );
}
