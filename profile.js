const fnameIcon = document.getElementById("fnameIcon");
const fname = document.getElementById("fname");
const lnameIcon = document.getElementById("lnameIcon");
const lname = document.getElementById("lname");
const phoneIcon = document.getElementById("phoneIcon");
const phone = document.getElementById("phone");
const descIcon = document.getElementById("descIcon");
const desc = document.getElementById("desc");
const deliveryIcon = document.getElementById("deliveryIcon");
const delivery = document.getElementById("delivery");
const billingIcon = document.getElementById("billingIcon");
const billing = document.getElementById("billing");

fnameIcon.addEventListener("click", () => {
  fname.contentEditable = "true";
});
lnameIcon.addEventListener("click", () => {
  lname.contentEditable = "true";
});

phoneIcon.addEventListener("click", () => {
  phone.contentEditable = "true";
});

descIcon.addEventListener("click", () => {
  desc.contentEditable = "true";
});

deliveryIcon.addEventListener("click", () => {
  delivery.contentEditable = "true";
});

billingIcon.addEventListener("click", () => {
  billing.contentEditable = "true";
});
