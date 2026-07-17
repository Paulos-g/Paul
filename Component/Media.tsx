import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Med() {
  return (
    <div className="social">
      <div className="social-icons">
        <a href="https://github.com/Paulos-g" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=paulosgirmachew28@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://linkedin.com/in/paulos-girmachew-0420473b3/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/paulos__g"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Med;
