export default function User(props) {
  return (
    <div class="usuario">
      <img src={`assets/img/${props.userImg}`} alt="" />
      <div class="texto">
        <strong>{props.id}</strong>
        {props.name}
      </div>
    </div>
  );
}