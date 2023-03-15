
const Receitas = () => {
  return (
    <section className="w-full h-full flex items-center justify-center flex-col  py-12 " id="receitas">
      <h1 className="text-[#fff] font-bold text-4xl py-5 alter:text-3xl">CANTINHO DA RECEITA</h1>
      <div className="grid grid-cols-3 w-11/12 h-full justify-center items-center gap-2 alter:flex flex-col">
        <div className="w-full h-full flex items-center flex-col rounded-md gap-4 py-4 bg-[#fff]">
          <div className="w-full h-80">
            <img src="assets/moranga.webp" alt="Moranga" className="imgGlobalCss" />
          </div>
          <div className="text-center text-xl text-[#002233]">
            <h3 className="text-[#002233] text-center top-6 font-bold text-xl">CAMARÃO NA MORANGA</h3>
          </div>
          <div className="w-full flex items-center justify-center">
           <button className="btnClassReceita">CONFIRA</button>
          </div>
        </div>
        <div className="w-full h-full  flex items-center flex-col rounded-md gap-4 py-4 bg-[#fff]">
          <div className="w-full h-80">
            <img src="assets/grelhado.avif" alt="Peixe Grelhado" className="imgGlobalCss" />
          </div>
          <div className="text-center text-xl text-[#002233]">
            <h3 className="text-[#002233] text-center top-6 font-bold text-xl">SALMÃO GRELHADO</h3>
          </div>
          <div className="w-full flex items-center justify-center">
           <button className="btnClassReceita">CONFIRA</button>
          </div>
        </div>
        <div className="w-full h-full flex items-center flex-col rounded-md gap-4 py-4 bg-[#fff]">
          <div className="w-full h-80">
            <img src="assets/receita.jpg" alt="Peixe assado" className="imgGlobalCss" />
          </div>
          <div className="text-center text-xl text-[#002233]">
            <h3 className="text-[#002233] text-center top-6 font-bold text-xl">TAINHA ASSADA</h3>
          </div>
          <div className="w-full flex items-center justify-center">
           <button className="btnClassReceita">CONFIRA</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Receitas;
