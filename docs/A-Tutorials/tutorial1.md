---
id: tutorial1
title: Tutorial 1 - Using Your Matrix Server Account
sidebar_position: 2
description: TBD
---

# USING YOUR MATRIX SERVER ACCOUNT

  
===Main Objectives of this Practice Tutorial===

:\* Learn how to access your **Matrix** server account (from home and/or
from Seneca computer lab).

:\* Learn several ways to **exit** your Matrix Linux Account session.

:\* Understand the **Linux command structure** and how to get **help**
with Linux command usage.

:\* Become efficient with **Linux command line editing** by using
**short-cut keys**.

:\* Issue a **checking program** (i.e. *Shell Script*) to **confirm**
that you accessed your Matrix account.

:\* Perform **LINUX PRACTICE QUESTIONS** for additional practice  
  

### Tutorial Reference Material

<table>
<tbody>
<tr class="odd">
<td><p>Course Notes / Software<br />
</p></td>
<td><p>Linux Command/Shortcut Reference<br />
</p></td>
<td><p>YouTube Videos<br />
</p></td>
</tr>
<tr class="even">
<td><p><strong>Slides:</strong></p>
<ul>
<li>Week 1 Lecture 1 Notes:<br />
<a
href="https://github.com/ULI101/slides/raw/main/ULI101-1.1.pdf">PDF</a>
| <a
href="https://github.com/ULI101/slides/raw/main/ULI101-1.1.pptx">PPTX</a></li>
<li>Week 1 Lecture 2 Notes:<br />
<a
href="https://github.com/ULI101/slides/raw/main/ULI101-1.2.pdf">PDF</a>
| <a
href="https://github.com/ULI101/slides/raw/main/ULI101-1.2.pptx">PPTX</a><br />
</li>
</ul>
<p><strong>Tutorials:</strong></p>
<ul>
<li><a
href="https://wiki.cdot.senecacollege.ca/wiki/Tutorial_1:_Using_Your_Matrix_Server_Account#INVESTIGATION_1:_ACCESSING_YOUR_MATRIX_LINUX_ACCOUNT">HOWTO:
Access Your Matrix Account</a></li>
</ul>
<p><strong>Windows SSH client Software:</strong></p>
<ul>
<li><a
href="http://www.sfsu.edu/ftp/win/ssh/SSHSecureShellClient-3.2.9.exe">SSH/SFTP</a></li>
<li><a
href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">Putty</a></li>
<li><a href="https://www.bitvise.com/ssh-client-download">Bitvise SSH
Client</a></li>
<li><a
href="https://mobaxterm.mobatek.net/download-home-edition.html">MovaXterm</a></li>
</ul></td>
<td><p><strong>Matrix Account Access:</strong></p>
<ul>
<li><a href="https://ss64.com/bash/logout.html">logout , exit</a><br />
</li>
<li><a
href="https://www.quora.com/What-is-the-difference-between-typing-Ctrl+C-and-Ctrl+D-in-the-Linux-terminal">&lt;ctrl&gt;&lt;d&gt;</a></li>
<li><a
href="http://man7.org/linux/man-pages/man1/passwd.1.html">passwd</a><br />
</li>
</ul>
<p><strong>Command Line Editing:</strong></p>
<ul>
<li><a
href="https://www.ostechnix.com/list-useful-bash-keyboard-shortcuts/">Bash
Shell Shortcut Keys</a><br />
</li>
</ul></td>
<td><p><strong>General Linux Commands:</strong></p>
<ul>
<li><a
href="http://man7.org/linux/man-pages/man1/pwd.1.html">pwd</a><br />
</li>
<li><a
href="http://man7.org/linux/man-pages/man1/cd.1p.html">cd</a><br />
</li>
<li><a
href="http://man7.org/linux/man-pages/man1/ls.1p.html">ls</a><br />
</li>
<li><a
href="http://man7.org/linux/man-pages/man1/cal.1.html">cal</a><br />
</li>
<li><a
href="http://man7.org/linux/man-pages/man1/date.1.html">date</a><br />
</li>
<li><a href="http://man7.org/linux/man-pages/man1/who.1.html">who</a> ,
<a href="http://man7.org/linux/man-pages/man1/w.1.html">w</a><br />
</li>
<li><a href="http://man7.org/linux/man-pages/man1/whoami.1.html">whoami
,who am i</a><br />
</li>
<li><a href="http://man7.org/linux/man-pages/man1/clear.1.html">clear ,
&lt;ctrl&gt;&lt;l&gt;</a><br />
</li>
</ul></td>
</tr>
</tbody>
</table>

# KEY CONCEPTS

### Purpose of Having a Matrix Linux Server Account

While attending Seneca College, you will be using many different
computer systems. Some of these servers include:

