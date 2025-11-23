import LocationIcon from "./Assets/LocationIcon.svg";
import Wave from "./Assets/Vector 4.svg";
import Arrow from "./Assets/Arrow Icon.svg";
import Text from "./Assets/Text.svg";

function Home({ toGuide }: { toGuide: () => void }) {
  return (
    <div className="Home">
      <div className="mt-5"></div>
      <div className="mt-5"></div>

      <img src={LocationIcon} className="loci mt-5" alt="" />

      <div className="container-fluid text-center display-3">Coffee Shop</div>

      <div className="footer">
        <div className="wavecont">
          <img src={Wave} className="fill mt-5" alt="" />
          <img src={Text} className="overlap" alt="" />
          <img src={Arrow} className="asize" onClick={toGuide} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
