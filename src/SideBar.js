import Sugestion from "./Sugestion";

export default function SideBar() {
  const sugestions = [
    { name: "bad.vibes.memes", reason: "Segue você" },
    { name: "chibirdart", reason: "Segue você" },
    { name: "razoesparaacreditar", reason: "Novo no Instagram" },
    { name: "adorable_animals", reason: "Segue você" },
    { name: "smallcutecats", reason: "Segue você" },
  ];
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" alt="" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestions.map((sugestion) => (
          <Sugestion name={sugestion.name} reason={sugestion.reason} />
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
