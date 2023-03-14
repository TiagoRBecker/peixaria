import Header from "../src/components/Header/index"
import Produtos from "../src/components/Produtos/index"
import Promocoes from "./components/Promocoes";
import Receitas from "./components/Receitas";
import Servicos from "./components/Services";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";
function App() {
  return (
    <>
    <Header/>
    <Produtos/>
    <Promocoes/>
    <div className="bgReceitas flex items-center justify-center">
      <h1 className="text-[#fff] font-bold text-4xl py-5 alter:text-3xl">RECEITAS DELICIOSAS</h1>
    </div>
    <Receitas/>
    <Servicos/>
    <SocialIcons/>
    <Footer />
    </>
  );
}

export default App;
