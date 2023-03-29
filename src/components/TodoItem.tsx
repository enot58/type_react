import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            {todo.id}. {todo.title} -
            {todo.completed ? "Выполнено" : "Не выполнено"}
        </div>
    );
};

export default TodoItem;
