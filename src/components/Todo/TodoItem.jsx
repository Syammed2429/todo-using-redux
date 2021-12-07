import { MdModeEditOutline } from "react-icons/md";

import styles from "./todo.module.css";

function TodoItem({ task, handleToggleTodo, handleDeleteTodo, editModalData }) {
  return (
    <div className={styles.list_item}>
      <p
        onClick={() => {
          handleToggleTodo(task.id);
        }}
        className={task.status ? styles.text_strike : styles.text}
      >
        {task.title}
      </p>
      <div className={styles.buttons}>
        <MdModeEditOutline
          className={styles.edit}
          onClick={() => editModalData(task)}
        />

        <div
          onClick={() => handleToggleTodo(task.id)}
          className={task.status ? styles.green : styles.red}
        ></div>
        <div onClick={() => handleDeleteTodo(task.id)} className={styles.close}>
          +
        </div>
      </div>
    </div>
  );
}

export { TodoItem };
