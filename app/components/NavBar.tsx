import React, { useContext,useEffect, useState } from "react";
import type { Metadata } from "next";
import UserContext from "../Context/UserContext";


export const metadata: Metadata = {
  title: "Ticketor",
  description: "Just a Route",
};

export default function NavBar() {
  const { submit, setSubmit ,username,setUserName,userId,setUserId} = useContext(UserContext);
 
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    setUserName(localStorage.getItem("userName"));

  }, []);

  return (
    <header className="bg-[#f0e6d4]">
      <nav className="border-gray-200 bg-[#f0e6d4]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a className="flex items-center" href="/">
            <img src="./images/logo.png" className="h-20" alt="Logo" />
          </a>

          <div className="hidden w-full md:flex md:w-auto text-[#cba36f]">
            {username && (
              <div className="flex justify-center mx-5 items-center">
                <img className="w-5 h-5" src="./images/user.png"></img>
                <p className="border">{username}</p>
              </div>
            )}
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#9cbeda85] md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li className="flex">
                <a
                  href="/"
                  onClick={() => setSubmit(true)}
                  className="py-2  pl-3 border pr-4 hover:bg-black"
                >
                  Anasayfa
                </a>
                {userId  ? (
                  <button
                    onClick={() => {
                      localStorage.removeItem("userId");
                      localStorage.removeItem("userName");
                    }}
                    className=" py-2 pl-3 border hover:bg-black pr-4"
                  >
                    Çıkış Yap
                  </button>
                ) : (
                  <div className="flex">
                    <a
                      href="/login"
                      className=" py-2 pl-3 border hover:bg-black pr-4"
                    >
                      Giriş Yap
                    </a>
                    <a
                      href="/register"
                      className=" py-2 pl-3 border hover:bg-black pr-4"
                    >
                      Kayıt Ol
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
