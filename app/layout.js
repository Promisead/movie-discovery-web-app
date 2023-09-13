import "./globals.css";
import StateProvider from "./StateProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Movie Discovery Web App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateProvider>
        <body>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </StateProvider>
    </html>
  );
}
