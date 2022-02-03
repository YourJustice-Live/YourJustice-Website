<h1 align="center" style="margin-top: 1em; margin-bottom: 3em;">
   <p>👋 Welcome to YourJustice!</p>
</h1>

This is the repo for the [yourjustice.life](https://www.yourjustice.life/) website, and we want it to be the best resource for YourJustice community (except YourJustice itself).

This website can be improved and changed by the contribution of community members, who add content, provide feedback, help this website to work.

## So welcome, and let’s make justice great again!

<hr style="margin-top: 3em; margin-bottom: 3em;">

# How to contribute

This project follows the [all-contributors](https://allcontributors.org/docs/en/overview) specification. Contributions of any kind welcome!

## How updates are made to YourJustice.life:

### Submit an issue

- Create a [new issue](https://github.com/YourJustice-Live/yourjustice-live-website/issues/new).
- Comment on the issue (if you'd like to be assigned to it) - that way [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).

### Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo).

### Set up your local environment (optional)

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. Set up your development environment

2. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:

```
$ git clone git@github.com:[your_github_handle]/yourjustice-live-website.git && cd yourjustice-live-website
```

If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```
$ git remote add upstream https://github.com/YourJustice-Live/yourjustice-live-website.git
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```
$ git checkout dev
$ git fetch upstream
$ git merge upstream/dev
```

3. Install dependencies

```
$ yarn install
```

### Make awesome changes!

1. Create new branch for your changes

```
$ git checkout -b new_branch_name
```

2. Start developing!

```
$ yarn dev
```

- Open this directory in your favorite text editor / IDE, and see your changes live by visiting `localhost:3000` from your browser
- Pro Tip: Explore scripts within `package.json` for more build options

3. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).

```
$ git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```
$ git push
```

### Submit your PR

- After your changes are committed to your GitHub fork, submit a pull request (PR) to the `dev` branch of the `YourJustice-Live/yourjustice-live-website.git` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`
- Why not say hi and draw attention to your PR in [our discord server](https://discord.gg/sqbuwGbU)?

### Wait for review

- The website team reviews every PR
- Acceptable PRs will be approved & merged into the `dev` branch

## Translation

_The Translation Program is an initiative to translate yourjustice.life into different languages and make the website accessible to people from all over the world._

<hr style="margin-top: 3em; margin-bottom: 3em;">

## The YourJustice.life website stack

- [Node.js](https://nodejs.org/)
- [Yarn package manager](https://yarnpkg.com/cli/install)
- [Next.js](https://nextjs.org/docs/getting-started)
- [Markdown](https://www.markdownguide.org/getting-started/)
- [SendGrid](https://sendgrid.com/)

### Code structure

| Folder                                   | Primary use                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/components`                                  | Next.js components that do not function as standalone pages              |
| `/data`                            | Markdown(.md) files for site content                                                                                         
| `/pages`                        | Static pages         |
| `/public`                              | Image assets     |
| `/styles`                             | Root level css styling                              |
| `/utils`                              | Custom utility scripts                  |

<hr style="margin-top: 3em; margin-bottom: 3em;">
