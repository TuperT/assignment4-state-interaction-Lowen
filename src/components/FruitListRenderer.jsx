const FruitListRenderer = () => {
    const fruit = ["apel", "mangga", "pisang", "jeruk", "semangka"]
    return(
        <>
        {fruit.map((fruit, key ) => (
            <ul key={key}>{fruit}</ul>
        ))}
        <p>Total fruit : {fruit.length}</p>
        </>
    )
}

export default FruitListRenderer;