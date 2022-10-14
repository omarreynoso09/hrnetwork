import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="login_footer">
      <div className="login_footer_wrap">
        <Link to="/">English(UK)</Link>
        <Link to="/">Français(FR)</Link>
        <Link to="/">العربية</Link>
        <Link to="/">ⵜⴰⵎⴰⵣⵉⵖⵜ</Link>
        <Link to="/">Español (España)</Link>
        <Link to="/">italiano</Link>
        <Link to="/">Deutsch</Link>
        <Link to="/">Português (Brasil)</Link>
        <Link to="/">हिन्दी</Link>
        <Link to="/">中文(简体)</Link>
        <Link to="/">日本語</Link>
        <Link to="/" className="footer_square">
          <i className="plus_icon"></i>
        </Link>
      </div>
      <div className="footer_splitter"></div>
      <div className="login_footer_wrap">
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log in</Link>

        <Link to="/">
          AdChoices
          <i className="adChoices_icon"></i>
        </Link>
        <Link to="/">Terms</Link>
        <Link to="/">Help</Link>
        <a href="https://instagram.com/HanselReynoso">Instagram</a>
        <a href="https://www.facebook.com/hansel.o.reynoso/">Facebook</a>
        <a href="https://linkedin.com/hanselReynoso">LinkedIn</a>
        <a href="https://www.udemy.com/courses/development/web-development/">
          Learn Web Development
        </a>
        <a href="https://medium.com/">Medium</a>
        <a href="https://">Careers</a>
        <a href="https://">Marketplace</a>
        <a href="http://hanselreynoso.com/">Hansel Reynoso Resume </a>
        <a href="https://highstandardsweb.com">High Standards Web </a>
      </div>
      <div className="login_footer_wrap">
        <Link to="/" style={{ fontSize: "12px", marginTop: "10px" }}>
          Hansel Reynoso © 2022
        </Link>
      </div>
    </footer>
  );
}
