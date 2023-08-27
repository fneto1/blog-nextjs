import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data &&
        data.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            className={styles.container}
            key={post.id}
          >
            <div className={styles.imgContainer}>
              <Image
                src="https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}>{post.body}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
