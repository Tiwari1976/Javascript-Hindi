// const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc, curr) => {
//   console.log(`acc: ${acc} and curr: ${curr}`)
//   return acc + curr
// }, 0)

// const myTotal = myNums.reduce(function (acc,currval){
// return acc + currval
// },0)

// console.log(myTotal)

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999
  },
  {
    itemName: "Java Course",
    price: 4999
  },
  {
    itemName: "Python Course",
    price: 3999
  },
  {
    itemName: "Mobile Dev Course",
    price: 5999
  }
]

const priceToPay = shoppingCart.reduce((acc, item) => {
  return acc + item.price
}, 0)

console.log(priceToPay)