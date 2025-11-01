import coffeecup from './Assets/placeholder.png';

function Guide({ toMaps }: { toMaps: () => void }) {
    return (
        <>

        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <div className= "container-fluid" onClick={toMaps}><img src={coffeecup} className="m-3 mb-5 tround" alt="coffeecup" /></div>
          </div>
        </div>

        <div className="container-fluid display-3"><p>Guide</p></div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-8 container sround py-5">
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

        <div className="col-2"></div>
      </div>
        
        </>
    )
}

export default Guide;