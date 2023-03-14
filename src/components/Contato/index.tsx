

const Contato = ()=>{
    return (
       <form className="w-96 h-96 py-2 px-3 bg-[#002233] opacity-90 rounded-md relative alter:w-full">
        <h1 className="text-white text-center py-2 text-2xl">CONTATO</h1>
        <div className="flex items-center justify-between w-full relative">
            
            <input className="w-full inputClass" type={"text"} required={true} />
            <span className="inputClassSpan">Nome</span>
        </div>
        <div className="flex items-center justify-between w-full relative">
           
            <input className="w-full inputClass" type={"text"}  required={true}/>
            <span className="inputClassSpan">E-mail</span>
        </div>
        <div className="flex flex-col items-center  w-full relative">
           
          <textarea className="inputClass "  required={true}></textarea>
          <span className="inputClassSpan">Mensagem</span>
        
        
        </div>
        <div className=" absolute bottom-9 z-50 w-full left-0 px-2">
        <button className="btnClassForm">ENVIAR</button>
        </div>
       </form>
    )
}
export default Contato