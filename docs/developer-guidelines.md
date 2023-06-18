# Figura Developer Guidelines

Welcome, Figura developer! These guidelines will help you contribute effectively to the Figura component library and ensure consistency and best practices throughout the project.

Before continuing we recommend reading the code of conduct first @ https://github.com/mbb10324/figura/tree/master/docs/code-of-conduct.md

When contributing to the react-figura library, it is essential to keep the principles defined below in mind. These principles will be the guidelines that reviewers follow during the review process. Therefore, developers are expected to consistently consider them throughout their development process and ensure that their code aligns with these principles.

Table of contents:

1. Performance
2. Customizability
3. Validation
4. State
5. Styling
6. Code Formatting and Linting
7. Testing Best Practices
8. Branching and Git Workflow

## Performance
Maintaining optimal performance is a key consideration for Figura. When contributing to Figura's performance:

- Keep the bundle size as small as possible by avoiding unnecessary dependencies and features.
- Optimize component rendering to minimize performance bottlenecks.
- Perform thorough performance testing and profiling to validate the impact of your changes.
- Often, the most valuable contributions are those that result in the removal of more lines than the addition of new ones.

## Customizability
Figura prioritizes customizability to cater to various project requirements. When contributing to Figura's customizability:

- Provide additional style props whenever necessary to enable more flexible customization options.
- Follow existing patterns and conventions for defining and utilizing style props in Figura components.
- Avoid introducing breaking changes to the existing style props unless absolutely necessary.

## Validation
Figura's custom validation capabilities are crucial for robust form handling. When working on custom validation in Figura:

- Enhance the existing validation props to cover common validation scenarios and edge cases.
- Follow established validation patterns and industry best practices.
- Write clear and concise documentation for the custom validation features you introduce.
- Improve error messages and feedback to provide meaningful information to users.

## State
Figura utilizes React's useReducer hook to manage form state effectively. When contributing to Figura's single form state:

- Ensure your changes do not disrupt the existing form state management mechanism.
- Refactor or enhance the form components while maintaining compatibility with the single form state approach.
- Write comprehensive tests to validate the behavior and stability of form state management.

## Styling
Consistent and visually appealing styling is important for Figura's components. When working on styling-related tasks:

- Adhere to the established design system and component styling guidelines.
- Leverage existing utility classes, CSS frameworks, or CSS-in-JS libraries to maintain consistency and ease of use.
- Consider responsiveness and accessibility while applying styles to ensure compatibility across devices.

## Code Formatting and Linting
Figura relies on Create React App's built-in ESLint configuration By following these guidelines, we can ensure that the Figura codebase remains consistent, readable, and aligned with the project's established standards. Please keep the following guidelines in mind:

- ESLint Configuration: Figura uses the ESLint configuration provided by Create React App, which includes rules for code quality and style. Make sure your code adheres to these rules.
- Double Quotes: All strings in Figura should use double quotes. This helps maintain consistency throughout the codebase. ESLint will enforce this rule, and merge requests will not be approved if single quotes or backticks are used for strings.
- Semicolons: Figura enforces the use of semicolons at the end of each statement. ESLint will flag missing semicolons as errors. Please ensure your code includes semicolons appropriately.
- Third-Party Linters: To maintain consistency and avoid conflicts, Figura does not allow the use of third-party linters in merge requests. Please ensure that only the built-in ESLint is used for linting your code.
- Code Beautifiers: The use of code beautifiers like Prettier is not allowed in Figura. Merge requests that include automated code formatting from external tools will not be approved. Instead, rely on the ESLint configuration and manual code formatting to maintain consistency.


## Testing Best Practices
Testing is a critical aspect of ensuring the quality, stability, and reliability of Figura components. To maintain high standards of testing, we utilize the following technologies and best practices:

### Unit and Integration Testing with React Testing Library and Jest

