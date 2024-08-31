// script.js

let events = JSON.parse(localStorage.getItem("events")) || [];
let editIndex = -1;

const eventNameInput = document.getElementById("eventName");
const eventDateInput = document.getElementById("eventDate");
const eventDescriptionInput = document.getElementById("eventDescription");
const submitButton = document.getElementById("submit");
const updateButton = document.getElementById("update");
const cancelButton = document.getElementById("cancel");

function fillTable() {
    const tbody = document.getElementById("output");
    tbody.innerHTML = ""; // Clear existing content
    events.forEach((event, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.description}</td>
            <td class="actions">
                <i class="fas fa-edit edit" onclick="editEvent(${index})"></i>
                <i class="fas fa-trash delete" onclick="deleteEvent(${index})"></i>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function addEvent() {
    const name = eventNameInput.value.trim();
    const date = eventDateInput.value;
    const description = eventDescriptionInput.value.trim();

    if (!name || !date || !description) {
        alert("Please fill all fields.");
        return;
    }

    events.push({ name, date, description });
    localStorage.setItem("events", JSON.stringify(events));
    clearInputs();
    fillTable();
}

function editEvent(index) {
    editIndex = index;
    const event = events[index];
    eventNameInput.value = event.name;
    eventDateInput.value = event.date;
    eventDescriptionInput.value = event.description;
    submitButton.classList.add("hidden");
    updateButton.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
}

function updateEvent() {
    if (editIndex === -1) return;

    const name = eventNameInput.value.trim();
    const date = eventDateInput.value;
    const description = eventDescriptionInput.value.trim();

    if (!name || !date || !description) {
        alert("Please fill all fields.");
        return;
    }

    events[editIndex] = { name, date, description };
    localStorage.setItem("events", JSON.stringify(events));
    clearInputs();
    fillTable();
    resetFormState();
}

function deleteEvent(index) {
    if (!confirm("Are you sure you want to delete this event?")) return;

    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    fillTable();
}

function clearInputs() {
    eventNameInput.value = "";
    eventDateInput.value = "";
    eventDescriptionInput.value = "";
}

function resetFormState() {
    editIndex = -1;
    submitButton.classList.remove("hidden");
    updateButton.classList.add("hidden");
    cancelButton.classList.add("hidden");
}

submitButton.addEventListener("click", addEvent);
updateButton.addEventListener("click", updateEvent);
cancelButton.addEventListener("click", resetFormState);

// Initial table fill
fillTable();