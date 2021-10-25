import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Accueil</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Formations</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Projets</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Expériences</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
