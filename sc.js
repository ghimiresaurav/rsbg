const qtty = 5;
let fruits =    [['apple.png', 1.60], 
                ['avocado.png', 2.63], 
                ['banana.png', 0.98], 
                ['cherry.png', 1.25], 
                ['grapes.png', 1.96], 
                ['kiwi.png', 0.29], 
                ['raspberry.png', 3.32], 
                ['orange.png', 1.35],
                ['peach.png', 1.25], 
                ['watermelon.png', 4.56], 
                ['pineapple.png', 4.67], 
                ['strawberry.png', 3.89]];
function randomNum(min, max){
  return Math.round(Math.random()*(max-min)+min);
}
let fruitIndexArr = [], quanArr = [], total = [], gtotal = 0;
let i=0;
const url = "https://img.icons8.com/plasticine/100/000000/";
while(i<qtty)
{
  const j = randomNum(0, 11)
  if(fruitIndexArr.indexOf(j)==-1){
    fruitIndexArr.push(j);
    quanArr.push(randomNum(1, 10));
    let a = fruits[fruitIndexArr[i]][1]*quanArr[i];
    total.push(a.toFixed(2));
    gtotal += a;
    i++;
  }
}
const tbody = document.querySelector('tbody');
const gtot = document.getElementById('tot');
for(let i=0; i<qtty; i++)
tbody.innerHTML += `<tr><td><img src=${url+fruits[fruitIndexArr[i]][0]}></td>
                      <td>${fruits[fruitIndexArr[i]][1]}</td>
                      <td>${quanArr[i]}</td>
                      <td>${total[i]}</td></tr>`;
gtot.innerHTML = `<strong>${gtotal.toFixed(2)}</strong>`;