|                                                              |                                                                                                |
|--------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **my.senecacollege.ca**                                      | Learning Content Management System (*Link to Resources* / *Student Grades* / *Online Quizzes*) |
| **ict.senecacollege.ca**                                     | Online access to slides, documents via webpage links                                           |
| **wiki.cdot.senecacollege.ca**                               | *Student Notes* / *Tutorials* (weekly, review) / *Practice Questions* / *Resources*            |
| **<span style="color:blue;">matrix.senecacollege.ca</span>** | Linux Account for "*hands-on Practice*"                                                        |

<img src="cli-prompt.png"
title="A shell is an interface / interpreter to allow a user to communicate with the Linux computer system. "
width="120"
alt="A shell is an interface / interpreter to allow a user to communicate with the Linux computer system. " />
Although you need to study concepts throughout this course (slides,
etc.), you will also need to get **hands-on practice running Linux
commands as well as performing and submitting online tutorials**.  
This requires that you **connect to a Linux server** and become
comfortable with **issuing Linux commands**.

In Unix/Linux, a **shell** is simply an **interface** to allow a user to
communicate with the Linux computer system (server). Linux shells have
evolved (improved) over a period of time. You will be using the **Bash
Shell** which is considered to be *user-friendly*. By understanding how
to issue Linux commands, you can create a file that contains Linux
commands (called a **shell script**) later in this course to automate
tasks to make you a more **productive** Linux user and system
administrator.

### Layout of the Matrix Linux Server

<figure>
<img src="matrix-layout.png"
title="The Matrix server consists of several Computers connected together to form a cluster. A Linux Cluster is a cost effective alternative to larger servers. "
width="250"
alt="The Matrix server consists of several Computers connected together to form a cluster. A Linux Cluster is a cost effective alternative to larger servers. " />
<figcaption aria-hidden="true">The Matrix server consists of several
Computers connected together to form a <strong>cluster</strong>. A
<strong>Linux Cluster</strong> is a <strong>cost effective</strong>
alternative to larger servers. </figcaption>
</figure>

The **Matrix server** consists of **several computers connected
together** to form a **cluster**.  
A **Linux cluster** is a **cost effective** alternative to buying larger
servers.

All registered students in this course should have an account on the
Matrix server.  
You will be using this account for the following reasons:

:\* Issuing **Linux commands**

:\* Becoming productive using the Linux **command prompt** (**shell**)

:\* Performing **Linux Tutorials** (**11 Weekly Tutorials x 2% = 22% of
your final grade**)

:\* Performing **Linux Practice Questions**

:\* Performing **Review Tutorial** (**8 Sections x 1% = 8% of your final
grade**)

### Connecting to the Seneca Student VPN

<figure>
<img src="gp1.png" title="Seneca Student VPN " width="130"
alt="Seneca Student VPN " />
<figcaption aria-hidden="true"><strong>Seneca Student VPN</strong>
</figcaption>
</figure>

Seneca College is "rolling-out" additional measures to improve **network
security**. One of these measures is to implement **multi-factored
authentication**. All Seneca College students are required to connect to
the **Seneca Student VPN** in order to be able to connect to their
**Matrix** Linux account.  
  
*<b>Multi-factor authentication</b> is an electronic authentication
method in which a computer user is granted access to a website or
application only after successfully presenting two or more pieces of
evidence (or factors) to an authentication mechanism: knowledge
(something the user and only the user knows).* Reference:
<https://en.wikipedia.org/wiki/Multi-factor_authentication>  
  
You should have received an email message (also available in course
announcements) regarding how to setup your Smart Phone to connect and
valid via the Seneca Student VPN. **NOTE:** If you haven't done this
yet, please perform the steps provided in the following link:  
<https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1025/student-vpn>  
  
In the next investigation, you will learn how to **connect** to and
**login** to your Matrix server account from a remote computer  
such as your **home desktop computer**, **laptop** or **tablet**
computer.  
  

### Connecting to Your Matrix Account

There are two basic methods to connecting to your Matrix account:

<figure>
<img src="cls-shell.png" title="Connect to Matrix viassh command"
width="100" alt="Connect to Matrix viassh command" />
<figcaption aria-hidden="true">Connect to Matrix via<strong>ssh</strong>
command</figcaption>
</figure>

  
**Method 1: Run ssh Command from command prompt:**

<!-- -->

  
After connecting to the **Seneca Student VPN**, you can open a **command
terminal**  
in your **Newer Windows 10**, **Mac** or **Linux** computer and issue
the following command:  
  
<span style="color:blue;font-weight:bold;">ssh
senecauserid@matrix.senecacollege.ca</span>  
  

<figure>
<img src="ssh-main-window.png"
title="Connect to Matrix via graphical SSH Program " width="100"
alt="Connect to Matrix via graphical SSH Program " />
<figcaption aria-hidden="true">Connect to Matrix via
<strong>graphical</strong> SSH Program </figcaption>
</figure>

  
**Method 2: Run graphical ssh program via MyApps in Seneca computer
lab:**

If you are in a Seneca computer lab, you can use MyApps to run a
**graphical SSH application** for your Windows machine. One advantage of
using this method is that you are already at Seneca and are NOT required
to connect to the student VPN.  
  

