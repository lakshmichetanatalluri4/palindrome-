document.getElementById('checkButton').addEventListener('click', function() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const cleanInput = inputNumbers.replace(/\D/g, ''); // Remove non-numeric characters
    const reversedInput = cleanInput.split('').reverse().join('');
    const isPalindrome = cleanInput === reversedInput;

    const outputElement = document.getElementById('output');
    outputElement.textContent = isPalindrome
        ? "It's a palindrome!"
        : "It's not a palindrome.";
});
