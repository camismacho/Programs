/*
*Joseph Camacho-Terrazas
*10/16/2020
*Input: None
*Output: The output of alert(), which is the value of x
*Precondition: None
*Postcondition: The value of x will be printed and allow us to determine what type of binding JavaScript uses
*/

//Run function sub1()
sub1();

function sub1() {
    var x;
    function sub2() {
        //Prints the value of x in a dialog box
        alert("The output is " + x);
    }
    function sub3() {
        var x;
        x = 3;
        sub4(sub2);
    }
    function sub4(subx) {
        var x;
        x = 4;
        subx();
    }
    x = 1;
    sub3();
}