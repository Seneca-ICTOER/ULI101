---
id: tutorial8
title: Tutorial 8 - Links and Process Management
sidebar_position: 7
description: Tutorial 8 for Students to Learn Links and Process Management
---

# Tutorial 8: Links and Process Management

## Main Objectives of this Practice Tutorial

  - Define the term **i-node** as it relates to the Unix/Linux File System
  - Issue the **ls -i** command to view **i-node** (index) numbers associated with Unix/Linux files
  - Define the terms **Hard** and **Symbolic** Links
  - Issue the ln command to create hard and symbolic links
  - Define term **process** as it relates to the Unix/ Linux operating system
  - **Run** and **terminate** processes in the foreground and background
  - **Display** and **manipulate** background and foreground processes
  - Use **alias** and **history** commands in Unix/Linux

## Tutorial Reference Material

**Course Slides:**

- Week 8 Lecture 1 Notes: [PDF](/slides/ULI101-8.1.pdf) \| [PPTX](/slides/ULI101-8.1.pptx)
- Week 8 Lecture 2 Notes: [PDF](/slides/ULI101-8.2.pdf) \| [PPTX](/slides/ULI101-8.2.pptx)

**Links:**

- [Hard Links](http://www.linfo.org/hard_link.html#:~:text=A%20hard%20link%20is%20merely,created%20to%20other%20hard%20links.)
- [Symbolic Links](https://www.computerhope.com/jargon/s/symblink.htm#:~:text=Alternatively%20referred%20to%20as%20a,or%20directory%20using%20its%20path.&text=In%20Linux%20and%20Unix%20symbolic,created%20using%20the%20mklink%20command.)

**Managing Processes:**

- [inode](https://en.wikipedia.org/wiki/Inode)
- [Manipulating Processes](https://opensource.com/article/18/9/linux-commands-process-management)

**Linux Commands:**

| [ln](http://man7.org/linux/man-pages/man1/ln.1.html) | [ps](http://man7.org/linux/man-pages/man1/ps.1.html) | [top](http://man7.org/linux/man-pages/man1/top.1.html) | [fg](http://man7.org/linux/man-pages/man1/fg.1p.html) | [bg](http://man7.org/linux/man-pages/man1/bg.1p.html) | [jobs](http://man7.org/linux/man-pages/man1/jobs.1p.html) | [kill](http://man7.org/linux/man-pages/man1/kill.1.html) | [sleep](https://man7.org/linux/man-pages/man1/sleep.1.html) | [alias](http://linuxcommand.org/lc3_man_pages/aliash.html) , [unalias](https://man.linuxreviews.org/man1p/unalias.1p.html) | [history](https://mediatemple.net/community/products/dv/204404624/using-the-history-command) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |

**Instructional Videos:**

- [Inodes and Links](https://www.youtube.com/watch?v=tZ94-qH9unM&list=PLU1b1f-2Oe90TuYfifnWulINjMv_Wr16N&index=9)
- [Processes and Jobs](https://www.youtube.com/watch?v=q93POTgH-aQ&list=PLU1b1f-2Oe90TuYfifnWulINjMv_Wr16N&index=7)

## Key Concepts

### i-node (index) ID Number of a File

An **i-node** is a **database** containing information (e.g. _file type, owner, permissions,_ etc.) for all files that are created on the Unix/Linux filesystem.

The _i-node number_ is like a **finger-print**, and is considered to be **unique** for each file on the Unix / Linux file system.

Referring to the diagram below, issuing the **ls** command with the **-i** option displays the i-node number for each file. You can see that each file (whether it is a directory or regular file) has its own unique
i-node number.

![Inode number 3](/img/Inode-number-3.png)

The **i-node number** is like a **finger-print**, and is considered to be **unique** for each file on the Unix / Linux file system.

### Hard Links

A **Hard link** is a **reference** to the physical data on a file system. It does this by creating a file that shares the **same i-node number** with the original file.

![Hard link 1](/img/Hard-link-1.png)

(Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/)) Image manipulated by author

**Advantages:** If only one hard link remains (even if original file has been removed), the **data in that hard linked file is NOT lost**. The data in hard linked files are **automatically updated** when original file are updated.

**Disadvantages:** Hard links **take-up extra space**, you **cannot hard link directories**, and you **cannot hard link files from other Unix/Linux servers** (since the inode number may already be used by the other Unix/Linux server).

_Examples:_

```bash
ln myfile.txt myfile1.hard.lnk
```

```bash
ln myfile.txt ~/backups/myfile.hard.lnk
```

### Symbolic Links

A **Symbolic Link** is an indirect **pointer** to a file and are also known as **soft** link or **symlink**. The symbolic link file contains the **pathname** to the original file.

![Symbolic link 1](/img/Symbolic-link-1.png)

(Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

**Advantages:** symbolic links are **shortcuts** to other files, where the symbolic link only contains the pathname to the original file, you **can create symbolic links on different Unix/Linux servers**, and that you can **create symbolic links for directories**.

**Disadvantages:** Symbolic links are NOT good for backup purposes since a symbolic link can point to a nonexistent file (referred to as a "broken link").

_Examples:_

```bash
ln -s otherfile.txt otherfile1.sym.lnk
```

```bash
ln -s otherfile.txt ~/backups/otherfile.sym.lnk
```

### Managing Processes

All **commands/programs (tasks)** that are **running** on a Unix/Linux computer system are referred to as **processes**.

**Characteristics of Processes:**

  - Each process has an **owner**
  - Each process has a unique ID (**PID**)
  - Processes keep their _PID_ for their **entire life**.
  - Usually a parent sleeps (_suspends_) when a child is running (the exception is when the child process is running in the background)
  - UNIX / Linux processes are **hierarchical**. The process structure can have **child processes, great grandchild processes**, etc.

Users can **manage processes** to become more **productive** while working in the Unix / Linux Command-line environment. Processes that run in the terminal are known as **foreground** processes. You can run or send processes currently running in the _foreground_ to the **background** to free-up your terminal (e.g. issue other Linux commands).

Below are a listing of common **Linux commands** and **keyboard shortcuts** to manage foreground and background processes:

| **Linux Command / Key Combination** |	**Purpose** |
| :--- | :--- |
| **ps** |	Displays snapshot information about processes. _Examples:_ **ps** , **ps -l** , **ps -ef** , **ps -u** , **ps aux** |
| **top** |	The **top** command provides a realtime status of running processes. **NOTE:** You can press **ctrl-c** to exit |
| **ctrl-c** |	**Terminates** a process running in the foreground |
| **ctrl-z** |	Sends a process running in the foreground into the **background**. |
| **fg** |	Moves a background job from the current environment into the foreground. _Example:_ **fg %job-number** |
| **bg** |	Runs (starts) the most recent process that was placed into the background. _Example:_ **bg %job-number** |
| **jobs** |	The **jobs** utility displays the **status** of jobs that were started in the current shell environment. _Example:_ jobs   \[1\]+ Stopped vim a   <-- Job \#1 (+ most recent process / background)    \[2\]  Running sleep 200 &  <-- Job \#2    \[3\]  Running sleep 300 &  <-- Job \#3    \[4\]- Running sleep 400 &  <-- Job \#4 (- second recent process / background) |
| **kill** |	The kill command sends the specified signal to the specified processes or process groups. If no signal is specified, the **TERM** signal is sent. The default action for this signal is to terminate the process. _Examples:_ **kill PID** , **kill -9 PID** , **kill %job-number** , **kill -9 %job-number** |

### Aliases

An **alias** is a **nickname** to an existing command or group of commands.

An alias existing in **system memory** and will be **lost** when your current Linux session ends, unless the alias is set in a **start-up file** (e.g. **~/.bashrc**. You will learn about using start-up files later in this course.

_Examples:_

```bash
alias
``` 

(Alias command without an argument will display all the aliases currently set)

```bash
alias dir=ls
```

```bash
alias ls='ls -al'
```

```bash
alias clearfile='cat /dev/null >'
```

```bash
unalias alias-name
``` 

(removes alias from memory)

### Command History

The filename **~/.bash_history** stores recently executed command lines

_Examples of commands that use command history:_

| **up arrow** or **down arrow** |	move to **previous** command or **next** command within Bash shell prompt |
| :--- | :--- |
| **fc -l** |	display last **16** commands |
| **history \| more** |	display all stored commands |
| **!num** |	**re-execute** an issued command number by command number (determined from history command) |
| **!xxx** |	**re-run** a most recent previously-issued command beginning with string "xxx" |

## Investigation 1: Linking Files

**ATTENTION: This online tutorial will be required to be completed by Friday in week 9 by midnight to obtain a grade of 2% towards this course**

In this investigation, you will learn how to create **hard links** and **symbolic links** on your Matrix account, and observe the advantages and limitations of using both types of links.

**Perform the Following Steps:**

  1. **Login** to your matrix account.
  2. Issue a Linux command to **confirm** you are located in your **home** directory.

      - **NOTE:** You will remain in your **home** directory to get practice using pathnames.

  3. Issue the following Linux command to create a directory called **~/links**:

```bash
mkdir ~/links
```

  4. Issue the **ls -ld** command to confirm that the directory **~/links** exists.
  5. Use a text editor to create a file called **~/links/data-file.txt** (i.e. without changing to the links directory).
  6. Enter the following text displayed below:

```text
This is line 1
This is line 2
This is line 3
```

  7. Save your editing session and exit your text editor.
  8. Issue the following Linux command:

```bash
ls -li ~/links/data-file.txt
```

   - View the **i-node** number for this file. What does this i-node number represent?
   - We will now create a **hard link** file to demonstrate how creating hard links are useful for **back-ups**.

![Hard link inode 1](/img/Hard-link-inode1.png)

**Hard links** share the same **i-node** with regular files on a Unix / Linux filesystem.

  8. Issue the following Linux command:

```bash
ls -li ~/links/data-file.txt
```

   - View the **i-node** number for this file. What does this _i-node_ number represent?
   - We will now create a **hard link** file to demonstrate how creating hard links are useful for **back-ups**.

  9. Issue the following Linux command to create the following **hard link** in the same directory:

```bash
ln ~/links/data-file.txt ~/links/data-file.hard.lnk
```

  10. Issue the following Linux command to display _i-node_ ID numbers for both files:

```bash
ls -li ~/links/data-file.txt ~/links/data-file.hard.lnk
```

   - What do you notice about both of those file's _i-node_ numbers?

  11. Use a text editor to edit **~/links/data-file.txt** and **add some lines of text** to the bottom of that file.
  12. Save your editing session and exit your text editor.
  13. Issue the following Linux command:

```bash
cat ~/links/data-file.hard.lnk
```

   - You should notice that the hard linked file also contains the additional line(s) that you added to the original file.
   - This is very useful for backing up your files without using the **cp** command!

  14. Use a text editor to edit the hard-linked file **~/links/data-file.hard.lnk** and add some lines to the bottom of this file.
  15. Save your editing session and exit your text editor.
  16. Issue the following Linux command:

```bash
cat ~/links/data-file.txt
```

   - What happened to this **original** file?
   - What does this mean in terms of creating hard-linked files for back-ups?

  17. Issue the following Linux command to create a hard-linked file in your **home** directory:

```bash
ln ~/links/data-file.txt ~/data-file.hard.lnk
```

  18. Issue the following Linux command to compare all file's _i-node_ numbers:

```bash
ls -li ~/links/data-file.txt ~/links/data-file.hard.lnk ~/data-file.hard.lnk
```

   - What do you notice about all of those file's _i-node_ numbers?

  19. Issue the following Linux command to check that you created those hard links:

```bash
~uli101/week8-check-1
```

   - If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
   - If you receive a congratulation message that there are no errors, then proceed with this tutorial.

  20. Issue the following Linux command to remove the **~/links** directory and its contents:

```bash
rm -rf ~/links
```

  21. Issue a Linux command to confirm that the **~/links** directory has been removed.
  22. Issue the following Linux command to view the contents of your linked file in your **home** directory:

```bash
cat ~/data-file.hard.lnk
```

   - What do you notice? What does this tell you about hard links?
   - We will now learn how to create **symbolic links**.

  23. Issue the following Linux command to create a directory called **~/links2**:

```bash
mkdir ~/links2
```

   - **NOTE:** You will remain in your **home** directory to get practice using pathnames.

  24. Issue the **ls -ld** command to confirm that the directory called **~/links2** exists.
  25. Use a text editor to create a file called **~/links2/text-file.txt** (i.e. without changing to the links2 directory).
  26. Enter the following text displayed below:

```text
This is line one
This is line two
This is line three
```

  27. Save your editing session and exit your text editor.
  28. Issue the following Linux command to create the following **symbolic** link in the same directory:

```bash
ln -s ~/links2/text-file.txt ~/links2/text-file.sym.lnk
```

  29. Issue the following Linux command to display i-node numbers for both files:

```bash
ls -li ~/links2/text-file.txt ~/links2/text-file.sym.lnk
```

   - What do you notice about both of these file's _i-node_ numbers?
   - What do you notice about the size of the file **~/links2/text-file.sym.lnk**?
   - What ***pathname*** _do you think this symbolic-linked file represents_?

![Symbolic link inode 1](/img/Symbolic-link-inode1.png)

**Symbolic links** are **pointers** (i.e. pathnames) to **regular files** and **directories**. They do **NOT** share the same **i-node**.

  30. Issue the following Linux command to create the following **symbolic link** in your **home** directory:

```bash
ln -s ~/links2/text-file.txt ~/text-file.sym.lnk
```

  31. Issue the following Linux command to display i-node numbers for all of those files:

```bash
ls -li ~/links2/text-file.txt ~/links2/text-file.sym.lnk ~/text-file.sym.lnk
```

   - What do you notice about all of those file's i-node numbers?
   - What is the file size of **~/text-file.sym.lnk**?
   - What **pathname** do you think this _symbolic-linked_ file contains?

  32. Use a text editor to edit the **symbolic link** file called **~/links2/text-file.sym.lnk** and add some lines to the bottom of that file.
  33. Save your editing session and exit your text editor.
  34. Issue the following Linux command to view the contents of the **original** file:

```bash
cat ~/links2/text-file.txt
```

   - What did you notice? This happened because when you edited the symbolic-linked file, you were redirected (via _pathname_) to the original file.

  35. Use a text editor to edit the **original** file called **~/links2/text-file.txt** and add some lines to the bottom of that file.
  36. Save your editing session and exit your text editor.
  37. Issue the following Linux command to view the contents of the **symbolic** linked file:

```bash
cat ~/links2/text-file.sym.lnk
```

   - What did you notice? Again, when you view the contents of the symbolic-linked file, you are redirected (via _pathname_) to the original file.

  38. Issue the following Linux command to check that you created those symbolic links:

```bash
~uli101/week8-check-2
```

   - If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
   - If you receive a congratulation message that there are no errors, then proceed with this tutorial.

  39. Issue the following Linux command to remove the **~/links2** directory:

```bash
rm -rf ~/links2
```

  40. Issue a Linux command to confirm that the **~/links2** directory has been removed.
  41. Issue the following Linux command to view the contents of the **original** file called **~/links2/text-file.txt**:

```bash
cat ~/text-file.sym.lnk
```

   - What happened? Why did does this happen?

  42. Issue the following Linux command:

```bash
ls -l ~/text-file.sym.lnk
```

   - This output indicates a "**broken link**" and indicates this is not an effective method of backing up files.

![Symbolic link inode 3](/img/Symbolic-link-inode3.png)

Example of a **broken link** when a symbolic link points to a **non-existent file**.

  43. Issue a command to delete the **~/text-file.sym.lnk** file which is a _broken link_.
  44. Issue the following Linux command:

```bash
ln -s ~jason.carman/example t8example
```

  45. Issue the following Linux command:

```bash
ls -ld t8example
```

   - What do you notice? Symbolic links are good for creating "short-cuts" to both **regular files** and **directories**.

![Symbolic link inode 2](/img/Symbolic-link-inode2.png)

**Symbolic links** can be used to point to **directories** as well as regular files. Symbolic links can also point to files on **other** Unix/Linux filesystems.

In the next investigation, you will learn how to **manage processes** on your Matrix server.

## Investigation 2: Managing Processes

In this investigation, you will learn how to **manage processes** on a Unix / Linux server.

**Perform the Following Steps:**

  1. Make certain that you are logged into your Matrix account.
  2. Issue a Linux command to confirm that you are located in your **home** directory.

      - The **sleep** command **pauses for a specified number of seconds** before returning to the shell prompt.
      - In this tutorial, we will be using this command to **simulate** the management of "long-running" processes.

  3. Issue the following Linux command: 

```bash
sleep 700
```

   - Notice that this process will run for **700 seconds**, and is forcing the user to **wait** until this process finishes.
   - A process that is **running in the terminal** is referred to as a **foreground processes**.
   - The Unix/Linux system is designed to allow users to send **preemptive signals** to manage those processes.

  4. Press the following **key combination** to **terminate** the command running on the terminal: `ctrl-c`

   - You should notice that the process that was running in the foreground has been **interrupted** (i.e. terminated).
   - **NOTE:** The **ctrl-c** key combination sends **SIGINT** (**Signal Interrupt** - which is signal **\#2**) to _terminate_ a process that is running on the terminal (i.e. a **foreground** process).

  5. Reissue the Linux command: 

```bash
sleep 700
```

  6. Press the **key combination**: `ctrl-z`
  7. You should now see output similar to what is displayed below:

```text
[1]+ Stopped sleep 700
```

   - **NOTE:** This indicates that this process has been placed into the **background**.
   - This is useful in order to "**free-up**" the terminal to run other Linux commands.

  8. Issue the following Linux command: 

```bash
jobs
```

   - You should see the following output similar that was displayed above:

```text
[1]+ Stopped sleep 700
```

   - This display indicates that this process (that is now in the background) has **stopped**.
   - In other words, the _sleep_ command is NOT counting-down to zero to terminate.

![Process jobs 1](/img/Process-jobs1.png)

   - **NOTE:** You need to use the **bg** command to **run** that process that was sent into the **background**.

  9. Issue the following Linux command: 

```bash
bg
```

   - **NOTE:** You can use the bg command WITHOUT arguments to run recent in the background. From the **jobs** command, the process that has a plus sign "+" indicates the most recent process placed into the background.

  10. Issue the following Linux command: 

```bash
jobs
```

   - You should see the following output similar that was displayed above:

```text
[1]+ sleep 700 &
```

   - This display indicates that this process in the background is **running in the background** (indicated by the ampersand character "**&**"). Now this command has resume pausing until **700 seconds**.

![Process jobs 2](/img/Process-jobs2.png)

   - Using the **bg** command to **run recent process** that was placed into background from using **ctrl-z** keys.

  11. Issue the following Linux command: 

```bash
fg
```

   - You should notice that the sleep command is now running in the **foreground**.

  12. Press the **key combination** to **terminate** the process running in the **foreground**: `ctrl-c`

      - You can issue Linux commands with ampersand "**&**" in your terminal to **run** processes automatically in the **background** without having to issue _ctrl-z_ and _bg_ short-cut keys.

  13. Issue the following Linux commands:

```bash
sleep 500 & sleep 600 & sleep 700 &
```

  14. Issue the **jobs** command. What do you notice?

      - In the jobs command output, jobs that display a plus sign (**+**) indicates the **most recent** process placed in to the background, and a minus sign (-) indicates the **second most recent** process placed into the background.
      - The **kill** command issued to terminate processes that are running in the **foreground** or **background**.
      - Issuing the kill command without options would send the **SIGTERM** signal (eg. _signal terminate_ - which is signal **\#15**).

![Process jobs 3](/img/Process-jobs3.png)

Using the **ampersand** character **&** to run a **series of processes** in the background.

  15. Issue the following Linux command to **terminate** the **first** job running in the background:

```bash
kill %1
```

   - **NOTE**: You can specify job number preceded by percent % with the **kill**, **bg**, and **fg** commands to specify the processes' job number.

  16. Issue the **jobs** command. What do you notice?

![Process jobs 4](/img/Process-jobs4.png)

   - Using the kill %1 command to terminate job \#1.

  17. Issue the following Linux commands:

```bash
kill %2
```

```bash
kill %3
```

  18. Issue the **jobs** command (you may have to issue the _jobs_ command several times to get final result).

         - What do you notice?

  19. Let's use **grouping** to run several commands in sequence within a single process.
  20. Issue the following Linux command:

```bash
(sleep 400; sleep 500; sleep 600) &
```

  21. Issue the **jobs** command. What do you notice? You should notice all commands are run in a group as just one process.

![Process jobs 5](/img/Process-jobs5.png)

   - Using round brackets to **group** a series of commands to be run as **one process**.

  22. Issue the following Linux command to terminate the first job running in the **background**:

```bash
kill %1
```

   - NOTE: If issuing the kill command does not work, then you would need to send a STRONGER signal to "**kill**" (not "_SIGTERM_ - which is signal \#15") the process. The **SIGKILL** signal (signal **\#9**) would be required to do this by issuing the **kill** command with the option: **-9**.

  23. Issue the **jobs** command and make certain there are no processes that are running in the **background**.

      - You can also manipulate processes by their **PID** (**process ID**). Let's terminate our Matrix Bash shell process by using the **kill** command using that processes' **PID**.

  24. Issue the following Linux command: 

```bash
ps
```

  25. Note in the **ps** command output the PID of the process called **bash**.

   - You will be using that PID when issuing the next Linux command.

  26. Issue the following Linux command (using the bash processes' PID number instead of "PID"):

```bash
kill PID
```

   - What did you notice?
   - **FYI**: If the command did NOT work, issue the following Linux command (using the bash processes' PID number instead of "PID"):

```bash
kill -9 PID
```

In the next investigation, you will learn how to **create aliases** and **view command history** on your Matrix server.

## Investigation 3: Aliases / Command History

In this investigation, you will learn how to **manage aliases** and **Linux command history** on your Matrix account.

**Perform the Following Steps:**

  1. Make certain that you are logged into your Matrix account.
  2. Issue a Linux command to confirm that you are located in your **home** directory.

![Alias 1](/img/Alias-1.png)

   - Issuing the **alias** command (without arguments) will display a list of existing aliases on your Unix / Linux system.

  3. Issue the following Linux command: 

```bash
alias | more
```

   - Observe those existing aliases that have previously been declared. Take a few moments to run those aliases to see what happens.

  4. Issue the following to create an alias: 

```bash
alias lal='ls -al'
```

  5. Issue the following alias: 

```bash
lal
```

   - What do you notice?

  6. Issue the following to create another alias (lowercase l and h):

```bash
alias lh='ls --human-readable --size -1 -S --classify'
```

  7. Issue the following command to confirm that this newly-created alias is stored in memory:

```bash
alias | grep "lh"
```

  8. Issue the following alias: 

```bash
lh
```

   - What do you think this command does?

  9. **Logout** of your Matrix account and then **login** to your Matrix account.
  10. Reissue the **lal** alias. What happened?
  11. Reissue the **lh** alias. What happened?
  12. Issue the **alias | grep lh** command without any arguments to see if it is stored in memory.
  13. Reissue the command to create the **lh** alias in **step \#6**.
  14. Run the **lh** alias to confirm that it is properly set in memory.
  15. Issue the following Linux command to edit your ~/.bashrc startup file:

```bash
nano ~/.bashrc
```

  16. Add the following line at the **bottom** of this file:

```bash
alias lh='ls --human-readable --size -1 -S --classify'
```

  17. Save your editing changes and exit your text editor.
  18. **Logout** of your Matrix account, then **login** to your Matrix account.
  19. Reissue the **lh** alias. What happened?
  20. Issue the following Linux command: **unalias lh**
  21. Run the **lh** alias to see what happens.

      - What happenned?

  22. **Logout** of your Matrix account, then **login** to your Matrix account.
  23. Reissue the **lh** alias. What happened? Why?
  24. Reissue the **lal** alias. Why **didn't** this alias work?

      - The checking script below is designed to act as a **filter** with a **pipeline command**.
      - This will allow to check if your **lh** alias exists when it is checked in this program.

  25. Issue the following Linux pipeline command:

```bash
alias | ~uli101/week8-check-3
```

   - If you encounter errors, then view the feedback to make corrections, and then re-run the checking script.
   - If you receive a congratulation message that there are no errors, then proceed with this tutorial.
   - We will complete this investigation by learning to execute **previously issued commands** by using **command history**.

  26. Issue the following Linux command: 

```bash
history | grep "lh"
```

   - What do you notice?

  27. Type an exclamation mark ! followed by the number by one of those commands listed in the **history list** and press `ENTER`

      - What happened?

  28. Type the following: `!unalias` and press `ENTER`

      - What happened?

  29. Issue the following Linux command: 

```bash
history | grep "lh"
```

   - What happened?

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Here is a link to the MS Word Document of ALL of the questions displayed below but with extra room to answer on the document to simulate a quiz: [Week 8 Practice](/files/uli101_week8_practice.docx)

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

  1. Hard Links:
      1. What is the purpose of creating a hard-link?
      2. What is a limitation of a hard link?
      3. Write a single Linux command to create a hard link called **~/backup/myfile.txt.lnk** for the existing file called **~/myfile.txt**
      4. Write a single Linux command to display the **i-node** number for both files. Are the **i-node** numbers identical?

  2. Symbolic (Soft) Links:
      1. What is the purpose of creating a symbolic (soft) link?
      2. What is a limitation of a symbolic (soft) link?
      3. Write a single Linux command to create a symbolic link called **~/shortcuts/murray.saul.lnk** to the existing directory called **~murray.saul**
      4. Are the i-node numbers identical for both of those files?
      5. What data is contained in the file called **~/shortcuts/murray.saul.lnk**?

  3. Background / Foreground Processes:
      1. Write a single Linux command to run the program called **~/clean.sh** in the **background**.
      2. Write a single Linux command to place the previously issued program in the **foreground**.
      3. Write a single Linux command to **confirm** that this program is running in the background.
      4. What **key-combination** would you issue to send that program again into the **background**?
      5. Write a single Linux command to have that process sent into the background to **continue running**?

  4. Managing Background processes:

Use the following diagram to answer the accompanying questions. Each of the following questions will use the diagram below and are treated as independent situations.

```text
[1]  Stopped vim a
[2]- Stopped vim b
[3]+ Stopped vim c
```

Write a single Linux command to bring the second-recently process placed in the background into the **foreground**.

Write a single Linux command to **terminate job \#3**.

  5. Write a single Linux command to display running processes in “real-time”.
  6. Write a single Linux command to terminate a process that has the following PID: **22384**
  7. Aliases / History:
      1. Write a linux command to create an **alias** called **ld** that issues the command: **ls -ld**
      2. Write a linux command to unset the **alias** created in the previous question.
      3. Issue a Linux command to list **history** of commands that match the pattern called **touch**.

  8. Create a **table** listing each Linux command, useful options and command purpose for the following Linux commands: **ln , ps , top , fg , bg , jobs , kill , alias , unalias , history**

---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
