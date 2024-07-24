let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculator = {
    displayValue: '',
    operator: null,

    handleButtonPress: function(buttonValue) {
        switch (buttonValue) {
            case '=':
                this.calculate();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setOperator(buttonValue);
                break;
            case 'C':
                this.clear();
                break;
            default:
                this.appendDisplayValue(buttonValue);
        }
    },

    appendDisplayValue: function(value) {
        this.displayValue += value;
        display.value = this.displayValue;
    },

    setOperator: function(operator) {
        this.operator = operator;
        this.displayValue += operator;
        display.value = this.displayValue;
    },

    calculate: function() {
        let result = eval(this.displayValue);
        this.displayValue = result.toString();
        display.value = this.displayValue;
        this.operator = null;
    },

    clear: function() {
        this.displayValue = '';
        display.value = this.displayValue;
        this.operator = null;
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.handleButtonPress(button.value);
    });
});