**NOTE:** You instructor may show you how to run a graphic Linux VM in
order to connect to your Matrix account (if interested, refer to the
optional tutorial at the end of this semester).  
  
  

# INVESTIGATION 1: ACCESSING YOUR MATRIX LINUX ACCOUNT

<span style="color:red;">**ATTENTION**: This online tutorial will be
required to be completed by **Friday in week 2 by midnight** to obtain a
grade of **2%** towards this course</span>  
  
In this section, you will learn how to access your Matrix Linux account
by two different methods:

:\* From your **home computer**  
:\* From a **workstation in a Seneca College** lab via **MyApps**

### METHOD 1: CONNECTING TO YOUR MATRIX ACCOUNT FROM YOUR HOME COMPUTER

<img src="gp1.png"
title="The Seneca Student VPN service must be connected." width="130"
alt="The Seneca Student VPN service must be connected." /> You will now
learn a quick and simple method of connecting to your Matrix account by
opening  
a text-based **terminal** (in any OS) and issuing the **ssh command**.  
  
**Perform the Following Steps:**

1.  If you want to connect to your Matrix account from home, you MUST
    first connect to the Seneca Student VPN.  
    Make certain that your **Seneca Student VPN is connected**.  
      
    **NOTE:** If you haven't set this up, refer to the following link
    for instructions;  
    <https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1025/student-vpn>  
      
    You only have to connect to your Seneca student VPN once during the
    day,  
    or while you are logged into your computer.  
      
2.  Determine which **operating system** that your computer is using.  
      
3.  Try connecting to your Matrix account using the instructions in the
    **table** below based on <u>your</u> **current operating system**.  
      

<table style="margin-left:50px;">
<tr valign="top" style="text-align:center;">
<th>

**Newer Version of Windows 10:**

</th>
<th>

**MacOSX:**

</th>
<th>

**Linux:**

</th>
</tr>
<tr>
<td>

-   From the start menu, type **cmd** and launch program
-   In the command terminal, enter the following command:  
    <span style="color:blue;font-weight:bold;font-size:.75em;">ssh
    senecausername@matrix.senecacollege.ca</span>

</td>
<td>

-   Click *Launchpad* icon, type **terminal**  
    and press **ENTER**
-   In the terminal, enter the following command:  
    <span style="color:blue;font-weight:bold;font-size:.75em;">ssh
    senecausername@matrix.senecacollege.ca</span>

</td>
<td>

-   From the menu, choose:  
    **Applications** \> **System Tools** \> **Terminal**
-   In the terminal, enter the following command:  
    <span style="color:blue;font-weight:bold;font-size:.75em;">ssh
    senecausername@matrix.senecacollege.ca</span>

</td>
</tr>
</table>

1.  When connecting securely for the **first time**, a **dialog box**
    will appear to share a "**public key**" with your Matrix account in
    order to make your interaction between your workstation and the
    remote Linux server secure within the network (i.e. encrypted to
    prevent unauthorized access by other users)  
      
    *<b>FYI:</b> To make communications over a network **secure**, a
    computer generates **two keys**: a **private key** that is kept on
    the computer, and a **public key**, which can be shared with other
    computers. Transmissions from your computer uses the private key to
    encrypt (**scramble**) transmission to the remote computer, which in
    turn, uses the public key to decrypt (unscramble) the transmission.
    Likewise, the remote computer uses the public key to encrypt
    (scramble) transmissions and your computer uses the private key to
    decrypt (**unscramble**) those transmissions.*  
      
2.  Type **yes** and press **ENTER** to share your public key.  
      
    Next, a **dialog box** will appear prompting you for your Matrix
    account **password** in order to gain entry to your Matrix
    account.  
    Your Matrix password is <u>identical</u> to your Seneca password.  
      
    **NOTE:** As you type the password, the text may be **hidden** to
    prevent others from viewing your password  
      
3.  Enter your Seneca password and press **ENTER**  
      

**NOTE:** If you encounter an **error message**, this can occur for
several reasons:

1.  You mis-spelled the **name of the server**
2.  You mis-spelled your Matrix **username** (same username that you
    connect to *my.senecacollege.ca*)
3.  You have **CAPS LOCK** on by mistake (your username should be
    **lowercase** only).
