// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.scss";

import { Navbar } from "@primoless-manager/common-ui";

export function App() {
  return (
    <div className={[styles["container-fluid"], styles["bg-dark"], styles["text-white"]].join(" ")}>
      
      <Navbar />

      <div />
    </div>
  );
}

export default App;
