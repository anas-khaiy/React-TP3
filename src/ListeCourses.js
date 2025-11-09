import PropTypes from "prop-types";

function ListeCourses({ elements }) {
  const liste = elements || ["Apple", "Orange", "Milk", "Food"];

  return (
    <ul>
      {liste.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}

// Vérification des props
ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string),
};

ListeCourses.defaultProps = {
  elements: ["Apple", "Orange", "Milk", "Food"],
};

export default ListeCourses;
