import Notifications from "./Notifications";
import ListeCourses from "./ListeCourses";
import Galerie from "./Galerie";
function Exercice() {
  return (
    <div>
      <h2>Page À Exercice</h2>
      <h3>Exercice 1 : </h3>
      <Notifications />
      <h3>Exercice 2 : </h3>
      <ListeCourses elements={["Eggs", "Jus"]} />
      <h3>Exercice 3 : </h3>
      <Galerie />
    </div>
  );
}
export default Exercice;
