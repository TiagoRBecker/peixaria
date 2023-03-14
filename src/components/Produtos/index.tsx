
const Produtos = ()=>{
    return(
        <section
        className="w-ful h-full py-12 flex items-center justify-center flex-col "
        id="produtos"
        >
            <h1 className="text-[#fff] font-bold text-4xl py-5 alter:text-3xl">PRODUTOS</h1>
            <div className="w-11/12 customH  grid grid-cols-4 justify-items-center gap-1 desktop:grid-cols-2 minCel:flex flex-col h-full" >
                <div className="w-full flex justify-center customH  fMar rounded-md">
                    
                  <img src="assets/banner.jpg" alt="peixes" className="fImgReceita" />
                  <div className="textProdutos">
                    
                    
                    <button className="btnClass " >CONFIRA</button>
                
                  </div>
                  <h2 className="absolute text-white text-center top-6 font-bold text-cSize">PEIXES FRESCOS</h2>
                
                </div>
                <div className="w-full flex justify-center customH fMar">
                  <img src="assets/mar.jpg" alt="frutos do mar" className="fImgReceita"/>
                  <div className="textProdutos ">
                   
                    <button className="btnClass " >CONFIRA</button>
                  
                   
                  </div>
                  <h2 className="absolute text-white top-6 font-bold text-cSize text-center w-full">FRUTOS DO MAR</h2>
                 
                </div>
                <div className="w-full flex justify-center customH fMar">
                  <img src="assets/camarao.webp" alt="camarao" className="fImgReceita"/>
                  <div className="textProdutos">
                   
                   <button className="btnClass " >CONFIRA</button>
                 
                  
                 </div>
                 <h2 className="absolute text-white top-6 font-bold text-cSize">CAMARÃO</h2>
                </div>
                
                <div className="w-full flex justify-center customH fMar">
                  <img src="assets/receita.jpg" alt="receita" className="fImgReceita"/>
                  <div className="textProdutos">
                   
                   <button className="btnClass " >CONFIRA</button>
                 
                  
                 </div>
                 <h2 className="absolute text-white top-6 font-bold text-cSize">RECEITAS</h2>
                </div>
            </div>
            

        </section>
    )
}
export default Produtos;