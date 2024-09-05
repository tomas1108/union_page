
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainSection from "@/components/mainsection/MainSection";
import MainSection2 from "@/components/mainsection/MainSection2";


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <MainSection />
        <MainSection2 />
      </main>
       <Footer />
    </div>
  );
}
