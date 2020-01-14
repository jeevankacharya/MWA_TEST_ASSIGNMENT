Array.prototype.removeNum = async function(num) {
    return await promise(this, num).then(result => console.log(result));
  };
  
  function promise(array, num) {
    return new Promise((resolve, reject) => {
      array.forEach(element => {
        if (element === num) {
          array.splice(array.indexOf(element), 1);
        }
      });
  
      resolve(array);
    });
  }
  
  console.log("Start");
  [1, 3, 4, 2, 1, 5].removeNum(1);
  console.log("Finish");
  