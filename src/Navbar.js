import IonIcons from "./IonIcons"

export default function Navbar(){
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <IonIcons name="logo-instagram"/>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png"  alt =""/>
                </div>

                <div class="logo-mobile">
                    <IonIcons name="logo-instagram"/>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" alt =""/>
                </div>
  
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
  
                <div class="icones">
                    {icons.map((icon) => <IonIcons name={icon}/> )}
                </div>

                <div class="icones-mobile">
                    <IonIcons name="paper-plane-outline"/>
                </div>
           </div>
        </div>
    )
}