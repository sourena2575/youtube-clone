import React, { useState, useContext } from "react";
import { ContextBase } from "./ContextProvider";
import YouTube from "./YouTube";

const SearchBar = () => {
  const [search, setsearch] = useState("");
  const { dispatch, state } = useContext(ContextBase);

  const handleSub = async e => {
    e.preventDefault();
    const dataApi = await YouTube.get("search", {
      params: {
        part: `snippet`,
        maxresults: 5,
        key: `AIzaSyCTPo69Px1w7D-GcVhyRW6bSxw0n0ZlRIA`,
        q: search
      }
    });
    dispatch({ type: "SEARCH", payload: dataApi.data.items });
    setsearch("");
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSub}>
        <div className="row">
          <div className="input-field col s6">
            <label className="" htmlFor="search">
              Search
            </label>
            <input
              type="text"
              onChange={e => setsearch(e.target.value)}
              value={search}
              name="search"
              id="search"
              className=" validate"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchBar);
