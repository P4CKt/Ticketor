import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import dummyData from "../dummyDataj.json";
import Payment from "./Payment";
import { useRouter } from "next/navigation";
type Props = {};

export default function SelectedRoute({}: Props) {
  const { selectedDate, selected, submit, setSubmit, showRoute, setShowRoute,clickedSeat, setClickedSeat } =
    useContext(AppContext);
  const router=useRouter()
  const filteredRoute = dummyData.sefer.filter((item) => item.id === showRoute)[0];
  const [payment,setPayment]=useState(false)
 
  return (
    <div
      className="flex m-2 border py-1 min-w-[200px] bg-slate-300 items-center text-[10px] md:text-lg md:font-semibold justify-around rounded-2xl"
      key={filteredRoute.id}
    >
      {payment ===true ? <Payment/> :
      <div className="flex  items-center">
      <div className="mx-2">
        <h1>Tarih:</h1>
        <h2>Kalkış Saati:</h2>
        <h2>Varış Saati:</h2>
        <h2>Ücret:</h2>
      </div>
      <div className="mx-2 font-normal">
        <p>{filteredRoute.depDate}</p>
        <p>{filteredRoute.depClock}</p>
        <p>{filteredRoute.price}₺</p>
        <p> {filteredRoute.destClock}</p>
      </div>
      <div className="flex flex-col max-w-[170px] md:max-w-[220px] p-2  border rounded-lg">
        <img className="w-10 ml-2 mb-2" src="./images/steering-wheel.png"></img>
        <div className="flex flex-wrap ">
          {Object.entries(filteredRoute.seat).map(
            ([seatNumber, seatStatus], index) => (
              <div key={index}>
                <div className={`flex mx-2 ${Number(seatNumber)%4==2 && "border-r" } ${Number(seatNumber)%4==3 && "border-l" } ${seatNumber === clickedSeat ? "bg-red-500 border" : ""}`}   onClick={() => setClickedSeat(seatNumber)}>
                  <div>
                    {seatStatus[0] === "e" ? (
                      <img
                        className="w-5 bg-blue-400 md:w-8"
                        src="./images/fill-seat.png"
                      ></img>
                    ) : seatStatus[0] === "k" ? (
                      <img
                        className="w-5 bg-pink-500 md:w-8"
                        src="./images/empty-seat.png"
                      ></img>
                    ) : (
                      <img
                        className="w-5 md:w-8"
                        src="./images/empty-seat.png"
                      ></img>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <button className="bg-green-200 mx-2 p-4 rounded-2xl" onClick={()=>router.push("/payment")}>Ödeme</button>
    </div>}
    </div>
  );
}
