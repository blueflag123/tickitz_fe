import React from 'react'
import {Link} from 'react-router-dom'
import blackWidowPic from './img/blackWidow.png'
import theWitchesPic from './img/theWitches.png'
import tenetPic from './img/tenet.png'
import './UpcomingMovies.css';


const UpcomingMovies = ()=> {
    return(
        <>
        <div className="upcoming-movies">
            <section>
                <p><Link to="#">Upcoming Movies</Link></p>
                <p><Link to="#">view all</Link></p>
            </section>
        </div>
        <div className="card-date">
            <ul>
                <li><button>September</button></li>
                <li><button>October</button></li>
                <li><button>November</button></li>
                <li><button>Desember</button></li>
                <li><button>January</button></li>
                <li><button>February</button></li>
                <li><button>March</button></li>
                <li><button>April</button></li>
                <li><button>May</button></li>
            </ul>
        </div>
        <div className="card-movie">
            <ul>
                <li>
                    <div className="card-image new-item item-4">
                        <img src={blackWidowPic} alt="blackWidow"/>
                        
                    </div>
                </li>
                <li>
                    <div className="card-image new-item item-5">
                        <img src={theWitchesPic} alt="theWitches"/>
                        
                    </div>
                </li>
                <li>
                    <div className="card-image new-item item-6">
                        <img src={tenetPic} alt="tenet" />
                        
                    </div>
                </li>
                <li>
                    <div className="card-image new-item item-4">
                        <img src={blackWidowPic} alt="blackWidow"/>
                        
                    </div>
                </li>
                <li>
                    <div className="card-image new-item item-5">
                        <img src={theWitchesPic} alt="theWitches"/>
                        
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}
export default UpcomingMovies;