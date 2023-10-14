"use client";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation";

export default function login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router =useRouter()
  const handleLogin = (e:any) => {
    e.preventDefault();

    const validationData = localStorage.getItem("users");

    if (validationData) {
      const userData = JSON.parse(validationData);

      const user = userData.find((item:any) => item.username === login.username);

      if (!user) {
        setError("Kullanıcı adı bulunamadı.");
      } else if (user.password !== login.password) {
        setError("Şifre yanlış.");
      } else {
        router.push("/")
        localStorage.setItem("userId",user.id)
        localStorage.setItem("userName",user.name)
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-[70.25vh] flex-col flex items-center justify-center  bg-[url('/images/bus-login-bg.jpg')-cover]">
        <div className=" flex flex-col justify-center items-center bg-[#f0e6d4b6]">
          <h1 className="font-medium text-4xl md:text-5xl md:font-bold mb-6 flex text-center ">
            Giriş Sayfası
          </h1>
           {error && <p>{error}</p>}
          <form
            className=" text-black p-6 pt-10 w-[232+px] sm:w-[327px] md:w-[435px]"
            onSubmit={handleLogin}
          >
            <div className="mb-4 flex flex-col justify-center items-center">
              <div className="flex flex-col justify-between h-[45px] items-center">
                <label htmlFor="username">Kullanıcı Adı</label>
              </div>
              <input
                className="text-black"
                type="text"
                id="username_id"
                onChange={(e) =>
                  setLogin({ ...login, username: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-between items-center h-[45px]">
                <label htmlFor="password">Şifre</label>
              </div>
              <input
                className="text-black"
                id="password"
                type="password"
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                required
              />

              <button
                className="action-button text-white mt-4 py-3 px-8 items-center rounded-xl bg-[#9cbeda]"
                type="submit"
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
