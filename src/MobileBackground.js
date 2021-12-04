import IonIcons from "./IonIcons"

export default function MobileBackground(){
    const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
    return (
        <div class="fundo-mobile">
        {icons.map((icon) => <IonIcons name={icon}/> )}
      </div>

    )
}