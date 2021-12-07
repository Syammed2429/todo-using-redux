import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { TodoList } from "./TodoList";
import styles from "./todo.module.css";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodoData,
} from "../../store/actions";

// custom mui theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7b61ff",
    },
    background: {
      paper: "#141414",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

// username modal styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  color: "white",
  outline: "none",
  display: "flex",
  gap: "10px",
};

const Todo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editTodo, setEditTodo] = useState({ title: "", id: 0, status: false });

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    const action = addTodo(task);
    dispatch(action);
    setTask("");
  };

  const handleToggleTodo = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = deleteTodo(id);
    dispatch(action);
  };

  const editModalData = (data) => {
    setEditTodo(data);
    handleOpen();
  };

  const handleEditTodo = (data) => {
    const action = editTodoData(data);
    dispatch(action);
    handleClose();
  };

  return (
    <div className={styles.main}>
      <h2>Add tasks</h2>
      <div className={styles.input_section}>
        <input
          value={task}
          onChange={handleChange}
          type="text"
          placeholder="Enter todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <TodoList
        data={todos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
        editModalData={editModalData}
      />

      <ThemeProvider theme={theme}>
        <div>
          <Modal
            sx={{ backdropFilter: "blur(5px)" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                autoComplete="off"
                spellCheck="false"
                name="text"
                label="Edit Todo"
                onChange={(e) =>
                  setEditTodo((prev) => ({ ...prev, title: e.target.value }))
                }
                fullWidth
                sx={{ marginY: 1 }}
                value={editTodo.title}
              />
              <Button onClick={() => handleEditTodo(editTodo)}>Submit</Button>
            </Box>
          </Modal>
        </div>
      </ThemeProvider>
    </div>
  );
};

export { Todo };
