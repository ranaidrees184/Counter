let x=0;

document.getElementById("dec").onclick = function(){
    x=x-1;
  document.getElementById("para").innerHTML = x;
    }
    document.getElementById("res").onclick = function(){
        x=0;
      document.getElementById("para").innerHTML = x;
        }
        document.getElementById("inc").onclick = function(){
            x=x+1;
          document.getElementById("para").innerHTML = x;
            }

// let username = "Bro";
// let items= "5";
// let  total ="75";

// // console.log('hello ' + username);
// // console.log( 'you have '+ items + 'in your cart ');
// // console.log( ' and total price is $' + total);
// console.log(`hello ${username}`);