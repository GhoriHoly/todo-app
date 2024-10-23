import React from "react";

type TodoToggleButtonProps = {
    completed: boolean;
    onToggle: ()=> void;
};

function TodoToggleButton({completed, onToggle}: TodoToggleButtonProps){
    return (
        <input
            type="checkbox"
            checked = {completed}
            onChange={onToggle}
                
        />
    );
}

export default TodoToggleButton;


