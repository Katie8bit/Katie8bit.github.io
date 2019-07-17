/*

String Operators:
    - The + operator, and the += operator can also be used to concatenate (add) strings.
        Example:
            Given that text1 = "It's ", text2 = "raining", and text3 = "":
                Operator: +; Example: text3 = text1 + text2; text1 = "It's "; text2 = "raining";  text3 = "It's raining"
                Operator: +=; Example: text1 += text2; text1 = "It's raining"; text2 = "raining";  text3 = ""
                
String Methods:
    - The length property returns the length of a string:
        var string = "Hello there";
        var lengthOfString = string.length;
        console.log(lengthOfString); //returns 11
    - indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
        var string = "Where is cat in this string?";
        var position = string.indexOf("cat");
        console.log(position); //returns 9
    - lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
        var string = "Where is cat in this string? And what if there's another instance of the word cat?";
        var position = string.lastIndexOf("cat");
        console.log(position); //returns 78
    - search() method searches a string for a specified value and returns the position of the match:
        var string = "Where is cat in this string? And what if there's another instance of the word cat?";
        var position = string.search("cat");
        console.log(position); //returns 9
    - Difference between search and indexOf: The search() method cannot take a second start position argument and the indexOf() method cannot take powerful search values (regular expressions).
    - slice() extracts a part of a string and returns the extracted part in a new string:
        var string = "Pluto, Mars, Saturn";
        var del = string.slice(7, 13);
        console.log(del); // returns Mars,
            - If a parameter is negative, the position is counted from the end of the string.
            - If you omit the second parameter, the method will slice out the rest of the string.
    - substring() is similar to slice(). The difference is that substring() cannot accept negative indexes:
        var string = "Pluto, Mars, Saturn";
        var del = string.substring(7, 13);
        console.log(del); //returns Mars,
            - If you omit the second parameter, substring() will slice out the rest of the string.
    - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part:
        var string = "Pluto, Mars, Saturn";
        var del = string.substr(7, 13);
        console.log(del); // returns Mars,
    - replace() method replaces a specified value with another value in a string:
        string = "Come to Disney Land!";
        var n = string.replace("Land", "World");
        console.log(n); // returns Come to Disney World!
            - The replace() method does not change the string it is called on. It returns a new string.
            - By default, the replace() method replaces only the first match.
            - By default, the replace() method is case sensitive.
    - A string is converted to upper case with toUpperCase():
        var string1 = "sample text";
        var string2 = string1.toUpperCase();
        console.log(string2); // returns SAMPLE TEXT
    - A string is converted to lower case with toLowerCase():
        var string1 = "SAMPLE TEXT";
        var string2 = string1.toLowerCase();
        console.log(string2); // returns sample text
    - concat() joins two or more strings:
        var string1 = "I am having ";
        var string2 = "a good day.";
        var string3 = string1.concat(string2);
        console.log(string3); // returns I am having a good day.
                - The concat() method can be used instead of the plus operator also.
                    var string = "I am having" + " " + "a good day.";
                    var string = "I am having".concat(" ", "a good day.");
    - The trim() method removes whitespace from both sides of a string:
        var string = "       I am having a good day.        ";
        console.log(string.trim()); // returns I am having a good day.
    - charAt() method returns the character at a specified index (position) in a string:
        var str = "HELLO WORLD";
        str.charAt(0); // returns H
    - charCodeAt() method returns the unicode of the character at a specified index in a string:
        var str = "HELLO WORLD";
        str.charCodeAt(0); // returns 72
    - A string can be converted to an array with the split() method:
        var txt = "a,b,c,d,e";   // String
        txt.split(",");          // Split on commas
        txt.split(" ");          // Split on spaces
        txt.split("|");          // Split on pipe
    - 
    
        

*/