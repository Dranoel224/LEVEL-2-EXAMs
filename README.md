# THE BEST KALKULATOR WITH "K"
## USAGE
### 
All inputs should be ...


1 Introduction 
1.1 Purpose 
Purpose of this document is to describe requirement 
specifications for Scientific Calculator that will help ease 
calculations of numerical values online and to inform the 
readers and students of the class of the significant details 
and background of our project. This project is simulating the 
basic algebraic, trigonometric and engineering calculations. 
The basic algebraic functions will include addition, 
subtraction, division, and multiplication. The calculator will 
also be able to compute the power, sine, inverse sine, cosine, 
inverse cosine, tangent, inverse tangent, exponential, 
logarithm, natural logarithm, and square root functions. 
1.2 Project Scope 
The scope of project includes the implementation of the 
functionality needed for calculating arithmetic and scientific 
operations, memory operations setting and showing will be 
developed. 
The software product also designed to include menus for 
selecting which scientific functions to compute, an 
options menu for changing the options on the implemented 
machine. 
The software products will be interactive with the client, 
in which they allow him/her to choose all of the options 
from the first display screen. 
1.3 Overview of the Requirement Specification Document 
This document specifies the functional requirements for a 
scientific calculator program. This program is designed to act 
like a “handheld calculator” with the usual standard functions 
(add, subtract, multiply, divide, exponentiation and memory). 
Also the calculator will have the capability of performing 
functions in binary (base 2), octal (base 8) and hexadecimal 
(base 16), in addition to the usual decimal (base 10). This 
document will be used by the team as a base document for entire 
Project Development Life Cycle (PDLC). 
The rest of this document will give further details on the 
overall product description, including the hardware, software, 
and communications interfaces, product functions, user 
characteristics, and any assumptions that will be made. 
The document will also include the specific requirements 
needed. These will include the functions, performance, design, 
and software attributes. 
This document is organized in a logical manner and is easy to 
follow. Readers should refer to the table of contents if 
looking for something in specific. 
1.4 Document Conventions 
For this SRS PDLC standards will be used. As of yet there are 
no special sections which needs to be specifically pointed out. 
1.5 Intended Audience and Reading Suggestions 
Basically this project is developed for the purpose of 
enhancing students programming skills and familiarization with 
PDLC (Project Development Life Cycle) process. Project can be 
used as reference for future college projects. 
This document is intended for any user wishing to understand 
the underlying concepts in the software developed for 
Scientific Calculator. Readers will most likely include 
computer engineering students as well as any interested VB 
software developers 
1. 6 Details of requirements gathering process 
Requirements are gathered using the following standard. 
1) Study of existing open source projects over Internet 
2) Discussion among the group and with guide 
3) Some requirements are gathered through various sources from 
Internet and open source 
projects available and books from library. 
2. Overall Description 
2.1 Product Perspective 
Proposed Scientific Calculator shall be implemented in Visual 
Basic. The design mimics the calculator present in Microsoft 
windows operating systems with small modifications. The 
features provided by the calculator include all features 
typical of a calculator. It can be used in place of the 
calculator program which is included with the operating system. 
There are two views of a calculator. Basic view provides the 
standard functions of a calculator, and the scientific view 
allows access to the advanced features. Input is provided 
through GUI buttons or the keyboard. Number formats supported 
include Hex, dec, oct and binary. Hex, Oct and bin numbers can 
be of size QWord, DWord, Word, or Byte (see glossary for 
explanation). Arithmetic operations are supported. A set of 
trigonometric operations is provided in addition to algebraic 
functions. A memory is provided to hold single number between 
calculations. 
Enter numbers either by clicking on the buttons or using 
the keyboard. To use the arithmetic functions, click their 
buttons. If the function is unary (only one operand) the 
display is updated to the result. If the function is binary 
(two operands) enter the second number and click = or another 
arithmetic key. 
An optional menu bar (or command bar) can be used to give 
access to additional functions. All the menu bar functions can 
be obtained in other ways. 
2.2 User classes and characteristics 
Scientific Calculator shall be implemented in Visual Basic. The 
design mimics the calculator present in Microsoft windows 
operating systems with small modifications. The features 
provided by the calculator include all features typical of a 
calculator. Below figure shows user classes diagram. 
2.3 Operating Environment 
The program shall be written in standard Visual Basic and 
compiled using VB 6.0. The program shall use VB library 
functions. Developed calculator shall be usable on any system 
that runs on windows and shall not require any particular 
hardware or software. 
2.3.1 Hardware 
The following Hardware configuration at least: - 
A PC with Pentium IV Processor 
128 MB RAM & ABOVE 
40 GB HDD & ABOVE 
A 640x480 screen resolution with a minimum of 256 colors. 
2.3.2 Software 
Programming Language: VB 
Platform: VB 6.0 
Operating System: Windows 
2.3.3 Network 
N/A 
2.3.4 Communication 
N/A 
2.3.5 External Data Bases and File Interfaces 
There are no existing external data bases or files that will be 
needed by this program 
3 Product or System Features 
3.1 Use cases for scientific calculator 
1) Arithmetic calculations: As a calculator, it seems 
obvious that this machine will be able to perform 
basic arithmetic calculations. Addition, 
subtraction, multiplication etc. will be done with 
this machine. 
2) Higher level (scientific) calculations: The user 
will be able to use this calculator to do sine, 
cosine, tan and log as well as their inverse 
operations. All calculations deemed “scientific” 
will be allowed. 
3) Memory operations: This function will provide the 
“standard calculator” single memory operations, including: 
MC Memory Clear. Memory store, memory clear, operations 
where the memory unit is one of the operands and the 
result is stored back into memory. 
4) Output: This function will display the results of a 
calculation or memory. Results should 
be displayed under the following conditions: 
1. Whenever the equals sign (=) is input. 
2. Optionally, whenever the ENTER key is pressed. 
3.2 Design and Implementation 
The calculator has the following keys: 0……9, ., +, -, *, /, ±, 
=, C, CE and 1-operand keys: 1/x, x2, sqrt. In any situation 
the calculator has to produce a correct result defined by the 
well known Arithmetic rules. If the calculation is impossible 
the calculator has to display information helping the user to 
resolve the erroneous situation, like: 
• On encountering a division by 0 the display should read 
"Cannot divide by 0" and typing the 
key “C” should reset the calculator. 
• On calculating the square root value of a negative operand 
the display should read "Wrong 
operand". 
• On erroneous operand or operation keys the display should 
read “Reset (C) to continue” o 
Below user interface samples are taken as reference to design 
and implement the proposed scientific calculator.