4.  You mis-spelled your **password** (same password that you connect to
    *my.senecacollege.ca*)  
      
    If you continue to experience the same problems, click on the
    following link for IT service desk contact info:  
    [**IT service
    desk**](https://students.senecacollege.ca/spaces/190/support/wiki/view/1473/contact-its).  
      

<li>

If you entered your password correctly, the **Matrix Linux shell**
should appear where you can enter Linux commands.  
  
The **Matrix** server has been configured to allow users to **only
interact with the Linux OS by issuing commands**.  
The main reason for this is to **force students to learn how to issue
Linux commands**.  
  

</li>
<li>

To **exit** your Matrix session, type the command
<span style="color:blue;font-weight:bold">exit</span> followed by
**ENTER**  
  
**NOTE:** You should notice that you are returned to the original
command prompt where you issued the *ssh* command.  
  

</li>
<li>

Type the same command at the **command terminal prompt**:
<span style="color:blue;font-weight:bold">exit</span> followed by
**ENTER**  
  
**NOTE:** You should notice that the you are disconnected and that the
original terminal window has **automatically closed**.  
  

</li>
<li>

Try accessing your Matrix account, and then exiting your Matrix account
several times to become familiar with this process.  
  
You will now learn an **alternative method** to access your Matrix
account (if you have an MS Windows machine)  
by downloading and running a graphical SSH application.

</li>
</ol>

  

### METHOD 2: CONNECTING TO YOUR MATRIX ACCOUNT FROM SENECA COMPUTER LAB

<span style="color:red;font-weight:bold;">NOTE: This section requires
you have access to a Seneca computer lab on campus.  
If you don't have access to a Seneca computer lab this semester, then
you can skip this section</span>  
  
You can also connect to your Matrix server account in the **Seneca
Computer lab via MyApps**.  
  
One advantage of this method is that your are at the college; therefore,
**you do NOT have to worry about connecting to the Seneca VPN**. Another
advantage of using this method is to introduce you to a **graphical
program** to allow you connect to your Matrix account as opposed to
using the **ssh** command (shown in the previous section).  
<img src="apps-anywhere-main-window.png"
title="MyApps (AppsAnywhere) Main Window " width="250"
alt="MyApps (AppsAnywhere) Main Window " /> This method would also be
useful if you do **not** have a home (notebook) computer and have access
to a Seneca computer lab workstation.  
  
**MyApps** (**AppsAnywhere**) is an application streaming service that
lets you install software on any Seneca PC on demand. Any software
application on the MyApps menu can be used on computers in classrooms,
labs, and the Computing Commons.

Reference: <https://inside.senecacollege.ca/its/software/myapps/>

You will now use **MyApps** on your Windows workstation in your Seneca
lab room to launch an application  
to allow you to connect and login to your Matrix server account.
<img src="apps-anywhere.png"
title="Several SSH applications will appear. We will use the application called SSH Client for this practice tutorial. "
width="250"
alt="Several SSH applications will appear. We will use the application called SSH Client for this practice tutorial. " />

**Perform the Following Steps:**

1.  Start your workstation in your lab and login to your Seneca Windows
    account.  
      
2.  Make certain that the **MyApps** window is open. This window should
    have opened shortly after you logged into your Windows workstation.
    If the application windows is not open, click on the **MyApps** icon
    on the desktop to launch).  
      
    <img src="ssh-main-window.png" title="SSH Client Application Window "
    width="150" alt="SSH Client Application Window " /><span style="color:red;font-weight:bold;">NOTE:
    You may be required to validate in order to use MyApps correctly. If
    you see near the top of the screen "requires validation", then click
    on that area to connect to validate.</span>  
      
3.  Click on the **Search Apps** area located in the top right corner of
    the MyApps window and type the word:
    <span style="color:blue;font-weight:bold">ssh</span>  
      
4.  Several SSH applications will appear.  
      
    **NOTE:** All of these applications allow you to connect to your
    Matrix account.  
    We will use the application called **SSH Secure Shell Client** for
    this practice tutorial.  
      
5.  Launch the **SSH Secure Shell Client** application icon to launch
    this program.  
      
    <img src="quick-connect-window.png" title="Quick Connect Dialog Box "
    width="150" alt="Quick Connect Dialog Box " />**NOTE:** Prior to
    launching the application, you can add this to your **favourites**
    which will make it faster  
    to access this application in the future.  
      
6.  The main SSH Client window will appear. Click on the **Quick
    Connect** button.  
      
    **NOTE:** The Connect dialog box allows the user to specify the
    **server name** and your **account name**  
    to allow you to connect to the server.  
      
7.  Click on the textbox labelled Hostnanme and enter the text:
    <span style="color:blue;font-weight:bold">matrix</span>  
      
    **NOTE:** You can use the hostname **matrix** since you are located
    <u>inside</u> Seneca's network.  
    If you where located <u>outside</u> Seneca's network, then you would
    need to enter the full domain name: **matrix.senecac.on.ca**  
      
    <img src="share-public-key.png"
    title="Dialog Box to Share Public Key on Remote Server " width="150"
    alt="Dialog Box to Share Public Key on Remote Server " />
8.  When connecting securely for the **first time**, a dialog box will
    appear to share a "public key" with your Matrix account in order to
    make your interaction between your workstation and the remote Linux
    server secure within the network (i.e. encrypted to prevent
    unauthorized access by other users)  
      
    **FYI:** To make communications over a network secure, a computer
    generates **two keys**: a **private key** that is kept on the
    computer, and a **public key**, which can be shared with other
    computers. Transmissions from your computer uses the private key to
    encrypt (scramble) transmission to the remote computer, which in
    turn, uses the public key to decrypt (unscramble) the transmission.
    Likewise, the remote computer uses the public key to encrypt
    (scramble) transmissions and your computer uses the private key to
    decrypt (unscramble) those transmissions.  
      
    <img src="ssh-password-prompt.png" title="Password Dialog Box "
    width="150" alt="Password Dialog Box " />
