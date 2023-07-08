---
id: tutorial6
title: Tutorial 6 - File Transfer and Sending Email Messages
sidebar_position: 6
description: Tutorial 6 for Students to Learn File Transfer and Sending Email Messages
---

# Tutorial 6: File Transfer and Sending Email Messages

## Main Objectives of this Practice Tutorial

  - List **common utilities** contained in the **ssh** application framework
  - Securely **copy** files between Unix/Linux servers using the **scp** command
  - Securely **transfer** copies of files between Unix/Linux servers using the **sftp** command
  - Use the **ssh** command to run and view commands on a **remote computer** from a **local computer**.
  - Use the **mail** command to send email with **file attachments** to your Seneca email account

## Tutorial Reference Material

**Course Slides:**

- Week 6 Lecture 1 Notes: [PDF](/slides/ULI101-6.1.pdf) \| [PPTX](/slides/ULI101-6.1.pptx)

**Definitions:**

- [Secure Copy](https://en.wikipedia.org/wiki/Secure_copy)
- [Secure File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol)
- [Email](https://en.wikipedia.org/wiki/Mail_(Unix))

**File Transfer Commands:**

- [scp](http://man7.org/linux/man-pages/man1/scp.1.html)
- [sftp](http://man7.org/linux/man-pages/man1/sftp.1.html)
- [mail](https://man.openbsd.org/mail)

**Instructional Videos:**

- [Using scp Command](https://www.youtube.com/watch?v=EBvxbuhDKBw)
- [Using sftp Command](https://www.youtube.com/watch?v=QcKYFEgfV-I)
- [Using the mail Command](https://www.youtube.com/watch?v=Iuf_mLrvh2o)

## Key Concepts

The ssh Linux command is a suite of tools to allow the user to issue Linux commands securely between Unix / Linux servers, as well as securely copy and transfer files among Unix/Linux servers.

In this tutorial, you will learn several different methods to securely transfer files from your Matrix Linux account to other computers using Linux commands including scp, sftp and mail.

### Issuing Commands on Remote Unix/Linux Servers

You can use the **ssh** command to issue Unix/Linux commands on a **remote** server from your local computer without logging into a remote server (such as Matrix).

![SSH Remote](/img/Ssh-remote.png)

The **ssh** command can be used to run and view commands on **remote computer** from a **local computer**.

_Command Usage:_

```bash
ssh username@matrix.senecacollege.ca 'ls -l'
```

You will be prompted for your Matrix account password, then the contents of your home directory in your remote Matrix account will be displayed on your local computer's terminal.

### Secure Copy (scp)

The **scp** command is used to securely copy files between your **local** computer and **remote** Unix/Linux server. The usage for the _scp_ command is similar to the **cp** command with the addition of **user name** and **host name**.

![SCP Diagram](/img/Scp-diagram.png)

The **scp** Unix/Linux command is used to securely copy files between Unix/Linux servers.

_Command Usage:_

```bash
scp local.file username@host:destination-pathname
```

```bash
scp local.file username@host:
```

```bash
scp user@host:file-pathname local-pathname
```

The most common **mistake** that students make is forgetting to add the **colon** character ":" after the remote hostname.

The user name in the command can be **omitted** if it's the same as on the local host. Multiple file and recursive directory copy (i.e. option **-r**) is supported.

### Secure File Transmission Control Protocol (sftp)

**FTP** stands for **File Transfer Protocol** which provides a set of **rules** on how to convert data that is transferred between computers (both identical and different operating systems). The **sftp** command performs file transfers securely using encryption.

![SFTP Diagram](/img/Sftp-diagram.png)

The sftp Unix/Linux command is used to securely transfer (copy) files between Unix/Linux servers.

_Command Usage:_

```bash
sftp username@hostname
```

When you login via the _sftp_ command, the **sftp prompt** appears. The sftp prompt is like a Bash shell prompt, but with a limited number of commands. When issuing sftp commands, the local server relates to the server where you first issued the sftp command. Refer to the diagram on the right for local and remote sftp commands.

**Graphical SFTP Applications**

Although it is important to know how to use the **sftp** command for _quizzes, midterm_ and _final exam_, there are **graphical sftp applications** that provide an alternative to issuing commands.

![Graphical SFTP App](/img/Graphical-sftp-application.png)

If you installed the graphical **Secure Shell Client** application in your Windows computer from performing [TUTORIAL 1 INVESTIGATION 1](./tutorial1.md#investigation-1-accessing-your-matrix-linux-account), you can use this application to transfer files between your computer and your Matrix account by graphically **navigating, selecting** and **dragging** files between computers.

### Sending Emails with File Attachment (mail)

You can use the **mail** command in Matrix to send email messages to other email accounts via the Internet.

**Sending a Simple Email Message:**

  1. Type: **mail username@hostname** and press **ENTER**
  2. Enter **subject line** and press **ENTER**
  3. Type the **body of the message** and then when finished, press **ctrl+d** to send message

**Sending an Email Message with a File Attachment:**

  1. Type: **mail username@hostname -a filepathname** and press **ENTER**
  2. Enter **subject line** and press **ENTER**
  3. Type the **body of the message** and then when finished, press **ctrl+d** to send message

**Alternative Method of Sending an Email Message with a File Attachment:**

  1. Type: **mail -s "subject line" username@hostname < filepathname**
  2. Press **ENTER** to send

![Mail Diagram](/img/Mail-diagram.png)

**NOTE:** You would have to use this method since you have used **stdin** redirection to attach the file’s so you can’t input the subject line from the terminal!

![Mail Diagram 2](/img/Mail-diagram-2.png)

Viewing email with file attachment in **Seneca email account**.

## Investigation 1: File Transfer (Secure Copy)

**ATTENTION: This online tutorial will be required to be completed by Friday in week 8 by midnight to obtain a grade of 2% towards this course**

The **SSH** package on your _home computer_ and on the _Matrix Linux server_ contain a **suite** (i.e. collection) of secure utilities including **ssh** and **scp**.

In this investigation, you will learn how to use the **scp** command to **securely copy files** between your computer and your Matrix Linux server. This methods is useful because it can be performed in the _MS-Windows, MacOSx_, and _Unix/Linux_ operating systems.

You will also learn how to issue the **ssh** command to run commands on your **remote** Matrix server while remaining on your **local** computer.

**Perform the Following Steps:**

  1. Determine which operating system that your computer is using.
  2. Connect to your Matrix account using the instructions in the table below based on your **current operating system**.

**Using Windows 10 (or above):**

  - From the start menu, type **cmd** and launch program
  - In the command terminal, enter the following command: 

```bash
ssh senecausername@matrix.senecacollege.ca
```

**Using macOS:**

  - Click _Launchpad_ icon, type **terminal** and press **ENTER**
  - In the terminal, enter the following command: 

```bash
ssh senecausername@matrix.senecacollege.ca
```

**Using Linux:**

  - From the menu, choose: **Applications > System Tools > Terminal**
  - In the terminal, enter the following command: 

```bash
ssh senecausername@matrix.senecacollege.ca
```

  3. **NOTE:** Make certain to open a **command-line terminal** and NOT a graphical SSH application for this tutorial.

![CMD](/img/Cmd.png)

  4. After logging into your Matrix account, issue to the **pwd** command to confirm you are in your home directory.
  5. Issue the following Linux command to create the following directory:

```bash
mkdir ~/remote
```

  6. Change to the **~/remote** directory and confirm that you have changed to that directory.
  7. Use a text editor to create a text file called **myfile.txt**
  8. Enter the following two lines displayed below in your editing session:

```text
This is my file
It is a small file
```

  9. **Save** editing changes to your _myfile.txt_ file and exit your text editor.
  10. Let's run a **shell script** to check that you created the **remote** directory and that you created the **myfile.txt** file (with correct file contents) in that directory.

      - Enter the following command: 

```bash
~uli101/week6-check-1
```

  11. If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message, and proceed to the next step.

      - **NOTE:** We will now learn to transfer files between your **local home computer** and your **remote Matrix Linux server**.

  12. **Exit your Matrix ssh session** but **remain** in the command terminal on your **local** computer..

      - **ATTENTION:** You are required to **remain** in your **local** computer's command terminal for the remainder of this INVESTIGATION and INVESTIGATION 2.

![CMD](/img/Cmd.png)

  13. The **mkdir** command works with _MS Windows/UNIX/Linux/MacOSx_ computers. Issue the following command on your local computer to create a directory called **local**: 

```bash
mkdir local
```

  14. The **cd** command works with _MS Windows/UNIX/Linux/MacOSx_ computers. Issue the following command on your local computer to change to the **local** directory: 

```bash
cd local
```

  15. If you are using MS Windows on your local computer, issue the `dir` command to confirm you are in the local directory; otherwise, use the `pwd` command.
  16. If you are in MS Windows, open the **GRAPHICAL** `NotePad` application to create a text file (Otherwise, use the **nano** or **vi** text editor).
  17. Enter a few lines of text, and if using **Notepad**, then click on the **File** menu and select **save as** (save as the filename `other.txt` in your `local` directory) and then **exit** the Notepad text editor.

      - **NOTE:** if using another text editor, save your editing session and exit the text editor.

  18. If your OS is MS Windows issue the `dir` Windows command to view the contents of your current directory (otherwise, issue the `ls` command for other operating systems).

      - We will use the **scp** command to copy the local file called **other.txt** to your home directory on your remote Matrix Linux server.

  19. Issue the following Linux command to copy the **other.txt** file from your local machine to your remote Matrix server (replace yoursenecaid is YOUR Seneca ID and **ADD A COLON : TO THE END OF THE COMMAND**): 

```bash
scp other.txt yoursenecaid@matrix.senecacollege.ca:
```

  20. When prompted, enter your **Matrix password.**

      - **TIP:** You can issue the ssh command, followed by a command that will be run on your remote computer, but display on your local computer **without** having to establish a continuous connection to your remote Matrix server.

  21. Issue the following command (using your matrix username):

```bash
ssh yoursenecaid@matrix.senecacollege.ca 'ls -l other.txt'
```

  22. When prompted, **enter your password** and press **ENTER**.

      - Do you see detailed information **other.txt** file? (look at bottom)
      - That command was run remotely on your Matrix server as confirmation that you securely copied that file to the home directory of the Matrix server.

![SCP Diagram 2](/img/Scp-diagram-2.png)

   - Let's copy the file called **myfile.txt** in the **~/remote** directory that you created earlier in your Matrix account to your **local** directory on your home computer.

  23. Issue the following Linux command (replace yoursenecaid is YOUR Seneca ID). The period "." as **second argument** represents your current directory on your local computer):

```bash
scp yoursenecaid@matrix.senecacollege.ca:remote/myfile.txt .
```

  24. Issue the `dir` or `ls` command (depending on the OS of your local computer) to confirmed your properly copied that file from Matrix.
  25. Use the **Notepad** application (or vi for other OS types) to create a text file called `mytextfile.txt`, type some text and then save in the `local` directory of your computer.
  26. Issue the **dir** or **ls** command (depending on your OS) to confirm that your newly-created file exists in your **local** directory.
  27. We are going to intentionally make a **mistake** with the **scp** command.

      - Issue the following Linux command to copy the **mytextfile.txt** file from your local machine to your remote Matrix server (replace yoursenecaid is YOUR Seneca ID and DO NOT INCLUDE THE : at the end of the command so see what happens):

```bash
scp mytextfile.txt yoursenecaid@matrix.senecacollege.ca
```

   - Did you notice anything different (i.e. no password)?

  28. Issue the following command (using your matrix username):

```bash
ssh yoursenecaid@matrix.senecacollege.ca 'ls -l mytextfile.txt'
```

  29. When prompted, enter your password and press ENTER.

      - **The file mytextfile.txt does NOT appear in your home directory on your Matrix server! Note that the COLON was NOT added to the end of the command! Therefore, you MUST remember to include the COLON : at the end of the hostname, or it will NOT remotely copy the file!**

  30. Issue the following command to properly copy that same file to your Matrix server:

```bash
scp mytextfile.txt yoursenecaid@matrix.senecacollege.ca:
```

  31. Issue the following command to confirm that it was remotely copied to your **home** directory in Matrix:

```bash
ssh yoursenecaid@matrix.senecacollege.ca 'ls -l /home/yoursenecaid/mytextfile.txt'
```

   - Do you see the output for the detailed file listing of **mytextfile.txt**?
   - What does this indicate?

  32. Issue the following command to copy the **other.txt** file on your local computer to the **~/remote** directory in Matrix renaming it as **different.txt**:

```bash
scp other.txt yoursenecaid@matrix.senecacollege.ca:remote/different.txt
```

  33. Issue the following command to confirm that the file was remotely copied to your **~/remote** directory in Matrix with a different filename:

```bash
ssh yoursenecaid@matrix.senecacollege.ca 'ls -l /home/yoursenecaid/remote/different.txt'
```

   - Were you able to properly copy this file?
   - Let's issue a checking script remotely to see that you properly copied that file from your local computer to your remote Linux server to both your **home** directory and **~/remote** directory.

  34. Issue the following:

```bash
ssh yoursenecaid@matrix.senecacollege.ca '~uli101/week6-check-2'
```

   - If you encounter errors, re-run the scp commands to correct and re-run the above command until you receive a congratulations message.

  35. Remain in the terminal on your local computer and proceed to INVESTIGATION 2.

In the next investigation, you will use the **sftp** Linux command to transfer (i.e. copy) files between your local computer and the Matrix server.

## Investigation 2: File Transfer (Secure FTP)

The **SSH** package on your _home computer_ and on the _Matrix Linux server_ contain a **suite** (i.e. collection)of secure utilities including **ssh** and **sftp**.

In this investigation, you will learn how to use the **sftp** command to **transfer** files between Unix/Linux servers. This methods is useful because it can be performed in the _MS-Windows, MacOSx,_ and _Unix/Linux_ operating systems.

You will also learn how to issue the **ssh** command to run commands on your **remote** Matrix server while remaining on your **local**computer.

### Command Line Terminal (CLI)

Let's look at using the **sftp** command on your **local** machine.

**Perform the Following Steps:**

  1. Make certain that you are in a command terminal on your local computer (i.e. do **NOT** log into your Matrix account).
  2. Issue a command (depending on your OS) to confirm that you are located in the **local** directory in your home computer.

![CMD](/img/Cmd.png)

  3. If you are in MS Windows, open the `NotePad` application to create a text file (otherwise: use another text editor like **vi** or **nano**)
  4. Enter a few lines of text, and then click on the **File** menu and select **save as** (save as the filename `thefile.txt` in your `local` directory) and then **exit** the Notepad text editor.

      - If you using another OS, then save-as using the same filename and directory location for the text editor you are using.

  5. If your OS is MS Windows issue the `dir` Windows command to view the contents of your current directory (otherwise, issue the **ls** command for other operating systems).

      - **Note:** the relative pathname symbols "." and ".." work for the _Windows/MacOSx/Unix/Linux_ operating systems.

  6. Issue the following command to move to the **parent** directory: 

```bash
cd ..
```

  7. If your OS is MS Windows issue the `dir` Windows command to view the contents of that parent directory that you changed to (otherwise, issue the **ls** command for other operating systems).
  8. Issue the following command to start an **sftp** session (note: yoursenecaid is YOUR Seneca ID):

```bash
sftp yoursenecaid@matrix.senecacollege.ca
```

   - **NOTE:** You may be required to enter **yes** to have the public key shared.

  9. You should be in the **sftp command prompt** where you are expected to issue **sftp commands**. Please take a moment to view common local and remote _sftp_ commands on the table below.

| **Operation** | **sftp Command** (Local Server) | **sftp Command** (Remote Server) |
| :--- | :---: | :---: |
| Display current working directory | **lpwd** | **pwd** |
| Display directory contents | **lls** | **ls** |
| Create directory | **lmkdir** | **mkdir** |
| Change directory location | **lcd** | **cd** |
| Upload file to remote server | **put** | |
| Download file to local server | **get** | |

  10. Issue the following sftp command: 

```bash
pwd
```

   - What is the pathname? Which server does this represent: local or remote?

  11. Issue the following sftp command: 

```bash
lpwd
```

   - What is the pathname? Which server does this represent: local or remote?

  12. Issue the following sftp command to create a directory on your remote server: 

```bash
mkdir remote2
```

  13. Issue the following sftp command to confirm that the **remote2** directory has been created in your _remote_ server's home directory: 

```bash
ls
```

  14. Issue the following sftp command to change to the **remote2** directory on your remote server:

```bash
cd remote2
```

  15. Issue the **pwd** _sftp command_ to confirm that you have changed to the _remote2_ directory on your remote server.
  16. Issue the following sftp command to change to the **local** directory on your local computer:

```bash
lcd local
```

  17. Issue the **lpwd** _sftp command_ to confirm that you have changed to the _local_ directory on your local computer.
  18. Issue the following _sftp command_ to transfer the file called **thefile.txt** to the **~/remote2** directory on your remote server:

```bash
put thefile.txt
```

  19. Issue the **ls** sftp command to confirmed that you transferred the file called: **thefile.txt**

      - Let's create another directory on your local computer called **local2** so we can learn to download a file from your remote directory.

  20. Issue the following sftp command to change to the **parent** directory on your local computer:

```bash
lcd ..
```

  21. Issue the **lpwd** _sftp command_ to confirm that your current working directory on your local computer is your home directory.

  22. Issue the following _sftp command_ to create the following directory on your local computer:

```bash
lmkdir local2
```

  23. Issue the following _sftp command_ to change to the **local2** directory on your local computer:

```bash
lcd local2
```

  24. Issue the **lpwd** _sftp command_ to confirm you have changed to the **local2** directory on your local computer.

      - Let's learn to download a file from your remote server to your local computer.

  25. Issue the following **sftp command** to transfer your **thefile.txt** file from the **remote2** directory on your remote server to your local computer:

```bash
get thefile.txt
```

  26. Issue the **lls** _sftp command_ to confirm that you transferred the file **thefile.txt** to your local computer.
  27. Issue the following _sftp command_ to exit the sftp utlilty: `exit`
  28. Issue the following Linux command to remotely run a checking script to ensure you created the correct directories and properly transferred those created files:

```bash
ssh yoursenecaid@matrix.senecacollege.ca '~uli101/week6-check-3'
```

  29. If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message.

      - **FYI:** To run a checking program to check if you created the **local** and **local2** directories in MS Windows would require running a local-based script (like **PowerShell**). Since this is a Unix/Linux based course, we don't have a PowerShell script, so we will ignore checking for files transferred to your local computer.
      - In the next investigation, you will learn an alternative way to transfer a file to another computer server by sending an **e-mail message with an attached file**.

## Investigation 3: File Transfer (Email)

The **Matrix** server is also an **email server** that can allow you to **send** emails messages to other email accounts.

In this investigation, you will learn how to **transfer** a file from your Matrix server to another computer by sending an **email message** with a **file attachment**.

**Perform the Following Steps:**

  1. Make certain that you connect and login to your **Matrix** server and confirm that you are located in your **home** directory.
  2. Issue the following Linux command (using your Seneca-ID):

```bash
mail yoursenecaid@myseneca.ca
```

  3. When prompted, enter the **subject line**: `Test Message` and press `ENTER`
  4. In the email message **BODY** section, type the following text displayed below (and press **ENTER**):

```text
This is a test email message
```

  5. Press `ctrl-d` to send your email message.

      - Did any output display? What you do think **EOT** stands for?

  6. Launch a **web-browser**, login into your **Seneca email** account and check for new email messages. Did you receive the email message that you sent from your Matrix server?

      - If you did NOT receive an e-mail message, check the **JUNK** or **CLUTTER** folders.
      - If you still did not receive an email message, return to your terminal and re-issue the **mail** command making certain that you pressed `ctrl-d` instead of pressing **ctrl-c**

  7. Return to your terminal (i.e. Linux Bash shell) and issue the following Linux command:

```bash
mail -a ~/remote/myfile.txt yoursenecaid@myseneca.ca
```

  8. When prompted, enter the subject line: `Test Message with Attachment` and press `ENTER`
  9. In the email message **BODY** section, type the following text displayed below (and press **ENTER**):

```text
This is a test email message with a file attachment
```

  10. Press `ctrl-d` to send your message.
  11. Switch to your Seneca email and check for new email messages.

      - Did you receive that email message? Does the email contain a file attachment?

  12. Return to your Linux Bash shell and issue the following Linux command:

```bash
mail yoursenecaid@myseneca.ca < ~/remote/myfile.txt
```

   - What happened? Were you prompted for subject and could you enter text in email body?
   - Did you see a file attachment as a separate file, or just text?

  13. Check your email to see if you received your email message. If you did, what do you notice regarding the subject line?

      - You should have noticed that there was **NO** customized **subject line**, since you redirected **standard input** (_stdin_) from the file, so there was no way for the user to send a subject line.
      - You can use the **-s** option, followed by text (in quotes) to specify a **subject line**.

  14. Return to your Linux Bash shell and issue the following Linux command:

```bash
mail -s "email with attachment" yoursenecaid@myseneca.ca < ~/remote/myfile.txt
```

  15. Check your email to see if you received your email message. If you did, what do you notice this time?
  16. After completing this INVESTIGATION, perform the _Linux Practice Questions_ section below.

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Here is a link to the MS Word Document of ALL of the questions displayed below but with extra room to answer on the document to simulate a quiz: [Week 6 Practice](/files/uli101_week6_practice.docx)

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

  1. Write a Linux command to copy a file in the current directory called **mytext.txt** from your Matrix account to your account called **user1** on the Linux server domain name called **tech.myserver.com** to that user’s home directory.
  2. Write a Linux command similar to the previous question, but rename the file on the remote Linux server to **yourtext.txt**
  3. Write a Linux command to copy a file called **~/project/linux.txt** to the remote server called **linux.techie.org** (your username for this remote server is the same username for your local server).
  4. Write a Linux command to connect to the username **saulm** for the server domain name **tux.senecac.on.ca** to transfer files between Linux servers.
  5. Assuming that you are connected to that server in _question #4_. What is the sftp command to display your current working directory on your local server?
  6. Assuming that you are connected to that server in _question #4_. What is the sftp command to view files in your local server? What is the sftp command to view files in your remote server?
  7. Assuming that you are connected to that server in _question #4_. What is the sftp command to download the file answers.txt from the current directory of your remote server?
  8. Assuming that you are connected to that server in _question #4_. What is the sftp command to upload the file questions.txt from your local server to the **~/documents/tests** directory on your remote server?
  9. Assuming that you are connected to that server in _question #4_. What is the sftp command to quit your current session?
  10. Write a Linux command to send the attached file **message.txt** to the email address **murray.saul@senecacollege.ca** with the subject line: **Important Message**
  11. Create a **table** listing each Linux command, useful options and command purpose for the following Linux commands: **scp , sftp , mail**.
  12. Create a **table** listing each **sftp command** and it's purpose.

---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
