import style from "./style.module.css";

export default function services() {
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
        <h1>following services</h1>
        <br /><br /><br /><br /><br />
        <button><a href="/services/wendevelopment">Web Develoment</a></button>
        <button><a href="/services/appdevelopment">App development</a></button>
      </section>
      

      <footer className={style.footer}>

      </footer>
      
    
     
    </>
  );
}