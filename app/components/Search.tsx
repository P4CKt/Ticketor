import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import UserContext from "../Context/UserContext";


type Props = {};

export default function Search({}: Props) {
  const { setSelected, selected,} = useContext(AppContext);
  const {  setSubmit, submit } = useContext(UserContext);

  return (
    <div className="min-h-[70.25vh]  mt-[5vh] flex-col flex ">
      <div className="  flex items-center flex-col">
      
        <form
          className="border-stone-200 border flex flex-col bg-[#f0e6d4] text-black p-6 pt-10 w-[232px] sm:w-[327px] md:w-[435px]"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmit(!submit);
           
          }}
        >
          <label>Kalkış Yeri</label>
          <select
            onChange={(e) =>
              setSelected({ ...selected, depId: e.target.value })
            }
            id="departure"
            name="departure"
            className="bg-[#f5eee2]"
          >
            <option value={1} id="1">
              Kocaeli
            </option>
            <option value={2} id="2">
              İstanbul
            </option>
            <option value={3} id="3">
              Tekirdağ
            </option>
          </select>
          <label>Varış Yeri</label>
          <select
            id="destination"
            name="destination"
            className="bg-[#f5eee2]"
            onChange={(e) =>
              setSelected({ ...selected, destId: e.target.value })
            }
          >
            {selected.depId === "2" && (
              <>
                <option value="1">Kocaeli</option>
                <option value="3">Tekirdağ</option>
              </>
            )}
            {selected.depId === "1" && (
              <>
                <option value="2">İstanbul</option>
                <option value="3">Tekirdağ</option>
              </>
            )}
            {selected.depId === "3" && (
              <>
                <option value="2">İstanbul</option>
                <option value="1">Kocaeli</option>
              </>
            )}
          </select>
          <label>Tarih</label>
          <input
            type="date"
            id="date"
            className="bg-[#f5eee2]"
            min="<%= new Date().toISOString().split('T')[0] %>"
            onChange={(e) =>
              setSelected({ ...selected, depDate: e.target.value })
            }
            name="date"
          />

          <button
            className="action-button text-white mt-4 py-2 px-8 items-center rounded-xl bg-[#9cbeda85]"
            type="submit"
          >
            Sefer Ara
          </button>
        </form>
      </div>
    </div>
  );
}