9.  Click the **Yes** button to share your public key.  
      
10. Next, a dialog box will appear prompting you for your Matrix account
    password in order to gain entry to your Matrix account. Your Matrix
    password is identical to your Seneca password. As you type the
    password, the text will be blocked-out or hidden to prevent others
    from viewing the screen to obtain your
    password<img src="ssh-authentication-response.png"
    title="Authentication Response Dialog Box " width="150"
    alt="Authentication Response Dialog Box " />  
      
11. Enter your password and click **OK** or press **ENTER**  
      
    <img src="ssh-login-error.png" title="SSH Login Error " width="150"
    alt="SSH Login Error " />
12. Click **OK** or press **ENTER** at the **Authentication Response**
    dialog box.  
      
    **NOTE:** If you encounter an **error message**, this can occur for
    several reasons:
    1.  You mis-spelled the **name of the server**
    2.  You mis-spelled your Matrix **username** (same username that you
        connect to my.senecacollege.ca)
    3.  You have **CAPS LOCK** on by mistake (your username should be
        **lowercase** only).
    4.  You mis-spelled your **password** (same password that you
        connect to my.senecacollege.ca)

      
    If you continue to experience the same problems, click on the
    following link for IT service desk contact info:  
    [**IT service
    desk**](https://students.senecacollege.ca/spaces/190/support/wiki/view/1473/contact-its).  
      
    <img src="ssh-shell-window.png"
    title="Matrix Shell Command Line Interface " width="150"
    alt="Matrix Shell Command Line Interface " />
13. If you entered your password correctly, the main SSH Linux shell
    should appear where you enter Linux commands.  
      
    The **Matrix** server has been configured to allow users to **only
    interact with the Linux OS by issuing commands**. There are various
    reasons for this, but the main 2 reasons are to **force students to
    learn how to issue Linux commands** as well as **limitations to
    remote access to a graphical Linux server** due to large number of
    users (students).  
      
    <img src="ssh-settings-window.png" title="SSH Settings Dialog Box "
    width="150" alt="SSH Settings Dialog Box " />

You can **configure** the SSH application to adjust elements such as the
**window size** and **text font type** and text **font size**. We will
be showing you how to configure your SSH Secure Shell Client, but the
other applications can allow you to configure their settings.  
  
**Perform the Following Steps:**

1.  Click on the **Edit** menu item, and then select **Settings** in the
    Edit drop-down menu.  
      
2.  To change the size of your shell window, under the *Global Settings*
    section, click **Appearance**  
      
3.  Change the *window size* both horizontal and vertical to larger
    values.  
      
4.  To change the font size, under the *Global Settings* section, click
    **Font**  
      
5.  Select a larger *font size* and click **OK**  
      
6.  You now should notice that you have customized your SSH shell
    terminal. You can use the settings screen to also change your
    background and text colours if you are interested in doing so.  
      
7.  To exit your Matrix session, type the following command and press
    ENTER: <span style="color:blue;font-weight:bold">exit</span>  
      
    **NOTE:** You should notice that the colour of the text changes
    slightly when disconnected and you are unable to issue Linux
    commands from that window.  
      
8.  After you have disconnected from your account, close the SSH Secure
    Shell Client application window.  
      
9.  It is recommended to repeat these steps with connecting to your
    Matrix account from a Seneca lab workstation until you become
    comfortable with the process.  
      

In the next investigation, you will learn how to issue Linux commands
from the command prompt (referred to as the "shell"), learn how to get
help with Linux commands, use command-line editing short cut keys, and
run a program to confirm that you connected to your Matrix account in
order to get marks for this online tutorial.  
  

# INVESTIGATION 2: USING THE LINUX SHELL

  
In this investigation, you will learn how to use the Linux Shell. Topics
in the section include:

:\* Learn the basic **Linux command structure** (*arguments* and
*options*)

:\* Learn how to get **help** for Linux commands via the **online
manual** (i.e. **man** command).

:\* Perform **Basic Shell Editing**

:\* Issue a **program** to confirm that you connected to your Matrix
account  
  
The Bash shell in Matrix allows you to interact with your Matrix account
by issuing commands.

**The General Linux Command Structure is as follows:**  
<span style="font-family:courier;color:blue;font-weight:bold">command
argument1 argument2 ... </span>

Some Linux commands can be issued by entering the Linux command line
without arguments (e.g. **pwd**, **date**, **ls**, **cal**),  
but many Linux commands can be issued with arguments (e.g. **cal 2002**,
**cd /bin**, **ls -l -a /bin** ).  
  
**What Does an Argument Represent?**

An **argument** can respresent:

:\* a **file pathname**

:\* a command **option**

:\* a series of characters (i.e. **text**) that the command can use

An **argument** is <u>separated</u> from a command (or from other
arguments) by a **SPACE**, **MULTIPLE SPACES** or a **TAB**.  
  
**Perform the Following Steps:**

1.  Make certain that you are logged into your Matrix account.  
      
2.  Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">pwd</span>  
      
    The output from this Linux command basically shows your **current
    location** in the Matrix server.  
    This represents a **directory pathname** to your home directory. We
    will discuss *pathnames* later in this course.  
      
3.  Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">ls</span>  
      
    What do you notice?  
      
    If there were any files in your home directory, just their file
    names would be displayed.  
      
4.  Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">cd
    /bin</span>  
      
5.  Issue the following Linux command to confirm your current location:
    <span style="font-family:courier;color:blue;font-weight:bold">pwd</span>  
      
6.  Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">ls</span>  
      
    What do you notice?  
      
7.  Issue the following Linux command using an **option**:
    <span style="font-family:courier;color:blue;font-weight:bold">ls
    -l</span>  
      
    What do you notice?  
      
    The **-l** option with the **ls** command provides a **detailed**
    ("*long*") listing of files providing more information on a separate
    line for each file.  
      
8.  Issue the following Linux command to return to your home directory:
    <span style="font-family:courier;color:blue;font-weight:bold">cd</span>  
      
9.  Issue the following Linux command to confirm your current location:
    <span style="font-family:courier;color:blue;font-weight:bold">pwd</span>  
      
10. Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">ls
    /bin</span>  
      
11. Issue the following Linux command to confirm your current location:
    <span style="font-family:courier;color:blue;font-weight:bold">pwd</span>  
      
    What do you notice?  
      
    What makes this command with that argument useful if you are current
    located in your home directory?  
      
12. Issue a Linux command that you have already learned to change to
    your **home** directory  
    and to **confirm** that you have returned to your home directory.  
      
13. Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">clear</span>  
      
    What do you notice? How would this command be helpful?  
    **FYI:** The short-cut keys to clear the screen for the Bash shell
    is:
    <span style="font-family:courier;color:font-weight:bold">ctrl-l</span>  
      
14. Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">who</span>  
      
    What information does this command show?  
      
    This command lists users that are logged into the same Matrix server
    as yourself.  
    **NOTE:** Remember that the Matrix Linux cluster contains several
    servers, so it does not display  
    all users that are logged onto those other machines within that
    cluster!  
      
15. Issue the following Linux command:
    <span style="color:blue;font-weight:bold">whoami</span>  
      
    What does this command display? What do you think is the purpose of
    this command?  
      
16. Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">cal</span>  
      
    What is the purpose of this command?  
      
17. Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">cal
    2021</span>  
      
    What is the purpose of this command using this argument?  
      
18. Issue the following Linux command:
    <span style="font-family:courier;color:blue;font-weight:bold">cal 2
    2021</span>  
      
    What is the purpose of this command using those two **numbers** as
    arguments?  
      

**Getting Help with Linux Commands**

With the Linux OS containing over **2500** commands and utilities, it is
good for a Linux user or  
Linux system administrator (sysadmin) to learn about how to use commands
“on-the-fly”.  
  
The **man** command can provide information on how to use a command  
(i.e. **command usage**, **acceptable command arguments**, **command
options**, **examples**).  
  
\# Issue the following command:
<span style="font-family:courier;color:blue;font-weight:bold">man
man</span>  
  
You may notice that the online manual categories commands into sections
or **numbered volumes**.  
  
\# Type the **SPACE** key to move to the next screen.  
  
How many **volume numbers** are contained in the man pages (like
**executable commands**,  
**games**, or **system administrator commands**)?  
  
**TIP:** You can use the following **short-cut keys** within the man
command to  
help navigate throughout this utility to get help with the ls command
(refer to table below):  
  

<table cellpadding="3">
<tr>
<th style="border-bottom: 1px solid black;">

Keyboard Shortcut

</th>
<th style="border-bottom: 1px solid black;">

Purpose

</th>
</tr>
<tr>
<td>

**ENTER**

</td>
<td>

Move down one line

</td>
</tr>
<tr>
<td>

**SPACEBAR**

</td>
<td>

Move one screen down

</td>
</tr>
<tr>
<td>

**\<ctrl\>\<b\>**

</td>
<td>

Move one screen up

</td>
</tr>
<tr>
<td>

**/pattern/**

</td>
<td>

Search for Pattern

</td>
</tr>
<tr>
<td>

**q**

</td>
<td>

quit man utility

</td>
</tr>
</table>

  
\# Press the letter
<span style="font-family:courier;color:blue;font-weight:bold">q</span>
to exit the man command.  
  
\# Issue the following Linux command to get help with the ls command:
<span style="font-family:courier;color:blue;font-weight:bold">man
ls</span>  
  
\# Navigate through the man utility for the **ls** Linux command and
note the **option letters** that correspond to the following
descriptions:  

-   "**use a long listing format**"
-   "**do not ignore entries starting with .**" (i.e. hidden files)
-   "**sort by file size**"
-   "**append indicator (one of \*/=\>&\|) to entries**" (i.e. type of
    file)

  
