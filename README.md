# Bindle Bundle

A moving company

## Getting started
- Clone this repo

```shell
git clone https://github.com/ajalapraise/Bindle-bundle.git
```

- Create a new branch with a name relecting what you intend to work on

```shell
git checkout -b <branch-name>
```

- Install yarn if you don't have it already installed on your machine, it is the package manager we're using in this project.

```shell
npm install -g yarn

```

- Get all the project dependencies

```shell
pnpm i
```

- Run the command below to start the dev server. The local address should be **localhost:3000**
```shell
yarn dev
```

- When you're done with your changes, send a PR to the dev branch.

## Reviewing an open PR

To review an open PR locally &mdash; on your machine, follow the steps below

Fetch the PR branch: Use the PR number to fetch the branch:

```bash
git fetch origin pull/<PR_NUMBER>/head:<BRANCH_NAME>
```

Replace:
- `<PR_NUMBER>` with the Pull Request number.
- `<BRANCH_NAME>` with a name you'd like to give the branch locally.

For example:
```bash
git fetch origin pull/42/head:ajala-dev
```

Check out the fetched branch:

```bash
git checkout ajala-dev
```

## Tools

These are the tools (or tech) we're using in this repo. The list would increase as we progress.

- [ChakraUI v2](https://v2.chakra-ui.com/) for our design system and UI components. Note we're using ChakraUI's v2 as opposed to the latest version 3 which includes a lot of breaking changes that are not backward compatible
- Icons set from [Lucide](https://lucide.dev/icons/)
- Slider carousel from [embbla](https://www.embla-carousel.com/)


