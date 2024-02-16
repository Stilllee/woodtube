import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>Woodtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <TfiSearch />
        </button>
      </form>
    </header>
  );
}
