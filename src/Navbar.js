import IonIcons from "./IonIcons";
import Logo from "./Logo";

export default function Navbar() {
  const icons = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline",
  ];
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          {icons.map((icon) => (
            <IonIcons name={icon} />
          ))}
        </div>

        <div class="icones-mobile">
          <IonIcons name="paper-plane-outline" />
        </div>
      </div>
    </div>
  );
}
