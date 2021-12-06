import IonIcons from "./IonIcons";

export default function PostVideo(props) {
  const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${props.userImg}`} alt="" />
          {props.user}
        </div>
        <div class="acoes">
          <IonIcons name="ellipsis-horizontal" />
        </div>
      </div>

      <div class="conteudo">
        <video class="video" autoPlay muted loop>
          <source src={`assets/video/${props.content}.mp4`} type="video/mp4" />
          <source src={`assets/video/${props.content}.ogv`} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
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
          <img src={`assets/img/${props.userLikeImg}`} alt="" />
          <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}