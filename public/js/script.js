// ======================================================
// Student Management System
// script.js
// Developed by Shiv Yadav
// ======================================================

// ======================================================
// Search Student
// ======================================================

function searchStudent() {

    const input = document.getElementById("search");

    if (!input) return;

    const filter = input.value.toUpperCase();

    const table = document.querySelector("table");

    if (!table) return;

    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let found = false;

        const cells = rows[i].getElementsByTagName("td");

        for (let j = 0; j < cells.length - 1; j++) {

            if (cells[j].textContent.toUpperCase().includes(filter)) {

                found = true;
                break;

            }

        }

        rows[i].style.display = found ? "" : "none";

    }

}

// ======================================================
// Delete Confirmation
// ======================================================

function confirmDelete(name) {

    return confirm(
        `Are you sure you want to delete "${name}"?`
    );

}

// ======================================================
// Run After Page Loads
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------
    // Auto Focus Username
    // ----------------------------------

    const username = document.querySelector("input[name='username']");

    if (username) {

        username.focus();

    }

    // ----------------------------------
    // Phone Number Validation
    // ----------------------------------

    const phone = document.querySelector("input[name='phone']");

    if (phone) {

        phone.addEventListener("input", () => {

            phone.value = phone.value.replace(/\D/g, "");

            if (phone.value.length > 10) {

                phone.value = phone.value.slice(0, 10);

            }

        });

    }

    // ----------------------------------
    // Form Validation & Loading Button
    // ----------------------------------

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", () => {

            // Trim all text fields automatically
            const inputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='password'], input[type='tel']");

            inputs.forEach(input => {

                input.value = input.value.trim();

            });

            const button = form.querySelector("button[type='submit']");

            if (!button) return;

            button.disabled = true;

            button.innerHTML =
                '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';

        });

    });

    // ----------------------------------
    // Auto Close Alerts
    // ----------------------------------

    const alerts = document.querySelectorAll(".alert");

    alerts.forEach(alert => {

        setTimeout(() => {

            if (alert) {

                const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);

                bsAlert.close();

            }

        }, 4000);

    });

});