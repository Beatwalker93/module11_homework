const example = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *=x;
    }
    
    console.log(result)
  }
  
  example(2, 3)