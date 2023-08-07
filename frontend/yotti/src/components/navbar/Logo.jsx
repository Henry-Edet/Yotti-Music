import LOGO from "./../../assets/logo.png";

export default function Logo() {
  return (
    <div className="logo flex h-[100%] w-[100%] items-center">
      <img src={LOGO} alt="logo" />
    </div>
  );
}
