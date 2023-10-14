
'use client';
import "./globals.css";
import Head from "next/head";
import UserContext from "./Context/UserContext";
import React, { useContext, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState([]);
  const [userId,setUserId]= useState("")
  const [username,setUserName]= useState("")
  const [gender]= useState("")
  const [submit, setSubmit] = useState<Boolean>(true);
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap"
          rel="stylesheet"
        />
      </Head>
      <UserContext.Provider value={{ data, setData,submit, setSubmit ,username,setUserName,userId,setUserId,gender}}>
        <body>{children}</body>
      </UserContext.Provider>
    </html>
  );
}
