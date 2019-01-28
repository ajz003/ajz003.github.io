---
layout: post
title: Decision Statements and Loops (Intro to C# Part 2)
categories: [C#]
tags: [Programming, MOOC]
---

# Preface

Just re-stating that **I'm going to compare what I learn about C# with JavaScript.**

Today, we'll be going over these statements:

* **Decision Statements**
    1. `if` 
    2. `else if`
    3. `else`
    4. `switch` 


* **Loops** (or as they call it, repetition)
    1. `for`
    2. `foreach`
    3. `while`
    4. `do`

------
## The if Statement

**C#**
```csharp
string response = "Yes";
if (response == "Yes")
{
    // statements that will execute if the value of the response variable is
    // yes, will be placed here.
}
```

**JavaScript**
```javascript
let response = "Yes";
if (response === "Yes") {
    // statements that will execute if the value of the response variable is
    // yes, will be placed here.
}
```

------
Just a **JavaScript** refresher: 
* `===` checks if the two statements are the same value *and* type.
* `==` checks only if the two statements are the same value.
* `=` is an assignment operator, like `let i = 5;`

**`===` does not exist in C#.** Otherwise, the syntax for `if` statements are very similar:

```
if () {}
```

------
### if else Statements

**C#**
```csharp
string response;
if (response == "connection_failed")
{
    // Block of code executes if the value of the response variable is "connection_failed".
}
else
{
    // Block of code executes if the value of the response variable is not "connection_failed".
}
```

**JavaScript**
```javascript
let response;
if (response === "connection_failed") {
    // Block of code executes if the value of the response variable is "connection_failed".
}
else {
    // Block of code executes if the value of the response variable is not "connection_failed".
}
```

Once again, almost identical (besides the `string response` declaration and lack of `===` in C#)

------
### else if Statements

**C#**
```csharp
string response;
if (response == "connection_failed")
{
    // Block of code executes if the value of the response variable is "connection_failed".
}
else if (response == "connection_error")
{
    // Block of code executes if the value of the response variable is "connection_error".
}
else
{
    // Block of code executes if the value of the response variable is neither above responses.
}
```

**JavaScript**
```javascript
let response;
if (response === "connection_failed") {
    // Block of code executes if the value of the response variable is "connection_failed".
}
else if (response === "connection_error") {
    // Block of code executes if the value of the response variable is "connection_error".
}
else {
    // Block of code executes if the value of the response variable is neither above responses.
}
```

Once again, almost identical! Not too bad.

------
## The switch Statement

**C#**
```csharp
string response;
switch (response)
{
   case "connection_success":
      // Block of code executes if the value of response is "connection_success".
      break;
   case "connection_failed":
   case "connection_error":
      // Block of code executes if the value of response is "connection_failed"
      // or "connection_error;
      break;
   default:
      // Block executes if none of the above conditions are met.
      break;
}
```

**JavaScript**
```javascript
let response;
switch (response) {
   case "connection_success":
      // Block of code executes if the value of response is "connection_success".
      break;
   case "connection_failed":
   case "connection_error":
      // Block of code executes if the value of response is "connection_failed"
      // or "connection_error;
      break;
   default:
      // Block executes if none of the above conditions are met.
      break;
}
```

Wow, they're the same! Wonderful!

------
# The Loops (for Loop)

**C#**
```csharp
// Basic Format
for ([initializers]; [condition]; [iterator])
{
   // code to repeat goes here
}

//for Loop
for (int i = 0 ; i < 10; i++)
{
    // Code to execute.
}
```

**JavaScript**
```javascript
// Basic Format
for ([initializers]; [condition]; [iterator]) {
   // code to repeat goes here
}

//for Loop
for (let i = 0 ; i < 10; i++) {
    // Code to execute.
}
```

That's nice, they're the same again. Of course, you must remember that in C# you have to declare the type of the variable (in this case, `int`)

------
### foreach Loops

*Introducing Arrays in C#!*

**C#**
```csharp
string[] names = new string[10];

// Process each name in the array.
foreach (string name in names)
{
    Console.WriteLine($"{name}");
}
```

`string[] names = new string[10];` **is how you make arrays in C#.**

* `string[]` means the new array holds strings
* `names` is giving the array the name of `names`
* `new string[10]` is declaring the new array with a length of 10.

**JavaScript**
```javascript
let names = [];

// Process each name in the array.
names.forEach(function(name) {
    console.log(name);
});
```

Ok, *now* there are some big differences:

* In **JavaScript**, there is no need to declare the length of the array when initializing it.

* The foreach methods themselves are also different in both languages:
    * **JavaScript** uses the general format `arrayName.forEach(function(item){});`
    * **C#** uses `foreach (type item in arrayName){}`

**C#'**s `foreach` formatting is similar to `if(){}`, while **JavaScript** requires that you use `function()` to define what code executes `forEach` item in the array.

------
### The while Loop

**C#**
```csharp
string response = PromptUser();
while (response != "Quit")
{
    // Process the data.
    response = PromptUser();
}
```

**JavaScript**
```javascript
let response = prompt();
while (response !== "Quit") {
    // Process the data.
    response = prompt();
}
```

Back to similar territory. Note that the **JavaScript** uses `!==` while **C#** has no such operator.

------
### The do Loop

**C#**
```csharp
do
{
    // Process the data.
    response = PromptUser();
} while (response != "Quit");
```

**JavaScript**
```javascript
do {
    // Process the data.
    response = prompt();
} 
while (response !== "Quit");
```

They're similar! Both languages use the `do...while` loop to make sure the code in the `do` portion is executed at least once.

# My thoughts

**There are a lot of similarities in syntax** between C# and JavaScript, at least for `if` statements and loops. So far, most of the differences are just due to how values are typed. 

Next time, we'll get into using methods and exceptions.