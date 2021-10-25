import "./portfolio.scss";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      name: "2 ème année cycle d’ingénieur",
      title: "2021-2022,  Brest - France",
      img:
        "./assets/enib.png",
      icon: "assets/open-book.png",
      desc:
        "École Nationale d’Ingénieurs de Brest (ENIB) (en cours).",
    },
    {
      id: 2,
      name: "1 ère année cycle d’ingénieur",
      title: "2020-2021,  Brest - France",
      img:
        "./assets/enib.png",
      icon: "assets/open-book.png",
      desc:
        "École Nationale d’Ingénieurs de Brest (ENIB).",
      featured: true,
    },
    {
      id: 3,
      name: "Diplôme d’Études Universitaire en Technologie (DUT)",
      title: "2018 - 2020, Salé - Maroc",
      img:
        "./assets/ests.png",
      icon: "assets/graduation-hat.png",
      desc:
        "École Supérieure de Technologie de Salé (ESTS), filière : Administration réseaux informatiques (mention : très bien).",
    },
  ];
  return (
    <div className="testimonials" id="portfolio">
      <h1>Formations</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
