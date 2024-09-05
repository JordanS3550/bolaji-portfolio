import React from "react";
import './intro.css';
import bg from "../../assets/IMG_2202.JPG";
import resume from '../../assets/RESUME (17).pdf';
import { Link } from "react-scroll";


const Intro = () => {
    return(
        <section id="intro">
            <div className="featured-box">
                <div class="profile-text" >
                    <div className="profile-text-card">
                        <span>Bolaji Ajibola</span>
                   </div>
                    <div className="profile-name">
                        <p> A <span>Football Data Analyst</span></p>
                    </div>
                    <div className="profile-text-info">
                        <p> 
                        “Passionate Football Data Analyst with a strong background in data-driven decision-making, dedicated to enhancing team performance through insightful analysis.”
                        </p>
                    </div>
                    <div className="profile-text-btn">
                        <Link><button className="btn blue-btn">Hire Me</button></Link>
                        <button className="btn"> 
                            <a href={resume} download="Resume">
                                Download cv <i class="uil uil-file-alt"></i>
                            </a>
                        </button>
                    </div>    
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src={bg} alt="" className="bg" />
                    </div>
                </div> 
            </div>
        </section>
    )

}
export default Intro;