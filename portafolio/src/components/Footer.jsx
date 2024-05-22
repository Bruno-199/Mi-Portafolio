import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/bruno-bazan-93828428a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/Bruno-199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/bazanbruno199/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="mailto:bazanbruno199@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope fa-2x"></i>
            </a>
            <a
              href="https://discordapp.com/users/779043573202157568"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-discord fa-2x"></i>
            </a>
          </div>

          <hr />

          <div className="footer-copy">
            <p>
              © 2024. Made by{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Bruno Bazan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
