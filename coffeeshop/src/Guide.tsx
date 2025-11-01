import coffeecup from './Assets/placeholder.png';

function Guide({ toMaps }: { toMaps: () => void }) {
    return (
        <>

        <div onClick={toMaps}><img src={coffeecup} className="m-3 tround" alt="coffeecup" /></div>
        
        <div className="container-fluid text-center pt-5 mb-5 display-3">
        Guide:
      </div>

      <div className="row">
        <div className="col-3"></div>

        <div className="col-6 container sround bg-light py-5">
          <div className="h3">Occupancy</div>
          <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-4">
                <img src={coffeecup} className="mt-5 bround" alt="coffeecup" />
                <p className="mt-3">Low</p>
              </div>
              <div className="col-4">
                <img src={coffeecup} className="mt-5 bround" alt="coffeecup" />
                <p className="mt-3">Medium</p>
              </div>
              <div className="col-4">
                <img src={coffeecup} className="mt-5 bround" alt="coffeecup" />
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
                <img src={coffeecup} className="mt-5 ebround" alt="coffeecup" />
                <p className="mt-3">Silent</p>
              </div>
              <div className="col-3">
                <img src={coffeecup} className="mt-5 ebround" alt="coffeecup" />
                <p className="mt-3">Low</p>
              </div>
              <div className="col-3">
                <img src={coffeecup} className="mt-5 ebround" alt="coffeecup" />
                <p className="mt-3">Medium</p>
              </div>
              <div className="col-3">
                <img src={coffeecup} className="mt-5 ebround" alt="coffeecup" />
                <p className="mt-3">High</p>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          </div>
        </div>

        <div className="col-3"></div>
      </div>
        
        </>
    )
}

export default Guide;