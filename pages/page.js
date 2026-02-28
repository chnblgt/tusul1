import Header from "../waterbottle/Header";
import Body from "../waterbottle/Body";
import Footer from "../waterbottle/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
