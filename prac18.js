// Create an EventEmitter
const EventEmitter = require('events');

// Create an instance of the EventEmitter
const eventEmitter = new EventEmitter();

// Define a callback function for the 'customEvent' event
function customEventHandler() {
    console.log('Custom event detected!');
}

// Attach the customEventHandler to the 'customEvent' event
eventEmitter.on('customEvent', customEventHandler);

// Main loop to listen for events
function mainLoop() {
    console.log('Listening for events...');

    // Simulate an event being detected
    eventEmitter.emit('customEvent');

    // Continue listening for events
    setTimeout(mainLoop, 2000); // Adjust the timeout as needed
}

// Start the main loop
mainLoop();