import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchAlbums = async () => {
  const data = await axios
    .get<Album[]>("https://jsonplaceholder.typicode.com/albums")
    .then(async (res) => {
      await sleep(5000);
      return res.data;
    });

  return data;
};

export const AlbumList = () => {
  const { data } = useQuery<Album[]>({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
  });
  return (
    <div
      style={{
        height: "300px",
        border: "2px solid #ccc",
        backgroundColor: "#eee",
        padding: "16px",
        overflowY: "scroll",
      }}
    >
      <h2>AlbumList</h2>
      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))}
    </div>
  );
};
