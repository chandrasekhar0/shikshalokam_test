function getPatterns(word,x){
    if(word.length<=0){
        return "please enter text"
    }
    const map1 = new Map()
    let firstIndex = null
    let secondIndex = null
    let ans = []
    for(var i = 0;i<word.length;i++){
        map1.set(i,word[i])
    }
    for(var i = 0;i<word.length;i++){
        const mapIterator = map1.entries()
        for(var j = 0;j<word.length;j++){
            let compValue = mapIterator.next().value
            // console.log(typeof compValue[1])
            if(word[i] === compValue[1] && i!=compValue[0]){
                let check = ans.findIndex((item)=>item.firstIndex === compValue[0]  && item.secondIndex === i)
                if(check === -1){
                    ans.push({
                        firstIndex:i,
                        secondIndex:compValue[0]
                    })
                }
            }
        }
    }

    let result = ans.filter((item)=>item.secondIndex - item.firstIndex >= x)
    let print = []
    for(var i =0;i<result.length;i++){
        let obj = result[i]
        let newString = ""
        for(var j = obj.firstIndex;j<=obj.secondIndex;j++){
          newString = newString.concat(word[j])
        }
        print.push({x:obj.secondIndex-obj.firstIndex,answer:newString})
    }
    if(print.length>0){
        return print;
    }else{
        return "not-found"
    }
}

const result = getPatterns("accdbac",3)
console.log(result)
