export default function Sugestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${props.name}.svg`} alt="" />
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.reason}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}
