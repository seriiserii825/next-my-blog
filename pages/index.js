import styles from '../styles/Home.module.css';
import PostModel from "../models/PostModel";
import { convertToObject } from "../helpers/convert-to-object";
import dbConnect from "../lib/dbConnect";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1>home page</h1>
      <ul>
        {posts.length && posts.map(({ _id, title, content }) => (
          <li key={_id}>
            <h2>{title}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  await dbConnect();
  const postsInitial = await PostModel.find();
  const posts = convertToObject(postsInitial);
  return {
    props: { some: 'some', posts: posts },
  }
}
