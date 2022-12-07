# README

This template repository is set up for you to create and deploy an OER customized for Seneca College ITAS/SDDS. To create a repo based on this template:

1. Click on the green "Use this template" button near top right corner of code tab

2. You will see a page that will let you do some customization. Here are the settings you will want to pay attention to:

- **Owner** - by default, the owner is set to your account, thus the OER will be created under your github account. If you wish it to be part of the Seneca-ICTOER organization, change this from the drop down menu
- **Repository Name** - If the OER is used by just one course, the course code can be a good name for this repository. If the OER is used by multiple courses, it is best to use a descriptive name that is applicable for all courses that will use the OER
- **Public vs Private** - Your repository can be private but when notes are deployed, they will become public, the notes website will be public regardless of the privacy setting for this repository. Whether the repo is public or private can be changed later so if you are not sure you can start with repo being private and make the change once your repository is in a state where you wish to share it.
- **Include all branches** checkbox. It is recommended that this remains unchecked as it is unlikely that the other branches of this template repository will be useful to you.

This is a screenshot of the recommended set of settings for an initial repository:

![](https://seneca-ictoer.github.io/OERResources/OERTemplate/templatesettings.png)

Once you are happy with your settings, hit the "Create repository from template" button.

When you first create your repository, the deployment script will run automatically. However, it will likely fail as you will need to generate a repository secret for deploying the OER first.

To generate a repository secret for the deployment script:

1. Create a personal access token (PAT). Follow instructions found here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

   - Select repo scope for the token
   - Copy the PAT

2. Add the personal access token as a secret to your repo

   - Click Settings Tab
   - Select Secrets->Actions
     ![](https://seneca-ictoer.github.io/OERResources/OERTemplate/secrets1.png)
   - Create a new repository secret
   - Name the secret OER_DEPLOY
   - Paste the PAT from previous step into the Value box
     ![](https://seneca-ictoer.github.io/OERResources/OERTemplate/secrets2.png)

3. Go to the Actions Tab
   - You will likely see a red x beside a run labelled Initial commit
   - Click the Initial Commit link
   - Hit the rerun jobs button

## Files You Must Update:

- CNAME
  - CNAME needs to be changed to match the deployment url of your books. If your book is part of the ICTOER org, then change:
    `seneca-ictoer.github.io/oertemplate/` to `seneca-ictoer.github.io/yourRepoName/`
- package.json
  - Change the name field to match your repo name
- docusaurus.config.js
  - Multiple fields that refer to this template needs to change to refer to your repository

## Files You Should Review

- LICENSE.md - Current license is a generic license. Please update to suit your needs
- CONTRIBUTE.md - Rewrite to match your contribution workflow
- README.md - These instructions should modify to suit your OER's intentions

## Prettier

Remember to run prettier after you make changes to your files

## Writing Your OER

- To add content to your OER, edit the files in the docs folder.
- You can add folders and more md files if you wish
- Save, add, commit and push your updated files back into github
- Doing this will automatically start the deployment script which will build the Docusaurus based OER. The published URL should be what is stated in the CNAME file (although if you didn't change it there will be an error, the url can be found in the repos setting tab->pages)
- **The published page is public, even if your repo is private**
