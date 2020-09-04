import React, { useState, useEffect, createRef } from "react";
import { Global, css } from "@emotion/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DetailPane from "./DetailPane/DetailPane";
import Jumbotron from "./Jumbotron";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section32 from "./Section3-2";
import Section33 from "./Section3-3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import UtsiRow from "./UtsiRow";
import CalvinRow from "./Calvin";
import DrakeRow from "./Drake";
import MMRow from "./MM";
import DuaRow from "./Dua";
import TravisRow from "./Travis";
import BillieRow from "./Billie";
import PostRow from "./Post";
//import React-Player from "./react-player"
import ResponsivePlayer from "./ResponsivePlayer";

const initialRow = {
  category: "",
  pos: { top: 0, bottom: 0 },
};

const categories = ["Shows"];
/**
 * @function App
 */
const App = () => {
  const [activeRow, setActiveRow] = useState(initialRow);

  const {
    category,
    pos: { top, bottom },
  } = activeRow;

  const navRef = createRef();

  useEffect(() => {
    if (!category) return;
    const navHeight = navRef.current.offsetHeight;

    window.scrollTo({
      top: top + window.scrollY - navHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [category]);

  const setActive = (activeRow) => {
    activeRow.category ? setActiveRow(activeRow) : setActiveRow(initialRow);
  };

  //<CalvinRow category={categories[0]} setActive={setActive} />
  return (
    <>
      <Global styles={GlobalCSS} />
      <Navbar ref={navRef} />

      <Section3> </Section3>

      <ResponsivePlayer />

      <Section4>
        <MMRow category={categories[0]} setActive={setActive} />
      </Section4>

      <Section5>
        <DuaRow category={categories[0]} setActive={setActive} />
      </Section5>

      <Section2>
        <DrakeRow category={categories[0]} setActive={setActive} />
      </Section2>

      <Section6>
        <TravisRow category={categories[0]} setActive={setActive} />
      </Section6>

      <Section7>
        <BillieRow category={categories[0]} setActive={setActive} />
      </Section7>

      <Section8>
        <PostRow category={categories[0]} setActive={setActive} />
      </Section8>

      <Jumbotron>
        <UtsiRow category={categories[0]} setActive={setActive} />
      </Jumbotron>

      <Section32> </Section32>

      <Section33> </Section33>

      {categories.slice(0).map((category) => (
        <div></div>
      ))}

      <DetailPane
        category={category}
        top={bottom + window.scrollY}
        setActive={setActive}
      />
    </>
  );
};

//<Footer />

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }

  body {
    background: #151515;
  }

  a {
    text-decoration: none;
    color: white;
  }

  p {
    font-size: 20.1px;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }

  .Icon {
    font-size: 18.5px;
    cursor: pointer;
    color: white;
  }
`;

export default App;
