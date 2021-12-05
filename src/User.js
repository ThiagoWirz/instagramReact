export default function User(props){
    return (
        <div class="usuario">
        <img src={`assets/img/${props.nickname}.svg`} alt="" />
        <div class="texto">
          <strong>{props.nickname}</strong>
          {props.name}
        </div>
      </div>
    )
}