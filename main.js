const { event } = require('jquery')

// Globals constant variables
const apiURL = 'http://localhost:3000/notes'
const createNote = $('#create-note')
const viewNotes = $('#view-notes')

// const functions
const noteURL = id => apiURL + `/${id}`
const statusOK = status => status >= 200 && status < 300

function makeNote () {

}

function showAllNotes () {
  $('#view-notes').on('click', function () {
    $('#content-hook').replaceWith('')
    $.ajax({
      type: 'GET',
      url: apiURL,
      dataType: 'application/json',
      success: function (response) {
        response.json().then(notes => {
          for (const note of notes) {
            const id = note.id
            const title = note.title
            const body = note.body
            const newNode = makeNote(title, body, id)
            $('#content-hook').append(newNode)
          }
        })
      }
    })
  })
}

// Run Notes app
function addAllEventListeners () {
  $('#create-note-nav').on('click', function () {
    createNote.removeClass('hidden')
    createNote.addClass('visible')
    viewNotes.addClass('hidden')
    viewNotes.removeClass('visible')
  })
  $('#view-notes-nav').on('click', function () {
    createNote.addClass('hidden')
    createNote.removeClass('visible')
    viewNotes.addClass('hidden')
    viewNotes.removeClass('visible')
  })
}

addAllEventListeners()
showAllNotes()
