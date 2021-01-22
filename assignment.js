  //Problem 1  kilometerToMeter

function kilometerToMeter(kilometer){
    var meter=1000;    // 1 kilometer =1000 meter.
    var result=meter*kilometer;
    return result;
   }
   
   var total=kilometerToMeter(11);
   console.log(total);




   //Problem 2  budgetCalculator

   function budgetCalculator(clock,phone,laptop){

    var clockPrice=50;
    var PhonePrice=100;
    var laptopPrice=500;

    var result=clockPrice*clock+PhonePrice*phone+laptopPrice*laptop;
    return result;
}
var total=budgetCalculator(9,40,30);
console.log(total);




   //Problem 3  hotelCost

   function hotelCost(days){
    var rate=0;
if(days<=10){
    rate=days*100;
}
else if(days<=20){
    var first10days=10*100;
    var discount=days-10;
    var second10days=discount*80;
    rate=first10days+second10days;
}
else{
    var first10days=10*100;
    var second10days=10*80;
    var discount=days-20;
    var third10days=discount*50;
    rate=first10days+second10days+third10days;
}
return rate;
}
var totalPayment=hotelCost(65);
console.log(totalPayment);




   //Problem 4  megaFriend

   function megaFriend(friend){

    var bigFriend = [0];
    var long=0;
    
    for (var i = 0; i < friend.length; i++) {
      if (friend[i].length > bigFriend) {
        var bigFriend = friend[i].length;
        long = friend[i];
      }
     
    }
    return long;
}

var largestName=megaFriend(["Monir","mdtarek","mdsujonsk","roni","Robin"]);
console.log(largestName);