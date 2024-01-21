import React, { useEffect, useState } from "react";
import "./about.css";
import img1 from "./imgs/teeth.png";

const About = () => {

  const [data, setData] = useState([]);
  const [back, setBack] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API da Xatolik bor, tekshirib koring");
        }
      })
      .then((info) => {
        return setData(info), setBack(info);
      })
      .catch((xato) => console.log(xato));
  }, []);

  const ochir = (raqam) => {
    let yangiData = data.filter((value) => value.id !== raqam);
    setData(yangiData);
    setBack(yangiData);
  };

  const search = (e) => {
    let yangiMalumot = data.filter((value) =>
      value.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value.length > 0) {
      setData(yangiMalumot);
    } else {
      setData(back);
    }
  };
 
  return (
    <div className="about">
      <div className="about__text">
        <h1>
          Авторская <br /> стоматология без боли{" "}
        </h1>
      </div>

      <div className="about__header">
        <aside></aside>
        <section>
          <h1>Exercitation veniam consequat sunt nostrud.</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim{" "}
          </p>
        </section>
      </div>

      <div className="about__center__search">
        <input onChange={search} type="text" placeholder="Search:" />
      </div>
      <div className="about__center">
        {data.map((value, index) => {
          return (
            <div  data-aos="zoom-in"  className="cards" key={value.id}>
              <img src={img1} alt="" />
              <h1> Navbat : {index + 1}</h1>
              <h4> Izox : {value.title}</h4>
              <button
                onClick={() => ochir(value.id)}
                className="btn btn-primary"
              >
                Bekor qilish{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
