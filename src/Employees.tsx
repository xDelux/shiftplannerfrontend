export const Employees = () => {

    function newEmployee() {
        return(
            <span>
                <button onClick={openFormular}>Manuel oprettelse</button>
                <button onClick={requestEmail}>Mailformular</button>
            </span>
        )
    }

    function requestEmail() {

    }
    function openFormular() {

    }

    return(
        <div>
            <button onClick={newEmployee}>Opret medarbejder</button>
        </div>
    )
}