\# Exit the man utility for the *ls* command.  
  
\# Issue the **ls** command for <u>each</u> of those option letters you
noted in **step 5** to see how this command differs for each option.  
  
**NOTE:** The **man** utility can be used with the **-k** option to help
list Linux commands that match a text pattern  
that is contained within the help screen for a Linux command.  
  
\# **Pipeline commands** can be used to filter-out unnecessary output.
In the next command that you will be issuing,  
the output from the **man -k** command, is sent into the **grep**
command to *filter* (i.e. *trap*) only output that matches the pattern
"8"  
(The number "8" refers to the category of type of command - in this
case, administration commands).  
  
We will learn more about pipeline commands later in this course.  
  
\# Issue the following Linux pipeline command:
<span style="font-family:courier;color:blue;font-weight:bold">man -k
user \| grep 8</span>  
  
How does this *pipeline command* make it easier to obtain information
regarding man command?  
  
\# If you wish to change your password, you can change it by issuing the
command:
<span style="font-family:courier;color:blue;font-weight:bold">passwd</span>  
What option for the passwd command can be used to change user info (such
as name)?  
**Hint:** use the **man** command for **passwd**.  
  
**NOTE:** Do **NOT** run the *passwd* command. Unique for this college,
your Matrix password  
is changed automatically when you change your **myseneca** password.  
  
  
\# Press the letter
<span style="font-family:courier;color:blue;font-weight:bold">q</span>
to exit the man command.  
  
