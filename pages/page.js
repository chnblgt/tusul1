import Header from "../waterbottle/Header";
import Body from "../waterbottle/Body";
import Footer from "../waterbottle/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "radial-gradient(ellipse at 20% 30%, #ddd6fe 0%, #ede9fe 30%, #f5f3ff 55%, #faf5ff 75%, #ffffff 100%)" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}