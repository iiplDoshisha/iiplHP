import Header from "@/components/header/Header";
import Title from "@/components/title/Title";
import DateUpdated from "@/components/date_updated/DateUpdated";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex-col h-screen">
        <Header/>
            <Title text='Research'/>
            <DateUpdated/>
        <Footer/>
    </div>
  );
}