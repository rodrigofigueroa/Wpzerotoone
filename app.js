/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var changeBootstrap = function changeBootstrap() {
  var form = document.querySelector('#customer_details').children,
      kids = form[0].getElementsByClassName('woocommerce-billing-fields__field-wrapper')[0].children,
      adittionalFields = document.querySelector('.shipping_address').firstElementChild.children,
      aditionTextArea = document.querySelector('.woocommerce-additional-fields__field-wrapper').firstElementChild,
      concatKidsAFields = [].concat(_toConsumableArray(adittionalFields), _toConsumableArray(kids));
  aditionTextArea.classList.add('form-group');
  aditionTextArea.children[1].firstElementChild.classList.add('form-control');

  for (var a = 0; a < concatKidsAFields.length - 1; a++) {
    concatKidsAFields[a].classList.add('form-group');
    var input = concatKidsAFields[a].children;

    if (input[1].getElementsByTagName('input')[0]) {
      if (input[1].getElementsByTagName('input')[0] !== undefined) {
        if (input[1].getElementsByTagName('input')[0].getAttribute('type') === 'text' || input[1].getElementsByTagName('input')[0].getAttribute('type') === 'tel' || input[1].getElementsByTagName('input')[0].getAttribute('type') === 'email') {
          input[1].getElementsByTagName('input')[0].classList.add('form-control');
        }
      }
    }
  }
};

var loginFunction = function loginFunction() {
  var form = document.querySelector('.login'),
      formChildren = form.children;

  for (var a = 0; a < formChildren.length - 1; a++) {
    // console.log(formChildren[a])
    formChildren[a].classList.add('form-group');
    var input = formChildren[a].getElementsByTagName('input');

    if (input[0].getAttribute('type') === 'text' || input[0].getAttribute('id') === 'password') {
      input[0].classList.add('form-control');
    }
  }
};

var ResetPassword = function ResetPassword() {
  var input = document.querySelector('.woocommerce-form-row');
  input.classList.add('form-group');
  input.children[1].classList.add('form-control');
};

var EditAccountInputs = function EditAccountInputs() {
  var form = document.querySelector('.woocommerce-EditAccountForm').getElementsByTagName('p');

  for (var a = 0; a < form.length - 1; a++) {
    form[a].classList.add('form-group');
    var input = form[a].children;

    if (input[1]) {
      if (input[1].getAttribute('type') === 'text' || input[1].getAttribute('type') === 'tel' || input[1].getAttribute('type') === 'email' || input[1].getAttribute('type') === 'password') {
        input[1].classList.add('form-control');
      } else {
        var spanChild = input[1].children;
        console.log(spanChild);
        input[1].classList.add('form-group');
        spanChild[0].classList.add('form-control');
      }
    }
  }
}; //Form


var NameForm = function NameForm() {
  var NAME_REGEX = /^[A-z\sa-z\sA-Z]{3,30}$/;
  var name = document.querySelector('#form-contact-footer').querySelector('input[name="nombre"]');

  if (!NAME_REGEX.test(name.value)) {
    name.classList.add('border');
    name.classList.add('border-danger');
    return false;
  } else {
    name.classList.remove('border-danger');
    name.classList.add('border-success');
    return true;
  }
};

var ValidateEmail = function ValidateEmail(correo) {
  var EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!EMAIL_REGEX.test(correo.value)) {
    correo.classList.add('border');
    correo.classList.add('border-danger');
    return false;
  } else {
    correo.classList.remove('border-danger');
    correo.classList.add('border-success');
    return true;
  }
};

var ValidateNumberForm = function ValidateNumberForm() {
  var REGEX_NUMBER = /^[0-9]{8,10}$/;
  var form = document.querySelector('#form-contact-footer'),
      number = form.querySelector('input[name="numero"]');

  if (!REGEX_NUMBER.test(number.value)) {
    number.classList.add('border');
    number.classList.add('border-danger');
    return false;
  } else {
    number.classList.remove('border-danger');
    number.classList.add('border-success');
    return true;
  }
};

var MesaggeArea = function MesaggeArea() {
  var REGEX_TEXTAREA = /^[\WA-z a-z A-Z]{10,100}$/;
  textArea = document.querySelector('#exampleFormControlTextarea1');

  if (!REGEX_TEXTAREA.test(textArea.value)) {
    textArea.classList.add('border');
    textArea.classList.add('border-danger');
    return false;
  } else {
    textArea.classList.remove('border-danger');
    textArea.classList.add('border-success');
    return true;
  }
};

var validate = function validate() {
  var btn = document.querySelector('#btn-submit-form'),
      flag = true,
      correo = document.querySelector('#form-contact-footer').querySelector('input[name="correo"]');

  if (!NameForm()) {
    flag = false;
  }

  if (!ValidateEmail(correo)) {
    flag = false;
  }

  if (!ValidateNumberForm()) {
    flag = false;
  }

  if (!MesaggeArea()) {
    flag = false;
  }

  if (flag) {
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-success');
    btn.disabled = false;
  } else {
    btn.disabled = true;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-danger');
  }
};

