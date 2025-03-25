document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

// clear error
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let valid = true;

// fetch values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
// start checking
// name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

// email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        valid = false;
    }

// message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        valid = false;
    }
// done checking
//     if success
    if (valid) {
        document.getElementById('formMessage').style.display = 'block';
        document.getElementById('formMessage').textContent = 'Your message has been sent successfully!';

// clear form
        document.getElementById('contactForm').reset();
    }
});


//check darkmode
// if (localStorage.getItem('dark-Mode') === 'enabled') {
//     document.body.classList.add('darkmode');
//     document.getElementById('darkness').textContent = "Switch to Light";
// }

// function darkness() {
//     const body = document.body;
//     const button = document.getElementById('darkness');

//     body.classList.toggle('darkmode');

//     //save preferences
//     if (body.classList.contains('darkmode')) {
//         localStorage.setItem('dark-Mode', 'enabled');
//         button.textContent = "Light";
//     } else {
//         localStorage.setItem('dark-Mode', 'disabled');
//         button.textContent = "Darkness";
//     }
// }

let pointMult = 1
let scoreReqMult = 10

function clicker() {
  if (localStorage.getItem('active') != 'true'){
    localStorage.setItem('points',0)
    localStorage.setItem('pointMult',1)
    localStorage.setItem('scoreReqMult',10)
    localStorage.setItem('multCount',0)
    console.log(localStorage.getItem('points'))
    var pointValue = 0
    var pointMult = 1
  }
  else{
    var pointValue = Number(localStorage.getItem('points'))
    var pointMult = Number(localStorage.getItem('pointMult'))
  }
  localStorage.setItem('active','true')
  pointValue += pointMult
  console.log(localStorage.getItem('points'))
  localStorage.setItem('points',pointValue)
  document.getElementById("clicker").innerHTML = Math.ceil(pointValue*100)/100
}

function reset() {
  localStorage.setItem('points',0)
  localStorage.setItem('pointMult',1)
  localStorage.setItem('scoreReqMult',10)
  localStorage.setItem('multCount',0)
  document.getElementById("clicker").innerHTML = "Start"
  multText(0,10,1)
}

function multiplier() {
  let tempPoints = Number(localStorage.getItem('points'))
  let scoreReqMult = Number(localStorage.getItem('scoreReqMult'))
  let pointMult = Number(localStorage.getItem('pointMult'))
  let multCount = Number(localStorage.getItem('multCount'))
  error = setTimeout(multError,500)
  if (tempPoints > scoreReqMult) {
    pointMult += 0.1
    tempPoints += -scoreReqMult
    localStorage.setItem('points',tempPoints)
    scoreReqMult = scoreReqMult*1.5
    localStorage.setItem('scoreReqMult', scoreReqMult)
    localStorage.setItem('pointMult',pointMult)
    multCount += 1
    localStorage.setItem('multCount',multCount)
    multText(multCount,scoreReqMult,pointMult)
    document.getElementById("clicker").innerHTML = Math.ceil(tempPoints*100)/100
  }
  else {
    document.getElementById("mult").innerHTML = "Not enough points"
    multError(multCount,scoreReqMult,pointMult)

  }
}

function multError(multCount,scoreReqMult,pointMult) {
    multText(multCount,scoreReqMult,pointMult)
    document.getElementById("clicker").innerHTML = Math.ceil(tempPoints*100)/100
}

function fetchVal(object) {
  return Number(localStorage.getItem(object))
}

function changeVal(object,value) {
  localStorage.setItem(object,value)
}

function multText(multCount,scoreReqMult,pointMult) {
  document.getElementById("mult").innerHTML = `Multipliers: ${multCount}<br>Cost: ${Math.ceil(scoreReqMult*100)/100} points<br>Effect: ${Math.ceil(pointMult*10)/10}`
}