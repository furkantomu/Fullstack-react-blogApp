import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckBox() {
  const [checked, setChecked] = React.useState(true);

  console.log(checked)
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        size="small"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
