let player1BtnA = document.getElementById('changeHomeScore1');
let player1BtnB = document.getElementById('changeHomeScore2');
let player1BtnC = document.getElementById('changeHomeScore3');

let player2BtnA = document.getElementById('changeGuestScore1');
let player2BtnB = document.getElementById('changeGuestScore2');
let player2BtnC = document.getElementById('changeGuestScore3');

let resetBtn = document.getElementById('newGame');
let papanSkorHome = document.getElementById('home-points');
let papanSkorGuest = document.getElementById('guest-points');

let pemabatasMaxSkor = document.querySelector('.select-adri');
let maxValueDisplay = document.querySelector('#valuedipilih');

maxValueDisplay.parentElement.classList.add('visually-hidden');

let homeScoreDefault = 0;
let guestScoreDefault = 0;


papanSkorHome.innerText = homeScoreDefault;
papanSkorGuest.innerText = guestScoreDefault;

pemabatasMaxSkor.addEventListener('change', function(eventSelect){

      console.log(eventSelect.target.value);

      player1BtnA.classList.remove('disabled');
      player1BtnB.classList.remove('disabled');
      player1BtnC.classList.remove('disabled');
      player2BtnA.classList.remove('disabled');
      player2BtnB.classList.remove('disabled');
      player2BtnC.classList.remove('disabled');

      function tambahScorehome(){
            player1BtnA.addEventListener('click', function(e){
                  console.log(eventSelect.target.value);
                  homeScoreDefault += 1;
                  papanSkorHome.textContent = homeScoreDefault;
      
                  if(papanSkorHome.innerText === eventSelect.target.value){
                        console.log('test');
                        player1BtnA.classList.add('disabled');
                        player1BtnB.classList.add('disabled');
                        player1BtnC.classList.add('disabled');
                  }
                  if(papanSkorHome.textContent > eventSelect.target.value){
                        papanSkorHome.innerText = eventSelect.target.value;
                        player1BtnA.classList.add('disabled');
                        player1BtnB.classList.add('disabled');
                        player1BtnC.classList.add('disabled');
                  }
            });
            player1BtnB.addEventListener('click', function(e){
                  console.log(eventSelect.target.value);
                  homeScoreDefault += 2;
                  papanSkorHome.textContent = homeScoreDefault;
                  if(papanSkorHome.innerText === eventSelect.target.value){
                        console.log('testa');
                        player1BtnA.classList.add('disabled');
                        player1BtnB.classList.add('disabled');
                        player1BtnC.classList.add('disabled');
                  }
                  if(papanSkorHome.textContent > eventSelect.target.value){
                        papanSkorHome.innerText = eventSelect.target.value;
                        player1BtnA.classList.add('disabled');
                        player1BtnB.classList.add('disabled');
                        player1BtnC.classList.add('disabled');
                  }
            });
            player1BtnC.addEventListener('click', function(e){
                  console.log(eventSelect.target.value);
                  homeScoreDefault += 3;
                  papanSkorHome.textContent = homeScoreDefault;
                  if(papanSkorHome.innerText === eventSelect.target.value){
                        console.log('testaa');
                        player1BtnA.classList.add('disabled');
                        player1BtnB.classList.add('disabled');
                        player1BtnC.classList.add('disabled');
                  }
                  if(papanSkorHome.textContent > eventSelect.target.value){
                        papanSkorHome.innerText = eventSelect.target.value;
                        player1BtnA.classList.add('disabled');
                        player1BtnB.classList.add('disabled');
                        player1BtnC.classList.add('disabled');
                  }
            });
      }
      
      function tambahScoreguest(){
            player2BtnA.addEventListener('click', function(e){
                  console.log(e);
                  guestScoreDefault += 1;
                  papanSkorGuest.textContent = guestScoreDefault;
                  if(papanSkorGuest.innerText === eventSelect.target.value){
                        console.log('test');
                        player2BtnA.classList.add('disabled');
                        player2BtnB.classList.add('disabled');
                        player2BtnC.classList.add('disabled');
                  }
                  if(papanSkorGuest.textContent > eventSelect.target.value){
                        papanSkorGuest.innerText = eventSelect.target.value;
                        player2BtnA.classList.add('disabled');
                        player2BtnB.classList.add('disabled');
                        player2BtnC.classList.add('disabled');
                  }
            });
            player2BtnB.addEventListener('click', function(e){
                  console.log(e);
                  guestScoreDefault += 2;
                  papanSkorGuest.textContent = guestScoreDefault;
                  if(papanSkorGuest.innerText === eventSelect.target.value){
                        console.log('test');
                        player2BtnA.classList.add('disabled');
                        player2BtnB.classList.add('disabled');
                        player2BtnC.classList.add('disabled');
                  }
                  if(papanSkorGuest.textContent > eventSelect.target.value){
                        papanSkorGuest.innerText = eventSelect.target.value;
                        player2BtnA.classList.add('disabled');
                        player2BtnB.classList.add('disabled');
                        player2BtnC.classList.add('disabled');
                  }
            });
            player2BtnC.addEventListener('click', function(e){
                  console.log(e);
                  guestScoreDefault += 3;
                  papanSkorGuest.textContent = guestScoreDefault;
                  console.log(papanSkorGuest.textContent);
                  console.log(eventSelect.target.value);
                  if(papanSkorGuest.innerText === eventSelect.target.value){
                        console.log('test');
                        player2BtnA.classList.add('disabled');
                        player2BtnB.classList.add('disabled');
                        player2BtnC.classList.add('disabled');
                  } 
                  if(papanSkorGuest.textContent > eventSelect.target.value){
                        papanSkorGuest.innerText = eventSelect.target.value;
                        player2BtnA.classList.add('disabled');
                        player2BtnB.classList.add('disabled');
                        player2BtnC.classList.add('disabled');
                  }
            });
      }

      tambahScorehome();
      tambahScoreguest();

      document.getElementById('valuedipilih').innerText = `${eventSelect.target.value} Skor`;
      maxValueDisplay.parentElement.classList.remove('visually-hidden');
      pemabatasMaxSkor.classList.add('visually-hidden');
});

function resetPermainan(){
      resetBtn.addEventListener('click', function(){
            let homeScoreDefault = 0;
            let guestScoreDefault = 0;

            papanSkorHome.innerText = homeScoreDefault;
            papanSkorGuest.innerText = guestScoreDefault;

            location.reload();
      })
}

resetPermainan();