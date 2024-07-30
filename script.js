document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('countDisplay');
    const historyList = document.getElementById('historyList');
    const historyModal = document.getElementById('historyModal');
    const closeModal = document.querySelector('.close');

    let count = 0;
    let history = [];

    // Update the count display
    function updateDisplay() {
        countDisplay.textContent = `Count: ${count}`;
    }

    // Add current count to history
    function addToHistory() {
        history.push(count);
        updateHistoryList();
    }

    // Update history list
    function updateHistoryList() {
        historyList.innerHTML = ''; // Clear existing list
        history.forEach((value, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Count ${index + 1}: ${value}`;
            historyList.appendChild(listItem);
        });
    }

    // Increment button
    document.getElementById('incrementBtn').addEventListener('click', () => {
        count++;
        addToHistory();
        updateDisplay();
    });

    // Decrement button
    document.getElementById('decrementBtn').addEventListener('click', () => {
        count--;
        addToHistory();
        updateDisplay();
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', () => {
        count = 0;
        addToHistory();
        updateDisplay();
    });

    // History button
    document.getElementById('historyBtn').addEventListener('click', () => {
        historyModal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        historyModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === historyModal) {
            historyModal.style.display = 'none';
        }
    });
});
