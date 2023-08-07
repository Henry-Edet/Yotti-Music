import NOTIFICATION from "./../../assets/notification.png";
import USER from "./../../assets/user.png";

export default function UserNotification() {
  return (
    <div className=" flex h-[100%] w-[100%] items-center justify-center gap-5 bg-white px-[2rem]">
      <img className=" object-contain " src={NOTIFICATION} alt="notification" />
      <img className=" object-contain " src={USER} alt="user" />
    </div>
  );
}
