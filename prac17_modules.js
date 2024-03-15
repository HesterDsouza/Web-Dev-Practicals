// Function to get today's date and time
exports.getDateTime = function () {
    const now = new Date()
    return now.toISOString();
};
