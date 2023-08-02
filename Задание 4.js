function numbers(a, b) {
    let current = a
    let interval = setInterval(function() {
      console.log(current)
      if (current === b) {
        clearInterval(interval)
      }
      current++
    }, 1000);
  }
  
  numbers(1, 15);