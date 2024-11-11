import Image from "next/image";
import styles from "./page.module.css";
import { jost } from "./fonts/fonts";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Education from "./components/Education/Education";
import Math from "./components/Math/Math";
import FreeCourse from "./components/FreeCourse/FreeCourse";
import Offer from "./components/Offer/Offer";
import CreepingLine from "./components/CreepingLine/CreepingLine";
import Teacher from "./components/Teacher/Teacher";

export default function Home() {
  return (
    <div className={`${jost.className}`}>
      <Header />
      <Main />
      <Education />
      <Math />
      <FreeCourse />
      <Offer />
      <CreepingLine />
      <Teacher />
    </div>
  );
}
