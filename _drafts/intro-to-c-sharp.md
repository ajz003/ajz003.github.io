---
layout: post
title: Beginning with C# (Module 1)
categories: [C#]
tags: [Programming, MOOC]
---

# Preface

This is aimed towards JavaScript developers who want to learn another programming language, or those who want to understand the process of learning something new in general.

I'm taking a course on edX titled [**Introduction to C#**](https://courses.edx.org/courses/course-v1:Microsoft+DEV204.1x+1T2019/course/). I figured that it was about time I added another language to my arsenal. I'm going to compare what I learn about C# with JavaScript. I'll comment on the similarities and the differences, rather than approach it from a brand-new coder's perspective. Hopefully this review helps everyone out as much as it will help me out!

------
## The Integrated Development Environment (IDE)

<img class="img-fluid img-adjust mx-auto d-block" src="https://upload.wikimedia.org/wikipedia/commons/6/61/Visual_Studio_2017_logo_and_wordmark.svg" />

The course suggests that we use [**Visual Studio**](https://visualstudio.microsoft.com/downloads/) as our IDE for C# (pronounced C Sharp). I personally learned JavaScript using Visual Studio Code, which I believe is Visual Studio's open-source younger brother. Visual Studio seems more robust and takes up way more space on your hard drive depending on what **workloads** you install. **Workloads** are basically add-ons that get automatically installed based on what kind of development you want to do (.NET, C++, Azure, Node, Office, etc.)

------
## Data Types

The first thing we get into are the **most commonly used** C# value types (which are one of two data types.) 

*"Value types are so-called because they contain the actual value of the data they store."*

1. The ones JavaScript (JS) and C# share in common:
    * JS `Boolean()` and C# `bool` 
    * `string`


2. Kind of similar:

    * JS `Date()` vs. C# `DateTime`
    * The JS `number` vs. C# `int`, `long`, `float`, `double`, and `decimal`

        To summarize the different C# number types briefly:
        * `int` is for whole numbers
        * `long` is for long whole numbers
        * `float` is for numbers with decimals
        * `double` is for numbers with lots more decimals
        * `decimal` is for if you need decimals (duh) and want to do exact/precise math (since float and double can result in some wonky math)


3. Unique to C#:
    * `char`: Single character

There are more data types than what I've listed. [A full list of C# data types can be found here.](https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types-and-variables)

------
## Statements

**C#**
```C#
int myVariable = 2;
```

This is a C# **statement**, which serves the same function as a JS statement. "Statements are formed from **tokens**. These **tokens** can be keywords, identifiers (variables), operators, and the statement terminator which is the semicolon (;). **All statements in C# must be terminated with a semicolon.**"

**JavaScript**
```JavaScript
let myVariable = 2;
```
(Semicolon optional)

In JS, you don't need to end everything with a semicolon, even though it is suggested. This is because JavaScript adds them in behind the scenes. It's time to be a grown-up and put in those semicolons! With C#, ending statements with semicolons is a **must**, or it'll throw an error (a nice red squiggly line will appear in Visual Studio).

These parts of the C# statement are tokens:
* `int`, Data Type
* `myVariable`, Variable
* `=`, Assignment operator
* `2`, Literal Value 
* `;`, Statement Terminator

------
## Identifiers (Variables)

"In C#, an identifier is a name you give to the elements in your program."

Identifier is a fancy word for variable. As examples, let's look at those code snippets again:

**C#**
```C#
int myVariable = 2;
```
When making a variable in C#, you **must** give it a data type (a lot of musts around here)! If you don't, you'll get an error. So we have to make `myVariable` into an `int`.

**JavaScript**
```JavaScript
let myVariable = 2;
```
JS just uses `let` and `myVariable` automatically becomes a number because it sees that `2` is a number.

Some similarities for **naming conventions**:
* Both languages have **case-sensitive identifiers** (myVar, _myVar, and myvar, are considered different identifiers).
* Both can only contain **letters, digits, and the underscore character** (You cannot start the identifier with a digit. myVar and _myVar are legal but 2Vars is not).

------
## Operators

"An operator is a token that applies to operations on one or more operands in an expression. An expression can be part of a statement, or the entire statement."

Both languages share many of the same operators (+, -, *, /, %, etc.) The differences are left as an [exercise for](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/) [the reader.](https://www.w3schools.com/jsref/jsref_operators.asp)

------
## Data Type Conversion

This is how you convert a data type into a different type in **C#**:
```C#
int myInt = 2147483647;
long myLong = myInt;
```
This is what is known as an **implicit** data conversion. "C# will use implicit conversion where it can, mostly in the case when a conversion will not result in a loss of data or when the conversion is possible with a compatible data type."

In this example, converting an `int` to a `long` is fine because there is no data loss. The reverse, however, could result in data loss since `long` holds more data than `int`. In this case, we need to do **explicit** data conversion:

```C#
double myDouble = 1234.6;
int myInt;
// Cast double to int by placing the type modifier ahead of the type to be converted
// in parentheses
myInt = (int)myDouble;
```
OR
```C#
double myDouble = 1234.6;
int myInt;
// Cast double to int by using the Convert class and the ToInt32() method.
// This converts the double value to a 32-bit signed integer
myInt = Convert.ToInt32(myDouble);
```

The first example uses () in front of the old variable to convert it into the type we put into the parentheses, `(int)myDouble`.

The second example uses a method provided by the .NET framework, `Convert.ToInt32()`

C# also gives us two more methods for casting types, `TryParse()` and `Parse()`:

```C#
// TryParse() example
bool result = Int32.TryParse(value, out number);

// Parse() example
int number = Int32.Parse(value);
```
"In the TryParse() example, the method returns a **Boolean** result **indicating if the conversion succeeded**. In the Parse() example, if the conversion **does not succeed, an exception will be thrown.**"

Essentially, `TryParse()` tries to parse the value into the indicated data type, and it if works or not, it'll tell you true or false. `Parse()` simply throws an error if it fails.

**In JS**, `Number()` converts to a Number, `String()` converts to a string, and `Boolean()` converts to a Boolean.

```JavaScript
let myDouble = 1234.6;
let myInt;
myInt = myDouble;
```
*Well, JS only has one numeric data type, so this^ code was kind of pointless...*

------
## Conventions

Like JS, C# enjoys the camel case convention, where the letter of each word is capitalized except the first, ex: `camelCase` or `thisIsAnExampleVariable`. It doesn't matter too much, because each business has its own naming conventions that you'll end up using.

Also, like JS, you can declare your variables in C# first before you assign values to them:

**C#**
```C#
int myVariable = 2;
// OR
int myVariable;
myVariable = 2;
```

**JavaScript**
```JavaScript
let myVariable = 2;
// OR
let myVariable;
myVariable = 2;
```

This also doesn't matter too much; it's a matter of preference.

------
## Console.WriteLine() and other goodies

`Console.WriteLine()` is C#'s version of JS's `console.log`. It's similar to JS in the fact that you have to unintuitively space your strings out to make it look nice.

**C#**
```C#
int age = 25;
Console.WriteLine("I am " + age + " years old.")
```
Output: `I am 25 years old.`

**JavaScript**
```JavaScript
let age = 25;
console.log("I am " + age + " years old.")
```

Output: `I am 25 years old.`

*Additionally, C# has a **placeholder** style for adding in variables using curly brackets:*

**C#**
```C#
int age = 25;
string city = "Oak Park";
Console.WriteLine("I am {0} years old and live in {1}.", age, city)
```
Output: `I am 25 years old and live in Oak Park.`

*Both C# and JS utilize **string concatenation**:*

**C#**
```C#
int age = 25;
string city = "Oak Park";
Console.WriteLine("I am " + age + " years old and live in " + city + ".")
```
Output: `I am 25 years old and live in Oak Park.`

**JavaScript**
```JavaScript
let age = 25;
let city = "Oak Park";
console.log("I am " + age + " years old and live in " + city + ".")
```
Output: `I am 25 years old and live in Oak Park.`

*And both C# and JS utilize **string interpolation** (called **template literals** in JS):*

**C#**
```C#
int age = 25;
string city = "Oak Park";
Console.WriteLine($"I am {age} years old and live in {city}.")
```
Output: `I am 25 years old and live in Oak Park.`

**JavaScript**
```JavaScript
let age = 25;
let city = "Oak Park";
console.log(`I am ${age} years old and live in ${city}.`)
```
Output: `I am 25 years old and live in Oak Park.`

C# has the dollar sign before the wrapping quotations `$"{}"` and JS has them in the wrapping backticks. Both use curly brackets.

------
# My thoughts

While C# is the more complicated programming language, what I was told before was true: once you get familiar with one programming language and understand the programming mindset, learning other programming languages isn't as hard. I look forward to delving more into C# and comparing it with my native language of JavaScript.