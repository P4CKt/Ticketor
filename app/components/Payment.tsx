import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
import React from "react";
import { useRouter } from "next/navigation";

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}></button>
      <input
        value={"Lütfen Bekleyin..."}
        onChange={(input) => setColor(input.target.value)}
      />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
}

export default function Payment() {
  let [payment, setPayment] = useState(false);
  let [loadtime, setLoadTime] = useState(false);
  const router = useRouter();
  const handlePayment = () => {
    setPayment(true);
    setTimeout(() => {
      setLoadTime(true);
    }, 1000);
  };

  return (
    <div className=" p-4">
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Ödeme Yap</h1>
        {payment ? (
          <div>
            <div className="flex flex-col">
              <p>Ödeme Başarılı</p>
              <button
                onClick={() => router.push("/")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Anasayfaya Dön
              </button>
            </div>
            <div className={`${loadtime ? "hidden" : ""}`}>
              <Loading />
            </div>
          </div>
        ) : (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Kart Numarası
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Son Kullanma Tarihi
              </label>
              <input
                type="text"
                className="w-1/2 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="text"
                className="w-1/2 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Güvenlik Kodu
              </label>
              <input
                type="text"
                className="w-1/4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              onClick={handlePayment}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Ödeme Yap
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
