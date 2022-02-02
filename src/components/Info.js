import woman from "../assets/images/woman.png";

export default function Info() {
  return (
    <div className="info">
      <img src={woman} alt="Woman" className="info--img" />
      <h1 className="info--name">Laura Smith</h1>
      <h3 className="info--job-title">Frontend Developer</h3>
      laurasmith.website
    </div>
  );
}
