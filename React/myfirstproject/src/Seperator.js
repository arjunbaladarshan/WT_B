function Seperator(props){
    let temp = "";
    let c = 0;
    if(props.count==undefined){
        c = 10;
    }
    else{
        c = props.count;
    }
    for(let i=0;i<c;i++){
        temp+=props.by;
    }
    // if(props.isDisabled=="true"){
    //     return ("It is disabled");
    // }
    // return (<h5>{temp}</h5>);

    return(
        <>
            {props.isDisabled=="true" && "It is disabled"}
            {props.isDisabled!="true" && <h5>{temp}</h5>}
        </>
    );
}

export default Seperator;