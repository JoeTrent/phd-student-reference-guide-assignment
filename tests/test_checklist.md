# Manual Test Checklist

Open `src/index.html` in a browser before running these tests.

## Test 1: Every section has a navigation button
1. Look at the navigation bar at the top of the page.

**Expected:** There are buttons for Home, Data Sources, Collection Methods, Analysis Methods, and Publication Venues.

## Test 2: Only the home section shows on load
1. Open or refresh the page.

**Expected:** Only the Reference Guide (home) section is visible. All other sections are hidden.

## Test 3: Each button shows its section and hides the others
1. Click each navigation button in turn.

**Expected:** Each click shows only the matching section. Every other section is hidden.

## Test 4: Clicking the same button twice keeps its section visible
1. Click "Data Sources".
2. Click "Data Sources" again.

**Expected:** The Data Sources section is still visible.

## Test 5: Data Sources lists every source from the meeting notes
1. Click "Data Sources".

**Expected:** The section lists GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, and npm Registry.
