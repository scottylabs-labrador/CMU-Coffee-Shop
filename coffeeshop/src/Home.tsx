import LocationIcon from './Assets/LocationIcon.svg';
import Wave from './Assets/Vector 4.svg';
import Arrow from './Assets/Arrow Icon.svg';
import Text from './Assets/Text.svg';


function Home({ toGuide }: { toGuide: () => void }) {
    return (
        <>

        <div className="mt-5"></div>
        <div className="mt-5"></div>

        <img src={LocationIcon} className="loci mt-5" alt="coffeecup" />

        <div className="container-fluid text-center display-3">
        Coffee Shop
      </div>

      {/* <div className="row mt-5">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="alert alert-secondary h3" onClick={toGuide} >Find a CMU cafe to study in!</div>
      </div>
      <div className="col-3"></div>
    </div> */}

    <div className="footer">
      <div className="wavecont">
          <img src={Wave} className="fill mt-5"/>
          <img src={Text} className="overlap" />
          <img src={Arrow} className="asize" onClick={toGuide} />
      </div>
    </div>

    </>
    )
}

export default Home;