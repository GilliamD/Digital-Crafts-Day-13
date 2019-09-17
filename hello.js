/*Hello, you!
Write a function hello which given a name, says hello to the name. Use the following template:

function hello(name) {
put your code here
}
hello('Mustache');
Make the above program print

Hello, Mustache! */
function hello(name) {
    console.log("Hello, " + name + "!")
}
hello("Mustache")

/*Hello, you! Part 2
Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.*/
function hello2(name) {
    if (name == null) {
        console.log("Hello, World!");
    }
    else {
        console.log("Hello, " + name + "!");
    }
}
hello2()

/*Madlib
Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

Example:

> madlib('Anushka', 'art');
'Anushka's favorite subject in school is art.'*/