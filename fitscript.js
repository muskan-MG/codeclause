let totalDuration = 0;

function addExercise() {
    // Get input values and trim whitespace
    const exerciseName = document.getElementById("exerciseName").value.trim();
    const exerciseDuration = parseInt(document.getElementById("exerciseDuration").value.trim());

    // Validate input
    if (exerciseName && !isNaN(exerciseDuration) && exerciseDuration > 0) {
        const exerciseList = document.getElementById("exerciseList");
        const listItem = document.createElement("li");
        listItem.textContent = '${exerciseName} - ${exerciseDuration} min';
        exerciseList.appendChild(listItem);

        // Update the total duration
        totalDuration += exerciseDuration;
        document.getElementById("totalDuration").textContent = totalDuration;

        // Clear the input fields
        document.getElementById("exerciseName").value = '';
        document.getElementById("exerciseDuration").value = '';
    } else {
        alert("Please enter a valid exercise name and duration.");
    }
}