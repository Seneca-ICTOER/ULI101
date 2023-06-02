---
id: usinglinuxdesktop
title: Using Linux Desktop
sidebar_position: 3
description: Tutorial For Students to Run a Linux Desktop
---

# Using a Linux Desktop

## Objective

To provide a Linux Desktop experience using methods that are relatively easy to ones that are advanced.

## Connecting to the VPN

Connect to Seneca's Virtual Private Network (VPN) using GlobalProtect clients.

### macOS/Windows

A reboot may be needed in case of difficulty authenticating with Seneca's VPN.

  1. Student clients: [Student Virtual Private Network](https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1024/vpn)
  2. Employee clients: [Seneca Virtual Private Network](https://employees.senecacollege.ca/spaces/77/it-services/wiki/view/3723/employee-vpn)

### Linux

Requires **libqt5webkit5.**

  1. [Students VPN Clients](https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1027/vpn-clients) (includes Linux)
  2. [Professors VPN Clients](https://employees.senecacollege.ca/spaces/77/it-services/wiki/view/7296/vpn-clients) (includes Linux)

Find more troubleshooting information at the [Student VPN FAQ](https://students.senecacollege.ca/spaces/186/it-services/forums/1166/vpn-frequently-asked-questions) or the [Employee VPN FAQ.](https://employees.senecacollege.ca/spaces/77/it-services/forums/1961/vpn-frequently-asked-questions)

## Connecting to Matrix

There are three ways to connect to `matrix.senecacollege.ca` from a Linux Desktop:

  - **easy** :: this method runs Desktop Linux from computers located on Seneca's campus.
  - **intermediate** :: uses a Live Desktop Linux (Ubuntu) located on your computer.
  - **advanced** :: uses Desktop Linux (Debian virtual machine) located on your computer.

Briefly, each of these methods involve the following additional steps:

### Running on Seneca VirtualCommons

This method of running desktop Linux is, relatively speaking, the easiest of the three options and possibly the only one you need if you find the other two too difficult or you have hardware that does not support virtualization. Follow these instructions to run a live Linux Desktop (Knoppix) from Seneca VirtualCommons.

#### Step 1 - Remote Desktop to Seneca VirtualCommons

  1. First install and run Seneca's Virtual Private Network (VPN) as described in the links above.
  2. Next, follow the instructions to reserve a remote desktop that lets you connect to [Seneca's VirtualCommons.](https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1023/virtual-commons)
  3. The videos linked to below walk through the steps needed to connect to Seneca VirtualCommons from macOS or Windows:

      - Video: [VirtualCommons: HOWTO on macOS](https://youtu.be/m19gVTZYtC4)
      - Video: [VirtualCommons: HOWTO on Windows](https://youtu.be/Nj455y-3G7s)

#### Step 2 - Run Knoppix from MyApps

In brief, the steps involved are:

  1. From the remote desktop session you are connected to, open a browser and connect to `myapps.senecacollege.ca.`
  2. After you have MyApps open in your browser, select Knoppix and run it.
  
      - Video: [HOWTO Run Knoppix from MyApps on VirtualCommons](https://web.microsoftstream.com/video/a6021189-be6e-4918-b279-be87d8f777ae)

#### Step 3 - Connect to Matrix from Knoppix

You are in Knoppix running on VirtualCommons for this step.

  1. On the Knoppix taskbar click on Terminal
  2. When the Terminal opens, run the following to connect to **matrix.senecacollege.ca**: (replace mysenecaID with your Seneca username)
  
      - `ssh mysenecaID@matrix.senecacollege.ca`

### Live Linux in a VM on your local computer

This is the intermediate option to have Linux running on your local computer provided you have hardware that supports virtualization and have administrative privileges on your local computer.

For this method to work correctly, verify your CPU supports hardware virtualization (both **VT-x** and **VT-d** should be available and enabled). You can verify this by looking up details of your CPU specifications from the CPU manufacturer's website. The rest of this tutorial assumes your CPU supports virtualization and is enabled both in the BIOS and in your operating system. You need to install software on your local computer, which requires administrative privileges.

The operating system (OS) you are installing on is known as the host OS, which would be typically macOS or Windows for most users. The operating system you run in a VirtualBox virtual machine is known as the guest OS, which would be Ubuntu running live (no installation is done on host OS). A live install lets you try a Linux graphical desktop before you decide to commit to installing a Linux distribution.

#### Step 1 - Install VirtualBox

Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) for your operating system (macOS or Windows).

#### Step 2 - Download and unzip Ubuntu VirtualBox VM

Download the [Ubuntu VirtualBox VM for Intel/AMD](https://senecafts.senecacollege.ca/link/to4Ztj33rphUlHFGsgGETf) (requires MySeneca authentication).

Download the [Ubuntu VMware VM for Intel/AMD](https://senecafts.senecacollege.ca/link/exmCHYEOdASPqZu8SpXDxf) (requires MySeneca authentication).

  1. Move the downloaded VM zip file into a separate folder.
  2. Right-click on the downloaded VM zip file. **Do not double-click.**. 
  3. From the pop-up menu that appears, select "Extract All".
  4. Wait for the extraction to complete.
  5. Once complete, double-click on the new _Ubuntu-22.04.vbox_ file to automatically add it to VirtualBox.

#### Step 3 - Try Ubuntu

After you downloaded and unzipped the VirtualBox virtual machine (VM):

  1. Startup VirtualBox.
  2. From the Ubuntu VirtualBox VM, right click on Start.
  3. When Ubuntu VirtualBox VM starts up, click on "Try Ubuntu".
  4. After the Ubuntu desktop appears:
    
      1. Press the Windows key on your keyboard to show all applications.
      2. Select the terminal icon or type `terminal`.

  5. When the Terminal opens, run the following to connect to **matrix.senecacollege.ca**: (replace mysenecaID with your Seneca username)

      - `ssh MySeneca_user@matrix.senecacollege.ca`

### Graphical Desktop Linux on your local computer

Using the steps from the Live Linux installation above, you can use the following pre-configured images:

  - **VirtualBox image**: https://senecafts.senecacollege.ca/link/jfiXfRElQbFFHhGoACYvnV
  - **VMware Workstation/Fusion image**: https://senecafts.senecacollege.ca/link/72ob3VmXZbe85U8Lu9CFaN

Use the following credentials to log into the VM (includes sudo access):

  - **Username:** ubuntu
  - **Password:** ubuntu

Instructions to connect to `matrix.senecacollege.ca` using this method will be posted here, later this semester.

## References

**Knoppix:** For more information and to get the latest news about this Linux distribution visit: https://www.knopper.net/knoppix/index-en.html

**Ubuntu:** For more information and to get the latest news about this Linux distribution, visit: https://www.ubuntu.com/

## Attribution

These instructions were authored by [Mark Fernandes](mailto:mark.fernandes@senecacollege.ca) and fetched from the ICT webserver on 12 May 2022.

They were refactored for this wiki by Chris Johnson.
