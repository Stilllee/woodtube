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
    <header className="flex w-full p-4 px-8 mb-4 text-2xl">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="ml-2 text-3xl font-bold">Woodtube</h1>
      </Link>
      <form className="flex justify-center w-full" onSubmit={handleSubmit}>
        <input
          className="w-7/12 px-5 py-2 border outline-none bg-zinc-900 text-gray-50 border-zinc-600 rounded-s-full"
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-7 rounded-e-full">
          <TfiSearch />
        </button>
      </form>
    </header>
  );
}
