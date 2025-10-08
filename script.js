// Get form and table body
const donorForm = document.getElementById('donorForm');
const donorTableBody = document.querySelector('#donorTable tbody');

// Initialize an array to store donors
let donors = [];

// Handle form submission
donorForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const bloodGroup = document.getElementById('bloodGroup').value;
    const contact = document.getElementById('contact').value.trim();
    const location = document.getElementById('location').value.trim();

    // Basic validation
    if (!name || !age || !bloodGroup || !contact || !location) {
        alert('Please fill all fields.');
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        alert('Please enter a valid 10-digit contact number.');
        return;
    }

    // Create donor object
    const donor = {
        name,
        age,
        bloodGroup,
        contact,
        location
    };

    // Add to donors array
    donors.push(donor);

    // Update table
    addDonorToTable(donor);

    // Reset form
    donorForm.reset();
});

// Function to add donor to table
function addDonorToTable(donor) {
    const row = document.createElement('tr');

    for (const key in donor) {
        const cell = document.createElement('td');
        cell.textContent = donor[key];
        row.appendChild(cell);
    }

    donorTableBody.appendChild(row);
}
