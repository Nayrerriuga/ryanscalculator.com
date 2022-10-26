// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function Decimal () { 
varcurReadOut = FKeyPad.ReadOut.value; 
if (FlagNewNum) { 
curReadOut = "0."; 
FlagNewNum = false; 
} 
else 
{ 
if (curReadOut.indexOf(".") == -1) 
curReadOut += "."; 
} 
FKeyPad.ReadOut.value = curReadOut; 
} 
function ClearEntry () { 
FKeyPad.ReadOut.value = "0"; 
FlagNewNum = true; 
} 
function Clear () { 
Accumulate = 0; 
PendingOp = ""; 
ClearEntry(); 
} 
function Neg () { 
FKeyPad.ReadOut.value = parseFloat(FKeyPad.ReadOut.value) * -1; 
} 
function Percent () { 
FKeyPad.ReadOut.value = (parseFloat(FKeyPad.ReadOut.value) / 100) * 
parseFloat(Accumulate); 
}
function myFunction() { 
alert("TegTech 2014"); 
} 