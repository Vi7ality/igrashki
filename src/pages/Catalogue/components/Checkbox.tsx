import CheckboxIcon from "./icons/CheckboxIcon";
import CheckboxChecked from "./icons/CheckboxChecked";

const Checkbox = ({ checked }: { checked?: boolean }) => {
  const Icon = checked ? <CheckboxChecked /> : <CheckboxIcon />;
  return <>{Icon}</>;
};

export default Checkbox;
