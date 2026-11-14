// Reusable Toast Notification Function

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.className = "show";

    setTimeout(function() {

        toast.className = "";

    }, 3000);

}
const prices = {

            "RCB vs CSK": {
                General: 800,
                Premium: 1500,
                VIP: 3000
            },

            "MI vs KKR": {
                General: 1000,
                Premium: 2000,
                VIP: 4000
            },

            "SRH vs RR": {
                General: 700,
                Premium: 1400,
                VIP: 2800
            },

            "DC vs PBKS": {
                General: 900,
                Premium: 1800,
                VIP: 3500
            },

            "GT vs LSG": {
                General: 800,
                Premium: 1600,
                VIP: 3200
            }

        };



      // Select Match and Scroll to Booking Form

function selectMatch(matchName) {

    document.getElementById("match").value = matchName;

    updateSummary();

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast(matchName + " selected successfully!");

}



        // Update Booking Summary

        function updateSummary() {

            let match = document.getElementById("match").value;

            let stand = document.getElementById("stand").value;

            let quantity = Number(
                document.getElementById("quantity").value
            ) || 0;


            // Get Price Based on Selected Match and Stand

            let price = prices[match]?.[stand] || 0;


            // Calculate Total Amount

            let total = price * quantity;


            // Display Summary

            document.getElementById("summaryMatch").textContent =
                match || "Not Selected";

            document.getElementById("summaryStand").textContent =
                stand || "Not Selected";

            document.getElementById("summaryQuantity").textContent =
                quantity;

            document.getElementById("price").textContent =
                price;

            document.getElementById("total").textContent =
                total;

        }



        // Filter Matches Based on Team

        function filterMatches() {

            let filter = document.getElementById("teamFilter").value;

            let rows = document.querySelectorAll("#matchTable tr");


            rows.forEach(function(row) {

                let teams = row.cells[1].textContent;

                if (filter === "All" || teams.includes(filter)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        }



        // Confirm Ticket Booking

        document.getElementById("bookingForm").addEventListener(
            "submit",

            function(event) {

                event.preventDefault();


                // Get User Input

                let match = document.getElementById("match").value;

                let stand = document.getElementById("stand").value;

                let quantity = Number(
                    document.getElementById("quantity").value
                );


                // Validate Ticket Quantity

                if (
                    !Number.isInteger(quantity) ||
                    quantity < 1 ||
                    quantity > 10
                ) {

                    alert("Please enter between 1 and 10 tickets.");

                    return;

                }


                // Calculate Correct Ticket Price

                let price = prices[match]?.[stand];


                if (price === undefined) {

                    alert("Please select a valid match and stand.");

                    return;

                }


                let total = price * quantity;


                // Generate Booking ID

                let bookingID = "IPL" + Date.now().toString().slice(-6);


                // Create New Table Row

                let row = document.createElement("tr");


                // Booking Details

                let bookingDetails = [

                    bookingID,

                    match,

                    stand,

                    quantity,

                    "₹" + total

                ];


                // Insert Booking Details into Table

                bookingDetails.forEach(function(value) {

                    let cell = document.createElement("td");

                    cell.textContent = value;

                    row.appendChild(cell);

                });


                // Add Booking to My Bookings

                document.getElementById("bookingRecords").appendChild(row);


                // Show Booking Confirmation

showToast(
    "Booking Successful! Booking ID: " + bookingID +
    " | Total Amount: ₹" + total);


                // Reset Form

                this.reset();


                // Reset Booking Summary

                updateSummary();

            }

        );