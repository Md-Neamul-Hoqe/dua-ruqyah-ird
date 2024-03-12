'use client'
import MainContent from "@/components/MainContent/MainContent";
import Categories from "@/components/categories/Categories";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import Navbar from "@/components/navbar/Navbar";
import Settings from "@/components/settings/Settings";

export default function Home() {

  // console.log(subCategories);

  return (
    <main className="flex min-h-screen">
      <div className="w-full font-mono text-sm flex">
        <LeftSidebar />
        <main className="w-full flex flex-col">
          <Navbar />
          <section className="flex items-stretch">
            <Categories />
            <MainContent />
          </section>
        </main>
        <Settings />
      </div>
    </main>
  );
}
