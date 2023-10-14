"use client";
import React, { useState ,useContext} from "react";
import Search from "./components/Search";

import AppContext from "./Context/AppContext";
import List from "./components/List";
import NavBar from "./components/NavBar";
import UserContext from "./Context/UserContext";


export default function Home() {


  const [selected, setSelected] = useState<{
    depId: string;
    destId: string;
    depDate: string;
  }>({
    depId: "1",
    destId: "2",
    depDate: "2023-10-18",
  });
  const { submit, setSubmit } = useContext(UserContext);
  const [showRoute, setShowRoute] = useState<Number>(0);


  return (
    <div className="min-h-screen">
      <NavBar />

      <main className="flex flex-col justify-center ">
        <div className="flex flex-col items-center p-2">
          <AppContext.Provider
            value={{
              selected,
              setSelected,
      
              setShowRoute,
              showRoute,
         
            }}
          >
            {submit === true ? <Search /> : <List />}
          </AppContext.Provider>
        </div>
      </main>
    </div>
  );
}
