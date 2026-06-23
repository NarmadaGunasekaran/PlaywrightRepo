# PlaywrightRepo

End-to-end UI test automation using [Playwright](https://playwright.dev/), including login validation and cross-browser parallel test execution. CI is configured via GitHub Actions.

## 📁 Project Structure

```
PlaywrightRepo/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI workflow
├── tests/
│   ├── loginValidation.spec.js              # Login flow + product text validation
│   └── crossBrowserParallelValidation.spec.js # Parallel cross-browser tests
├── playwright.config.js            # Playwright configuration
├── package.json
├── package-lock.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/NarmadaGunasekaran/PlaywrightRepo.git
cd PlaywrightRepo
npm install
npx playwright install
```

## ▶️ Running Tests

Run all tests headless:
```bash
npx playwright test
```

Run all tests with the browser UI visible:
```bash
npx playwright test --headed
```

Run a specific test file:
```bash
npx playwright test tests/loginValidation.spec.js --headed
```

View the last HTML report:
```bash
npx playwright show-report
```

## 🧪 Test Coverage

- **loginValidation.spec.js** — Logs in and verifies the first product card text (e.g. `ADIDAS ORIGINAL`) loads correctly, using dynamic waits instead of fixed timeouts.
- **crossBrowserParallelValidation.spec.js** — Runs validation checks in parallel across multiple browsers (Chromium, Firefox, WebKit).

## ⚙️ CI/CD

Tests run automatically on push/PR via GitHub Actions, defined in `.github/workflows/playwright.yml`.

## 📝 Notes

- Uses `waitForLoadState('networkidle')` and explicit `waitFor()` calls to handle dynamic content loading reliably instead of relying on fixed test timeouts.
