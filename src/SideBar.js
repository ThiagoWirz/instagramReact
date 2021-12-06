import User from "./User";
import Sugestion from "./Sugestion";

export default function SideBar() {
  const sugestions = [
    {
      userImg: "bad.vibes.memes.svg",
      name: "bad.vibes.memes",
      reason: "Segue você",
    },
    { userImg: "chibirdart.svg",
      name: "chibirdart",
      reason: "Segue você" },
    {
      userImg: "razoesparaacreditar.svg",
      name: "razoesparaacreditar",
      reason: "Novo no Instagram",
    },
    {
      userImg: "adorable_animals.svg",
      name: "adorable_animals",
      reason: "Segue você",
    },
    {
      userImg: "smallcutecats.svg",
      name: "smallcutecats",
      reason: "Segue você",
    },
  ];
  return (
    <div class="sidebar">
      <User userImg="catanacomics.svg" id="catanacomics" name="Catana" />
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestions.map((sugestion) => (
          <Sugestion
            userImg={sugestion.userImg}
            name={sugestion.name}
            reason={sugestion.reason}
          />
        ))}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
