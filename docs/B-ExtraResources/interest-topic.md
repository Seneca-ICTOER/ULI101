---
id: interest-topic
title: Interest Topic - Graphical Linux via a Virtual Machine (VM)
sidebar_position: 4
description: Interest Topic for Students who want extra practice with Linux and Knoppix
---

# Interest Topic: Graphical Linux via a Virtual Machine (VM)

## Installing Linux and Live Linux and Virtualization

## Main Objectives of this Practice Tutorial

  - Download and install the **VirtualBox** VM software application
  - Download and run the **Ubuntu VirtualBox file** in a virtual machine
  - Open a terminal and connect to your Matrix account via the **ssh** utility
  - Run several **open-source applications** in your graphical Ubuntu Linux environment

## Tutorial Reference Material

**Course Notes**

- **Course Notes:** [PDF](/slides/ULI101-7.1.pdf) \| [PPTX](/slides/ULI101-7.1.pptx)

**Concepts**

**Installing Linux**

- [Linux Installation Choices](https://www.linux.com/training-tutorials/linux-installation-choices/)
- [Live Linux Definition](https://en.wikipedia.org/wiki/Live_CD)
- [Virtualization Definition](https://en.wikipedia.org/wiki/Virtualization)

**Ubuntu Resources**

- [Ubuntu Website](https://ubuntu.com/)
- [Download Ubuntu VirtualBox VM](https://senecafts.senecacollege.ca/link/to4Ztj33rphUlHFGsgGETf)
- [Download Ubuntu VMware VM](https://senecafts.senecacollege.ca/link/exmCHYEOdASPqZu8SpXDxf)

**Instructional YouTube Videos:**

- [Install Ubuntu as a Virtual Machine](https://www.youtube.com/watch?v=8UFsXtIEQSc)

## Key Concepts

### Installing Linux

Having a Linux system on your home computer provides **access** to a large selection of **open source software.**

Installing your own version of Linux on your notebook or desktop computer also can make it easier to practice working in the Linux environment and **learn** how to perform routine **Linux OS administration tasks**.

_A **Linux distribution** (often abbreviated as distro) is an operating system made from a software collection that is based upon the Linux kernel and, often, a package management system. Linux users usually obtain their operating system by downloading one of the Linux distributions, which are available for a wide variety of systems..._

Reference: https://en.wikipedia.org/wiki/Linux_distribution

![Distro 1](/img/Distro-1.png)

Listing of Common Linux Distributions. (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

_Steps in the Linux Installation Process:_

  - **Select** a _Linux Distribution_ to **download** (ISO image file or VM file).
  - **Create** VM and **install** Linux Distribution or **run** VM file.

### Linux Installation Methods

**Standalone Installation**

  - Linux is the only OS on the computer.
  - Any existing data on your hard disk will be **erased**.

![Stand alone](/img/Stand-alone.png)

Linux is the only OS on the computer (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

**Dual-boot / Multi-boot Installation**

A **boot menu** allows the user to select the desired OS.

**Advantages** of Dual-Boot or Multi-Boot:
  1. This option provides a method to access your computer if one OS **fails to boot-up**.
  2. **Access the Windows partition** if your Windows OS cannot boot-up.
  3. This booting method is great for **troubleshooting** (_for example_: boot into Linux OS to eliminate a hardware issue).

**Installation Tips:**
  1. It is recommended to **back up important data** before proceeding.
  2. It is recommended to **install the Linux OS last**, as other operating systems may not offer a multi-boot option.

![Grub Boot Menu](/img/Grub-boot-menu.png)

The **grub boot menu** to select different operating systems upon computer startup. (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

### Virtual Machine Installation

_Virtualization is the process of running a virtual instance of a computer system in a layer abstracted from the actual hardware_. Reference: https://opensource.com/resources/virtualization

The virtualized OS is installed and run in a window under another OS. Special software is used to manage the entire process, referred to as the **hypervisor**.

**Advantages** of Virtualization:
  1. You can run VM from an **ISO image file** or a **VM file**.
  2. One or more virtual machines can be run at the same time.
  3. The **guest** OS **shares hardware** with the **host** OS and possibly other virtualized systems.
  4. The **guest** systems have **network access** through the host.

**Installation Tips:**
  1. Virtualization requires a **compatible processor**: not all processors support that feature.
  2. Your **BIOS** should be set to **enable Virtualization**.
  3. Popular VM software for **Windows, Apple** and **Linux OS** include:
      - VMware
      - Oracle Virtual Box

![Vm player menu](/img/Vm-player-menu.png)

VMware Player launch menu for Ubuntu Linux OS (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

### Live Linux CD

_A live CD (also live DVD, live disc, or live operating system) is a complete bootable computer installation including operating system which runs directly from a CD-ROM or similar storage device into a computer's memory, rather than loading from a hard disk drive. A Live CD allows users to run an operating system for any purpose without installing it or making any changes to the computer's configuration._

Reference: https://en.wikipedia.org/wiki/Live_CD

![Linux Distro 2](/img/Linux-distro-2.png)

Knoppix is a popular Live Linux CD Distribution. (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

## Investigation 1: Booting Ubuntu (Live Linux) Via VirtualBox

**ATTENTION: This tutorial relates to an interest topic and is NOT worth marks.**

In this investigation, you will first _download_ and _install_ the **VirtualBox** VM application on your home computer, then you will then _download_ and unzip the **Ubuntu VM** file to your computer.

You will then _launch_ the VirtualBox application by double-clicking the downloaded VirtualBox VM. Once you launch the Ubuntu Linux distribution, you will learn in **INVESTIGATION 2** to perform a few basic operations in the **Ubuntu** Linux _graphical_ Linux environment.

**Perform the Following Steps:**

**ATTENTION: If you receive an error message indicating that your computer is NOT
set to handle virtualization, you need to enable virtualization in your notebook’s BIOS.**

  1. **Click** the following link to access the **Oracle Virtualbox** application download website: https://www.virtualbox.org/wiki/Downloads

![Virtualbox download](/img/Virtualbox-download.png)

  2. In this website, **click** the link corresponding to your **computer's operating system** to download to your computer.
  3. **Install** the downloaded **Virtualbox** VM application on your computer.

      - **NOTE:** You may be required to allow **authorization** to run this program, select to install devices (if prompted) and to **restart** your computer after installation.

  4.  **Click** the following link to download the **zipped** (compressed) Ubuntu Distribution file to your computer: [Ubuntu Virtualbox VM](https://senecafts.senecacollege.ca/link/to4Ztj33rphUlHFGsgGETf)

      - **NOTE:** This file is approximately **5GB** in size and might take a while to download.

  5. **VMware alternative:** If you are using VMware workstation, download this **zipped** (compressed) Ubuntu Distribution file instead: [Ubuntu VMware VM](https://senecafts.senecacollege.ca/link/exmCHYEOdASPqZu8SpXDxf)

  6. The **username is** _ubuntu_ and the password is **ubuntu**. The root password is also **ubuntu**
  7. Open a **File Manager** application and **navigate** to directory that the **Ubuntu.zip** file
was downloaded (eg. **Downloads**).

  8. **Unzip** the downloaded zip file (In MS Windows: _Right click_ and Select "_Extract All_" )

      - **NOTE:** The contents of this zipped file should appear in another file manager window.

  9. Navigate to the folder containing the extracted zipped files and **double-click** the file called **Ubuntu.vbox** to launch the Ubuntu VM.

   - **NOTE:** By **double-clicking** on this file (even if the VirtualBox application is not running) it will launch the VirtualBox application and start the Ubuntu virtual machine.

**For Mac Users:** If you experience an error message regarding the Kernel extension, click on **System Preferences**, select **Security and Privacy** and click to **allow Oracle** service extensions to run on your machine.

![Knoppix File](/img/Knoppix-file.png)

Knoppix VM file contained in the zipped file. **Double-click Knoppix.vbox** file to launch the **Knoppix Live Linux** Distribution.

   - If you have difficulty running Knoppix on your home machine/laptop you may ask your **Learning Centre ULG leaders** for additional help in troubleshooting why Knoppix is not working on your home machine/laptop.

  10. If you are using MS Windows, look in the taskbar below to see if the Virtual Box application is running click to display that application window.
  11. Click on the Start button (looks like a green arrow pointing to the right).
  12. If prompted, click Scale or Switch to scale mode to proceed.
  13. If using _MS Windows_, click the mouse on the Ubuntu screen and press **ENTER** to login.
  14. Allow **time** for the Ubuntu Linux distribution to start. This is a **graphical Linux distribution** which will start-up in a desktop environment.

      - **NOTE:** When you are prompted for a _username_ and _password_ use _ubuntu_ for both.
      - **NOTE:** If you are using MS Windows, press the **RIGHT CTRL** key to change to other applications by pressing **ALT-TAB**.
      - When you want to use Graphical Linux (i.e. Ubuntu screen), click in the screen to focus and use that screen.

![Knoppix Desktop](/img/Knoppix-desktop.png)

The **Knoppix Linux desktop environment** has a similar look as the MS Windows desktop environment. (Image licensed under [cc](https://creativecommons.org/licenses/by-sa/3.0/))

  15. **Click** the **Ubuntu Start button** (refer to left icon in diagram below). In the **Ubuntu**, select **System Tools**

![Knoppix start menu](/img/Knoppix-start-menu.png)

  16. In the **system tools** menu, and select **Terminal** to launch a terminal application.

      - You can drag the Terminal terminal window from the bottom-right corner to increase the window size, or double click on the window title.

  17. In the bash shell, issue the following Linux command: 

```bash
whoami
```

![Xterm](/img/Xterm.png)

   - What is the name of your Ubuntu Linux account?
   - Let's test this out by using the ssh command to connect to your Matrix account. 
   - Your Ubuntu virtual machine uses your host computer's operating system which is already connected to **Seneca's GlobalProtect VPN**.

  18. Issue the following Linux command to connect to your Matrix account:

```bash
ssh YourSenecaUsername@matrix.senecacollege.ca
```

  19. Enter **yes** to share your _public_ key.
  20. When prompted, enter your **password** (remember that password does not "echo-back").

      - Were you able to connect to your Matrix account?

  21. Confirm that you are in your **home** directory on your Matrix account.
  22. Use a **text editor** (_nano_ or _vi_) to create a file in your current directory called **myvm.txt** and enter the following text displayed below. Make certain there are ONLY 3 lines:

```text
This is line 1
This is line 2
This is line 3
```

  23. **Save** editing changes and **exit** the text editor.
  24. Confirm that you created this file and confirm that the contents of this file are correct.

      - Let's run a **shell script** to check that you created the **myvm.txt** file (with correct file contents) in your home directory.

  25. Enter the following command: 

```bash
~uli101/week7-check-1
```

  26. If you encounter errors, make corrections and then re-run the checking script until you receive a congratulations message, and proceed to the next step.
  27. Issue the following Linux command to **terminate** your Matrix session: `exit`
  28. Remain in the **Terminal** _terminal_ window when performing **INVESTIGATION 2**.

In the next investigation, you will learn to work in a graphical Linux environment.
You will also run several open-source application within the Ubuntu graphical environment.

## Investigation 2: Using The Graphical Ubuntu VM

Let's learn to run _open-source_ applications on your graphical Ubuntu Linux distribution. But first, let's **download** and run a **shell script** that will **display dialog** boxes in your graphical Ubuntu VM.

**Perform the Following Steps:**

  1. Make certain that you are running your Ubuntu Linux Live virtual Machine (refer to **step \#7** in [\[1\]](#investigation-1-booting-ubuntu-live-linux-via-virtualbox) )

      - Although you will be learning to create and run **shell scripts** (near the end of this course) in your **Matrix** server , those scripts will only run in a **command-line** environment.
      - Since you are running a **graphical Knoppix** Linux distribution on your computer, you can run scripts graphically (including the use of **dialog boxes** for _input_, _output_, etc.).

![Input Dialog](/img/Input-dialog.png)

Graphical **input dialog box**. ^

  2. Make certain that you are in a **Terminal** _terminal_ window (but **NOT** connected to your Matrix account).
  3. Issue the following command to **download** a shell script called **week7-demo-1** from the Internet:

```bash
wget https://wiki.cdot.senecacollege.ca/uli101/files/week7-demo-1
```

  4. Issue the **ls** command to confirm that the file called **week7-demo-1** has been downloaded to your current directory.
  5. Issue the following to run this shell script:

```bash
bash week7-demo-1
```

  6. In the dialog box, click to select the **/home/ubuntu** directory and click **OK**.

      - What did you notice?

  7. Issue the following Linux command: 

```bash
ls -l week7-demo-1
```

   - Notice there are NO **execute** permissions for this shell script file. That is why we have to issue the **bash** command followed by the **shell script file pathname** (as an argument) to run the shell script.
   - Let's **add execute permissions** so we can run this command by name (i.e. without using the **bash** command).

  8. Issue the following command to **add execute permissions** for everyone for the **week7-demo-1** file: 

```bash
chmod +x week7-demo-1
```

   - **FYI:** This method is a **quick** method of adding execute permissions for the **owner**, **same group members** and **others**.

  9. Issue the **ls -l** command for this file to confirm execution permissions were properly added.

![Output Dialog](/img/Output-dialog.png)

  10. Issue the following: 

```bash
./week7-demo-1
```

   - Did the shell script run?
   - **NOTE:** The shell script uses the **zenity** command to create dialog boxes. Although you may need to install this application in other Linux distributions, it is automatically included with the Knoppix distribution. We don't learn about the _zenity_ command in this course, but here is a link to some simple examples using this command in case you are interested: [How to Use Zenity](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiKztuinuruAhXwm-AKHSGnCq8QFjAAegQIBBAC&url=https%3A%2F%2Fwiki.cdot.senecacollege.ca%2Fwiki%2FHow_to_Use_Zenity&usg=AOvVaw3pDy1Afw8Vw9-09cs5zE6Y)

   - **REMEMBER:** You **CANNOT** run this graphical shell script on your **Matrix** server, since Matrix is only a **COMMAND-LINE environment** and NOT a **graphical environment**.

  11. Issue the Linux command: `exit` to **close** the **Konsole** terminal window.
  12. Use the _Knoppix start menu_ and search the **Internet** submenu to launch the **firefox** web-browser.
  13. In the web-browser, go to the **Google** website and perform a _Net-search_ on the **Knoppix wiki**.

![Knoppix Wiki](/img/Knoppix-wiki.png)

  14. When finished browsing the Knoppix WIKI, **close** the _Firefox_ web-browser.
  15. Use the _Knoppix start menu_ to select **Office** and then select **LibreOffice - Writer** to launch a word processing application.

   - **NOTE:** Libre office is a free **open-source suite** of productivity tools for _creating documents, spreadsheets and slide presentations._

![Libre Office](/img/Libreoffice.png)

  16. Create a new document, type in a paragraph and then **save** changes to the file **mydoc** to your home directory, and **exit** the Libreoffice word processing document.

  17. Use the _Knoppix start menu_ to select **logout**, then select **shutdown** to terminate your Knoppix Linux Live session.

![Shutdown Knoppix](/img/Shudtdown-knoppix.png)

  18. Press **ENTER** when it indicates to **Remove your CD.**

      - **NOTE:** Although you are NOT using a physical CD, this step is required to shut-down your Knoppix session and close your VirtualBox application.

  19. **Launch** a new Knoppix Linux Live session ([INVESTIGATION 1](#investigation-1-booting-ubuntu-live-linux-via-virtualbox), **step \#7**).
  20. Use the _Knoppix start menu_ to **launch** a **graphical file manager** (Hint: _Accessories_ -> _Files_).

![Knoppix File Manager](/img/Knoppix-file-manager.png)

  21. In the file manager, search for your word processing document file and your downloaded shell script that were contained on your home directory.

      - Does your word processing document or your downloaded shell script exist? If not, why?

  22. Open the _Knoppix start menu_, select **games** and try running a few games (a few recommendations are: **Frozen Bubble**, and **Extreme Tux Racer**).

![Frozen Bubble](/img/Frozen-bubble.png)

The **Frozen-Bubble** arcade game. ^

   - Now that you have had an opportunity to use your Knoppix Linux Live distribution, let's shutdown the VM and move onto the practice questions at the bottom of this tutorial.

  23. Open the _Knoppix start menu_ and select **logout** and **shutdown** to end your Knoppix Live session.

## Linux Practice Questions

The purpose of this section is to obtain **extra practice** to help with **quizzes**, your **midterm**, and your **final exam**.

Here is a link to the MS Word Document of ALL of the questions displayed below but with extra room to answer on the document to simulate a quiz: [Week 7 Practice](/files/uli101_week7_practice.docx)

Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc).

**Review Questions:**

  1. Define the term **Linux Distribution**.
  2. List and explain **two advantages** of installing a Linux distribution on your home computer or laptop.
  3. List and explain two things to consider prior to installing a Linux distribution on your home computer.
  4. Explain why installing **Multi-boot** for Linux is useful for **computer troubleshooting**.
  5. Define the term **Virtualization**.
  6. List the **steps** to start the Knoppix Linux distribution from your home computer.
  7. List **4 applications** that are contained in the Knoppix Linux Live distribution.
  8. Explain the difference between a **Live Linux distribution** and an **installed Linux distribution**.

---

Author: Murray Saul

License: LGPL version 3 Link: https://www.gnu.org/licenses/lgpl.html

---
