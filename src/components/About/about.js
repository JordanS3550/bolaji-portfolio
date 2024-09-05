import React from "react"
import './about.css';
import resume from '../../assets/RESUME (17).pdf';
import excel from '../../assets/excel.png';
import r from '../../assets/r.png'
// import python from '../../assets/python.png'
import sql from '../../assets/sql-server.png'
import figma from '../../assets/figma.png'
// import powerpoint from '../../assets/powerpoint.png'
import nacsport from '../../assets/nacsport.png'
import powerBi from '../../assets/chart.png'
import tableau from '../../assets/tableau.png'


const Abouts = () => {
    return(
        <section id='about' className="section">
             <div className="top-header">
                <h2>About Me</h2> 
             </div>
             <div className="row">
                <div className="col">
                    <div className="about-info">
                    <h3>My Introduction</h3>

                        <p>
                        I'm a passionate football fan with a deep love for the game and a knack for uncovering the stories data tells. My expertise lies in evaluating player performances, team strategies, and game outcomes to provide actionable insights that drive winning decisions. With a strong foundation in statistical analysis and a keen understanding of the sports industry, I specialize in turning complex data into clear, strategic guidance for coaches, teams, and media professionals. Whether it's predicting game outcomes, assessing player potential, or optimizing team strategies, I bring data to life to help others see the game from a new perspective.
                        </p>
                        <button className="  about-btn">
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                        Learn more
              </a>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="skills-box">
                    <div class="skills-header">
                        <h3>Skills</h3>
                    </div>
                    <div class="skills-list">
                        <span>EXCEL   <img src={excel} alt="" className="icon"/> </span>
                        {/* <span>PYTHON <img src={python} alt="" className="icon"/>  </span> */}
                        <span>R <img src={r} alt="" className="icon"/></span>
                        <span> SQL <img src={sql} alt="" className="icon"/> </span>
                        <span> Figma <img src={figma} alt="" className="icon"/> </span>
                        {/* <span> powerpoint <img src={powerpoint} alt="" className="icon"/> </span> */}
                        <span> nacsport  <img src={nacsport} alt="" className="icon"/></span>
                        <span> tableau  <img src={tableau} alt="" className="icon"/>    </span>
                        <span> powerbi  <img src={powerBi} alt="" className="icon"/>  </span>
                    </div>
                    </div>
                </div>

             </div>

        </section>
    )
    
}
export default Abouts;

