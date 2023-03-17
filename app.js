function Test()
{
    let myobject = {name:"Madras"};
    let newObject = myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o","u"];
    let vowelArray=myarray;
    myarray.push("u")
    console.log(myarray)
    const msg=()=>{alert("Check the console output!")}
    return <div><button onClick={msg}>Reference Data Types and call the function</button></div>
}
ReactDOM.render(<Test/>,document.getElementById('mydiv'))