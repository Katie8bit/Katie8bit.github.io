/*

Assignment Operators:
    - Assignment operators are used to assign values to JavaScript variables.
        A list, example, what it is the same as, and result:
        Given that x = 10 and y = 5
            1) =; x = y; x = y; x = 5
            2) +=; x += y; x = x + y; x = 15
            3) -=; x -= y; x = x - y; x = 5
            4) *=; x *= y; x = x * y; x = 50
            5) /=; x /= y; x = x / y; x = 2
            6) %=; x %= y; x = x % y; x = 0

Arithmetic Operators:
    - Arithmetic operators are used to perform arithmetic between variables and/or values.
        A list, description, example, y result, x result:
        Given that y = 5
            1) +; Addition;  x = y + 2;  y = 5;  x = 7
            2) -; Subtraction;  x = y - 2;  y = 5;  x = 3
            3) *; Multiplication;  x = y * 2;  y = 5;	x = 10
            4) /;	Division;	x = y / 2;	y = 5;	x = 2.5
            5) %;	Modulus (division remainder);	x = y % 2;	y = 5;	x = 1;
            6) ++;	Increment;	x = ++y;	y = 6;	x = 7	
                                x = y++;	y = 6;	x = 6
            7) --;	Decrement;	x = --y;	y = 4;	x = 3;	
                                x = y--;	y = 4;	x = 4;

Comparison Operators:
    - Comparison operators are used in logical statements to determine equality or difference between variables or values.
        A list, description, comparison, and returns
        Given that x = 5
            1) ==;	equal to;	x == 8	false
                                x == 5	true
            2) ===;	equal value and equal type;	x === "5"	false	
                                                x === 5	true
            3) !=;	not equal;	x != 8	true
            4) !==;	not equal value or not equal type;	x !== "5"	true	
                                                        x !== 5	false
            5) >;	greater than;	x > 8;	false
            6) <;	less than;	x < 8;	true
            7) >=;	greater than or equal to;	x >= 8;	false
            8) <=;	less than or equal to;	x <= 8;	true
            
Logical Operators:
    - Logical operators are used to determine the logic between variables or values.
        A list, Description, and Example
        Given that x = 6 and y = 3
            1) &&;	and;  (x < 10 && y > 1) is true
            2) ||;	or;	(x === 5 || y === 5) is false
            3) !;	not; !(x === y) is true
            
Unary Operators: 
    - A unary operator is one that takes a single operand/argument and performs an operation. A unary operation is an operation with only one operand. This operand comes either before or after the operator.
        A list, description, and then example:
            1) typeof;	Returns a string which is the type of the operand; typeof 2 //returns 'number'
            2) delete;  	Deletes specific index of an array or specific property of an object;   var hi = 1;
                                                                                                    delete hi;          // returns false
                                                                                                    console.log(hi);    // returns 1
            3) Logical Not(!);	Converts to boolean value then negates it;  !false // returns true
                                                                            !true // returns false
            4) Unary plus(+);	Tries to convert the operand into a number; +3 //returns 3
                                                                            +'3' //returns 3
            5) Unary negation(-); 	Tries to convert the operand into a number and negates after;   -3 // returns -3
                                                                                                    -'-3' //returns 3
            6) Bitwise not (~);	Inverts all the bits in the operand and returns a number;   ~2 //returns -3
                                                                                            ~'-3' //returns 2
            7) void;	Discards a return value of an expression.;  void 0                                              
                                                                    var hi = function () {
                                                                        console.log('Yap')
                                                                        return 4;
                                                                    } //returns undefined
Ternary Operator:
    - A conditional operator that assigns a value to a variable based on some condition.
        Syntax: 
            variablename = (condition) ? value1:value2 
        Example:
            var voteable = (age < 18) ? "Too young":"Old enough";
*/