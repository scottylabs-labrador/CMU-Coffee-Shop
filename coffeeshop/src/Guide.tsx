import onebean from "./Assets/One Bean.svg";
import twobean from "./Assets/Three Beans.svg";
import threebean from "./Assets/Many Beans.svg";
import zeros from "./Assets/Empty cup.svg";
import ones from "./Assets/Cup Full 1.svg";
import twos from "./Assets/Cup Full 2.svg";
import threes from "./Assets/Cup Full 3.svg";
import x from "./Assets/X Icon.svg";

function Guide({ toMaps }: { toMaps: () => void }) {
  return (
    <div className="Guide">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <div className="container-fluid" onClick={toMaps}>
            <img src={x} className="x m-3" alt="coffeecup" />
          </div>
        </div>
      </div>

      <div className="container-fluid display-3">
        <p>Guide</p>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-8 container py-5">
          <div className="h3">Occupancy</div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row">
                <div className="col-4">
                  <img src={onebean} className="mt-5 bean" alt="" />
                  <p className="mt-3">Low</p>
                </div>
                <div className="col-4">
                  <img src={twobean} className="mt-5 bean" alt="" />
                  <p className="mt-3">Medium</p>
                </div>
                <div className="col-4">
                  <img src={threebean} className="mt-5 bbean" alt="" />
                  <p className="mt-3">High</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="mt-5 h3">Noise Level</div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row">
                <div className="col-3">
                  <img src={zeros} className="mt-5 ss" alt="" />
                  <p className="mt-3">Silent</p>
                </div>
                <div className="col-3">
                  <img src={ones} className="mt-5 ss" alt="" />
                  <p className="mt-3">Low</p>
                </div>
                <div className="col-3">
                  <img src={twos} className="mt-5 ss" alt="" />
                  <p className="mt-3">Medium</p>
                </div>
                <div className="col-3">
                  <img src={threes} className="mt-5 ss" alt="" />
                  <p className="mt-3">High</p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Guide;
