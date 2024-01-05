function getAsciis(word){
    let inputString = word.split('');
    let asciiValues = []
    asciiValues.push({position:"initial",asciiValue:inputString[0].charCodeAt(0)})
    for(var i = 1;i<word.length;i++){
        asciiValues.push({state:"",asciiValue:inputString[i].charCodeAt(0)})
    }
    for(var i = 1;i<asciiValues.length;i++){
        if(asciiValues[i].asciiValue%2 === 0 && i+1 < asciiValues.length){
            let increament = asciiValues[i].asciiValue%7
            increament = asciiValues[i+1].asciiValue+increament
            if(asciiValues[i+1].state == ""){
            asciiValues[i+1].asciiValue = increament < 128 ?increament:83
            asciiValues[i+1].state = "increased"
            }
        }else{
            if(asciiValues[i-1].state == ""){
                let decreament = asciiValues[i].asciiValue%5
                decreament = asciiValues[i-1].asciiValue-decreament
                asciiValues[i-1].asciiValue = decreament < 128 ? decreament :83
                asciiValues[i-1].state = "decreased" 
            }
        }
    }
    let result = ""
    for(var i = 0;i<asciiValues.length;i++){
    result = result.concat(String.fromCharCode(asciiValues[i].asciiValue))
    }
    return result;
}
    
let stringInput = getAsciis("sHQen}")
console.log(stringInput)