function palindrome(str) {
    // Step 1: Clean the string: remove non-alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();

    // Step 2: Check if the cleaned string is a palindrome
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

module.exports = palindrome;
