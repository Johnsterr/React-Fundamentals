import React from "react";
import Input from "./UI/Inputs/Input.jsx";
import Select from "./UI/Selects/Select.jsx";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="Поиск..."
        value={filter.query}
        onChange={event => setFilter({ ...filter, query: event.target.value })}
      />
      <Select
        defaultValue={"Сортировка:"}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
      />
    </div>
  );
};

export default PostFilter;