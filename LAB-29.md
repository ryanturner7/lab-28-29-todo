401 JS --  Lab 29 Todo
===

## Submission Instructions
  * continue working from lab 28
  
## Learning Objectives  
* Students will learn to about composition vs inheritance
* Students will learn to compose react components using props

## Requirements  
#### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc** -- with the class .eslintrc file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- conating the froned code
* **src/main.js** -- containing the entire app
* **src/style** -- conating your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset 
* **src/style/_base.scss** -- base styles 
* **src/style/_layout.scss** -- base styles 
 
#### Feature Tasks 

###### NoteUpdateForm 
Create a NoteUpdateForm component that inherrits a notes through props and on submit is able to
update the Apps, state with an updated note.

###### Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View  
* Default view  
  * Display the notes content and a delete button
  * Display a delete button that will remove the Note from from the application's state
* Edit View 
  * Show the NoteUpdateForm and a Cancel Button
  * onNoteUpdateForm Submit or click of the cancel button it should switch back to the default view

###### App Component Tree
Your components should be nested in the following layout  
``` 
App
  NoteCreateForm
  NoteList
    NoteItem
      NoteUpdateForm
```

#### Test
* Test NoteCreateForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test NoteItem
  * Test the NoteItem's ability defiend to remote a note from the App's state
* Test NoteUpdateForm
  * Test the NoteUpdatesForm's ability to update a note in the apps state

####  Documentation  
Write a description of the project in your README.md
