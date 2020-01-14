Array.prototype.pluck = async function(condition){
    if(condition===true){
        setImmediate(() => {
            console.log(Math.max.apply(Math, this))
          })

    }else{

        setImmediate(() => {
            console.log(Math.min.apply(Math, this))

          })
    }
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(true); // pluck largest
[1,2,3,4,5,6,7,8].pluck(false); // pluck smallest
console.log('end');