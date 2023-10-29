import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/copmonents/featured/Featured";
import CardList from "@/copmonents/cardList/CardList";
import Menu from "@/copmonents/menu/Menu";
import CatagoryList from "@/copmonents/catagoryList/CatagoryList";
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CatagoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>);
}
