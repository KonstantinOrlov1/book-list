import { addBook, serializeForm } from "../../helpers";
import stylesForm from "../../components/stylesForm.module.css";
import styles from "./styles.module.css";

export const FormEdit = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await serializeForm(e.target);
    addBook(data);
    e.target.reset();
    return false;
  };

  return (
    <form onSubmit={handleSubmit} className={stylesForm.book}>
      <div className={stylesForm.book_elem}>
        <label htmlFor="" className={stylesForm.label}>
          Автор:
        </label>
        <input name="author" type="text" required className={styles.input} />
      </div>

      <div className={stylesForm.book_elem}>
        <label htmlFor="" className={stylesForm.label}>
          Книга:
        </label>
        <input name="book" type="text" required className={styles.input} />
      </div>

      <div className={stylesForm.book_elem}>
        <label htmlFor="" className={stylesForm.label}>
          Картинка:
        </label>
        <input name="image" id="input__file" type="file" required />
      </div>

      <input type="submit" value="Сохранить книгу" className={stylesForm.btn} />
    </form>
  );
};
