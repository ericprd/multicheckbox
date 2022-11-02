import { useEffect, useState } from "react";

export default function ChildCheckbox({ label, data, handler }) {
  const [isChecked, setIsChecked] = useState(true);
  const { main, second, third, fourth } = data;
  const { setSecond } = handler;
  const temp = [...second];
  const indexAt = temp[third][fourth].indexOf(label);

  const changeHandler = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      if (indexAt !== -1) {
        temp[third][fourth].splice(indexAt, 1);
        second[third] = { [fourth]: [...temp[third][fourth]] };
        setSecond(second);
      }
    }
    if (!isChecked) {
      console.log(indexAt);
      if (indexAt === -1) {
        console.log("masuk");
        temp[third][fourth].splice(temp[third][fourth].length, 0, label);
        second[third] = { [fourth]: [...temp[third][fourth]] };
        setSecond(second);
      }
    }
    // console.log(second);
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label>
              <input
                type='checkbox'
                name={label}
                checked={isChecked}
                onChange={changeHandler}
              />
              <span>{label}</span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
