---
id: tutorial10
title: Tutorial 10 - Sed and Awk Utilities
sidebar_position: 9
description: Tutorial 10 for Students to Learn the Sed and Awk Commands
---

# Tutorial 10: Sed and Awk Utilities

## Main Objectives of this Practice Tutorial

  - Use the **sed** command to **manipulate text** contained in a file.
  - List and explain several **addresses** and **instructions** associated with the **sed** command.
  - Use the **sed** command as a **filter** with Linux pipeline commands.
  - Use the **awk** command to **manipulate text** contained in a file.
  - List and explain **comparison operators**, **variables** and **actions** associated with the **awk** command.
  - Use the **awk** command as a **filter** with Linux pipeline commands.

## Tutorial Reference Material

**Course Slides:**

- Week 10 Lecture 1 Notes: [PDF](/slides/ULI101-10.1.pdf) \| [PPTX](/slides/ULI101-10.1.pptx)
- Week 10 Lecture 2 Notes: [PDF](/slides/ULI101-10.2.pdf) \| [PPTX](/slides/ULI101-10.2.pptx)

**Text Manipulation:**

- [Purpose of using the sed utility](https://www.digitalocean.com/community/tutorials/the-basics-of-using-the-sed-stream-editor-to-manipulate-text-in-linux)
- [Purpose of using the awk utility](https://www.digitalocean.com/community/tutorials/how-to-use-the-awk-language-to-manipulate-text-in-linux)

**Commands:**

- [sed](https://man7.org/linux/man-pages/man1/sed.1p.html)
- [awk](https://man7.org/linux/man-pages/man1/awk.1p.html)

**Instructional Videos:**

- [Using the sed Utility](https://www.youtube.com/watch?v=npU6S61AIko&list=PLU1b1f-2Oe90TuYfifnWulINjMv_Wr16N&index=14)
- [Using the awk Utility](https://www.youtube.com/watch?v=OV3XzjDYgJo&list=PLU1b1f-2Oe90TuYfifnWulINjMv_Wr16N&index=13)

## Key Concepts

### Using the sed Utility

#### Usage (Syntax)

```bash
sed [-n] 'address instruction' filename
```

#### How It Works

  - The sed command reads all lines in the input file and will be exposed to the expression (i.e. area contained within quotes) one line at a time.
  - The expression can be within single quotes or double quotes.
  - The expression contains an address (match condition) and an instruction (operation).
  - If the line matches the address, then it will perform the instruction.
  - Lines will display be default unless the **–n** option is used to suppress default display

#### Address

  - Can use a line number, to select a specific line (for example: **5**)
  - Can specify a range of line numbers (for example: **5,7**)
  - Regular expressions are contained within forward slashes (e.g. /regular-expression/)
  - Can specify a regular expression to select all lines that match a pattern (e.g **/^\[0-9\].\*\[0-9\]\$/**)
  - If NO address is present, the instruction will apply to ALL lines

#### Instruction

  - **Action** to take for matched line(s)
  - Refer to table below for list of some **common instructions** and their purpose

| **Instruction** | **Purpose** |
| :---: | :--- |
| **p** | print line(s) that match the address (usually used with **-n** option) |
| **d** | delete line(s) that match the address |
| **q** | quit processing at the first line that matches the address |
| **s** | substitute text to replace a matched regular expression, similar to vi substitution |

### Using the awk Utility

#### Usage (Syntax)

```bash
awk [-F] 'selection-criteria {action}’ file-name
```

#### How It Works

  - The **awk** command reads all lines in the input file and will be exposed to the expression (contained within quotes) for processing.
  - The **expression** (contained in quotes) represents **selection criteria**, and **action** to execute contained within braces **{}**
  - if selection criteria is matched, then action (between braces) is executed.
  - The **–F** option can be used to specify the default **field delimiter** (separator) character eg. **awk –F”;”** (would indicate a semi-colon delimited input file).

#### Selection Criteria

  - You can use a regular expression, enclosed within slashes, as a pattern. For example: **/pattern/**
  - The **~** operator tests whether a field or variable matches a regular expression. For example: **$1 ~ /^\[0-9\]/**
  - The **!~** operator tests for no match. For example: **$2 !~ /line/**
  - You can perform both numeric and string comparisons using relational operators ( **>** , **>=** , **<** , **<=** , **==** , **!=** ).
  - You can combine any of the patterns using the Boolean operators **\|\|** (OR) and **&&** (AND).
  - You can use built-in variables (like NR or "record number" representing line number) with comparison operators. For example: **NR >=1 && NR <= 5**

#### Action (execution)

  - Action to be executed is contained within braces **{}**
  - The **print** command can be used to display text (fields).
  - You can use parameters which represent fields within records (lines) within the expression of the awk utility.
  - The parameter **$0** represents all of the fields contained in the record (line).
  - The parameters **$1**, **$2**, **$3** … **$9** represent the first, second and third to the 9th fields contained within the record.
  - Parameters greater than nine requires the value of the parameter to be placed within braces (for example: **${10}**,**${11}**,**${12}**, etc.)
  - You can use built-in **variables** (such as **NR** or "record number" representing line number) eg. **{print NR,$0}** (will print record number, then entire record).

## Investigation 1: Using the sed Utility

**ATTENTION: This online tutorial will be required to be completed by Friday in week 11 by midnight to obtain a grade of 2% towards this course**

In this investigation, you will learn how to manipulate text using the **sed** utility.

**Perform the Following Steps:**

  1. **Login** to your matrix account and confirm you are located in your **home** directory.
  2. Issue a Linux command to create a directory called **sed**
  3. Issue a Linux command to change to the **sed** directory and confirm that you are located in the **sed** directory.
  4. Issue the following Linux command to copy the data.txt file (**copy and paste** to save time):

```bash
cp ~uli101/tutorialfiles/data.txt ~/sed
```

  5. Issue the **more** command to quickly view the contents of the **data.txt** file. When finished, exit the more command by pressing the letter `q`

   - The **p** instruction with the **sed** command is used to **print** (i.e. _display_) the contents of a text file.

  6. Issue the following Linux command:

```bash
sed 'p' data.txt
```

   - **NOTE: You should notice that each line appears twice.**

![Sed 1](/img/Sed-1.png)

   - The reason why standard output appears twice is that the sed command (without the **-n** option) displays all lines regardless of an address used.
   - We will use **pipeline commands** to both display stdout to the screen and save to files for confirmation of running these pipeline commands when run a **checking-script** later in this investigation.

  7. Issue the following Linux pipeline command:

```bash
sed -n 'p' data.txt | tee sed-1.txt
```

   - What do you notice? You should see only one line.
   - You can specify an **address** to display lines using the sed utility (eg. _line \#_, **line \#s** or range of **line \#s**).

  8. Issue the following Linux pipeline command:

```bash
sed -n '1 p' data.txt | tee sed-2.txt
```

   - You should see the first line of the text file displayed.
   - What other command is used to only display the first line in a file?

  9. Issue the following Linux pipeline command:

```bash
sed -n '2,5 p' data.txt | tee sed-3.txt
```

   - What is displayed? How would you modify the sed command to display the line range 10 to 50?

![Sed 2](/img/Sed-2.png)

   - Using the sed command to display a range of lines. ^
   - The **s** instruction is used to **substitute** text (a similar to method was demonstrated in the vi editor in tutorial 9).

  10. Issue the following Linux pipeline command:

```bash
sed '2,5 s/TUTORIAL/LESSON/g' data.txt | tee sed-4.txt | more
```

   - What do you notice? View the original contents of lines 2 to 5 in the **data.txt** file in another shell to confirm that the substitution occurred.
   - The **q** instruction terminates or **quits** the execution of the sed utility as soon as it is read in a particular line or matching pattern.

  11. Issue the following Linux pipeline command:

```bash
sed '11 q' data.txt | tee sed-5.txt
```

   - What did you notice? How many lines were displayed before the sed command exited?

![Sed 3](/img/Sed-3.png)

   - You can use **regular expressions** to select lines that match a pattern. In fact, the sed command was one of the first Linux commands that used regular expression.
   - The rules remain the same for using regular expressions as demonstrated in **tutorial 9** except the regular expression must be contained within **forward slashes** (eg. **/regexp/** ).

  12. Issue the following Linux pipeline command:

```bash
sed -n '/^The/ p' data.txt | tee sed-6.txt
```

   - What do you notice?

![Sed 4](/img/Sed-4.png)

   - Using the sed command using regular expressions with **anchors**.

  13. Issue the following Linux pipeline command:

```bash
sed -n '/d$/ p' data.txt | tee sed-7.txt
```

   - What do you notice?

![Sed 4](/img/Sed-4.png)

   - Using the sed command using regular expressions with **anchors**.
   - The **sed** utility can also be used as a **filter** to manipulate text that was generated from Linux commands.

  14. Issue the following Linux pipeline command:

```bash
who | sed -n '/^[a-m]/ p' | tee sed-8.txt | more
```

   - What did you notice?

  15. Issue the following Linux pipeline command:

```bash
ls | sed -n '/txt$/ p' | tee sed-9.txt
```

   - What did you notice?

![Sed 5](/img/Sed-5.png)

  16. Issue the following to run a checking script:

```bash
~uli101/week10-check-1
```

   - If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

In the next investigation, you will learn how to manipulate text using the **awk** utility.

## Investigation 2: Using the awk Utility

In this investigation, you will learn how to use the awk utility to manipulate text and generate reports.

**Perform the Following Steps:**

  1. Change to your **home** directory and issue a command to **confirm** you are located in your _home_ directory.
  2. Issue a Linux command to create a directory called **awk**
  3. Issue a Linux command to change to the **awk** directory and confirm you are located in the **awk** directory.

      - Let's download a database file that contains information regarding classic cars.

  4. Issue the following linux command:

```bash
cp ~uli101/tutorialfiles/cars.txt ~/awk
```

  5. Issue the **cat** command to quickly view the contents of the **cars.txt** file.

      - The "**print**" action (command) is the default action of awk to print all selected lines that match a **pattern**.
      - This **action** (contained in braces) can provide more options such as printing **specific fields** of selected lines (or records) from a database.

  6. Issue the following linux command all to display all lines (i.e. records) in the **cars.txt** database that matches the pattern (or "make") called **ford**:

```bash
awk '/ford/ {print}' cars.txt
```

![Awk 1](/img/Awk-1.png)

   - We will use **pipeline commands** to both display stdout to the screen and save to files for confirmation of running these pipeline commands when run a **checking-script** later in this investigation.

  7. Issue the following linux pipeline command all to display records in the **cars.txt** database that contain the pattern (i.e. make) **ford**:

```bash
awk '/ford/' cars.txt | tee awk-1.txt
```

   - What do you notice? You should notice ALL lines displayed without using **search criteria**.
   - You can use _builtin_ **variables** with the **print** command for further processing.
   - We will discuss the following variables in this tutorial:
        - **$0** - Current record (entire line)
        - **$1** - First field in record
        - **$n** - nth field in record
        - **NR** - Record Number (order in database)
        - **NF** - Number of fields in current record
   - For a listing of more variables, please consult your course notes.

  8. Issue the following linux pipeline command to display the **model, year, quantity** and price in the **cars.txt** database for makes of **chevy**:

```bash
awk '/chevy/ {print $2,$3,$4,$5}' cars.txt | tee awk-2.txt
```

   - Notice that a **space** is the delimiter for the fields that appear as standard output.
   - The **tilde character ~** is used to search for a pattern or display standard output for a particular field.

![Awk 2](/img/Awk-2.png)

  9. Issue the following linux pipeline command to display all **plymouths** (**plym**) by **model name, price** and **quantity**:

```bash
awk '$1 ~ /plym/ {print $2,$3,$4,$5}' cars.txt | tee awk-3.txt
```

   - You can also use **comparison operators** to specify conditions for processing with matched patterns when using the awk command. Since they are used WITHIN the awk expression, they are not confused with redirection symbols
     - **<**     Less than
     - **<=**   Less than or equal
     - **\>**     Greater than
     - **\>=**   Greater than or equal
     - **==**   Equal
     - **!=**   Not equal

  10. Issue the following linux pipeline command to display display the **car make, model, quantity** and **price** of all vehicles whose **prices are less than \$5,000**:

```bash
awk '$5 < 5000 {print $1,$2,$4,$5}' cars.txt | tee awk-4.txt
```

   - What do you notice?

![Awk 3](/img/Awk-3.png)

  11. Issue the following linux pipeline command to display display **price, quantity, model** and **car make** of vehicles whose **prices are less than $5,000**:

```bash
awk '$5 < 5000 {print $5,$4,$2,$1}' cars.txt | tee awk-5.txt
```

  12. Issue the following linux pipeline command to display the **car make, year** and **quantity** of cars that **begin** with the **letter 'f'**:

```bash
awk '$1 ~ /^f/ {print $1,$2,$4}' cars.txt | tee awk-6.txt
```

   - Combined pattern searches can be made by using **compound operator** symbols:
     - **&&**     (and)
     - **\|\|**        (or)

  13. Issue the following linux pipeline command to list all **fords** whose **price is greater than $10,000**:

```bash
awk '$1 ~ /ford/ && $5 > 10000 {print $0}' cars.txt | tee awk-7.txt
```

![Awk 4](/img/Awk-4.png)

  14. Issue the following linux command:

```bash
cp ~uli101/tutorialfiles/cars2.txt ~/awk
```

  15. Issue the **cat** command to quickly view the contents of the **cars2.txt** file.

  16. Issue the following linux pipeline command to display the **year** and **quantity** of cars that **begin** with the **letter 'f'** for the **cars2.txt** database:

```bash
awk '$1 ~ /^f/ {print $2,$4}' cars2.txt | tee awk-8.txt
```

   - What did you notice?
   - The problem is that the **cars2.txt** database separates each field by a semi-colon (**;**) instead of **TAB**.
   - Therefore, it does not recognize the second and fourth fields.
   - You need to issue awk with the -F option to indicate that this file's fields are separated (delimited) by a semi-colorn.

  17. Issue the following linux pipeline command to display the **year** and **quantity** of cars that **begin** with the **letter 'f'** for the **cars2.txt** database:

```bash
awk -F";" '$1 ~ /^f/ {print $2,$4}' cars2.txt | tee awk-9.txt
```

   - What did you notice this time?

  18. Issue the following to run a checking script:

```bash
~uli101/week10-check-2
```

   - If you encounter errors, make corrections and **re-run** the checking script until you receive a congratulations message, then you can proceed.

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Here is a link to the MS Word Document of ALL of the questions displayed below but with extra room to answer on the document to simulate a quiz: [Week 10 Practice](/files/uli101_week11_practice.docx)

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

**Part A: Display Results from Using the sed Utility**

Note the contents from the following tab-delimited file called **~murray\.saul/uli101/stuff.txt**: (this file pathname exists for checking your work)

```text
Line one.
This is the second line.
This is the third.
This is line four.
Five.
Line six follows
Followed by 7
Now line 8
and line nine
Finally, line 10
```

Write the results of each of the following Linux commands for the above-mentioned file:

  1. `sed -n '3,6 p' ~murray.saul/uli101/stuff.txt`
  2. `sed '4 q' ~murray.saul/uli101/stuff.txt`
  3. `sed '/the/ d' ~murray.saul/uli101/stuff.txt`
  4. `sed 's/line/NUMBER/g' ~murray.saul/uli101/stuff.txt`

**Part B: Writing Linux Commands Using the sed Utility**

Write a single Linux command to perform the specified tasks for each of the following questions.

  1. Write a Linux sed command to display only lines 5 to 9 for the file: **~murray.saul/uli101/stuff.txt**
  2. Write a Linux sed command to display only lines the begin the pattern “and” for the file: **~murray.saul/uli101/stuff.txt**
  3. Write a Linux sed command to display only lines that end with a digit for the file: **~murray.saul/uli101/stuff.txt**
  4. Write a Linux sed command to save lines that match the pattern “line” (upper or lowercase) for the file: **~murray.saul/uli101/stuff.txt** and save results (overwriting previous contents) to: **~/results.txt**

**Part C: Writing Linux Commands Using the awk Utility**

Note the contents from the following tab-delimited file called **~murray.saul/uli101/stuff.txt**: (this file pathname exists for checking your work)

```text
Line one.
This is the second line.
This is the third.
This is line four.
Five.
Line six follows
Followed by 7
Now line 8
and line nine
Finally, line 10
```

**Write the results of each of the following Linux commands for the above-mentioned file:**

  1. `awk ‘NR == 3 {print}’ ~murray.saul/uli101/stuff.txt`
  2. `awk ‘NR >= 2 && NR <= 5 {print}’ ~murray.saul/uli101/stuff.txt`
  3. `awk ‘$1 ~ /This/ {print $2}’ ~murray.saul/uli101/stuff.txt`
  4. `awk ‘$1 ~ /This/ {print $3,$2}’ ~murray.saul/uli101/stuff.txt`


**Part D: Writing Linux Commands Using the awk Utility**

Write a single Linux command to perform the specified tasks for each of the following questions.

  1. Write a Linux awk command to display all records for the file: **~/cars** whose fifth field is greater than 10000.
  2. Write a Linux awk command to display the first and fourth fields for the file: **~/cars** whose fifth field begins with a number.
  3. Write a Linux awk command to display the second and third fields for the file: **~/cars** for records that match the pattern “chevy”.
  4. Write a Linux awk command to display the first and second fields for all the records contained in the file: **~/cars**

---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
