// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.scss";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { BannerValueCalc, HomePage } from "@primoless-manager/pages-ui";
import { Footer, Navbar } from "@primoless-manager/common-ui";

export function App() {
  return (
    <div className={[styles["container-fluid"], styles["bg-dark"], styles["text-white"]].join(" ")}>
      
      <Navbar />

      <main className={styles["flex-shrink-0"]}>
        
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/banner-value/" element={<BannerValueCalc/>} />
          </Routes>
        </Router>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
