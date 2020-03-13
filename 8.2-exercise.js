// 8.2-exercise.js
//
// Calculator
// 

const vm = new Vue({
  el: "#calcApp",
  data: {
    firstNumber: null,
    secondNumber: null,
    operation: 'addition',
    total: null
  },
  methods: {
    calculate: (num1, num2) => {
      switch (vm.operation) {
        case 'addition':
          vm.total = num1 + num2;
          break;
        case 'subtraction':
          vm.total = num1 - num2;
          break;
        case 'multiplication':
          vm.total = num1 * num2;
          break;
        case 'division':
          vm.total = num1 / num2;
          break;
        default:
          window.alert('unexpected operator');
          break;
      }
      vm.firstNumber = null;
      vm.secondNumber = null;
    }
  }
});