import styles from "./todo.module.css";
import { TodoItem } from "./TodoItem";

function TodoList({ data, handleToggleTodo, handleDeleteTodo, editModalData }) {
  return (
    <div className={styles.list}>
      {data.map((el) => (
        <TodoItem
          key={el.id}
          task={el}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
          editModalData={editModalData}
        />
      ))}
    </div>
  );
}

export { TodoList };
