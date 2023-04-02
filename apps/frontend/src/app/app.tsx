// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.scss";

import { HashRouter, Routes, Route } from 'react-router-dom';

import { BannerValueCalc, HomePage } from "@primoless-manager/pages-ui";
import { Footer, Navbar } from "@primoless-manager/common-ui";

export function App() {
  return (
    <div className={[styles["container-fluid"], styles["bg-dark"], styles["text-white"]].join(" ")}>
      
      <Navbar />

      <main className={styles["flex-shrink-0"]}>
        
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/banner-value/" element={<BannerValueCalc/>} />
          </Routes>
        </HashRouter>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
