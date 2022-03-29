import "./styles.css";
import { useState } from "react";
import AddBook from "./components/AddBook";
import Navbar from "./components/Navbar";
import BooksList from "./components/BooksList";

export default function App() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log(id);
    setBookId(id);
  };

  return (
    <div className="App">
      <Navbar />
      <AddBook id={bookId} setBookId={setBookId} />
      <BooksList getBookId={getBookIdHandler} />
    </div>
  );
}