- Thorough Testing: Write comprehensive unit and integration tests for your code changes. Test both positive and negative scenarios, handle edge cases, and cover different user interactions. Ensure that your tests cover critical functionalities and use cases.
- Component Isolation: Aim to test components in isolation to ensure accurate and focused testing. Use appropriate mocking techniques to isolate external dependencies and provide controlled testing environments.
- Clear and Descriptive Test Cases: Use descriptive test names that clearly indicate the purpose and scenario of each test case. Write self-explanatory tests that are easy to understand, maintain, and debug.
- Testing Library Guidelines: Familiarize yourself with the React Testing Library and Jest APIs and best practices. Follow the recommended patterns for querying, rendering, and interacting with components, as well as assertions and matchers provided by Jest.
- Code Coverage: Strive to maintain a high code coverage percentage in Figura's unit and integration tests. Aim for a coverage percentage of at least 80% or higher. This ensures that critical parts of the codebase are thoroughly tested and helps identify areas that need additional test coverage.

### End-to-End Testing with Cypress

- Comprehensive End-to-End Tests: Use Cypress to write comprehensive end-to-end tests that cover critical user flows and functionalities of Figura. Test scenarios that involve multiple components, user interactions, and integration with external services.
- Realistic User Scenarios: Design end-to-end tests that closely mimic real user interactions and workflows. Test common use cases, edge cases, and error handling to ensure Figura functions as expected in different scenarios.
- Stable Test Environment: Set up a stable and reliable test environment for Cypress tests. Use fixtures, stubs, and custom commands to ensure consistent test data and interactions. Mock external services or dependencies when necessary to create reliable test conditions.
- Efficient Test Execution: Optimize test execution by leveraging Cypress's capabilities, such as parallelization and selective test execution. Organize tests into separate files or test suites based on functionality or feature areas to improve test execution efficiency.
- Visual Testing: Consider incorporating visual testing techniques, such as using Cypress's screenshot diffing capabilities, to catch visual regressions and ensure consistent UI rendering across different scenarios.

Remember, testing is a collaborative effort, and we encourage all developers to actively participate in testing and maintaining a high-quality codebase. By following these best practices, we can ensure the reliability and stability of Figura for all users.

## Branching and Git Workflow
At Figura, we follow a collaborative Git workflow to ensure smooth collaboration and effective version control. Here are the guidelines for branching, commit messages, and pull requests:

### Branching Strategy

- Master Branch: The master branch serves as the mainline development branch and represents the latest stable version of Figura. All code in the master branch should be production-ready.
- Feature Branches: When working on new features or enhancements, create a new branch based on the master branch. Name the branch using a descriptive and concise format, such as feature/{feature-name}. For example, feature/user-authentication.
- Bug Fix Branches: When addressing bugs or issues, create a new branch based on the master branch. Name the branch using a descriptive and concise format, such as bugfix/{issue-description}. For example, bugfix/form-validation-error.
- Release Branches: If necessary, create release branches for specific versions or milestones. Release branches help isolate changes related to a specific release and allow for further testing and stabilization. Name the branch using a format like release/{version-number}. For example, release/1.0.0.

### Commit Messages

- Descriptive and Concise: Write clear and concise commit messages that describe the purpose and context of your changes. Start with a capitalized verb in the imperative tense, such as "Add," "Fix," "Update," or "Refactor." For example, "Add user authentication component" or "Fix form validation error handling."
- Commit Scope: If your changes impact a specific component, module, or functionality, include the scope in square brackets at the beginning of the commit message. For example, "[Button] Update hover styles" or "[Form] Fix validation error message positioning."
- Separate Concerns: Avoid mixing unrelated changes in a single commit. Each commit should focus on a specific logical change or feature.

### Pull Requests
- Descriptive Pull Request Titles: Use descriptive titles for your pull requests that summarize the changes or feature being introduced. Be clear and concise in your title to provide a quick overview for reviewers.
- Detailed Descriptions: Provide detailed descriptions in your pull requests, explaining the purpose, context, and implementation details of the changes. Include any relevant links, references, or screenshots to assist reviewers in understanding the changes.
- Reviewers and Assignees: Assign appropriate reviewers to your pull requests who are knowledgeable about the codebase and the specific changes being made. Assignees should be the developers responsible for the pull request.
- Addressing Feedback: Be responsive to feedback and suggestions provided by reviewers. Address all comments and iterate on the changes until the pull request is ready for merging.
- Pull Request Review: Participate actively in reviewing other developers' pull requests, providing constructive feedback and suggestions. Help ensure the quality, consistency, and adherence to guidelines in the codebase.

Remember, our Git workflow is designed to facilitate collaboration and maintain a clean and stable codebase. By following these guidelines, we can streamline the development process and ensure the integrity of Figura's codebase.





