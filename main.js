/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

let notes = []

const notes1 = {
    id: 1,
    note: "This is note 1",
    author: "Ethan",
    date: "08/02/2022",
    topics: ["Stuff", "Things", "More Stuff", "More Things"]
}

const notes2 = {
    id: 2,
    note: "This is note 2",
    author: "Ethan",
    date: "08/02/2022",
    topics: ["Stuff", "Things", "More Stuff", "More Things"]
}

const notes3 = {
    id: 3,
    note: "This is note 3",
    author: "Ethan",
    date: "08/02/2022",
    topics: ["Stuff", "Things", "More Stuff", "More Things"]
}

const note4 = {
    id: 4,
    note: "This is note 4",
    author: "Ethan",
    date: "08/02/2022",
    topics: ["Stuff", "Things", "More Stuff", "More Things"]
}

const note5 = {
    id: 5,
    note: "This is note 5",
    author: "Ethan",
    date: "08/02/2022",
    topics: ["Stuff", "Things", "More Stuff", "More Things"]
}

const note6 = {
    id: 6,
    note: "This is note 6",
    author: "Ethan",
    date: "08/02/2022",
    topics: ["Stuff", "Things", "More Stuff", "More Things"]
}

notes.push(notes1, notes2, notes3, note4, note5, note6)

for (const note of notes) {
    for (const topic of notes) {
        console.log(note.note, topic.topics)
    }
}