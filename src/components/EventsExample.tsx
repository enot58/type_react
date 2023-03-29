import React, { FC, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => changeHandler(e)}
            />
            <button onClick={clickHandler}>Click</button>
        </div>
    );
};

export default EventsExample;
