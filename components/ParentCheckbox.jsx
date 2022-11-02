import React, { useEffect, useState } from "react";
import ChildCheckbox from "./ChildCheckbox";

export default function ParentCheckbox({ label, data, handler }) {
  // second -> checked
  const { main, second } = data;

  const indexAt = main.findIndex((item) => item[label]);
  const providers = main[indexAt][label];

  return (
    <tr>
      <td>
        <input type='checkbox' name={label} />
        <span>{label}</span>
      </td>
      <td>
        {providers.map((provider, index) => {
          return (
            <React.Fragment key={index}>
              <ChildCheckbox
                label={provider}
                data={{ main, second, third: indexAt, fourth: label }}
                handler={handler}
              />
            </React.Fragment>
          );
        })}
      </td>
    </tr>
  );
}
