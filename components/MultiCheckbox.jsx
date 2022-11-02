import React, { useState } from "react";
import ParentCheckbox from "./ParentCheckbox";

export default function MultiCheckBox({ label, data }) {
  // main = data, second = categories
  const { main, second } = data;
  const [checked, setChecked] = useState([...main]);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(checked);
              }}>
              Click me
            </button>
          </td>
          <td>
            <label>
              <input type='checkbox' name={label} />
              <span>{label}</span>
            </label>
          </td>
        </tr>
        {second.map((category, index) => {
          return (
            <React.Fragment key={index}>
              <ParentCheckbox
                label={category}
                data={{ main, second: checked }}
                handler={{ setSecond: setChecked }}
              />
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
