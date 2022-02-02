import twitterLogo from "../assets/images/Twitter Icon.png";
import facebookLogo from "../assets/images/Facebook Icon.png";
import instagramLogo from "../assets/images/Instagram Icon.png";
import linkedInLogo from "../assets/images/Linkedin Icon.png";
import gitHubLogo from "../assets/images/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img
        src={twitterLogo}
        alt="Twitter logo"
        className="footer--twitter-logo"
      />
      <img
        src={facebookLogo}
        alt="Facebook logo"
        className="footer--facebook-logo"
      />
      <img
        src={instagramLogo}
        alt="Instagram logo"
        className="footer--instagram-logo"
      />
      <img
        src={linkedInLogo}
        alt="LinkedIn logo"
        className="footer--linkedIn-logo"
      />
      <img src={gitHubLogo} alt="GitHub logo" className="footer--github-logo" />
    </div>
  );
}
