/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
    var myName;
    var myAge;
    
    /* STEP 2: Initialize variables
	Don't confuse a variable with no value with one that doesn't exist at all */
    myName="Alex";
    console.log(myName+" - "+typeof(myName));
    myAge=24;
    console.log(myAge+" - "+typeof(myAge));

    /* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
    myAge=42;
    myAge="Eighty";

    // STEP 4: Variable types
    // Numbers
    var num1=50;
    console.log(num1+" - "+typeof(num1));
    var num2=19.9999;
    console.log(num2+" - "+typeof(num2));

    // Strings (use '' or "")
    var string1="Hello! Howdy?";
    console.log(string1+" - "+typeof(string1));

    // Booleans
    var bool1=true;
    console.log(bool1+" - "+typeof(bool1));

    // Arrays
    var numArray=[10, 20, 30];
    console.log(numArray+" - "+typeof(numArray));
    var colorArray=["red", 20, "green"]

    // Objects
    var movieObject={
        movieName: "Avatar",
        runTime: 120,
        writers: {
            leadWriter: "Cameron",
            assistant: "Computer Graphics"
        }
    }

    // STEP 5: Typing (JavaScript is a loosely-typed language)