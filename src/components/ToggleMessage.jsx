import { useState } from "react";

const ToggleMessage = () => {
    const [display, setDisplay] = useState(false)

    return(
        <>
        {display && <p>Halo React!</p>}
        <button onClick={() => setDisplay(!display)}>{display ? "Hide" : "Show"}</button>
        </>
    )
}

export default ToggleMessage;