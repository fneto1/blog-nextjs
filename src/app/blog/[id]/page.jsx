import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const post = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.body}</p>
          <div className={styles.author}>
            <Image
              src="/wandao.jpg"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Wandão</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quaerat
          aperiam quam eos dignissimos. Repellat voluptatibus beatae tempore
          quidem modi, voluptatum mollitia nisi quam, reiciendis dolorum
          asperiores a. Sunt neque nulla nisi obcaecati molestias optio nesciunt
          inventore id quo illo!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sunt
          unde quae labore id deserunt animi perspiciatis doloremque recusandae
          mollitia nam tenetur itaque nisi ducimus, qui voluptate nihil harum
          corporis esse excepturi quaerat cupiditate, quasi porro! Vero pariatur
          consectetur minus repellendus, aperiam beatae officia molestiae modi
          iusto quia deserunt, quibusdam voluptatum, facilis in odio facere
          animi porro voluptate doloribus? Consequatur?
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
          eveniet? Neque nam atque iste possimus distinctio veritatis quae nihil
          quam totam laboriosam. Minus similique possimus esse harum? Et,
          corporis. Aliquam vel blanditiis mollitia dolor. Facere doloremque
          ratione magnam esse perferendis, accusamus reiciendis minus nam quidem
          quisquam tenetur possimus? Fugiat voluptatum cum, voluptatem obcaecati
          saepe distinctio reprehenderit accusamus pariatur ad? Consequuntur
          ullam, debitis optio voluptatem provident similique repellat
          accusamus. Molestias officiis earum eum fugit alias rerum id. Nihil
          temporibus ipsum est!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
