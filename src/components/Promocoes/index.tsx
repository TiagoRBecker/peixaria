const Promocoes = () => {
  return (
    <section className="w-full h-full py-12 ">
      <h1 className="text-center  text-[#00008B] font-bold text-5xl py-5">Promoções da Semana </h1>
      <div className="w-10/12 h-full mx-auto grid grid-cols-3 gap-2">
        <div className="w-full h-full flex items-center gap-4 flex-col py-2 rounded-md boxImgProdutos">
          <div className="w-48 h-48 bg-[#fff] border-8 border-blue-800 rounded-full">
            <img src="assets/salmao.png" alt="salmao" className="w-full -h-full rounded-full " />
          </div>
          <div className="px-2 ">
            <h2 className="text-center text-white font-bold text-xl">SALMAO</h2>
            
          </div>
          <div className="px-2 py-2 border-2 border-blue-900 bg-blue-500  rounded-md">
           <span className="text-xl font-bold text-white w-36 px-4  rounded-md">R$ 89.90 kg</span>
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
            <h2 className="text-center text-white font-bold text-xl">CAMARÃO</h2>
            
          </div>
          <div className="px-2 py-2 border-2 border-blue-900 bg-blue-500  rounded-md">
           <span className="text-xl font-bold text-white w-36 px-4  rounded-md">R$ 89.90 kg</span>
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
            <h2 className="text-center text-white font-bold text-xl">FILÉ TILÁPIA</h2>
            
          </div>
          <div className="px-2 py-2 border-2 border-blue-900 bg-blue-500  rounded-md">
           <span className="text-xl font-bold text-white w-36 px-4  rounded-md">R$ 89.90 kg</span>
          </div>
          <div className="">
            <button className="w-32 h-8 bg-blue-900 text-white uppercase rounded-md font-bold">Comprar</button>
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default Promocoes;
