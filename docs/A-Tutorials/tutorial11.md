---
id: tutorial11
title: Tutorial 11 - Shell Scripting - Part 1
sidebar_position: 10
description: Tutorial 11 for Students to Learn Shell Scripting
---

# Tutorial 11: Shell Scripting - Part 1

## Main Objectives of this Practice Tutorial

  - Plan and create a Shell Script
  - Explain the purpose of the **she-bang line** contained at the top of a shell script.
  - Set **permissions** and **execute** shell scripts.
  - Use **environment** and **user-defined** variables in shell scripts.
  - Use **Command Substitution** and **Math Operations** in shell scripts
  - Explain the purpose of the **$?** exit status and the **test** command.
  - Use **if** and **if-else** logic statements in shell scripts.
  - Use a **for** loop statement with a list in shell scripts.

## Tutorial Reference Material

**Course Slides:**

- Week 11 Lecture 1 Notes: [PDF](/slides/ULI101-11.1.pdf) \| [PPTX](/slides/ULI101-11.1.pptx)
- Week 11 Lecture 2 Notes: [PDF](/slides/ULI101-11.2.pdf) \| [PPTX](/slides/ULI101-11.2.pptx)

**Shell Scripting:**

- [Purpose](https://searchdatacenter.techtarget.com/definition/shell-script)

**Variables:**

- [Environment](https://opensource.com/article/19/8/what-are-environment-variables)
- [User Defined](https://www.linuxtechi.com/variables-in-shell-scripting/#:~:text=User%20Defined%20Variables%3A,like%20a%20real%20computer%20program.)
- [Positional Parameters](http://osr600doc.xinuos.com/en/SDK_tools/_Positional_Parameters.html#:~:text=A%20positional%20parameter%20is%20a,up%20to%20nine%20positional%20parameters.)

**Commands / Techniques:**

- [read](http://linuxcommand.org/lc3_man_pages/readh.html)
- [readonly](https://man7.org/linux/man-pages/man1/readonly.1p.html)
- [Command Substitution](https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html)

**Control Flow Statements:**

| [Purpose](https://en.wikipedia.org/wiki/Control_flow) | [test command](https://www.computerhope.com/unix/test.htm) | [if statement](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php#:~:text=If%20statements%20(and%2C%20closely%20related,conditions%20that%20we%20may%20set.)) | [if-else statement](https://www.tutorialspoint.com/unix/if-else-statement.htm) | [for loop](https://www.cyberciti.biz/faq/bash-for-loop/#:~:text=A%20'for%20loop'%20is%20a,files%20using%20a%20for%20loop.) |
| :--- | :--- | :--- | :--- | :--- |

**Instructional Videos:**

- [Bash Shell Scripting - Part 1](https://www.youtube.com/watch?v=kxEP-KUhOSg&list=PLU1b1f-2Oe90TuYfifnWulINjMv_Wr16N&index=5)
- [Creating and Running a Shell Script](https://www.youtube.com/watch?v=cQepf9fY6cE)

## Key Concepts

A shell script is a **file** that contains **Unix/Linux commands** and **reserved words** to help **automatic** common tasks.

### Creating & Executing Shell Scripts

It is recommended to **plan** out on a piece of paper the purpose of the shell script. Once you have planned your shell script by listing the **sequence of steps (commands)**, you need to create a file (using a **text editor**) that will contain your Linux commands.

**NOTE:** Avoid using filenames of already existing Linux Commands to avoid confusion. It is recommended to include a file extension that describes the type of shell for the shell script.

**Using a Shebang Line**

Since Linux shells have evolved over a period of time, using a she-bang line **forces** the shell script to run in a **specific shell**, which could prevent errors in case an older shell does not recognize newer features from more recent shells.

The **she-bang** line is a **special comment** at top of your shell script to run your shell script in a specific shell.

```bash
#!/bin/bash




```

**NOTE:** The **shebang line** must appear on the **first line** and at the **beginning** of the shell script, otherwise, it will be treated as a regular comment and ignored.

**Setting Permissions / Running Shell Scripts**

To run your shell script by name, you need to assign **execute permissions** for the user. To run the shell script, you can **execute** the shell script using a relative, absolute, or relative-to-home pathname

_Examples:_

```bash
chmod u+x myscript.bash
```

```bash
./myscript.bash
```

```bash
/home/username/myscript.bash
```

```bash
~/myscript.bash
```

### Variables

#### Environment Variables

Shell **environment variables** shape the working environment whenever you are logged in Common shell. Some of these variables are displayed via Linux commands in the diagram displayed below.

You can issue the pipeline command **set | more** to view all variables.

Placing a dollar sign "$" prior to the variable name will cause the variable to expand to the value contained in the variable.

```bash
echo $PWD
/home/murray.saul
```

```bash
echo $PATH
/urs/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/murray.saul/bin
```

```bash
echo $USER
murray.saul
```

```bash
set | head -5
ABRT_DEBUG_LOG=/dev/null
BASH=/bin/bash
BASHOPTS=checkwinsize:cmdhist:expand_aliases:extglob:extquote:
BASH_ALIASES=()
BASH_ARGC=()
```

```bash
echo $name

```

```bash
name="Murray Saul"
```

```bash
echo $name
Murray Saul
```

```bash
name=echo $name

```

```bash
read -p "Enter full name: " name
Enter full name: Murray Saul
```

```bash
echo $name
Murray Saul
```

Examples of using **Environment** and **User Defined** variables.

#### User Defined Variables

**User-defined** variables are variables that can be used in the shell script for **customized** purposes.

Data can be stored and removed within a variable using an **equal sign** (no spaces on either side of equal sign).

The **read** command can be used to prompt the user to enter data into a variable. The **readonly** command will prevent the current value of the variable for the remainder of the execution of a shell script.

### Positional Parameters

A **positional parameter** is a variable within a shell program; its value is set from arguments contained in a shell script or using the set command.

Positional parameters are numbered and their values are accessed by using a preceding "**\$**" (eg. **\$1**, **\$2**, **\$3**, etc.). The positional parameter **\$0** refers to either the **name of shell** where command was issued, or **filename of shell script** being executed. If using **positional parameters** greater than **9**, then you need to include number within braces.

Examples: **echo ${10}, ls ${23}**

The **shift** command can be used with positional parameters to shift positional parameters to the left by one or more positions.

There are a couple of ways to assign values as positional parameters:

  - Use the **set** command with the values as argument after the set command
  - Run a shell script containing arguments

There are a group of **special parameters** that can be used for shell scripting. A few of these special parameters and their purpose are displayed below: **\$\*** , **“\$\*”** , **"\$@"** , **\$\#** , **\$?**

```bash
set 10 9 8 7 6 5 4 3 2 1
```

```bash
echo $1
10
```

```bash
echo $2
9
```

```bash
echo $10
100
```

```bash
echo ${10}
1
```

```bash
echo $#
10
```

```bash
shift
```

```bash
echo $#
9
```

```bash
echo $*
9 8 7 6 5 4 3 2 1
```

```bash
shift 5
```

```bash
echo $#
4
```

```bash
echo $*
4 3 2 1
```

Examples of using **positional** and **special** parameters. ^

### Command Substitution

_**Command substitution** is a facility that allows a command to be run and its output to be pasted back on the command line as arguments to another command_. Reference: https://en.wikipedia.org/wiki/Command_substitution

_Usage:_

**command1 $(command2)**

or

**command1 `command2`**

_Examples:_

```bash
file $(ls)
```

```bash
mail -s "message" $(cat email-list.txt) < message.txt
```

```bash
echo "The current directory is $(pwd)"
```

```bash
echo "The current hostname is $(hostname)"
```

```bash
echo "The date is: $(date +'%A %B %d, %Y')"
```

Example of how a **for loop with command substitution** works:

```bash
ls
file1 file2 file3 for-command-substitution.bash
```

```bash
cat for-command-substitution.bash
#!/bin/bash
```

```bash
for var in $(ls)
do
  echo "Filename is: $var"
done
```

```bash
./for-command-substitution.bash
Filename is: file1
Filename is: file2
Filename is: file3
Filename is: for-command-substitution.bash
```

### Math Operations

In order to make math operations work, we need to convert numbers stored as **text** into **binary** numbers.

We can do this by using 2 pairs of round brackets **(( ))**.

_Examples:_

```bash
num1=5;num2=10
echo “$(($num1 + $num2))”
15
echo “$((num1-num2))”
-5
((product=num1*num2))
echo “$product”
50
```

| **Operator** | **Description** |
| :--- | :--- |
| + | Addition |
| - | Subtraction |
| \* | Multiplication |
| / | Division |
| % | Remainder |
| \*\* | Exponential |
| ++ | Increment (increase by 1) |
| -- | Decrement (decrease by 1) |

### Control Flow Statements

**Control Flow Statements** are used to make your shell scripts more **flexible** and can **adapt** to changing situations.

In order to use control flow statements, you need to test a condition to get **TRUE** (zero value) or **FALSE** (non zero value). This can be done two ways:
  - Run a command to get the exit status (**\$?**)
  - Use the **test** command

Refer to the shell script below to see how to use the test command.

```bash
num1=5
```

```bash
num2=10
```

```bash
test $num1 -eq $num2
```

```bash
echo $?
1

```

```bash
test $num1 -lt $num2
```

```bash
echo $?
0

```

```bash
test $num1 -ne $num2
```

```bash
echo $?
0

```

```bash
test $num1 -ge $num2
```

```bash
echo $?
1
```

Examples of simple comparisons using the test command. ^

```bash
mkdir mydir
```

```bash
test -d mydir
```

```bash
echo $?
0
```

```bash
touch myfile.txt
```

```bash
test -f myfile.txt
```

```bash
echo $?
0
```

```bash
test ! -f myfile.txt
```

```bash
echo $?
1
```

```bash
test -s myfile.txt
```

```bash
echo $?
1
```

```bash
test ! -s myfile.txt
```

```bash
echo $?
0
```

Examples of using additional comparisons using the test command. ^

You CANNOT use the < or > symbols when using the test command since these are redirection symbols. Instead, you need to use **options** when performing numerical comparisons. Refer to the diagrams to the right **test options** and their purposes.

**Logic Statements**

A **logic statement** is used to determine which Linux commands are executed basedon the result of a condition: **TRUE** (zero value) or **FALSE** (non-zero value).

There are several logic statements, but we will just concentrate on the if statement.

```bash
if test condition
  then
     command(s) 
fi
```

Refer to the shell script below for using the **if logic statement** with the **test** command.

```bash
cat if.bash
#!/bin/bash

read -p "Enter First Number: " num1

read -p "Enter Second Number: " num2

if test $num1 -lt $num2
then
  echo "Less Than"
fi
```

```bash
./if.bash
Enter First Number: 5
Enter Second Number: 10
Less Than
```

```bash
./if.bash
Enter First Number: 10
Enter Second Number: 5
```

Example of using the **if** logic control-flow statement.

**if-else statement:**

Unlike using an _if_ statement, an **if-else** statement take **two different sets of actions** based on the results of the test condition.

_Example:_

```bash
if test condition
  then
     command(s)
  else
     command(s) 
fi
```

Example of how an **if-else** control-flow statement:

```bash
cat if-else.bash
#!/bin/bash

read -p "Enter First Number: " num1

read -p "Enter Second Number: " num2

if [ $num1 -lt $num2 ]
then
  echo "Less Than"
else
  echo "Greater Than or Equal To"
fi
```

```bash
./if.bash
Enter First Number: 3
Enter Second Number: 5
Less Than
```

```bash
./if.bash
Enter First Number: 5
Enter Second Number: 3
Greater Than or Equal To
```

**Loop Statements**

_A **loop statement** is a series of steps or sequence of statements executed repeatedly zero or more times satisfying the given condition is satisfied._ Reference: https://www.chegg.com/homework-help/definitions/loop-statement-3

There are several loops, but we will look at the **for loop** using a **list**.

```bash
for item in list 
do
    command(s) 
done
```

Refer to the shell script below for an example using the for loop with a list.

```bash
cat for.bash
#!/bin/bash

for x in apples oranges bananas
do
  echo "The item is: $x"
done
```

```bash
./for.bash
The item is: apples
The item is: oranges
The item is: bananas
```

Example of using the **for** looping control-flow statement.

## Investigation 1: Creating A Shell Script

**ATTENTION: This online tutorial will be required to be completed by Friday in week 12 by midnight to obtain a grade of 2% towards this course**

In this investigation, you will learn how to create and run a **Bash Shell script**.

**Perform the Following Steps:**

  1. **Login** to your matrix account.
  2. Issue a command to **confirm** you are located in your **home** directory.

      - We want to create a Bash Shell script to welcome the user by their _username_.
      - Let's first look at selecting an appropriate filename for your shell script.

  3. Issue the following linux command to check if the filename called **hello** already exists as a command:

```bash
which hello
```

   - The output from this command should indicate that the shell did NOT find any directories that contained this filename that could represent a command; therefore, this shell script name CAN be used.

  4. Use a **text editor** like **vi** or **nano** to create the text file called **hello**
  5. Enter the following three lines in your shell script:

```bash
echo
```

```bash
echo "Hello $USER"
```

```bash
echo
```

![Hello 0](/img/Hello0.png)

   - **NOTE:** The variable called **USER** is an **environment variable** that contains the current user's login name. If you wanted to share your shell script with other users, when they run the shell script, they will greeted by their username. _Environment variables_ make your shell script adaptable by ALL users.

  6. **Save** your editing session and **exit** the text editor.

      - Instead of issuing the **bash** command followed by your shell script pathname as an _argument_, let's simply run it by its filename. This is the most common method of running shell scripts.

  7. Issue the following linux command to run your shell script in your current directory:

```bash
./hello
```

```bash
> ./hello
-bash: ./hello: Permission denied
> 
```

   - You should notice an **ERROR message** indicating you don't have permissions to run the file. To fix this, you need to **add execute permissions** prior to running the shell script.

```bash
> ./hello
Hello YourUserID
>
```

  8. Issue the following linux command to **add** execute permissions for your shell script:

```bash
chmod u+x hello
```

  9. Issue the following to run your shell script:

```bash
./hello
```

   - Did your shell script run?

  10. Issue the following Linux command to run a checking script:

```bash
~uli101/week11-check-1
```

  11. If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

      - In the next investigation, you will learn to create and run shell scripts that use **variables**, **positional** and **special parameters**. You will also learn how to add a **she-bang line** at the top of a shell script to force it to run in a specified shell.

Proceed to the next investigation.

## Investigation 2: She-Bang Line, Variables, and Parameters

In this investigation, you will add a **she-bang line** at the top of your shell script to force the shell script to run in a specified shell when executed. You will also learn how to use **variables**, **positional** and **special parameters** to make your shell scripts more adaptable.

**Perform the Following Steps:**

  1. Confirm that you are located in your **home** directory in your Matrix account.

      - Let's run shell scripts with and without a **she-bang** line at the top of your shell script to demonstrate why using a she-bang line should be included in a shell script to force the shell script to be run in a specific shell.

  2. Use a text editor to **edit** the **hello** shell script that you created in the previous investigation.
  3. Add the following line to the bottom of the file (**copy** and **paste** to prevent _errors_):

```bash
echo "The current shell you are using is: $(ps -o cmd= -p $$|cut -d' ' -f1)"
```

   - **FYI:** This command displays the **name** of the _shell_ that the shell script is running in. The command within **$( )** uses a technique known as **command substitution**.

  4. Issue the following Linux command to change to an older shell called the **Bourne Shell**:

```bash
sh
```

   - You should notice your **shell prompt changed** which indicates that you are in a different shell.

  5. Issue the following Linux command to run your shell script in the _Bourne Shell_:

```bash
./hello
```

   - You should see that you are currently running the shell script "**sh**" which represents the **Bourne shell**.

```bash
> sh
sh-4.2$ ./hello

Hello murray.saul

The current shell you are using is: sh
```

   - **NOTE:** Due to the fact that shells (and their features) have **evolved** over a period of time, an error may occur if you include a **NEWER shell feature** (e.g. _Bash Shell_) but run it in an **OLDER shell** (For example: the _Bourne Shell_).
   - You can add a **special comment** called a **she-bang line** at the BEGINNING of the FIRST line of your shell script to **force** it to run in the shell you want (for example: the Bash shell).

![Shebang 1](/img/She-bang-1.png)

  6. Edit your **hello** shell script using a text editor.
  7. **Insert** the following line at the **beginning** of the **first** line of your hello file:

```bash
#!/bin/bash
```

   - This is referred to as a **she-bang line**. It forces this script to be run in the **Bash Shell**.
   - When your Bash Shell script finishes execution, you are returned to your current shell that you are using (which in our case in Matrix, is still the Bash shell).

  8. **Save** your editing changes and **exit** your text editor.
  9. While in the Bourne shell, issue the following Linux command:

```bash
./hello
```

   - You should notice that the shell name is running in the **Bash shell** (i.e. _/bin/bash_).

```bash
> sh
sh-4.2$ ./hello

Hello murray.saul

The current shell you are using is: /bin/bash
```

   - It is a good idea to rename your shell script to include an **extension** to indicate that it is a **Bash Shell** script.

  10. Issue the following Linux command to rename your shell script file:

```bash
mv hello hello.bash
```

  11. Confirm that the renamed Bash shell script works by issuing:

```bash
./hello.bash
```

  12. Enter the following Linux command to **exit** the Bourne shell and return to your _Bash shell_:

```bash
exit
```

   - **Environment variables** are used to set the environment of the shell or shell scripts Let's include some **ENVIRONMENT variables** in our Bash Shell script.

  13. Use a text editor to edit the shell script called **hello.bash**
  14. Add the following lines to the bottom of the _hello.bash_ file:

```bash
echo
echo "The current directory location is: $PWD"
echo "The current user home directory is: $HOME"
echo
```

  15. Save your editing changes and exit your text editor.
  16. Run your modified Bash shell script by issuing:

```bash
./hello.bash
```

   - Take time to view the output and the values of the environment variables.

```bash
> ./hello.bash

Hello murray.saul

The current shell you are using is: /bin/bash

The current directory location is: /home/murray.saul
The current user home directory is: /home/murray.saul
```

   - You can modify the PATH variable to include the current directory (i.e. ".") so you can run the command by just script filename (eg. **hello.bash** as opposed to **./hello.bash**)

  17. Issue the following Linux command to add your current directory to the **PATH** environment variable:

```bash
PATH=$PATH:.
```

  18. Issue the following Linux command to confirm that the current directory "." has been **added** to the end of the **PATH** environment variable:

```bash
echo $PATH
```

  19. Issue the following to run your Bash shell script just by name:

```bash
hello.bash
```

   - Did your Bash shell script run?

```bash
> PATH=$PATH:.
> hello.bash

Hello murray.saul

The current shell you are using is: /bin/bash

The current directory location is: /home/murray.saul
The current user home directory is: /home/murray.saul
```

  20. Exit your Matrix session, and log back into your Matrix session.
  21. Re-run the **hello.bash** shell script by just using the name.

   - What did you notice?
   - The setting of the **PATH** environment variable only worked in the current session only.
   - If you exit the current Matrix session, then the recently changed settings for environment variables will be lost.
   - You will in a future tutorial how to set environment variables in **start-up** files.

  22. Issue the following Linux command to run a checking script:

```bash
~uli101/week11-check-2 | more
```

   - If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.
   - Unlike **Environment variables** that are used to set the environment of the shell or shell scripts, **User-created** variables are "customized" that the user can set or allow a user to set the variables' values. Let's create a Bash shell script that contain **user-created variables.**

  23. Use a text editor to create a Bash shell script called **user-variables.bash**
  24. Add the following lines to the beginning of the _user-variables.bash_ file:

```bash
#!/bin/bash
read -p "Enter your Full Name: " name
read -p "Enter your age (in years): " age
echo "Hello $name - You are $age years old"
```

  25. Save your editing changes and exit your text editor.
  26. Issue the **chmod** command to add **execute permissions** for the **user-variables.bash** file.
  27. Issue the following to run the user-variables.bash Bash shell script (enter **your Full name** and **your age** when prompted):

```bash
./user-variables.bash
```

   - What did you notice?

```bash
> ./user-variables.bash
Enter your Full Name: Murray Saul
Enter your age (in years): 57
Hello Murray Saul - You are 57 years old
```

  28. Use a text editor to **modify** your Bash shell script called **user-variables.bash**
  29. **Insert** the following lines immediately **below** the **she-bang** line:

```bash
age=25
readonly age
```

  30. Save your editing changes and exit your text editor.
  31. Issue the following to run the user-variables.bash Bash shell script:

```bash
./user-variables.bash
```

   - What do you notice when you try to change the age variable? Why?

```bash
> ./user-variables.bash
Enter your Full Name: Murray Saul
Enter your age (in years): 57
./user-variables.bash: line 5: age: readonly variable
Hello Murray Saul - You are 25 years old
```

   - A **positional parameter** is a special variable within a shell program; its value is set from **arguments** contained in a shell script or using the set command. Let's use **positional parameters** and **special parameters** in a Bash shell script.

  32. Use a text editor to create a file called **parameters.bash**
  33. Add the following lines to the beginning of this file:

```bash
#!/bin/bash
echo \$0: $0
echo \$2: $2
echo \$3: $3

echo \$#: $#
echo \$*: $*

shift 2
echo \$#: $#
echo \$*: $*
```

  34. Save your editing changes and exit your text editor.

      - Notice how the quoting character "\" is used to display positional parameters like "**$2**" as opposed to the value stored in the second positional parameter.

  35. Issue the **chmod** command to add **execute permissions** for the user for the **parameters.bash** file.
  36. Issue the following to run the **user-variables.bash** Bash shell script:

```bash
./parameters.bash
```

   - What happened?

```bash
> ./parameters.bash 1 2 3 4 5 6 7 8
$0: ./parameters.bash
$2: 2
$3: 3
$#: 8
$*: 1 2 3 4 5 6 7 8
$#: 6
$*: 3 4 5 6 7 8
```

   - The values for some of the _positional parameters_ and _special parameters_ may NOT be displayed properly since you did NOT provide any **arguments** when running your Bash shell script.

  37. Issue the following to run the user-variables.bash Bash shell script with arguments:

```bash
./parameters.bash 1 2 3 4 5 6 7 8
```

   - What do you notice?

   - Take some time to view the results and how the _parameters_ have changed when using the **shift** command.

In the next investigation, you will learn to use **command substitution** and **math operations** in your shell scripts.

## Investigation 3: Command Substitution and Math Operations

In this investigation, you will learn how to use **command substitution** and **math operations** in your shell scripts.

### Command Substitution

Command Substitution is a method of running a Linux command that provides **stdout** that is used as **argument(s)** for another Linux command.

_For example:_

```bash
echo "The current date and time is: $(date)"
```

Let's create a Bash shell script that uses command substitution that displays **text** and values of **environment variables** in a series of **echo** statements.

**Perform the Following Steps:**

  1. Confirm that you are located in your **home** directory in your Matrix account.
  2. Use a text editor to create a Bash shell script called **command-substitution.bash**
  3. Add the following lines to the beginning of this file:

```bash
#!/bin/bash
echo
echo "MY ACCOUNT INFORMATION:"
echo
echo "Username: $(whoami)"
echo
echo "Current Directory: $(pwd)"
echo
```

  4. Save your editing changes and exit your text editor.
  5. Issue the **chmod** command to add execute permissions for the **command-substitution.bash** file.
  6. Issue the following to run the user-variables.bash Bash shell script:

```bash
./command-substitution.bash
```

   - Confirm that your shell script displays the correct information for your Matrix account.

```bash
> ./command-substitution.bash

MY ACCOUNT INFORMATION:

Username: murray.saul

Current Directory: /home/murray.saul
```

### Math Operations

Since you do NOT have to declare the **data-type** of a variable (as opposed to compiled program such as the C-programming language), numbers would be stored as **text** in variables. Therefore, it is important to use the construct `(( ))` to convert numbers (stored as _text_) into **numbers**.

We will now learn how to use this construct in order to perform math operations for shell scripts.

**Perform the Following Steps:**

  1. Confirm that you are located in your **home** directory in your Matrix account.

      - Let's demonstrate that the Unix/Linux shell stores numbers as ascii text which can cause problems when performing math operations.

  2. Issue the following Linux command from the shell:

```bash
echo "1 + 2"
```

   - What did you notice?

  3. To demonstrate the need for the **(( ))** construct, issue the following Linux commands (using the _math_ construct):

```bash
echo "$((1 + 2))"
```

   - What did you notice?
   - The **(( ))** construct converted values **1** and **2** from _text_ to **binary numbers**.
   - The **$** in front of the construct **expands** the result of the calculation.

  4. Issue the following Linux commands demonstrating other types of math calculations:

```bash
echo "$((2 - 3))"
```

```bash
echo "$((2 * 3))"
```

```bash
echo "$((2 / 3))"
```

```bash
echo "$((2 ** 3))"
```

   - **NOTE:** You may notice that **dividing 2** by **3** shows a **zero** result. To perform decimal calculations would require the use the **awk** or **bc** Linux commands (we will **NOT** cover that method to work with _decimal numbers_ in this course).
   - You can use the _math construct_ with variables as well.

  5. Issue the following Linux commands demonstrating using the _math construct_ with **variables**:

```bash
num1=34
```

```bash
num2=12
```

```bash
echo "$((num1 * num2))"
```

   - What did you notice?
   - You can create variables and assign them values in the _math construct_ as well.

  6. Issue the following Linux commands demonstrating using the math construct with variables:

```bash
num1=5
```

```bash
num2=3
```

```bash
((result = num1 ** num2))
```

```bash
echo "The result is: $result"
```

  7. Use a text editor to create a Bash shell script called **dog-years.bash**
  8. Add the following lines to the beginning of this file:

```bash
#!/bin/bash
echo
dogFactor=7
read -p "Please enter your age (in years): " humanYears
((dogYears = humanYears * dogFactor))
echo "Your age in dog-years is: $dogYears"
echo
```

  9. Save your editing changes and exit your text editor.
  10. Issue the **chmod** command to add execute permissions for the user for the **dog-years.bash** file.
  11. Issue the following to run the **dog-years.bash** Bash shell script:

```bash
./dog-years.bash
```

   - Enter your age to see what happens.

```bash
> ./dog-years.bash

Please enter you age (in years): 57
Your age in dog-years is: 399
```

  12. Issue the following to run a checking script:

```bash
~uli101/week11-check-3 | more
```

   - If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

In the next investigation, you will use **control-flow statements** to allow your shell scripts to perform differently under different situations.

## Investigation 4: Control Flow Statements

In this investigation, you will learn how to use **control-flow statements** to make your shell script behave _differently_ under _different situations or conditions_.

**Perform the Following Steps:**

  1. Confirm that you are located in your **home** directory in your Matrix account.
  2. Issue the following Linux commands at the Bash shell prompt to assign values to several variables:

```bash
course="ULI101"
```

```bash
number1=5
```

```bash
number2=10
```

   - You can test conditions by issuing **Linux commands / pipeline commands** or by using the **test** command. We will demonstrate using the **test** command in this tutorial, and then we will demonstrate how to test by issuing a _Linux command / pipeline command_ in a later tutorial.

  3. Issue the following Linux command to test a condition:

```bash
test $course = "ULI101"
```

   - The **$?** variable is used to store an **exit status** of the previously-issued command (including the test command).
   - If the exit status is **zero**, then it indicates a _TRUE_ value and if the status is **non-zero**, then it indicates a _FALSE_ value.

  4. Issue the following Linux command to view the **exit status** of the previously-issued **test** command:

```bash
echo $?
```

   - Based on the _exit status_ value, is the result _TRUE_ or _FALSE_?

  5. Issue the following Linux command to test another condition:

```bash
test $course = "uli101"
```

  6. Issue the following Linux command to view the _exit status_ of the previously-issued **test** command:

```bash
echo $?
```

   - Based on the _exit status_ value, is the result TRUE or FALSE?
   - The value is non-zero (FALSE) since UPPERCASE characters are different than lowercase characters.

  7. Issue the following Linux command to test another condition:

```bash
test $course != "uli101"
```

  8. Issue a linux command to display the value of **$?**

      - What is the result? Why?

  9. Issue the following Linux command to test a condition involving earlier assigned variables:

```bash
test $number1 > $number2
```

  10. Issue a Linux command to display the value of **$?**

   - **NOTE:** You will notice that something is **wrong**.
   - The exit status **$?** shows a zero (TRUE) value, but the number 5 is definitely NOT greater than 10.
   - The problem is that the symbols **<** and **\>** are interpreted as REDIRECTION symbols!

  11. To prove this, issue the following Linux command :

```bash
ls -l 10
```

   - You should notice a file called "**10**". The incorrectly issued **test** command used **redirection** to create an **empty** file and assigning the exit status variable a _TRUE_ value!
   - To prevent problems when issuing the **test** command when comparing numbers, you can use the following **test options**: **-lt** (<), **-le** (<=), **-gt** (\>), **-ge** (\>=;), **-eq** (=), **-ne** (!=)

  12. Issue the correct Linux command to **properly** test both values:

```bash
test $number1 -gt $number2
```

  13. Issue a Linux command to display the value of **$?**.

      - You should notice that the exit status value is now _FALSE_ which is the correct result.

  14. The **test** command can be substituted by **square brackets \[ \]** which contains the **test** condition within the square brackets. You need to have spaces between the brackets and the test condition; otherwise, you will get a test error.
  15. To generate a **test error**, copy and paste the following **test** command:

```bash
[$number1 -gt $number2]
```

   - The reason for the error was that you need **spaces** between the **square brackets** and the **test condition**.

  16. Copy and paste the following (correct) **test** command:

```bash
[ $number1 -gt $number2 ]
```

  17. Issue a command to view the value of the **exit status** of the previously issued **test** command. You should notice that is works properly.

      - Now that we have learned how to test conditions, let's learn about **control-flow** statements.
      - **LOGIC STATEMENTS** are used to create **different paths** or directions that the shell script will take based on the result of the **test condition**. In this tutorial,we will only focus on the **if** and **if-else** logic statements.

  18. Use a text editor like vi or nano to create the text file called **if-1.bash**

(eg. `vi if-1.bash`)

  19. Enter the following lines in your shell script:

```bash
#!/bin/bash
num1=5
num2=10
if [ $num1 -lt $num2 ]
then
   echo "num1 is less than num2"
fi
```

  20. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
  21. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x if-1.bash
```

  22. Run your shell script by issuing:

```bash
./if-1.bash
```

   - Confirm that the output indicates a correct result.

```bash
> ./if-1.bash
num1 is less than num2
```

  23. Use a text editor like vi or nano to create the text file called **if-2.bash** (eg. `vi if-2.bash`)

  24. Enter the following lines in your shell script:

```bash
#!/bin/bash
read -p "Enter the first number: " num1
read -p "Enter the second number: " num2
if [ $num1 -gt $num2 ]
then
   echo "The first number is greater than the second number."
fi
```

  25. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
  26. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x if-2.bash
```

  27. Run your shell script by issuing:

```bash
./if-2.bash
```

   - When prompted, make certain that the **first number** is greater than the **second number**. What happens?

```bash
> ./if-2.bash
Enter the first number: 2
Enter the second number: 5
>
> ./if-2.bash
Enter the first number: 5
Enter the second number: 2
The first number is greater than the second number.
```

  28. Run the **./if-2.bash** Bash shell script again.

      - When prompted, make certain that the **first number** is less than or equal to the **second number**. What happens?
      - Let's use an **if-else** statement to provide an **alternative** if the first number is less than or equal to the second number.

```bash
> ./if-2.bash
Enter the first number: 2
Enter the second number: 5
>
> ./if-2.bash
Enter the first number: 5
Enter the second number: 2
The first number is greater than the second number.
```

  29. Use a text editor like vi or nano to create the text file called **if-3.bash** (eg. `vi if-3.bash`)
  30. Enter the following lines in your shell script:

```bash
#!/bin/bash
read -p "Enter the first number: " num1
read -p "Enter the second number: " num2
if [ $num1 -gt $num2 ]
then
   echo "The first number is greater than the second number."
else
   echo "The first number is less than or equal to the second number."
fi
```

  31. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
  32. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x if-3.bash
```

  33. Run your shell script by issuing:

```bash
./if-3.bash
```

   - Try running the script several times with numbers **different** and **equal** to each other to confirm that the shell script works correctly.

```bash
> ./if-3.bash
Enter the first number: 2
Enter the second number: 5
The first number is less than or equal to the second number.
>
> ./if-3.bash
Enter the first number: 5
Enter the second number: 2
The first number is greater than the second number.
>
> ./if-3.bash
Enter the first number: 2
Enter the second number: 2
The first number is less than or equal to the second number.
```

   - **LOOP STATEMENTS** are a series of steps or sequence of statements executed repeatedly zero or more times satisfying the given condition is satisfied. Reference: https://www.chegg.com/homework-help/definitions/loop-statement-3
   - _There are several loops, but we will look at a **for** loop using a **list**._

  34. Use a text editor like vi or nano to create the text file called **for-1.bash** (eg. `vi for-1.bash`)
  35. Enter the following lines in your shell script:

```bash
#!/bin/bash
echo
for x in 5 4 3 2 1
do
   echo $x
done
echo "blast-off!"
echo
```

  36. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
  37. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x for-1.bash
```

  38. Run your shell script by issuing:

```bash
./for-1.bash
```

```bash
> ./for-1.bash

5
4
3
2
1
blast-off!
```

  39. Use a text editor like vi or nano to create the text file called **for-2.bash** (eg. `vi for-2.bash`)
  40. Enter the following lines in your shell script:

```bash
#!/bin/bash
echo
for x
do
   echo $x
done
echo "blast-off!"
echo
```

  41. Save your editing session and exit the text editor (eg. with vi: press **ESC**, then type **:x** followed by **ENTER**).
  42. Issue the following Linux command to add execute permissions for your shell script:

```bash
chmod u+x for-2.bash
```

  43. Run your shell script by issuing:

```bash
./for-2.bash 10 9 8 7 6 5 4 3 2 1
```

```bash
./for-2.bash

blast-off!
```

```bash
./for-2.bash 5 4 3 2 1

5
4
3
2
1
blast-off!
```

   - How does this differ from the previous shell script?
   - You will learn in a couple of weeks more examples of using loop statements.
   - Let's run a **checking-script** to confirm that both your **for-1.bash** and **for-2.bash**

  44. Issue the following Linux command to run a checking script:

```bash
~uli101/week11-check-4 | more
```

   - If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Here is a link to the MS Word Document of ALL of the questions displayed below but with extra room to answer on the document to simulate a quiz: [Week 11 Practice](/files/uli101_week10_practice.docx)

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

**Part A: Write Bash Shell Script Code**

**Write the answer to each question below the question in the space provided.**

  1. Write a Bash shell script that clears the screen and displays the text Hello World on the screen.

      - What **permissions** are required to run this Bash shell script?
      - What are the different methods that you can run this Bash shell script from the command line?

  2. Write a Bash shell script that clears the screen, prompts the user for their **full name** and then prompts the user for their **age**, then clears the screen again and welcomes the user by their name and tells them their age.

      - What **comments** would you add to the above script’s contents to properly document this Bash shell script to be understood for those users that would read / edit this Bash shell script’s contents?

  3. Write a Bash shell script that will first set the value of a read-only variable called **dogFactor** to **7**. The script will then clear the screen and prompt the user to enter the age of a dog in human years (which will be stored into a variable called **humanYears**).

      - The script will store in a variable called **dogYears** the value of _humanYears x dogFactor_
      - The script will then clear the screen a second time and then display the age of the dog in “_dog years_”.

  4. Write a Bash shell script that will clear the screen and then display all **arguments** that were entered after your Bash shell script when it was run. Also have the Bash shell script display the **number of arguments** that were entered after your Bash shell script.

**Part B: Walk-Thrus**

**Write the expected output from running each of the following Bash shell scripts You can assume that these Bash shell script files have execute permissions. Show your work.**

**Walkthru #1:**

**cat walkthru1.bash**

```bash
#!/usr/bin/bash
word1=”counter”
word2=”clockwise”
echo “The combined word is: $word2$word1”
```

WRITE ROUGH WORK AND OUTPUT FROM ISSUING:

```bash
./walkthru1.bash
```

ROUGH WORK:

OUTPUT:

**Walkthru #2:**

**cat walkthru2.bash**

```bash
#!/usr/bin/bash
echo “result1: $1”
echo “result2: $2”
echo “result3: $3”
echo “result 4:”
echo “$*”
```

WRITE ROUGH WORK AND OUTPUT FROM ISSUING:

```bash
./walkthru2.bash apple orange banana
```

ROUGH WORK:

OUTPUT:

**Walkthru #3:**

**cat walkthru2.bash**

```bash
#!/usr/bin/bash

for x in 1 2 3 4 5
do

  if [ $((x % 2)) -eq 0 ]
  then
    echo "this"
  else
    echo "that"
  fi

done
```

WRITE ROUGH WORK AND OUTPUT FROM ISSUING:

```bash
./walkthru3.bash apple orange banana
```

ROUGH WORK:

OUTPUT:

---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
