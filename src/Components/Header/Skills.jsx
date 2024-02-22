// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import "./Skills.css";
function Skills() {
 const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h3 className="skills-section">Explore My Skills</h3>
      <div className="Skills-Outer-Div">
        <Slider className="slid" {...settings}>
          {Data.map((Data) => {
            return (
              <div className="Skills-Inner-Div" key={Data.id}>
                <img src={Data.img} alt="" />
                <p className="Skills-Name">{Data.name}</p>
                <p className="Skills-levels">{Data.Levels}</p>
                <p className="Skills-text">{Data.text}</p>
              </div>
            );
          })}
        </Slider>
      </div>

      <Footer />
    </>
  );
}
const Data = [
  {
    img: `/html-5.png`,
    name: `HTML`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
  {
    img: `/css-3.png`,
    name: `CSS`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
  {
    img: `/Tailwind.jpg`,
    name: `Taiwind Css`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
  {
    img: `/bootstrap.png`,
    name: `Bootstrap`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
  {
    img: `/js.png`,
    name: `Java-Script`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
  {
    img: `/physics.png`,
    name: `React-Js`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
  {
    img: `/code.png`,
    name: `Git-Hub`,
    Levels: `Immediate`,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, omnis?",
  },
];
export default Skills;
