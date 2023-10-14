import React, { useContext, useState, useEffect } from "react";
import AppContext from "../Context/AppContext";
import SelecteRoute from "./SelecteRoute";
import data from "../dummyDataj.json"
import UserContext from "../Context/UserContext";

type Props = {};

export default function List({}: Props) {
  const { selectedDate, selected ,showRoute,setShowRoute} = useContext(AppContext);
  const {  setSubmit, submit } = useContext(UserContext);
  const [showModel, setShowModel] = useState<Boolean>(false);

   interface FilteredDataItem {
    id: number;
    depId: string;
    destId: string;
    depDate: string;
    depClock: string;
    destClock: string;
    price: number;
    seat: { [key: string]: string[] };
  };
  const filteredData:FilteredDataItem[] = data.sefer.filter(
    (item) =>
      item.depDate === selected.depDate &&
      item.depId === selected.depId &&
      item.destId === selected.destId
  );
  let emptySeatCount = 0;
  let emptySeatArray: Number[] = [];
  useEffect(() => {
    if (filteredData.length < 1) {
      const timeoutId = setTimeout(() => {
        setSubmit(!submit);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [filteredData, submit]);

  filteredData.forEach((item) => {
    for (const key in item.seat) {
      if (Array.isArray(item.seat[key]) && item.seat[key].includes("")) {
        emptySeatCount += item.seat[key].filter((value) => value === "").length;
      }
    }
    emptySeatArray.push(emptySeatCount);
    emptySeatCount = 0;
  });

  return (
    <div className="bg-slate-300 rounded-3xl mt-[5vh] min-w-[359px] max-w-6xl ">
      {filteredData.length < 1 && (
        <h1 className="bg-red-100 text-center text-3xl rounded-md">
      
          Böyle Bir Sefer Bulunamadı Anasayfaya Yönlendiriliyorsunuz !
        </h1>
      )}
      {showRoute === 0
        ? filteredData.map((item,index) => (
            <div className="flex m-2 border text-xs lg:text-xl rounded-3xl py-2 px-2 justify-around items-center text-center" key={item.id}>
              <h2>
                Tarih: <br></br> {item.depDate}
              </h2>
              <h2>Kalkış Saati: <br></br> {item.depClock}</h2>
              <h2>Ücret: <br></br> {item.price} ₺</h2>
              <h2>Boş Koltuk Sayısı: <br></br> {emptySeatArray[index].toString()}</h2>

              <button
                className="mx-2 bg-green-400 px-3 rounded-3xl"
                onClick={() => {
                  setShowModel(!showModel);
                  setShowRoute(item.id);
                }}
              >
                Seç
              </button>
            </div>
          ))
        : <SelecteRoute/>}
    </div>
  );
}
