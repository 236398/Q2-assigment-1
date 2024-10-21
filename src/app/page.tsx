import style from "./style.module.css";


export default function Home() {
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
        <div>
          <h1>Welcome to My Website</h1>
          <p>scroll down</p>
          
        </div>
      
      </section>
      

      <section className={style.section}>
        <div>
        <h2>About Us</h2>
       
        <button><a href="/about">about us</a></button>
        </div>
        <div>
        <h2>Our Services</h2>
       
        <button><a href="/services">View Services</a></button>
        </div>

      <div>
        <h2>Get in Touch</h2>
        
        <button><a href="/contact">Contact Us</a></button>
        </div>
      </section>

      <footer className={style.footer}>
        <p></p>
      </footer>
    </>
  );
}