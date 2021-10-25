import { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Site Web, coronavirus statistics",
      desc:
        "C'est un site web créé avec Laravel qui affiche les statistiques de coronavirus en utilisant les APIs. ",
      img:
        "./assets/coronavirus.JPG",
      redirect: "https://github.com/ilyassrhejjou/coronaStatisticsWebsite",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Site web de chaussures avec React",
      desc:
        "Easy shoe choose est un site web qui aide les gens à choisir un paire, créé avec React.",
      img:
        "./assets/easyshoechoose.JPG",
      redirect: "https://github.com/ilyassrhejjou/Easyshoechoose",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Application JAVA",
      desc:
        "Application de gestion de stock pour le service INDH de la province de KHEMISSET.",
      img:
        "./assets/java.jpg",
      redirect: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span onClick={()=> window.location.href = `${d.redirect}`}>Lien vers le code source</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
