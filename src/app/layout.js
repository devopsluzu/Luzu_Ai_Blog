import '@styles/globals.css';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "LuzuAI",
  description: "",
};

export default function RootLayout({ children}) {

  return (
    <html lang="en">
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GT-MBH8FXW4');`
          }}
        />
      </head>
      <body>
        <AuthContextProvider>
          <Navbar/>
          {children}
          <Footer/>
          <GoogleAnalytics gaId="G-EBZGJH5S9C" />

        </AuthContextProvider>
      </body>
    </html>
  );
}
