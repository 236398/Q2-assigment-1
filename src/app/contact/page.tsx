import style from "./style.module.css";

export default function contact() {
  return (
    <>

            <header>
        <nav className={style.navbar}>
          
          <div>
            
              <a href="/">Home</a> <a href="/about">About</a> <a href="/contact">Contact</a> <a href="/services">Services</a>
              </div>
                  </nav>
      </header>
      <section className={style.hero}>
        <h1>Welcome to the contact page</h1>
       
      </section>

      <footer className={style.footer}>
       
      </footer>
      
    
     
    </>
  );
}