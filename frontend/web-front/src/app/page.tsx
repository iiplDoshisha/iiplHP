import Header from "@/components/header/Header";
import Title from "@/components/title/Title";
import DateUpdated from "@/components/date_updated/DateUpdated";
import Footer from "@/components/footer/Footer";
import Categories from "@/components/categories/Categories";
import Grade from "@/components/grade/Grade";

export default function Home() {
  return (
    <div className="flex-col h-screen">
        <Header/>
            <Title text='Research'/>
            <DateUpdated/>
            <Categories text1='教員' text2=''></Categories>
            <Categories text1='大学院生' text2=''></Categories>
            <Grade text='D1'></Grade>
        <Footer/>
    </div>
  );
}