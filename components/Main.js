import classes from "./Main.module.css";
import { Links } from "./Links";
import { Headline } from "./Hedline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}</code>
      </Headline>
      <Links />
    </main>
  );
}
