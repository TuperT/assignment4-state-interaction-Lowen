import { useState } from "react";

function Child({ text }) {
    return <p>{text}</p>;
}

const LiftingStateUp = () => {
    const [text, setText] = useState("");

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <Child text={text} />
        </>
    );
};

export default LiftingStateUp;
