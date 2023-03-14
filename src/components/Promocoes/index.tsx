const Promocoes = () => {
  return (
    <section className="w-full h-full py-12  bg-[#fff] ">
      <h1 className="text-[#0C2340] font-bold text-center text-4xl py-5 alter:text-3xl">PROMOÇÕES DA SEMANA </h1>
      <div className="w-10/12 h-full mx-auto grid grid-cols-3 gap-2 py-2 tablet:w-full px-2 cel:flex flex-col">
        <div className="w-full h-full flex items-center gap-4 flex-col py-2 rounded-md boxImgProdutos">
          <div className="w-48 h-48 bg-[#fff] border-8 border-blue-800 rounded-full">
            <img src="assets/salmao.png" alt="salmao" className="w-full -h-full rounded-full " />
          </div>
          <div className="px-2 ">
            <h3 className="text-center text-white font-bold text-">SALMAO</h3>
            
          </div>
          <div className="px-2 py-2 border-2 border-blue-900 bg-blue-500  rounded-md">
           <span className="text- font-bold text-[#0C2340] w-36 px-4  rounded-md">R$ 89.90 kg</span>
          </div>
          <div className="">
            <button className="w-32 h-8 bg-blue-900 text-white uppercase rounded-md font-bold">Comprar</button>
          </div>
        </div>
        <div className="w-full h-full flex items-center gap-4 flex-col py-2 bg-blue-800 rounded-md boxImgProdutos">
          <div className="w-48 h-48 flex items-center justify-center bg-white  border-8 border-blue-800 rounded-full bgAnimation">
            <img src="assets/camarao.png" alt="Camarao" className="w-full -h-full rounded-full" />
          </div>
          <div className="px-2">
            <h3 className="text-center text-white font-bold text-">CAMARÃO</h3>
            
          </div>
          <div className="px-2 py-2 border-2 border-blue-900 bg-blue-500  rounded-md">
           <span className="text- font-bold text-[#0C2340] w-36 px-4  rounded-md">R$ 89.90 kg</span>
          </div>
          <div className="">
            <button className="w-32 h-8 bg-blue-900 text-white uppercase rounded-md font-bold">Comprar</button>
          </div>
        </div>
        <div className="w-full h-full flex items-center gap-4 flex-col py-2 bg-blue-800 rounded-md boxImgProdutos">
          <div className="w-48 h-48 bg-white border-8 border-blue-800 rounded-full">
            <img src="assets/files.png" alt="Files"  className="w-full h-full rounded-full"/>
          </div>
          <div className="px-2">
            <h3 className="text-center text-[#fff] font-bold text-">FILÉ TILÁPIA</h3>
            
          </div>
          <div className="px-2 py-2 border-2 border-blue-900 bg-blue-500  rounded-md">
           <span className="text- font-bold text-[#0C2340] w-36 px-4  rounded-md">R$ 89.90 kg</span>
          </div>
          <div className="">
            <button className="w-32 h-8 bg-blue-900 text-white uppercase rounded-md font-bold">Comprar</button>
          </div>
        </div>
        
      </div>
      <div className="w-11/12 h-full mx-auto flex items-center justify-center flex-col gap-5 ">
        <h1 className="text-[#0C2340] font-bold text-center text-4xl py-5 alter:text-3xl ">AGILIDADE E SEGURANÇA</h1>
        <div className="w-full  flex items-center justify-center gap-10 alter:flex-col">
          <div className="w-52 h-52 bg-[#0C2340] font-bold text-center text-4xl py-5 alter:text-3xl] border-2 border-blue-600 rounded-full flex items-center justify-center flex-col ">
             <img src="assets/seguranca.png" alt="Delivery" />
             <h3 className="w-full text-center text-xl text-white">Site 100% Seguro</h3>
          </div>
          <div className="w-52 h-52 bg-[#0C2340] font-bold text-center text-4xl py-5 alter:text-3xl] border-2 border-blue-600 rounded-full flex items-center justify-center flex-col ">
             <img src="assets/delivery.png" alt="Delivery" />
             <h3 className="w-full text-center text-xl text-white">Entrega Rapída</h3>
          </div>
          <div className="w-52 h-52 bg-[#0C2340] font-bold text-center text-4xl py-5 alter:text-3xl] border-2 border-blue-600 rounded-full flex items-center justify-center flex-col ">
             <img src="assets/peixes.png" alt="Delivery" />
             <h3 className="w-full text-center text-xl text-white">Peixes Frescos</h3>
          </div>
          <div className="w-52 h-52 bg-[#0C2340] font-bold text-center text-4xl py-5 alter:text-3xl] border-2 border-blue-600 rounded-full flex items-center justify-center flex-col ">
             <img src="assets/garantia.png" alt="Delivery" />
             <h3 className="w-full text-center text-xl text-white">Qualidade Garantida</h3>
          </div>
          
        </div> 
        <div className="">
          <h2 className="text-[#0C2340] text-center top-6 font-bold text-cSize ">Há 20 anos trazendo qualidade para  a sua mesa! </h2>
        </div>
      </div>
    </section>
  );
};
export default Promocoes;
