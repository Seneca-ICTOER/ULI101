---
id: howtoaccessmatrix
title: How To Access Matrix
sidebar_position: 2
description: Tutorial For Students to Access the Seneca Matrix
---

# HOWTO: Access Your Matrix Account

## SSH on Seneca Lab PCs

1. Boot up the PC normally, by default it will boot to Windows.
2. Login to Windows using your MySeneca account.
3. Find on the desktop the Seneca MyApps and double-click it to open.
4. Find the search bar on the top left of the webpage (not the Firefox web browser search), similar to Fig. 1.
5. Start typing "SSH Secure Shell Connection Client"
6. Hover over the SSH Secure Shell Client thumbnail and then click "Launch"
7. Once the application opens click the "Quick Connect" button.
8. Provide the following information:
    - **Host Name:** matrix.senecacollege.ca
    - **Username:** _(your Matrix/MySeneca username)_
9. Click connect.
10. Enter your password when asked and answer Yes to any other popups.
11. You should now be connected to Matrix.

![Search Apps](/img/MyApps-Search.jpg "Search Apps")

## Home: SSH from Windows

1. **Connect to Seneca's Student VPN.** (To install access to the VPN, go here: https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1025/student-vpn)
2. Go to https://ict.senecacollege.ca/~uli101
3. Under the details of Week 1 you should see "Links to Windows SSH clients (Access Matrix from Home)".
4. Left click one of the clients, and download to your desktop.
5. If you chose PuTTY you will have downloaded a .exe file (there is no need to install), the others need installation by double-clicking. If you have problems during installation, you may need to right-click and select "Run as administrator".
6. Double-click the icon that was created. If you chose SSH/SFTP, double-click SSH, there is no need for the SFTP icon so you may as well delete it.
7. A window will open that asks for connection information.
8. For Putty, provide the following information:
    - **Host Name:** username@matrix.senecacollege.ca
    - Replace username with your Matrix/MySeneca username then click "Open".
9. For SSH, use **Host Name** matrix.senecacollege.ca, provide your User Name, then click "Connect".
10. For Bitvise, use **Host** matrix.senecacollege.ca, provide your Username, then click "Log in".
11. Enter your password when prompted. You will not see the cursor move but you are indeed entering your password. (Answer "yes" to any questions that you must answer).
12. You are now connected to the Matrix server. You can work on your assignments or access your files

## Home: SSH from macOS

1. **Connect to Seneca's Student VPN.** (To install access to the VPN, go here: https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1025/student-vpn)
2. In a new Finder window, open: Applications > Utilities > Terminal
3. On the command line, type:
    - `ssh username@matrix.senecacollege.ca`
4. Enter your password when prompted.
5. Answer yes to any questions it may ask you.
6. You should now be connected to Matrix. You can work on your assignments or access your files.

## Home: SSH from Linux

1. **Connect to Seneca's Student VPN.** (To install access to the VPN, go here: https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1025/student-vpn)
2. Open up the "Terminal" (the command line). Choose Applications > System Tools > Terminal.
3. On the command line, type:
    - `ssh username@matrix.senecacollege.ca`
4. Enter your password when prompted. You will not see the cursor move but you are indeed entering your password.
    * Note: If you are asked about the "key", type in "yes".
5. You should now be connected to Matrix. You can work on your assignments or access your files.
