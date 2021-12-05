export default function User(props) {
  return (
    <div class="usuario">
      <img src={`assets/img/${props.id}.svg`} alt="" />
      <div class="texto">
        <strong>{props.id}</strong>
        {props.name}
      </div>
    </div>
  );
}