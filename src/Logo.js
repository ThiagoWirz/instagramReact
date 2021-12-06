import IonIcons from "./IonIcons";
export default function Logo() {
  return (
    <>
      <div class="logo">
        <IonIcons name="logo-instagram" />
        <div class="separador"></div>
        <img src="assets/img/logo.png" alt="" />
      </div>

      <div class="logo-mobile">
        <IonIcons name="logo-instagram" />
      </div>

      <div class="instagram-mobile">
        <img src="assets/img/logo.png" alt="" />
      </div>
    </>
  );
}