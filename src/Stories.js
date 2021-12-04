import Story from "./Story";
import IonIcons from "./IonIcons";

export default function Stories() {
  const users = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];
  return (
    <div class="stories">
      {users.map((user) => (
        <Story name={user} />
      ))}
      <div class="setinha">
        <IonIcons name="chevron-forward-circle" />
      </div>
    </div>
  );
}
