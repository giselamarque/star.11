const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

const getNotes = () => {
    return new Promise((resolve, reject) => {
        fs.readFile
    })
}

// // If note with an id of `note.id` exists in `db.json`...
// // ...update the note with new properties
// // Otherwise...
// // ...add the note to the array in `db.json`
const saveNote = note =>
    fetch('/api/notes', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    });

// // Delete the note with an id equal to `id`
const deleteNote = id =>
    fetch(`/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    });

// // Set `activeNote` and display it
const handleNoteView = () => {
    activeNote = JSON.parse(event.target.getAttribute('data-note'));
    renderActiveNote();
}

// // Sets the `activeNote` to and empty object and allows the user to enter a new note
const handleNewNoteView = () => {
    activeNote = {};
    renderActiveNote();
}

// // Update the `db.json` file with the new array of notes
const handleNoteSave = () => {
    const newNote = {
        title: noteTitle.value,
        text: noteText.value
    };

    saveNote(newNote).then(() => {
        getAndRenderNotes();
        renderActiveNote();
    });
}

// // Delete the clicked note
const handleNoteDelete = event => {
    // prevents the click listener for the list from being called when the button inside of it is clicked
    event.stopPropagation();

    const note = event.target;
    const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

    if (activeNote.id === noteId) {
        activeNote = {};
    }

    deleteNote(noteId).then(() => {
        getAndRenderNotes();
        renderActiveNote();
    });
}

// // Sets the `activeNote` to the note object with the given id
const handleNoteEdit = event => {
    const note = event.target;
    const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;
    activeNote = JSON.parse(note.parentElement.getAttribute('data-note'));
    renderActiveNote();
}

// // If a note's title or text are empty, hide the save button
// // Otherwise show it
const handleRenderSaveBtn = () => {
    if (!noteTitle.value.trim() || !noteText.value.trim()) {
        hide(saveNoteBtn);
    } else {
        show(saveNoteBtn);
    }
}

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
