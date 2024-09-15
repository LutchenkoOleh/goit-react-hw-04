import { useState } from "react";
import searchCss from "./SearchForm.module.css"
import { toast } from "react-hot-toast";

export default function SearchForm({ onSubmit }) {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={searchCss.header}>
      <form className={searchCss.form} onSubmit={handleSubmit}>
        <div className={searchCss.container}>
          <input
            className={searchCss.input}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button className={searchCss.button} type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001a1.007 1.007 0 0 0-.118.14l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.14-.118zm-5.442 1.28a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>

          </button>
        </div>
      </form>
    </header>
  );
}