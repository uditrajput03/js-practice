let area = (side) => (side**2);
let side = (area) => (area **(1/2));
let perimeter = (area) => 4*side(area);

console.log(perimeter(64));