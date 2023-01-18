import React, { useState } from "react";
import Checkbox from "./Checkbox";

interface Item {
  name: string;
  checked: boolean;
  label: string;
  children?: Item[];
}
const NestedCheckbox: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      label: "GrandPa (Paternal)",
      name: "Shirajuddin Talukder",
      checked: false,
      children: [
        {
          name: "Azizul Haque",
          label: "Father",
          checked: false,
          children: [
            {
              name: "Ibna Masum Millat",
              label: "Son",
              checked: false,
            },
            {
              name: "Raju",
              label: "Son",
              checked: false,
            },
            {
              name: "Sharmin",
              label: "Daughter",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      name: "Grand Pa (Maternal)",
      label: "Alimuddin byapari",
      checked: false,
      children: [
        {
          name: "Shorab byapari",
          label: "son",
          checked: false,
        },
      ],
    },
  ]);

  const handleNestedCheck = (values: Item[], checked: boolean): Item[] => {
    return values.map((i) => {
      i["checked"] = checked;
      if (Array.isArray(i?.children)) {
        i["children"] = handleNestedCheck(i.children, i.checked);
      }
      return i;
    });
  };
  const handle = (myitms: Item[], value: Item): Item[] => {
    let itms: Item[] = JSON.parse(JSON.stringify(myitms));
    for (let i = 0; i < itms.length; i++) {
      let item = itms[i];
      if (item["name"] === value.name) {
        let checked = !item["checked"];
        item["checked"] = checked;
        if (Array.isArray(item?.children)) {
          item["children"] = handleNestedCheck(item.children, checked);
        }
        break;
      } else if (Array.isArray(item?.children)) {
        item["children"] = handle(item.children, value);
      }
    }

    return itms;
  };
  const handleChange = (value: Item) => {
    setItems((prev) => handle(prev, value));
  };
  function List({ items }: { items: Item[] }) {
    return (
      <ul className="ml-4">
        {items.map((item) => (
          <ListItem key={item.name} item={item} />
        ))}
      </ul>
    );
  }

  const ListItem = ({ item }: { item: Item }) => {
    const { name, label, children, checked } = item;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(item);
    };
    return (
      <li>
        <Checkbox
          checked={checked}
          key={name}
          label={label}
          name={name}
          onChange={onChange}
        />
        {Array.isArray(children) && <List items={children} />}
      </li>
    );
  };

  return (
    <div className="container m-auto">
      Nested checkbox
      <br />
      <ul>
        {items.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </ul>
      <br />
    </div>
  );
};

export default NestedCheckbox;
