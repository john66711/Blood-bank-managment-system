// Array to store donors
let donors = [];

// Sample blood units data
let bloodUnits = {
    'A+': 10,
    'A-': 8,
    'B+': 12,
    'B-': 7,
    'O+': 15,
    'O-': 5,
    'AB+': 4,
    'AB-': 3
};

// Function to display donors
function displayDonors() {
    const tbody = document.getElementById('donorsTableBody');
    tbody.innerHTML = ''; // Clear existing data

    donors.forEach(donor => {
        const row = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = donor.name;
        row.appendChild(nameTd);

        const bloodGroupTd = document.createElement('td');
        bloodGroupTd.textContent = donor.bloodGroup;
        row.appendChild(bloodGroupTd);

        const ageTd = document.createElement('td');
        ageTd.textContent = donor.age;
        row.appendChild(ageTd);

        tbody.appendChild(row);
    });
}

// Function to display blood units
function displayBloodUnits() {
    const ul = document.getElementById('bloodUnitsList');
    ul.innerHTML = '';

    for (const [group, units] of Object.entries(bloodUnits)) {
        const li = document.createElement('li');
        li.textContent = `${group}: ${units} units`;
        ul.appendChild(li);
    }
}

// Handle form submission
document.getElementById('donorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const bloodGroup = document.getElementById('bloodGroup').value.trim().toUpperCase();
    const age = document.getElementById('age').value.trim();

    if (name && bloodGroup && age) {
        // Add donor to array
        donors.push({ name, bloodGroup, age });

        // Update donors list
        displayDonors();

        // Clear form
        document.getElementById('donorForm').reset();

        // Update blood units if needed
        if (bloodUnits[bloodGroup] !== undefined) {
            bloodUnits[bloodGroup] += 1; // Assuming each donor adds 1 unit
        } else {
            bloodUnits[bloodGroup] = 1;
        }

        displayBloodUnits();
    }
});

// Initial display
window.onload = function() {
    displayDonors();
    displayBloodUnits();
};
