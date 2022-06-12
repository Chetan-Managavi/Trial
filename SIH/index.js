var config = {
    apiKey: 'YOUR-API-KEY',
    authDomain: 'YOUR-AUTH-DOMAIN',
    databaseURL: 'YOUR-DATABASE-URL',
    projectId: 'YOUR-PROJECT-ID',
    storageBucket: 'YOUR-STORE-BUCKET',
    messagingSenderId: 'YOUR-MESSAGING-SENDER-ID'
  };
  firebase.initializeApp(config);
  let formMessage = firebase.database().ref('register');
  


  document.getElementById('shiform');
  document.addEventListener('submit', formSubmit);

 var sname,todept,frdept,priority,que;
 //function sendMessage(sname,todept,frdept,priority,que); 

  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    var a;

     sname = document.querySelector('#name').value;
     todept = document.querySelector('#todepartment').value;
     frdept = document.querySelector('#department').value;
     priority= document.querySelector('#priority').value;
     que = document.querySelector('#question').value;
     sendMessage(sname,todept,frdept,priority,que);
  }
     
console.log(sname);

   // let formMessage = firebase.database().ref('register');
    function sendMessage(sname,todept,frdept,priority ,que)
    {
       
        let newFormMessage = formMessage.push();
        newFormMessage.set({
          sname: sname,
          todept: todept,
          frdept: frdept,
          que: que
        });


    }
