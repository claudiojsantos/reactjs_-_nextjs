import "./styles.css";

export const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      type='search'
      placeholder='Type your search'
    />
  );
};
