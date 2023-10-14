"use client";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import dummyData from "../dummyDataj.json";
import UserContext from "../Context/UserContext";
import { all } from "axios";
import { useRouter } from "next/navigation";

type Props = {};
export interface UserDataItem {
  id: string;
  gender: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  email:string;
}
export default function register({}: Props) {
  const { data, setData } = useContext(UserContext);
  const [sdata, setsData] = useState({  id: "string",
    gender: "string",
    username: "string",
    password: "string",
    name: "string",
    surname: "string",
    email: "string"});

    const router= useRouter()
  const onRegister = (e: any) => {
    e.preventDefault();
    const newUser: UserDataItem = {
      id: uuidv4(),
      gender: sdata.gender,
      username: sdata.username,
      password: sdata.password,
      name: sdata.name,
      surname: sdata.surname,
      email:sdata.email
    };
    let allData = JSON.parse(localStorage.getItem("users") || "[]");
    allData.push(newUser);
    localStorage.setItem("users", JSON.stringify(allData));
    router.push("/")
  };

  return (
    <div>
      <header>
        <nav className="border-gray-200 bg-[#f0e6d4]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a className="flex items-center">
              <img src="./images/logo.png" className="h-20" alt="Logo" />
            </a>

            <div className="hidden w-full md:flex md:w-auto text-[#cba36f]">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#9cbeda85] md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4">
                    Anasayfa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="min-h-[70.25vh] flex-col flex items-center justify-center bg-[url('/images/bus-login-bg.jpg')-cover]">
        <div className=" flex flex-col justify-center items-center bg-[#f0e6d4b6]">
          <h1 className="font-medium text-4xl md:text-5xl md:font-bold mb-6 flex text-center">
            Kayıt
          </h1>

          <form
            className=" text-black p-6 pt-10 w-[232px] sm:w-[327px] md:w-[435px]"
            onSubmit={onRegister}
          >
            <div className="flex flex-col justify-center items-center">
              <input
                className="text-black  my-2"
                placeholder="İsim"
                name="name"
                type="text"
                onChange={(e) => setsData({ ...sdata, name: e.target.value })}
              />

              <input
                className="text-black my-2"
                placeholder="Soyisim"
                name="surname"
                type="text"
                onChange={(e) =>
                  setsData({ ...sdata, surname: e.target.value })
                }
              />
              <div className="flex my-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="e"
                    onChange={(e) =>
                      setsData({ ...sdata, gender: e.target.value })
                    }
                  />
                  Erkek
                </label>
              </div>
              <div className="flex my-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="k"
                    onChange={(e) =>
                      setsData({ ...sdata, gender: e.target.value })
                    }
                  />
                  Kadın
                </label>
              </div>
             
              
              <input
                className="text-black my-2"
                type="email"
                id="email"
                placeholder="E Posta Adresi"
                onChange={(e) =>
                  setsData({ ...sdata, email: e.target.value })
                }
                required
              />

              <input
                className="text-black my-2"
                type="text"
                id="username"
                placeholder="Kullanıcı Adı"
                onChange={(e) =>
                  setsData({ ...sdata, username: e.target.value })
                }
                required
              />

              <input
                className="text-black my-2"
                id="password"
                type="password"
                placeholder="Şifre"
                onChange={(e) =>
                  setsData({ ...sdata, password: e.target.value })
                }
                required
              />

              <button
                className="action-button text-white mt-4 py-3 px-8 items-center rounded-xl bg-[#9cbeda]"
                type="submit"
              >
                Kayıt Ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
