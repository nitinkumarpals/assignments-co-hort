// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function updateClock() {
    const now = new Date();
    const timeOptions = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const timeOptions2 = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
    const formattedTime1 = now.toLocaleTimeString('en-US',timeOptions2); 
    const formattedTime2 = now.toLocaleTimeString('en-US',timeOptions); 
    console.clear(); // Clear the console for a clean display
    console.log(formattedTime1+" | "+formattedTime2);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial update
  updateClock();
