const Calculator = { //created to keep track of values -set to null waiting for input
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit) {  //modifies the above values as buttons are clicked
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand ===true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else { //overwrites disp val if 0
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;      
    }
}

function Input_Decimal (dot) { //handles decimal point
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
    }
}
function Handle_Operator (Next_Operator)  //handles math operations
{
 const { First_Operand, Display_Value, operator } = Calculator
 const Value_of_Input = parseFloat(Display_Value);
 if (operator && Calculator.Wait_Second_Operand) {
     Calculator.operator = Next_Operator;
     return;
 }

 if (First_Operand == null) {  //checks operators and executes as requested
    Calculator.First_Operand = Value_of_Input;
 }else if (operator){
     const Value_Now = First_Operand || 0;
     let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
     
     Calculator.Display_Value = parseFloat(result);
     Calculator.First_Operand = parseFloat(result);
 }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
 const Perform_Calculation = {
     '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
     '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
     '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
     '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
     '=': (First_Operand, Second_Operand) => Second_Operand
 };

 function Calculator_Reset() {
     Calculator.Display_Value = '0' ;
     Calculator.First_Operand = null;
     Calculator.Wait_Second_Operand = false;  
     Calculator.operator = null;      
 }

 function Update_Display() { //updates screen w display value
     const display = document.querySelector('.calculator-screen');
     display.value = Calculator.Display_Value ;
 }

 Update_Display(); //monitors button clicks
 const keys = document.querySelector('.calculator-keys');
 keys.addEventListener('click', (event) => {
     const {target} = event;
     if (!target.matches('button')) {
         return;
     }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { //AC button
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})