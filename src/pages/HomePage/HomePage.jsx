import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Вас приветствует демо-страничка для редактирования списка книг
      </h1>
      <div className={styles.link_container}>
        <NavLink
          to="booklist"
          className={({ isActive }) =>
            classNames(styles.link, {
              [styles.link_active]: isActive,
            })
          }
        >
          Список книг
        </NavLink>
        <NavLink
          to="formedit"
          className={({ isActive }) =>
            classNames(styles.link, {
              [styles.link_active]: isActive,
            })
          }
        >
          Форма добавления книги
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};
