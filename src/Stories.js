import Story from "./Story";
import IonIcons from "./IonIcons";

export default function Stories() {
  const users = [
    {img: "9gag.svg", name: "9gag",},
    {img: "meowed.svg", name: "meowed",},
    {img: "barked.svg", name: "barked",},
    {img: "nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet",},
    {img: "wawawicomics.svg", name: "wawawicomics",},
    {img: "respondeai.svg", name: "respondeai",},
    {img: "filomoderna.svg", name: "filomoderna",},
    {img: "memeriagourmet.svg", name: "memeriagourmet",},
    
  ];
  return (
    <div class="stories">
      {users.map((user) => (
        <Story img= {user.img} name={user.name} />
      ))}
      <div class="setinha">
        <IonIcons name="chevron-forward-circle" />
      </div>
    </div>
  );
}