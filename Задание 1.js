function arr() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, true];
  let even = 0;
  let odd = 0;
  let zero = 0;

  arr.forEach(function(item, index, array) {
    if(typeof item === 'number' && !isNaN(item)) {
      if(item === 0) {
        zero++
      }else if(item % 2 === 0){
        even++
      }else{
        odd++
      }
    }
  });

  console.log(`Чётных - ${even}, нечётных - ${odd}, нулей - ${zero}`)
}

arr();