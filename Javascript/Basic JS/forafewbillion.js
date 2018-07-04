var amount = 0.01;
var sum = amount;
for (var i=2; i<31; i++){
  amount *= 2;
  sum += amount;
}
console.log("Money received after 30 days is " + sum);
