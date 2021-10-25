import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Stage d'initiantion",
      title: "1 mois",
      img:
        "./assets/stock-market.png",
      icon: "assets/java_icon.png",
      desc:
        "Création d'une application JAVA consite à organiser les projets du service INDH de la province de Khemisset.",
    },
    {
      id: 2,
      name: "Stage professionnel",
      title: "2 mois",
      img:
        "assets/web-site.png",
      icon: "assets/php-code.png",
      desc:
        "Création d'un site web trilingue (anglais, fraçais, arabe) qui affiche les statistiques de coronavirus en utilisant les APIs et le framework Laravel.",
      featured: true,
    },
    {
      id: 3,
      name: "Projet de fin d'études",
      title: "3 mois",
      img:
        "./assets/computer.png",
      icon: "assets/internet.png",
      desc:
        "Mise en place d’un réseau d’entreprise (services avancés, supervision, sécurité, VoIp…).",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Expériences</h1>
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
