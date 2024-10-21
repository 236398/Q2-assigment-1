import style from "./style.module.css"

export default function about() {
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
        <h1>Welcome to The about page</h1>
        
      </section>

      <footer className={style.footer}>
        <p> .</p>
      </footer>
      
    
     
    </>
  );
}