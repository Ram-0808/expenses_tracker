let totalAmount = 0;

function addExpense() {
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (description === "" || category === "" || isNaN(amount) || amount <= 0) {
        alert("Please fill out all fields with valid values.");
        return;
    }

    // Update total amount
    totalAmount += amount;
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);

    // Add new expense to the list
    const expenseList = document.getElementById("expense-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${description} - ${category}: $${amount.toFixed(2)}`;

    // Append item to the expense list
    expenseList.appendChild(listItem);

    // Clear input fields
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}
