// Heart button functionality

//const { createElement } = require("react");

function addHeartListener(boxId) {
  document.getElementById(boxId).addEventListener('click', function(e) {
    e.preventDefault();
    const mainHeart = document.getElementById('main-heart');
    const currentCount = parseInt(mainHeart.innerText);
    mainHeart.innerText = currentCount + 1;
  });
}

for (let i = 1; i <= 9; i++) {
  addHeartListener(`box-${i}-heart`);
}



// Call button functionality
function addCallListener(boxId,boxNum) {

    document.getElementById(boxId).addEventListener('click', function(e) {
    e.preventDefault();

    const mainCall = document.getElementById('main-call');
    if(mainCall.innerText >= 20){
        switch(boxNum){
            case 1:
                alert("Calling Emergency Service 999..."); break;
            case 2:
                alert("Calling Police 999..."); break;
            case 3:
                alert("Calling Fire service 999..."); break;
            case 4:
                alert("Calling Ambulance 1994-999999..."); break;
            case 5:
                alert("Calling Women helpline 109..."); break;
            case 6:
                alert("Calling Anti-Corruption 106..."); break;
            case 7:
                alert("Calling Electricity Outage 16216..."); break;
            case 8:
                alert("Calling Brac 16445..."); break;
            case 9:
                alert("Calling Railway 163..."); break;
        }

        //Saving call log
        const box = document.getElementById(`box-${boxNum}`);
        //console.log(box);
        const pTags = box.getElementsByTagName('p');
        const text1 = pTags[0].innerText;
        const text2 = pTags[2].innerText;
        //console.log(text1, text2);

        const now = new Date();
        const timeString = now.toLocaleTimeString();

        const logDiv = document.createElement('div');
        //inner style
        logDiv.innerHTML = `
                
                <div>
                <div class="flex justify-between items-center font-bold">
                <span>${text1}</span>
                <span class="font-normal">${timeString}</span>
                </div>
                
                <p class="mt-1 text-sm">${text2}</p>
                </div>
            `;

        logDiv.className = "bg-gray-100 p-3 mb-2 rounded-[3vw] mt-2";

        
        document.getElementById('log-text').appendChild(logDiv);
    

    }
    else{
        alert("You don't have enough coin. Minimum 20 coint needed to make a call");
    }
    
    const currentCount = parseInt(mainCall.innerText);

    if(mainCall.innerText <= 0 ) return;

    mainCall.innerText = currentCount - 20;
  });
}

for (let i = 1; i <= 9; i++) {
  addCallListener(`box-${i}-call`,i);
}

//Clear button functionality: 
document.getElementById('clear-btn').
addEventListener('click',function(){
    document.getElementById('log-text').innerText = "";
})
