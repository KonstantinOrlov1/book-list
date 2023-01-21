import { useEffect } from "react";
import { useState } from "react";
import { toBase64 } from "../../helpers";
import styles from "./styles.module.css";
import stylesForm from "../../components/stylesForm.module.css";

export const BookList = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("books") || "[]"));
  }, []);

  const handleDelete = (index) => {
    console.log(index);
    delete books[index];
    books = [...books.filter((v) => v)];

    setBooks(books);
    localStorage.setItem("books", JSON.stringify(books));
  };

  const handleSave = (index) => {
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    savedBooks[index] = books[index];

    books = JSON.stringify([...savedBooks]);
    localStorage.setItem("books", books);
  };

  return (
    <div className={styles.root}>
      {books.map((item, index) => (
        <form key={index} className={stylesForm.book}>
          <div className={stylesForm.book_elem}>
            <label className={stylesForm.label}>Автор:</label>
            <input
              name="author"
              type="text"
              onChange={(v) => {
                setBooks((i) => {
                  i[index].author = v.target.value;
                  return [...i];
                });
              }}
              value={books[index].author}
              className={styles.input}
            />
          </div>
          <div className={stylesForm.book_elem}>
            <label className={stylesForm.label}>Книга:</label>
            <input
              name="book"
              type="text"
              onChange={(v) => {
                setBooks((i) => {
                  i[index].book = v.target.value;
                  return [...i];
                });
              }}
              value={books[index].book}
              className={styles.input}
            />
          </div>
          <div className={stylesForm.book_elem}>
            <label className={stylesForm.label}>Картинка:</label>
            <label
              htmlFor="input__file"
              className={stylesForm.label_img}
            ></label>
            <input
              name="image"
              id="input__file"
              type="file"
              onChange={async (v) => {
                let value = await toBase64(v.target.files[0]);

                setBooks((i) => {
                  i[index].image = value;
                  return [...i];
                });
              }}
              className={styles.input_file}
            />
            <img
              src={item.image}
              alt="нет изображения"
              className={styles.img}
            />
          </div>
          <div className={stylesForm.btn_container}>
            <button
              className={stylesForm.btn}
              onClick={() => handleDelete(index)}
            >
              Удалить книгу
            </button>
            <button
              className={stylesForm.btn}
              onClick={() => handleSave(index)}
            >
              Сохранить книгу
            </button>
          </div>
        </form>
      ))}
    </div>
  );
};
