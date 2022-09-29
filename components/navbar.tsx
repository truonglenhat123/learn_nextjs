import Link from "next/link";
import React, { useEffect, useState } from "react";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nav, setNav] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [color, setColor] = useState("transparent");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [textColor, setTextColor] = useState("White");
  const handleNav = () => {
    setNav(!nav);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const changColor = () =>{
        if(window.scrollY >= 90){
            setColor('#ffffff');
            setTextColor('#000000');

        }
        else
        {
            setColor('transparent');
            setTextColor('#ffffff');
        }
    }
    window.addEventListener('scroll',changColor)
  },[])
  return (
    <div
      
      className="fixed left-0 top-0 right-0 bottom-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-red-600">
        <Link href="">
          <h1
            style={{ backgroundColor: `&{textColor}` }}
            className="font-bold text-4xl"
          >
            MU
          </h1>
        </Link>

        <ul
          style={{ backgroundColor: `&{textColor}` }}
          className="hidden sm:flex"
        >
          <li className="p-4">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/mutv">
              <a>MUTV</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/store">
              <a>STORE</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/tickets">
              <a>TICKETS</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/fan">
              <a>FAN</a>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/player">
              <a>PLAYER</a>
            </Link>
          </li>
        </ul>

        {/* mobile button */}
        <div className="block sm:hidden z-10">
          {nav ? (
            <p style={{ backgroundColor: `&{textColor}` }}>open</p>
          ) : (
            <p style={{ backgroundColor: `&{textColor}` }}>close</p>
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0  flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-red-500">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-red-500">
              <Link href="/mutv">
                <a>MUTV</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-red-500">
              <Link href="/store">
                <a>STORE</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-red-500">
              <Link href="/tickets">
                <a>TICKETS</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-red-500">
              <Link href="/fan">
                <a>FAN</a>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-red-500">
              <Link href="/player">
                <a>PLAYER</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
