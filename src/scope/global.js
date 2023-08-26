// var tiene un alcance global y local de funcion
//let y const tienen alcance global y local de bloqye
//ademas, VAR se ve afectado por el hoisting mientras que LET y ConstantSourceNode, No


function nombres() {
    var manuel = "manuel"
    if (true) {
        let gonzalo = "gonzalo"
        const angela = "angela"
        console.log(gonzalo, angela);
    }
    return console.log(manuel, angela);
}


nombres()