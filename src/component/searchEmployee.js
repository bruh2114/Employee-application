import React from "react";

function SearchEmployee() {
    const [query, setQuery] = useState(data);
    const keys = ["full name", "position", "employe number"];
    const search = (data) => {
return data.filter((employees) =>
    keys.some((key) => employees[key].toLowerCase().includes(query))
    );
 };
 return (
    <div className="app">
    <input
      className="search"
      placeholder="Search..."
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    />
    {<Table data={Search(Users)} />}
        </div>
    );
};
export default SearchEmployee