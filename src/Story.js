export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={`./assets/img/${props.name}.svg`} alt="" />
      </div>
      <div class="usuario">{props.name}</div>
    </div>
  );
}
