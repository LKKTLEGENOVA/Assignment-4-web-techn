// Function to change background color
function changeBgColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to show an alert
function showAlert() {
    alert('Welcome to my interactive portfolio!');
}

// Function to change the image
function changeImage() {
    const images = ['./img/photo.jpg', './img/tazy.jpg', './img/sfinks.jpg', './img/mosque.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('randomImage').src = randomImage;
}
//To DO list
// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("You must type something!");
        return;
    }

    // Create list item for the task
    const li = document.createElement("li");
    li.innerHTML = taskValue;

    // Add click event to toggle completion
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // Add a "delete" button to the task
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        li.remove();
    };

    // Append the delete button to the task item
    li.appendChild(deleteButton);

    // Add the task to the list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    taskInput.value = "";
}


// Function to sort numbers
function sortNumbers() {
    const numbersInput = document.getElementById('numbersInput').value;
    const sortOrder = document.getElementById('sortOrder').value;

    // Split the input by commas and trim extra spaces
    let numbersArray = numbersInput.split(',').map(num => num.trim());

    // Validate the input: Ensure only numbers are entered
    for (let i = 0; i < numbersArray.length; i++) {
        if (isNaN(numbersArray[i]) || numbersArray[i] === '') {
            alert('Please enter a valid series of numbers separated by commas.');
            return;
        }
    }

    // Convert the strings to numbers
    numbersArray = numbersArray.map(Number);

    // Sort the array in ascending or descending order
    numbersArray.sort((a, b) => sortOrder === 'asc' ? a - b : b - a);

    // Display the sorted numbers
    document.getElementById('sortedNumbers').textContent = numbersArray.join(', ');
}


// Display element
const display = document.getElementById('display');

// Function to clear the entire display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append characters to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to calculate the result of the entered expression
function calculate() {
    try {
        let expression = display.value;

        // Handling exponentiation
        if (expression.includes('^')) {
            let parts = expression.split('^');
            display.value = Math.pow(parts[0], parts[1]);
        } else {
            display.value = eval(expression);
        }
    } catch (error) {
        alert('Invalid expression');
    }
}
function calculateTax() {
    // Get the car price from the input
    let price = document.getElementById('price').value;
    
    // Check if input is valid
    if (price === '' || price <= 0) {
        alert("Please enter a valid price");
        return;
    }

    // Parse the price to a number
    price = parseFloat(price);

    let tax = 0;
    let total = 0;

    // Calculate tax based on the car price
    if (price > 10000) {
        tax = price * 0.25;
    } else if (price >= 5000 && price <= 10000) {
        tax = price * 0.20;
    } else {
        tax = price * 0.15;
    }

    // Calculate the total price (price + tax)
    total = price + tax;

    // Display the result
    document.getElementById('result').innerHTML = `
        Car Price: $${price.toFixed(2)} <br>
        Tax: $${tax.toFixed(2)} <br>
        Total Price (including tax): $${total.toFixed(2)}
    `;
}
