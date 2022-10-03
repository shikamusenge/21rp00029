let btn = document.querySelector("#sms-btn");
btn.addEventListener("click", send);
function send(e) {
  e.preventDefault;
  if(document.querySelector("input").value!="")
  alert("Message is sent success \n full thank you");
}
