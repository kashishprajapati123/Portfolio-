// import React from 'react'
import "./Qualification.css"
function Qualification() {
  return (
    <>
    <h3 className="anims">Qualification</h3>
      <div className="timeline">
      <div className="Container left-Container">
        <img src="MDU.jpg"  alt="" />
        <div className="text-Box">
          <h2>Graducation</h2>
          <small>2021 - 2024</small>
          <p><ul><li>Bachelor of Computer Applications (BCA) From</li><br /> <li>Maharshi Dayanand University (MDU)</li> </ul></p>
          <span className="left-Container-arrow"></span>
        </div>
      </div>
      <div className="Container right-Container">
      <img src="CBSE.jpg"  alt="" />
        <div className="text-Box">
          <h2>High School Diploma</h2>
          <small>2019 - 2021</small>
          <p><ul><li>Central Board of Secondary Education (CBSE)</li> <br /><li>Specialization in Science Stream</li></ul></p>
          <span className="right-Container-arrow"></span>
        </div>
      </div>
      <div className="Container left-Container">
      <img src="CBSE.jpg"  alt="" />
        <div className="text-Box">
          <h2>Secondary Education (10th Grade)</h2>
          <small>2018 - 2019</small>
          <p><ul><li>Central Board of Secondary Education (CBSE)</li></ul></p>
          <span className="left-Container-arrow"></span>
        </div>
      </div>
      <div className="Container right-Container">
      <img src="PW.jpg" width="40px" height="40px" alt="" />
        <div className="text-Box">
          <h2>Full-Stack Web Development Course</h2>
          <small>2023 - 2024</small>
          <p><ul><li>Provider: pw skills</li><br /><li>Specialization: Front-End Web Development</li></ul></p>
          <span className="right-Container-arrow"></span>
        </div>
      </div>
    </div>
    </>
  
  )
}

export default Qualification;
