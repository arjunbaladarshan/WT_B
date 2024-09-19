function Form(){
    let isEdit = false;
    return(
        <>
            <table>
                <tr>
                    <td>
                        Enter Username :
                    </td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Enter Password :
                    </td>
                    <td>
                        <input type="password" />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        {!isEdit && <button>Add</button>}
                        {isEdit && <button>Edit</button>}
                    </td>
                </tr>
            </table>
        </>
    );
}

export default Form;