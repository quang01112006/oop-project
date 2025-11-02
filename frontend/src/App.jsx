import "./App.css";
import Table from "./components/table/Table";
function App() {
  function handleClick() {
    return;
  }
  const columns = ["id", "title", "author", "price"];
  const data = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", price: "$10" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", price: "$15" },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      price: "$12",
    },
  ];

  return (
    <div className="container">
      hi
      <Table className="customer-table" columns={columns} data={data}></Table>
    </div>
  );
}

export default App;
