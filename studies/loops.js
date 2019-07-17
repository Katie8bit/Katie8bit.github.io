/*

For Loop:
    - for: Loops through a block of code a number of times.
        Syntax:
            for (statement 1; statement 2; statement 3) {
                // code block to be executed
            }
        - Statement 1 is executed (one time) before the execution of the code block.
        - Statement 2 defines the condition for executing the code block.
        - Statement 3 is executed (every time) after the code block has been executed.
        Example:
            for (i = 0; i < 5; i++) {
                console.log("Hello!");
            }
        - Statement 1 sets a variable before the loop starts (var i = 0).
        - Statement 2 defines the condition for the loop to run (i must be less than 5).
        - Statement 3 increases a value (i++) each time the code block in the loop has been executed.
        
For-In Loops:
    - for-in: Loops through the properties of an object.
        Syntax:
            for (var key in object) {
                console.log(key);
                console.log(object[key]);
            }
        Example: 
            for (var key in object) {
                console.log(key);
            }
        - Doing so for this example will loop over the object and print its keys.

While Loops:
    - while: Loops through a block of code while a specified condition is true.
        Syntax: 
            while (condition) {
                // code block to be executed
            }
        Example:
            var count = 0;
            while (count < 10) {
                console.log(count);
                count++;
            }

How to backward count down to zero:
    var count = 10;
    while (count > -1) {
        console.log(count);
        count--;
    }

How to loop over an Array forwards:
    var pets = ["dog", "cat", "fish"];
    
    for (var i = 0; i < pets.length; i++) {
        console.log(pets[i]);
    }
  

How to loop over an Array backwards:
    var pets = ["dog", "cat", "fish"];
    
    for (var i = pets.length -1; i >= 0; i--) {
        console.log(pets[i]);
    }
*/