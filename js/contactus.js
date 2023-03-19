let passValue;
export class ContactUs {
  constructor() {
    this.nameValue = document.getElementById("nameInput");
    this.emailValue = document.getElementById("emailInput");
    this.phoneValue = document.getElementById("phoneInput");
    this.ageValue = document.getElementById("ageInput");
    this.passwordValue = document.getElementById("passwordInput");
    this.repasswordValue = document.getElementById("repasswordInput");
    this.validateName();
    this.validateEmail();
    this.validatePhone();
    this.validateAge();
    this.validatePassword();
    this.validateRepassword();
  }
  validateName() {
    this.nameValue.addEventListener("input", (e) => {
      let regex = /^[a-zA-Z ]+$/;
      if (regex.test(e.target.value) === true) {
        document.getElementById("nameAlert").classList.add("d-none");
        return true;
      } else {
        document.getElementById("nameAlert").classList.remove("d-none");
        return false;
      }
    });
  }
  validateEmail() {
    this.emailValue.addEventListener("input", (e) => {
      let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(e.target.value) === true) {
        document.getElementById("emailAlert").classList.add("d-none");
        return true;
      } else {
        document.getElementById("emailAlert").classList.remove("d-none");
        return false;
      }
    });
  }
  validatePhone() {
    this.phoneValue.addEventListener("input", (e) => {
      let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (regex.test(e.target.value) === true) {
        document.getElementById("phoneAlert").classList.add("d-none");
        return true;
      } else {
        document.getElementById("phoneAlert").classList.remove("d-none");
        return false;
      }
    });
  }
  validateAge() {
    this.ageValue.addEventListener("input", (e) => {
      let regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
      if (regex.test(e.target.value) === true) {
        document.getElementById("ageAlert").classList.add("d-none");
        return true;
      } else {
        document.getElementById("ageAlert").classList.remove("d-none");
        return false;
      }
    });
  }
  validatePassword() {
    this.passwordValue.addEventListener("input", (e) => {
      passValue = e.target.value;
      let regex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
      if (regex.test(e.target.value) === true) {
        document.getElementById("passwordAlert").classList.add("d-none");
        return true;
      } else {
        document.getElementById("passwordAlert").classList.remove("d-none");
        return false;
      }
    });
  }
  validateRepassword() {
    this.repasswordValue.addEventListener("input", (e) => {
      if (e.target.value === passValue) {
        document.getElementById("repasswordAlert").classList.add("d-none");
        document.getElementById("submitBtn").removeAttribute("disabled");
        return true;
      } else {
        document.getElementById("repasswordAlert").classList.remove("d-none");
        document.getElementById("submitBtn").setAttribute("disabled", true);
        return false;
      }
    });
  }
}
