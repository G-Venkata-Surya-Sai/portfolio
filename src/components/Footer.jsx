export default function Footer() {
    return (
      <footer className="footer">
        <p className="prompt">$ contact</p>
  
        <div className="contact-row">
            Email:
            <a href="mailto:suryaguntreddi11004@gmail.com"> suryaguntreddi11004@gmail.com</a>
            <span style={{marginLeft: "50px"}}></span>
            Mobile:
            <a href="tel:+91939828248"> +91939828248</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Surya
        </p>
      </footer>
    );
  }