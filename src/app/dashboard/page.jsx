"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const dataFetch = await res.json();

  //     setData(dataFetch);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
