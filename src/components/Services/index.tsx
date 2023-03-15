import Contato from "../Contato";

const Servicos = () => {
  return (
    <section className=" flex items-center justify-center flex-col py-12  bgForm" id="contato">
      <h1 className="text-[#fff] py-1 font-bold text-3xl alter:text-3xl">CONTATE-NOS</h1>
       <p className="w-9/12 text-center text-white text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores soluta esse veniam doloremque distinctio praesentium culpa sint est ipsum possimus rerum enim expedita ad labore neque aspernatur iste nemo.</p>
      <div className="flex items-center justify-center py-5 w-3/4 h-full alter:flex-col">
          <div className="w-2/4 flex flex-col gap-6 items-center justify-center alter:w-full ">
            <div className="flex w-72 gap-3 justify-start alter:flex-col w-full items-center ">
              <div className="w-12 h-12 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center ">
                <img src="assets/location.png" alt="Location" width={28} height={28} />
              </div>
              <div className="alter:flex flex-col w-80 ">
                <h2 className="text-white font-bold text-xl">Endereço</h2>
                <p className="text-white text-lg">Rua: xxxxxxxxxxxxxxxxxxxxxx</p>
                <p className="text-white text-lg">Bairro:xxxxxxxxxxxxxxxxxxxx</p>
                <p className="text-white text-lg">Cep:xxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
            </div>
            <div className="flex w-72 gap-3 justify-start alter:flex-col w-full items-center " >
              <div className="w-12 h-12 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center">
                <img src="assets/phone.png" alt="Telefone"  width={28} height={28} />
              </div>
              <div className="alter:flex flex-col w-80  ">
                <h2 className="text-white font-bold text-xl">Telefone</h2>
                <p className="text-white text-lg alter:w-72">(51): xxx-xxx-xxx</p>
                <p className="text-white text-lg">(51): xxx-xxx-xxx</p>
                
              </div>
            </div>
            <div className="flex w-72 gap-3 justify-start  alter:flex-col w-full items-center " >
              <div className="w-12 h-12 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center">
                <img src="assets/email.png" alt="E-mail"  width={28} height={28}/>
              </div>
              <div className="alter:flex flex-col w-80">
                <h2 className="text-white font-bold text-xl">E-mail</h2>
                <p className="text-white text-base">(51)E-mail:tester@gmail.com</p>
              
                
              </div>
            </div>
          
          </div>

          <div className="w-2/4 flex items-center justify-center alter:w-full px-2 mt-5">
            <Contato/>
          </div>
      </div>
      
    </section>
  );
};
export default Servicos;