You will now learn how to perform **command line editing**  
to correct syntax errors while typing Linux commands PRIOR to pressing
the ENTER key.  
  
**Command Line Editing** <img src="command-line-editing.png"
title="Command Line Editing Shortcut Keys. " width="520"
alt="Command Line Editing Shortcut Keys. " />

Learning **shortcut keys** in any OS terminal will allow you to be more
productive as a *Linux user* or *Linux System Administrator* (commonly
referred to as: **Linux sysadmin**).  
  
  
Let's learn a few common Bash Shell keyboard shortcut keys and find out
where you can access online help for additional shortcuts (if required).

**Perform the Following Steps:** <img src="meta-key.png"
title="To make alt-f key work, select Edit -&gt; Settings -&gt; Keyboard, and select the checkbox Use ALT as Meta key (and Escape)."
width="370"
alt="To make alt-f key work, select Edit -&gt; Settings -&gt; Keyboard, and select the checkbox Use ALT as Meta key (and Escape)." />

1.  Type the following Linux command, but DON’T press the *ENTER* key:  
    <span style="font-family:courier;color:blue;font-weight:bold">cd
    /bin</span>  
      
2.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ctrl-a</span>
    key combination. What happens?  
      
    **NOTE:** To make **alt-f** key work when use the **GRAPHICAL
    Windows SSH Client application**, select **Edit** -\> **Settings**
    -\> **Keyboard**, and select the checkbox **Use ALT as Meta key (and
    Escape)**.  
      
3.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">alt-f</span>
    key combination **two times**  
    (OPTION+right-arrow for Mac OSx).  
      
4.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">alt-b</span>
    key combination **one time**.  
    (OPTION+left-arrow for Mac OSx).  
      
    <table align="right">
    <tr valign="top">
    <td>

    <figure>
    <img src="ctrl-b.png"
    title="alt-b moves one word backwards for Windows OS" width="150"
    alt="alt-b moves one word backwards for Windows OS" />
    <figcaption aria-hidden="true"><strong>alt-b</strong> moves one word
    backwards for Windows OS</figcaption>
    </figure>

    </td>
    <td>

    <figure>
    <img src="ctrl-w.png"
    title="ctrl-w deletes a word to left of the cursor." width="150"
    alt="ctrl-w deletes a word to left of the cursor." />
    <figcaption aria-hidden="true"><strong>ctrl-w</strong> deletes a word to
    <u>left</u> of the cursor.</figcaption>
    </figure>

    </td>
    <td>

    <figure>
    <img src="new-ls.png"
    title="After command is deleted, then type new command and press ctrl-e to move to end of the command line."
    width="150"
    alt="After command is deleted, then type new command and press ctrl-e to move to end of the command line." />
    <figcaption aria-hidden="true">After command is deleted, then type new
    command and press <strong>ctrl-e</strong> to move to end of the command
    line.</figcaption>
    </figure>

    </td>
    </tr>
    </table>
5.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ctrl-w</span>
    shortcut key. What happens?  
      
6.  Type the following command:
    <span style="font-family:courier;color:blue;font-weight:bold">ls</span>  
      
7.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ctrl-e</span>
    key combination  
      
    What happens?  
      
8.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ENTER</span>
    key to execute the command.  
      
9.  Press the
    <span style="font-family:courier;color:blue;font-weight:bold">up
    arrow</span> key. What happens?  
      
10. Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ctrl-u</span>
    key combination. What happens?  
      
