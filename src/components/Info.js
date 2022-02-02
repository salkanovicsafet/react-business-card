import woman from "../assets/images/woman.png";
import emailLogo from "../assets/images/Mail Icon.png";

export default function Info() {
  return (
    <div className="info">
      <img src={woman} alt="Woman" className="info--img" />
      <h1 className="info--name">Laura Smith</h1>
      <h3 className="info--job-title">Frontend Developer</h3>
      laurasmith.website
      <button className="info--btn">
        <img src={emailLogo} alt="Email logo" className="info--btn-mail-logo" />
        Email
      </button>
    </div>
  );
}
