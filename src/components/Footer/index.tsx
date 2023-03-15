import AnchorLink from 'react-anchor-link-smooth-scroll'
const Footer = () => {
  return (
    <footer className="bgFooter">
      <div className="w-full h-full flex justify-center alter:flex-col items-center py-5">
      <div className="w-4/12 h-60 flex  flex-col items-center alter:w-full">
            <h2 className='text-[#fff] font-bold text-lg'>NAVEGAÇAO</h2>
        <nav className=" w-full flex  items-center justify-center ">
            
            <ul className="flex flex-col gap-4 pt-2">
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
        </div>
        <div className="w-4/12 h-60 flex flex-col items-center alter:w-full">
          <h2 className='text-[#fff] font-bold text-lg'>LOCALIZAÇÃO </h2>
          <iframe
          className='pt-2 px-2 w-full h-full'
            title="Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27404.98016692743!2d-51.8094848!3d-30.8412416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1678881319977!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="w-4/12 h-60 flex flex-col items-center alter:w-full">
         <h2 className='text-[#fff] font-bold text-lg  '>CONTATOS</h2>
         <div className='w-full flex items-center justify-center gap-2 pt-2'>
            <div className='w-8 h-8 flex items-center justify-center  '>
                <img src="assets/phone.png" alt="Telefone" width={20} height={20} />
            </div>
            <div className=''>
                <span className='text-white font-bold text-base'>(55) xxx-xxx-xxx</span>
            </div>

         </div>
         <div className='w-full flex items-center justify-center gap-2 py-1'>
            <div className='w-8 h-8 flex items-center justify-center   '>
                <img src="assets/whatsapp.png" alt="Telefone" width={20} height={20} />
            </div>
            <div className=''>
                <span className='text-white font-bold text-base'>(55) xxx-xxx-xxx</span>
            </div>

         </div>
          
         <div className='w-full flex items-center justify-center gap-2 py-1'>
            <div className='w-8 h-8 flex items-center justify-center  '>
                <img src="assets/email.png" alt="Telefone" width={18} height={18} />
            </div>
            <div className=''>
                <span className='text-white font-bold text-base'>teste@gmail.com</span>
            </div>

         </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center '>
        <span className='text-white'>Todos direitos reservdaso @ empresa</span>
        <span className='text-white'>Desenvolvido por Tiago Becker</span>
      </div>
    </footer>
  );
};
export default Footer;
