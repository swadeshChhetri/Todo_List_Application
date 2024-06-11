import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeletedClick }) => {
  return (
    <>
      <div className={styles.items_container}>
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.date} onDeletedClick={onDeletedClick}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
