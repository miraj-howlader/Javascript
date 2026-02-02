const heighs = [34,5,6,1,78,54,3,5,74]


const getMax = (numbers)=>{
    let max=numbers[0]
  for(const number of numbers){
    if(number<max){
        max=number
    }
  }
  return max
}


console.log(getMax(heighs))