const AddItemToList = () => {
    return(
        <>
        <label htmlFor="listss"></label>
        <input name="listss" type="text" class="inputlist" />
        <button onClick={() => {
            const input = document.querySelector('.inputlist');
            const list = document.createElement('li');
            list.textContent = input.value;
            input.value = '';
            document.body.appendChild(list);
        }}>add</button>
        </>
    )
}

export default AddItemToList;