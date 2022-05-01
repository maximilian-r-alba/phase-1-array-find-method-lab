// code your solution here
function superbowlWin(array){
    const winYear = array.find(function (element){
        return element.result === 'W';
    })
    if (winYear === undefined){
        return undefined
    }
    else{
        return winYear.year
    }
}