var AjaxSend = function AjaxSend(e) {
  e.preventDefault();

  var form = document.querySelector('#form-contact-footer'),
      formInputs = form.querySelectorAll('input'),
      formTextArea = form.querySelectorAll('textarea'),
      _final = [].concat(_toConsumableArray(formInputs), _toConsumableArray(formTextArea)),
      bodyCreate = {
    nombre: '',
    correo: '',
    numero: '',
    mensaje: ''
  },
      txt = document.querySelector('.txt-form-alerts').firstElementChild;

  _final.forEach(function (item) {
    bodyCreate[item.name] = item.value;
  });

  var BODY_AJAX = JSON.stringify(bodyCreate),
      BASE_URL_JS = window.location.origin,
      url = "".concat(BASE_URL_JS, "/a/wp-content/themes/woocomercetheme/src/mailer/checkAjax.php");
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application-json',
      'Accept': 'applications-json'
    },
    body: BODY_AJAX
  }).then(function (first) {
    if (first.ok) {
      txt.innerHTML = '¡Gracias! nos pondremos en contacto contigo pronto.';
    } else {
      txt.innerHTML = 'Upps, creo que algo salío mal :c, intenta de nuevo más tarde.';
    }
  });
  form.reset();
};

var ValidateFormCompetely = function ValidateFormCompetely() {
  var form = document.querySelector('#form-contact-footer');
  form.addEventListener('keyup', validate);
  form.addEventListener('submit', AjaxSend, false);
};

var RemoveCol = function RemoveCol() {
  var colsSet = document.querySelector('.col2-set'),
      col1 = document.querySelector('.col-1'),
      col2 = document.querySelector('.col-2');
  JoinCols = [colsSet, col1, col2];
  JoinCols.forEach(function (item) {
    var classCss = item.getAttribute('class');
    item.classList.remove(classCss);
  });
};

var AddFormControlAndBesUXregister = function AddFormControlAndBesUXregister() {
  var inputs = Array.from(document.querySelector('.register').querySelectorAll('input')),
      cols1 = document.querySelector('.col-1'),
      cols2 = document.querySelector('.col-2'),
      allCols = [cols1, cols2];
  allCols.forEach(function (item) {
    item.parentElement.classList.add('row');
    item.classList = 'col-12 col-md-6';
  });
  inputs.forEach(function (item) {
    item.parentElement.classList.add('form-group');

    if (item.parentElement.parentElement.tagName === 'P', item.parentElement.parentElement.tagName) {
      item.parentElement.parentElement.classList.add('d-flex', 'flex-column');
    }

    if (item.getAttribute('type') === 'text' || item.getAttribute('type') === 'email' || item.getAttribute('type') === 'password') {
      item.classList.add('form-control');
    }
  });
};

var ValidateUser = function ValidateUser() {
  var user = document.querySelector('.woocommerce-form-register').querySelector('input[name="username"]'),
      regexUser = /^[\w]{2,20}$/;

  if (regexUser.test(user.value)) {
    user.classList.remove('border-danger');
    user.classList.add('border', 'border-success');
    return true;
  } else {
    user.classList.remove('border-success');
    user.classList.add('border', 'border-danger');
  }

  return false;
};

var ValidatePassword = function ValidatePassword() {
  var regex = /^[\w\W]{12,30}$/,
      pass = document.querySelector('.woocommerce-form-register').querySelector('input[name="password"]');

  if (!regex.test(pass.value)) {
    pass.classList.remove('border-success');
    pass.classList.add('border', 'border-danger');
    return false;
  }

  pass.classList.remove('border-danger');
  pass.classList.add('border', 'border-success');
  return true;
};

var CompleteValidate = function CompleteValidate() {
  var flag = true,
      form = document.querySelector('.woocommerce-form-register'),
      btn = form.querySelector('button[type="submit"]'),
      correo = form.querySelector('#reg_email');

  if (!ValidateUser()) {
    flag = false;
  }

  if (!ValidateEmail(correo)) {
    flag = false;
  }

  if (!ValidatePassword()) {
    flag = false;
  }

  if (flag) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
};

var ValidateForRegister = function ValidateForRegister() {
  document.querySelector('.woocommerce-form-register').addEventListener('change', CompleteValidate);
  document.querySelector('.woocommerce-form-register').addEventListener('keyup', CompleteValidate);
  document.querySelector('.woocommerce-form-register').addEventListener('focusin', CompleteValidate);
  document.querySelector('.woocommerce-form-register').addEventListener('focusout', CompleteValidate);
}; //start the web site


window.addEventListener('load', function () {
  var bars = document.querySelector('.fa-bars');
  var shadow = document.querySelector('.shadow');
  var menu = document.querySelector('.menu').style;
  var flagMenu = false;

  var menuResponsive = function menuResponsive() {
    if (flagMenu !== true) {
      flagMenu = true;
      menu.left = '0px';
      shadow.style.display = 'block';
    } else {
      flagMenu = false;
      menu.left = '-1000px';
      shadow.style.display = 'none';
    }
  };

  bars.addEventListener('click', menuResponsive);
  shadow.addEventListener('click', menuResponsive);

  if (document.querySelector('#form-contact-footer')) {
    ValidateFormCompetely();
  }

  if (document.querySelector('.register')) {
    btn = document.querySelector('.woocommerce-form-register').querySelector('button[type="submit"]');
    btn.disabled = true;
    ValidateForRegister();
  } //   
  //End

});
window.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('#customer_details')) {
    changeBootstrap();
    RemoveCol();
  }

  if (document.querySelector('.login')) {
    loginFunction();
  }

  if (document.querySelector('.lost_reset_password')) {
    ResetPassword();
  }

  if (document.querySelector('.woocommerce-EditAccountForm')) {
    EditAccountInputs();
  }

  if (document.querySelector('.register')) {
    AddFormControlAndBesUXregister();
  }
});

/***/ }),

/***/ "./src/app.sass":
/*!**********************!*\
  !*** ./src/app.sass ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Programas\xamp\htdocs\a\wp-content\themes\woocomercetheme\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! D:\Programas\xamp\htdocs\a\wp-content\themes\woocomercetheme\src\app.sass */"./src/app.sass");


/***/ })

/******/ });