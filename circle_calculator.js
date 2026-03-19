// Function to calculate area and circumference of a circle
function calculateCircle(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
        throw new Error('Radius must be a positive number');
    }
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    return {
        area: area,
        circumference: circumference
    };
}

// Example usage
const radius = 5;
try {
    const result = calculateCircle(radius);
    console.log(`For radius ${radius}:`);
    console.log(`Area: ${result.area.toFixed(2)}`);
    console.log(`Circumference: ${result.circumference.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}
