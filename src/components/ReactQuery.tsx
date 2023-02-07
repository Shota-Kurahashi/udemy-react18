import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Suspense, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

export const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<"album" | "todo">("todo");
  const [isPending, startTransition] = useTransition();

  const onClickTabButton = (tab: "album" | "todo") => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };
  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <button
          style={{ opacity: isPending ? 0.5 : 1 }}
          onClick={() => onClickTabButton("todo")}
        >
          Todo
        </button>
        <button onClick={() => onClickTabButton("album")}>Album</button>
        <ErrorBoundary fallback={<p>Listエラーです！</p>}>
          <Suspense fallback={<p>Listローディング中だよ！</p>}>
            {selectedTab === "album" ? <AlbumList /> : <TodoList />}{" "}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
