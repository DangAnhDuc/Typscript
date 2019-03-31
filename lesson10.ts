let getPercent=()=>2;
let getBonus = function(value = 10, tax = getPercent() * 0.1) {
  console.log(value+tax);
};
getBonus(undefined, 50);
getBonus();