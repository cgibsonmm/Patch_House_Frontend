import PatchCard from "../components/PatchCard";
import MainHero from "../components/MainHero";

const styles = {
  bg: {
    background: `url(${require("./../images/bg.jpg")}) no-repeat`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

let data = [
  {
    type: "Patch",
    title: "Soul House",
    price: 2.99,
  },
  {
    type: "Patch",
    title: "Trippy Fingers",
    price: 6.0,
  },
  {
    type: "IR",
    title: "JC-120",
    price: 9.99,
  },
];

export default function Home() {
  return (
    <div style={styles.bg} className="justify-center bg-gray-200 h-full">
      <div className="bg-gray-100 bg-opacity-25 my-5">
        <MainHero />
        <div className="flex flex-col">
          {data.map((item) => (
            <PatchCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
