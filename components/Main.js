import styles from "../styles/Home.module.css";
import { Links } from "./Links";
import { Headline } from "./Hedline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}</code>
      </Headline>
      <Links />
    </main>
  );
}
