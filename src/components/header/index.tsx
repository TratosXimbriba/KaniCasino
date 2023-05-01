import { useContext, useEffect, useState } from "react";
import UserFlow from "./userFlow";
import Navbar from "./Navbar";
import UserContext from "../../UserContext";
import { ImConnection } from "react-icons/im";

interface Header {
  onlineUsers: number;
}

const Header: React.FC<Header> = ({ onlineUsers }) => {
  const [openUserFlow, setOpenUserFlow] = useState<boolean>(false);
  const isLogged = useContext(UserContext);

  useEffect(() => {
    if (isLogged) {
      setOpenUserFlow(false);
    }
  }, [isLogged]);

  const items = [
    {
      name: "ONLINE",
      icon: <ImConnection />,
      value: onlineUsers,
    },
  ];

  return (
    <div className="flex flex-col p-4 w-screen justify-center ">
      <div className="flex pb-2 items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-green-400 text-sm font-normal"
          >
            {item.icon}
            <div>{item.value}</div>
            <div className="text-[#84819a] text-sm">{item.name}</div>
          </div>
        ))}
      </div>
      <Navbar openUserFlow={openUserFlow} setOpenUserFlow={setOpenUserFlow} />
      <div
        className={`absolute flex justify-end mt-32 left-[95%] transition-all duration-300 ${
          openUserFlow === false
            ? "opacity-0 -z-10 h-0 overflow-hidden -mt-36"
            : "opacity-100 z-20 "
        }`}
      >
        <UserFlow />
      </div>
    </div>
  );
};

export default Header;