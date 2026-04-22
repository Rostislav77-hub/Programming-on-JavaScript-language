function combineLikeTerms(terms) {
    const combined = {};
    
    terms.forEach(term => {
        const [coefficient, variable] = term;
        combined[variable] = (combined[variable] || 0) + coefficient;
    });
    
    return Object.entries(combined)
        .filter(([_, coeff]) => coeff !== 0)
        .map(([variable, coeff]) => {
            if (coeff === 1 && variable) return variable;
            if (coeff === -1 && variable) return `-${variable}`;
            return `${coeff}${variable}`;
        })
        .join(" + ").replace(/\+ -/g, "- ");
}

// Пример: 2x + 3y - x + 2y
const terms = [
    [2, "x"],
    [3, "y"], 
    [-1, "x"],
    [2, "y"]
];

console.log("Результат:", combineLikeTerms(terms)); // Output: x + 5y