import { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        addTodo(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>


            <div className="container d-flex gap-4">
                <div className="w-50">
                    <h2>Input Text</h2>

                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Enter Day/Workout Todo"
                    />
                    <button type="submit">Add</button>


                </div>

            </div>

        </form>
    );
}

export default TodoForm;