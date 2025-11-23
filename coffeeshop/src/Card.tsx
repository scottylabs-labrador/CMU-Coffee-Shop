import onebean from "./Assets/One Bean.svg";
import twobean from "./Assets/Three Beans.svg";
import threebean from "./Assets/Many Beans.svg";
import zeros from "./Assets/Empty cup.svg";
import ones from "./Assets/Cup Full 1.svg";
import twos from "./Assets/Cup Full 2.svg";
import threes from "./Assets/Cup Full 3.svg";
import wave from "./Assets/Wave Shape.svg";

const occimgs = [onebean, twobean, threebean];
const noiseimgs = [zeros, ones, twos, threes];

interface Cardprops {
  Name: string;
  Occupancy: number;
  Noise: number;
}

function Card({ Name, Occupancy, Noise }: Cardprops) {
  return (
    <>
      <h1 className="mt-5"> {Name} </h1>

      {Occupancy > 0 && (
        <>
          <h2 className="mt-5"> Occupancy </h2>
          <img
            src={occimgs[Occupancy - 1]}
            alt="occupancy level"
            className="oi mt-3"
          />
        </>
      )}

      {Noise > 0 && (
        <>
          <h2 className="mt-5"> Noise Level </h2>
          <img
            src={noiseimgs[Noise - 1]}
            alt="noise level"
            className="ni mt-3"
          />
        </>
      )}

      <img src={wave} className="swave" alt=""></img>
    </>
  );
}

export default Card;
