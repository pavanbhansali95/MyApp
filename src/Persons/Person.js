const Person = (props)=> {
    return (
        <div>
            <p onClick = {props.click} >my name is {props.name} and  i am {props.age} years old</p>
            <input onChange = {props.click} value = {props.name} />
        </div>
    )
}
export default Person;