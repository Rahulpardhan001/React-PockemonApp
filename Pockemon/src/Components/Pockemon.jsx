import React, { useEffect, useState } from "react";
import PockemonCard from "./PockemonCard";
import '../assets/style.css'

function Pockemon() {
  const [pockemonList, setPockemonList] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch Api Data
  const HandleApi = async () => {
    const Api = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await Api.json();
    const arrayofData = data.results;
    const array = arrayofData.map(async (item) => {
      const response = await fetch(item.url);
      return response.json();
    });
    const ans = await Promise.all(array);
    setPockemonList(ans);
  };

  useEffect(() => {
    HandleApi();
  }, []);

  // Handle Search data
  const HandleSearchData = (searchText, pockemonLists) => {
    console.log(searchText, "search text");
    if (searchText == "") {
      HandleApi();
      return;
    }
    
    return pockemonLists.filter((curElem) =>
      curElem.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div className="container">
      <h1 className="text-center pb-2">Lets Catch Pockemon</h1>
      <div className="d-flex justify-content-center ">
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            className="form-control  "
            placeholder="Pockemon search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => {
              const filterDatas = HandleSearchData(search, pockemonList);
              if (filterDatas) {
                setPockemonList(filterDatas);
              }
            }}
          >
            Button
          </button>
        </div>
      </div>

      <div className="row align-items-center">
        {pockemonList.length > 0 ? (
          pockemonList?.map((pokemon) => (
            <PockemonCard pokemon={pokemon} key={pokemon.id} />
          ))
        ) : (
          <p className=" text-center align-content-center fw-bolder ">Loading.....</p>
        )}
      </div>
    </div>
  );
}

export default Pockemon;
