/**
 * The odin project knowledge check questions
 * This is where I will log the different questions asked in the Odin project and my answers
 */

//*****************FOUNDATIONS BEGINNING******************
/** FLEXBOX
 * Section - Alignment
 * * 1. What's the difference between justify-content and align-items?
 * * * Justify-content aligns items along the primary axis, in normal flex direction it align's items horizontally and in flex-direction column it aligns vertically
 Align-items does the opposite, vertical for normal flex direction and horizontal for column direction
 * * 2. How do you use flexbox to completely center a div inside a flex container?
 * * * If the div is aligning itself: align-self: center; justify-self: center. Otherwise if the container is centering: justify-content: center; align-items:center
 * * 3. What's the difference between justify-content: space-between and justify-content: space-around?
 * * * Space-between evenly spaces the items in a container with even space between elements in the container whereas space-around adds even spacing on either
 side of the main axis but the space between isnt' necessarily even
 */

 /**
  * JAVASCRIPT FUNDAMENTALS
  * 1. Name the three ways to declare a variable?
  * * * var, let and const
  * 2. Which of the three variable declarations should you avoid and why?
  * * * Avoid var. It can cause issues with scope. But this wasn't explained in the info yet
  * 3. What rules should you follow when naming variables?
  * * * Make it specific but not too long. Should be camelCased. Don't use reserved keywords. Constants should be CAPITALIZED
  * 4. What should you look out for when using the + operator with numbers and strings?
  * * * + will concatenate strings and numbers together so it can end in unexpected results.
  * 5. How does the % operator work?
  * * * gives the remainder when the first number is divded by the second
  * 6. Explain the difference between == and ===.
  * * * == checks equality but isn't strict equality. So true and "true" will evaluate to true with == but not ===
  * 7. When would you receive a NaN result?
  * * * When performing an operation with a string and a number.
  * 8. How do you increment and decrement a number?
  * * * ++ and --
  * 9. Explain the difference between prefixing and post-fixing increment/decrement operators.
  * * * There is no difference if the value is not used. But when used immidetly, pre fix will give the value after increment / decrement and post will give 
the value before the increment / decrement
  * 10. What is operator precedence and how is it handled in JS?
  * * * Handled pretty similar to order of ops from school. Operations have a precedence number that determines what is run first. If == then run left to right
  * 11. How do you access developer tools and the console?
  * * * f12 or manually open developer tools and navigate to console
  * 12. How do you log information to the console?
  * * * console.log('');
  * 13. What does unary plus operator do to string representations of integers?
  * * * converts it to a number. Happens before a normal + or other operations due to it's higher precedence
  * 
    What are the eight data types in JavaScript? string, number, bool, undefined, null, object, symbol, bigint
    Which data type is NOT primitive? Object
    What is the relationship between null and undefined? null is used for variables that are empty or placeholders. undefined is not recommend to use manually
    used to check for undeclared variables
    What is the difference between single, double, and backtick quotes for strings? single and double essentiall == `` are template literals that make it easy
    to inject variables / logic into a string
    What is the term for embedding variables/expressions in a string? Concatenating
    Which type of quote lets you embed variables/expressions in a string? `` backticks
    How do you embed variables/expressions in a string? concatenating or template literals
    How do you escape characters in a string? backslash \
    What is the difference between the slice/substring/substr string methods? Main difference is their parameters and what they accept for parameters
    What are the three logical operators and what do they stand for? || OR && AND ! NOT
    What are the comparison operators? ==, ===, !=, <=, >=, <, >, etc.
  */