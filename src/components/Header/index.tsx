import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const teste =()=>{
  console.log("ok")
}
export const Header = () => {
  return (
    <section>
    <header className="w-full h-24 relative bg-[#0C2340]">
    
       <div className="w-full flex items-center justify-center py-2">
          <img src="/assets/logo.png" alt="Logo" className="w-11 h-11" />
       </div>

        <nav className=" w-full flex items-center justify-center">
            <ul className="flex gap-5">
                <li className="">
                    <AnchorLink className="no-underline text-sm uppercase text-white font-bold" href="#">Home</AnchorLink>
                    
                </li>
                <li>
                   <AnchorLink className="no-underline text-sm uppercase text-white font-bold" href="#produtos" offset={-100}>Produtos</AnchorLink>
                    
                </li>
                <li>
                <AnchorLink className="no-underline text-sm uppercase text-white font-bold"  href="#receitas" offset={-100}>Receitas</AnchorLink>
                    
                </li>
                <li>
                    <AnchorLink className="no-underline text-sm uppercase text-white font-bold" href="#contato" >Contato</AnchorLink>
                    
                </li>
            </ul>
        </nav>
    
        
    </header>
      <Carousel 
       className="carCustom"
      >
        <Carousel.Item className="cItem">
          <img
            className="w-full cImg "
            src="/assets/cm.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="cCaption">
            
            <h3 className="text-4xl txt-white font-bold ">CAMARÃO LIMPO</h3>
           
           <p className="text-left text-xl alter:text-center">No conforto do seu lar, oferecendo praticidade para o seu dia a dia!</p>
           <div className="w-full flex items-center justify-center">
           <button className="btnClass " >CONFIRA</button>
           </div>
          
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="cItem">
          <img
             className="w-full cImg"
            src="/assets/banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="cCaption">
            
            <h3 className="text-4xl txt-white font-bold alter:text-center  ">PEIXES FRESCOS</h3>
           
           <p className="text-left text-xl alter:text-center">No conforto do seu lar, oferecendo praticidade para o seu dia a dia!</p>
           <div className="w-full flex items-center justify-center">
           <button className="btnClass " >CONFIRA</button>
           </div>
          
        </Carousel.Caption>
         
        </Carousel.Item>
        <Carousel.Item className="cItem">
          <img
             className="w-full cImg teste"
            src="/assets/receita.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="cCaption">
            
            <h3 className="text-4xl txt-white font-bold alter:text-center">RECEITAS SABOROSAS  </h3>
           
           <p className="text-left text-xl alter:text-center ">No conforto do seu lar, oferecendo praticidade para o seu dia a dia!</p>
           <div className="w-full flex items-center justify-center">
           <button className="btnClass " >CONFIRA</button>
           </div>
          
        </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
export default Header;
