import IonIcons from "./IonIcons";

export default function Post(props) {
  const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.user}.svg`} alt="" />
          {props.user}
        </div>
        <div class="acoes">
          <IonIcons name="ellipsis-horizontal" />
        </div>
      </div>

      <div class="conteudo">
        <img src={`assets/img/${props.content}.svg`} alt="" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {icons.map((icon) => (
              <IonIcons name={icon} />
            ))}
          </div>
          <div>
            <IonIcons name="bookmark-outline" />
          </div>
        </div>

        <div class="curtidas">
          <img src={`assets/img/${props.userLike}.svg`} alt="" />
          <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
