class customMath {
  //calculate the modulus of a number
  abs(num) {
    if (num >= 0) {
      return num;
    } else {
      return -1 * num;
    }
  }

  ceil(num) {
    let residual = num % 1;
    let res = num - residual;
    if (residual > 0) return res + 1;
    else return res;
  }

  floor(num) {
    return num - (num % 1);
  }

  //Vowel fraction gives the natural part of the number
  // round(num) {
  //   let residual = num % 1;
  //   let res = num - residual;
  //   if (residual < 0.5) {
  //     return res;
  //   } else {
  //     return res + 1;
  //   }
  // }
  // pow(a,n){
  //   if(n===0){
  //     return 1;
  //   }

  //   return a*this.pow(a,n-1);
  // }
}

const math = new customMath();
// console.log(math.abs(-891));
// console.log(math.pow(2, 0));
// console.log(math.ceil(1.0));
// console.log(math.floor(1.0));
console.log(math.round(1.0));
