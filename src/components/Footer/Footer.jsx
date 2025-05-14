import "./Footer.css";

// import youtube_icon from "../../assets/youtube_icon.png";
// import twitter_icon from "../../assets/twitter_icon.png";
// import instagram_icon from "../../assets/instagram_icon.png";
// import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        {/* <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" /> */}

        <a
          href="https://www.linkedin.com/in/ahmed-fathalla-624677255/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>{" "}
        </a>
        <a href="https://x.com/AhmedFa12072793 " target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/ahmed_fathalla121/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/ahmed.fathalla.370515/"
          target="_blank"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
      <ul>
        <li>
          <a href="#">Audio Description</a>
        </li>
        <li>
          <a href="#">Help Centre</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Media Centre</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Legal Notices</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
        <li>
          <a href="#">Corporate Information</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <p className="copyright-text">
        © 1997-2025 MovieApp, made by ahmedfathalla.
      </p>
    </div>
  );
};

export default Footer;
