<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 4: Sequences and Series
// Complete content with AP, GP, HP, AGP, sum formulas

const MATHS_ALGEBRA_4 = {
    id: 'maths-algebra-4',
    title: 'Sequences and Series',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'ap',
            title: '1. Arithmetic Progression (AP)',
            content: `
                <h3>Definition</h3>
                <p>Sequence with constant difference</p>
                <p class="formula">a, a+d, a+2d, a+3d, ...</p>
                
                <h3>nth Term</h3>
                <p class="formula">aₙ = a + (n-1)d</p>
                
                <h3>Sum of n Terms</h3>
                <p class="formula">Sₙ = n/2[2a + (n-1)d]</p>
                <p class="formula">Sₙ = n/2(a + l)</p>
                <p>Where l = last term</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Common difference: d = aₙ - aₙ₋₁</li>
                    <li>If a, b, c in AP: 2b = a + c</li>
                    <li>Sum of n natural numbers: n(n+1)/2</li>
                </ul>
            `
        },
        
        {
            id: 'gp',
            title: '2. Geometric Progression (GP)',
            content: `
                <h3>Definition</h3>
                <p>Sequence with constant ratio</p>
                <p class="formula">a, ar, ar², ar³, ...</p>
                
                <h3>nth Term</h3>
                <p class="formula">aₙ = arⁿ⁻¹</p>
                
                <h3>Sum of n Terms</h3>
                <p class="formula">Sₙ = a(rⁿ - 1)/(r - 1), r ≠ 1</p>
                <p class="formula">Sₙ = a(1 - rⁿ)/(1 - r), r < 1</p>
                
                <h3>Sum to Infinity</h3>
                <p>For |r| < 1:</p>
                <p class="formula">S∞ = a/(1 - r)</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Common ratio: r = aₙ/aₙ₋₁</li>
                    <li>If a, b, c in GP: b² = ac</li>
                    <li>Geometric mean: √(ab)</li>
                </ul>
            `
        },
        
        {
            id: 'hp',
            title: '3. Harmonic Progression (HP)',
            content: `
                <h3>Definition</h3>
                <p>Sequence whose reciprocals form AP</p>
                <p class="formula">1/a, 1/(a+d), 1/(a+2d), ...</p>
                
                <h3>nth Term</h3>
                <p class="formula">aₙ = 1/[a + (n-1)d]</p>
                
                <h3>Harmonic Mean (HM)</h3>
                <p>Between a and b:</p>
                <p class="formula">HM = 2ab/(a + b)</p>
                
                <h3>Relation: AM, GM, HM</h3>
                <p class="formula">AM ≥ GM ≥ HM</p>
                <p>Equality when a = b</p>
            `
        },
        
        {
            id: 'special-series',
            title: '4. Special Series',
            content: `
                <h3>Sum of Natural Numbers</h3>
                <p class="formula">Σn = n(n+1)/2</p>
                
                <h3>Sum of Squares</h3>
                <p class="formula">Σn² = n(n+1)(2n+1)/6</p>
                
                <h3>Sum of Cubes</h3>
                <p class="formula">Σn³ = [n(n+1)/2]²</p>
                
                <h3>Arithmetico-Geometric (AGP)</h3>
                <p>Form: a, (a+d)r, (a+2d)r², ...</p>
                <p>Sum requires special method</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'AP nth term', problem: 'a=2, d=3, n=10. Find a₁₀', solution: 'a₁₀ = 2 + 9×3 = 29'},
        {id: 'ex2', title: 'AP sum', problem: 'a=1, d=2, n=10. Find S₁₀', solution: 'S₁₀ = 10/2[2×1 + 9×2] = 100'},
        {id: 'ex3', title: 'GP sum', problem: 'a=2, r=3, n=5. Find S₅', solution: 'S₅ = 2(3⁵-1)/(3-1) = 242'},
        {id: 'ex4', title: 'AM-GM', problem: 'a=4, b=9. Find AM, GM', solution: 'AM = 6.5, GM = 6'}
    ],
    
    problems: [
        {id: 'p1', question: 'AP: aₙ = ?', options: ['a+nd', 'a+(n-1)d', 'a+d', 'nd'], correct: 1},
        {id: 'p2', question: 'GP: aₙ = ?', options: ['arⁿ', 'arⁿ⁻¹', 'ar', 'rⁿ'], correct: 1},
        {id: 'p3', question: 'Σn = ?', options: ['n²', 'n(n+1)', 'n(n+1)/2', 'n²/2'], correct: 2},
        {id: 'p4', question: 'AM ≥ GM ≥ ?', options: ['HM', 'PM', 'QM', 'RM'], correct: 0},
        {id: 'p5', question: 'GP: S∞ exists when:', options: ['r>1', 'r<1', '|r|<1', 'r=1'], correct: 2}
    ],
    
    keyPoints: [
        'AP: aₙ = a + (n-1)d',
        'AP sum: Sₙ = n/2[2a + (n-1)d]',
        'GP: aₙ = arⁿ⁻¹',
        'GP sum: Sₙ = a(rⁿ-1)/(r-1)',
        'GP: S∞ = a/(1-r) for |r|<1',
        'HP: Reciprocals in AP',
        'AM ≥ GM ≥ HM',
        'Σn = n(n+1)/2',
        'Σn² = n(n+1)(2n+1)/6',
        'Σn³ = [n(n+1)/2]²'
    ],
    
    formulae: [
        {name: 'AP nth term', formula: 'aₙ = a + (n-1)d'},
        {name: 'AP sum', formula: 'Sₙ = n/2[2a + (n-1)d]'},
        {name: 'GP nth term', formula: 'aₙ = arⁿ⁻¹'},
        {name: 'GP sum', formula: 'Sₙ = a(rⁿ-1)/(r-1)'},
        {name: 'GP infinity', formula: 'S∞ = a/(1-r)'},
        {name: 'Sum n', formula: 'Σn = n(n+1)/2'},
        {name: 'Sum n²', formula: 'Σn² = n(n+1)(2n+1)/6'}
    ]
};
window.MATHS_ALGEBRA_4 = MATHS_ALGEBRA_4;
</body>
</html>