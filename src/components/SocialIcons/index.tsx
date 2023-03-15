

const SocialIcons = ()=>{
    return(
        <section className="w-full h-full flex flex-col items-center justify-center gap-2 py-12">
            <h1 className="text-[#fff] font-bold text-4xl py-5 alter:text-3xl">SIGA-NOS</h1>
            <p className="w-9/12 text-center text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id dolore illum repudiandae, mollitia ipsam distinctio corrupti delectus quisquam officiis iure aliquid facilis adipisci repellat. Modi autem corrupti eveniet voluptatem.</p>
             <div className="flex pt-4">
               <div className=" cursor-pointer">
                <a href="https://www.facebook.com" target={"_blank"}>
                <img src="assets/face.png" alt="Facebook" />
                </a>
               </div>
               <div className="cursor-pointer">
               <a href="https://www.instagram.com" target={"_blank"}>
                <img src="assets/insta.png" alt="insta" />
                </a>
               </div>
               <div className="cursor-pointer">
                <a href="https://www.tiktok.com" target={"_blank"}>
                <img src="assets/tk.png" alt="tik Tok" />
                </a>
               </div>
               <div className="cursor-pointer">
                <a href="https://twitter.com" target={"_blank"}>
                <img src="assets/twitter.png" alt="Twitter" />
                </a>
               </div>
              
               <div className="cursor-pointer">
               <a href="https://www.youtube.com" target={"_blank"}>
                <img src="assets/yt.png" alt="Youtube" />
                </a>
               </div>
             </div>
        </section>
    )
}
export default SocialIcons;