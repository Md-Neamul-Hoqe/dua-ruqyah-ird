import { Inter } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata = {
  applicationName: 'Dua & Ruqyah',
  publisher: 'IRD',
  authors: [ { name: 'Md. Neamul Hoqe', url: 'https://www.linkedin.com/in/mneamulh' } ],
  title: {
    template: 'Dua & Ruqyah | %s',
    default: 'Dua & Ruqyah',
  },
  description: 'Dua & Ruqyah | Islamic App',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`flex min-h-screen ${inter?.className}`}>
          <main className="">
            <div className="w-screen min-h-full flex">
              <LeftSidebar />
              <aside className="w-full md:w-[calc(100% - 6rem)] flex flex-col">
                <Navbar />
                <section className="w-full">
                  {children}
                </section>
              </aside>
            </div>
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
