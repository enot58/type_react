import React, { useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";

function App() {
    const [id, setId] = React.useState(0);
    const [users, setUsers] = React.useState<IUser[]>([]);
    const [todos, setTodos] = React.useState<ITodo[]>([]);
    const handleClick = (): void => {
        console.log("Clicked", id);
        setId(id + 1);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/?limit=20")
            .then((response) => response.json())
            .then((data) => {
                //const users = data.slice(0, 10); // получаем первые 10 пользователей
                const users: IUser[] = data;
                setUsers(users);
            });

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                const todos: ITodo[] = data.slice(0, 10);
                // получаем первые 10 todo
                setTodos(todos); // выводим результат в консоль
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <EventsExample />
                <Card
                    width={"200px"}
                    height={"200px"}
                    variant={CardVariant.oulined}
                    onClick={handleClick}
                >
                    <button>Click</button>
                </Card>
                <List
                    items={users}
                    renderItem={(user: IUser) => (
                        <UserItem key={user.id} user={user} />
                    )}
                />
                <List
                    items={todos}
                    renderItem={(todo: ITodo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    )}
                />
            </header>
        </div>
    );
}

export default App;