11. Press the
    <span style="font-family:courier;color:blue;font-weight:bold">up
    arrow</span> key combination, and see what happens when you press
    <span style="font-family:courier;color:blue;font-weight:bold">BACKSPACE</span>
    ,
    <span style="font-family:courier;color:blue;font-weight:bold">\<ctrl\>\<BACKSPACE\></span>
    and
    <span style="font-family:courier;color:blue;font-weight:bold">\<ctrl\>\<h\></span>.  
    Why is it important to know those series of key combinations?  
      
12. Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ctrl-u</span>
    key combination to clear the line.  
      
13. Press the
    <span style="font-family:courier;color:blue;font-weight:bold">ctrl-l</span>
    key combination. What happens? What is the advantage of using
    **ctrl-u** as opposed to **ctrl-l**?  
      
    The Bash shortcut keys that you just learned are sufficient to
    perform Bash Shell editing.  
    Although you are NOT required to learn other short-cut keys, here is
    a link to a listing in case you are interested:  
    [ostechnix.com/list-useful-bash-keyboard-shortcuts/ Useful Bash
    Shell Keyboard Shortcuts](https://)  
      

**Running a Shell Script to Check Student Online Tutorial
Participation**

Professors will require students successfully perform these online
tutorials for marks (within a deadline).  
In order to confirm that you successfully performed a tutorial, you will
be required to run a program  
(or in later tutorials, several programs) to prove that you successfully
completed tasks in a tutorial and get marks.

These programs (known as Shell Scripts) will check your work and offer
feedback if you made mistakes, so you can make corrections.  
Making corrections (i.e. troubleshooting) and re-running these checking
programs until you are successful will help students  
gain "hands-on" experience as well as "trouble-shooting experience.

<table align="right">
<tr valign="top">
<td>

<figure>
<img src="script-check-1.png"
title="If all all check pass, then user performed can proceed."
width="250"
alt="If all all check pass, then user performed can proceed." />
<figcaption aria-hidden="true">If all all check pass, then user
performed can proceed.</figcaption>
</figure>

</td>
<td>

<figure>
<img src="script-check-2.png"
title="If there is a warning, then feedback is provided to user to correct and re-run checking script."
width="450"
alt="If there is a warning, then feedback is provided to user to correct and re-run checking script." />
<figcaption aria-hidden="true">If there is a warning, then feedback is
provided to user to correct and re-run checking script.</figcaption>
</figure>

</td>
</table>

If you have correctly completed the required tasks, the user can
proceed. If the checking shell script detects an **error**, then it will
provide feedback to allow the student to fix that problem so they can
re-run the checking shell scripts until they have successfully completed
a task.

**Perform the Following Steps:**

1.  Make certain that your current directory is **your home
    directory**  
    By entering the following Linux command:  
    <span style="color:blue;font-weight:bold;font-family:courier;">cd</span>  
      
2.  Issue the following command to run a checking script :  
    <span style="font-family:courier;color:blue;font-weight:bold">\~uli101/week1-check</span>  
      
    The beginning character "**\~**" is called **tilde**. You get this
    character by pressing **SHIFT** + **\`**  
    (which is the key to the left of the number 1 on your keyboard).  
      
3.  Your screen should clear and indicate that you have proved that you
    have successfully logged in.  
      
4.  An email will be sent to your Seneca email as **confirmation** in
    case your ULI101 professor is assigning marks to these tutorials.  
      
    Keep those confirmation email messages for the duration of this
    semester as proof that you have completed those checking scripts in
    case there is a discrepancy in tutorial grades.  
      

# LINUX PRACTICE QUESTIONS

The purpose of this section is to obtain **extra practice** to help with
**quizzes**, your **midterm**, and your **final exam**.

Here is a link to the MS Word Document of ALL of the questions displayed
below but with extra room to answer on the document to simulate a quiz:

<https://github.com/ULI101/labs/raw/main/uli101_week1_practice.docx>

Your instructor may take-up these questions during class. It is up to
the student to attend classes in order to obtain the answers to the
following questions. Your instructor will NOT provide these answers in
any other form (eg. e-mail, etc).

**Review Questions:**

1.  What is a “**Linux Cluster**”? What is an advantage of using a Linux
    cluster?
2.  List **three unique server names** at Seneca college and briefly
    explain the purpose of that server.
3.  List the steps to connect and login to your Matrix Seneca College
    account on your **laptop** or your **home computer**.
4.  List alternative methods to connect to your Matrix account,
    including if you have an **Apple Mac** computer or are running the
    **Linux** operating system.
5.  List 3 unique ways to **log-out** of your Matrix account (not
    including closing the SSH window or application).
6.  What is the difference between a Linux **command** and an
    **argument**?
7.  What is the purpose of a Linux command **option**?
8.  What character(s) are used to **separate** commands and arguments?
9.  Create a **table** listing each Linux command, useful options that
    were mentioned in this tutorial for the following Linux commands:  
    **pwd** , **cd** , **ls** , **cal** , **date** , **who** , **w** ,
    **whoami** , **who am I** , **clear**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Author: Murray Saul

License: LGPL version 3 Link: <https://www.gnu.org/licenses/lgpl.html>

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_