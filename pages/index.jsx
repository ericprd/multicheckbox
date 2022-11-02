import { useEffect, useState } from "react";
import MultiCheckBox from "../components/MultiCheckbox";

export default function Home() {
  const data = [
    {
      "Game Category 1": [
        "Game Provider 1",
        "Game Provider 2",
        "Game Provider 3",
      ],
    },
    {
      "Game Category 2": [
        "Game Provider 1",
        "Game Provider 2",
        "Game Provider 3",
      ],
    },
    {
      "Game Category 3": [
        "Game Provider 1",
        "Game Provider 2",
        "Game Provider 3",
      ],
    },
  ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const tempCategories = [];
    data.forEach((category) => {
      categories.push(...Object.keys(category));
    });

    setCategories([...categories, ...tempCategories]);
  }, []);

  return (
    <div>
      <MultiCheckBox label='All' data={{ main: data, second: categories }} />
    </div>
  );
}
