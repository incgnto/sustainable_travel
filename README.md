# Sustainable Travel Tips

> An application to help travelers make environmentally conscious decisions. Users can select sustainability tips, see their overall sustainability score, and schedule reminders.

## Features

- **Select Sustainability Tips:**
  Choose travel tips that align with your environmental goals.

- **Sustainability Score:**
  View your sustainability score as a progress bar with messages.

- **Reminder Scheduler:**
  Set an email reminder to follow the selected tips.

- **Help Modal:**
  Learn how to use the app with a helpful pop-up guide.

## Tech Stack

- **Frontend:** Vue 3, TypeScript
- **Testing:** Playwright
- **Styling:** Bootstrap CSS

## Project Structure

```plaintext
src/
├── assets/
├── components/
│   ├── EmailForm.vue
│   ├── HelpModal.vue
│   ├── ScoreBar.vue
│   ├── SustainabilityTip.vue
│   └── TipsGrid.vue
├── router/
│   └── index.ts
├── views/
│   └── HomeView.vue
├── App.vue
└── main.ts

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

git clone https://github.com/incgnto/sustainable-travel.git
cd sustainable-travel-tips
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
