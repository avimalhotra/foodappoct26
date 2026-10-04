import Header from "./header";
import Nav from "./Nav";
import Footer from "./footer";
import FoodApp from "./foodApi";

export default function Home() {

  return (
    <div className="container mx-auto px-3">
      <Header></Header>
      <Nav></Nav>
      <main className="py-3">
        
        <FoodApp></FoodApp>
  
      </main>
      <Footer></Footer>
    </div>
  );
}
