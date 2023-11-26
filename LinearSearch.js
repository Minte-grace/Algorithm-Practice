function linearSearch(n, t){
    let target = n.find((item)=> item === t)
    return n.indexOf(target) ?? -1
}

console.log(linearSearch([1,3, 5, 6, 7, 8] , 0));
console.log(linearSearch([4, 6,2,1,3], 3));