# phd-student-reference-guide-assignment

#About the Project

The project is dedicated for developing a single-page web application that serves as a
knowledge base for MSR researchers. New PhD students join MSR research companies and get 
overwhelmed. They don't know what data sources exist, how to collect data, what analysis 
methods to use, or where to publish their work. This webpage will act as a reference 
guide for these students and the pre-existing researchers. 

The page is organized into tabs so students and researchers can switch between tabs without 
having to reload the page. 

The following tabs are available on the page: 

- **Data Sources:** platforms that provide appropriate data for software developers.
- **Collection Methods:** ways to gather that data, with their uses, pros, and cons.
- **Analysis Methods:** techniques for analyzing the collected data.
- **Publication Venues:** conferences and journals that publish MSR research.

The requirements behind the project are documented as user stories.

## Built With

- HTML, CSS, and JavaScript
- GitHub Actions for continuous integration and deployment
- GitHub Pages for hosting
- [jsdom](https://github.com/jsdom/jsdom) and Node.js's built-in test runner for automated tests


## Repository Structure
 
```
docs/requirements.md          User stories
src/index.html                Page structure and content
src/style.css                 Styling
src/script.js                 Tab switching
tests/navigation.test.js      Automated tests
tests/test_checklist.md       Manual test checklist
.github/workflows/ci.yml      CI/CD workflow
package.json                  Test dependencies and test command
```

## Running the Project
 
Open `src/index.html` in any web browser.

## Testing and CI/CD

The automated tests check that every section has a navigation button, that only the home section is 
visible when the page loads, that each button shows its section and hides the others, and that the Data Sources 
section lists every source from the requirements.

The GitHub Actions workflow runs the tests on every push and pull request. When changes are pushed to `main` and 
the tests pass, the workflow deploys the `src` folder to GitHub Pages. This way the live site will always show 
the latest merged work.

## Completed Work

**Milestone 1: Page Structure & Navigation**

- Created the HTML page with a home section and sections for the other four topics
- Added tab buttons that show the selected section and hide the others
- Organized the repository into `docs/`, `src/`, and `tests/`
- Made automated tests
- Set up CI/CD with GitHub Actions and deployment to GitHub Pages

**Milestone 2: Data Sources Content**
- Add all seven data sources with the kind of data each provides
- Format the content as a list
- Write a short description for each source

## Future Work

The remaining milestones are in the repository's milestone page.


**Milestone 3: Collection Methods Content**
 
- Add all collection methods
- Include what each method is used for, along with its pros and cons
- Format the list to match the Data Sources section

**Later milestones**
 
- **Analysis Methods Content:** add each method with its description and an example use case
- **Publication Venues Content:** add each venue with its type and relevance level
