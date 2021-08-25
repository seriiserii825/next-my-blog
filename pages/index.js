import styles from '../styles/Home.module.css'
// import { connectToDatabase } from "../libs/mongodb";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>home page</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(context, 'context');
  console.log('some');
  // await connectToDatabase();
  return {
    props: {
      some: 'some'
    }
  }
}