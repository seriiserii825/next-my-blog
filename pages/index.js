import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>home page</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { some: 'some' },
  }
}
