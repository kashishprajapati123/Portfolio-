// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";
function Skills() {
 const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
      <h3 className="skills-section animation">Explore My Skills</h3>
      <div className="Skills-Outer-Div">
        <Slider className="slid" {...settings}>
          {Data.map((Data) => {
            return (
              <div className="Skills-Inner-Div animationss" key={Data.id}>
                <img src={Data.img} alt="" />
                <p className="Skills-Name">{Data.name}</p>
                <p className="Skills-levels">{Data.Levels}</p>
                <p className="Skills-text">{Data.text}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
const Data = [
  {
    img: `/html-5.png`,
    name: `HTML`,
    Levels: `Immediate`,
    text: "HyperText Markup Language (HTML)",
  },
  {
    img: `/css-3.png`,
    name: `CSS`,
    Levels: `Immediate`,
    text: "CSS is Cascading Style Sheets",
  },
  {
    img: `/Tailwind.jpg`,
    name: `Taiwind Css`,
    Levels: `Immediate`,
    text: "Tailwind is Framework of Css",
  },
  {
    img: `/bootstrap.png`,
    name: `Bootstrap`,
    Levels: `Immediate`,
    text: "Bootstrap is Framework of Css",
  },
  {
    img: `/js.png`,
    name: `Java-Script`,
    Levels: `Immediate`,
    text: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web.",
  },
  {
    img: `/physics.png`,
    name: `React-Js`,
    Levels: `Immediate`,
    text: "React is framework of Js",
  },
  {
    img: `/code.png`,
    name: `Git-Hub`,
    Levels: `Immediate`,
    text: "GitHub is a developer platform that allows developers to create, store, manage and share their code.",
  },
];
export default Skills;
