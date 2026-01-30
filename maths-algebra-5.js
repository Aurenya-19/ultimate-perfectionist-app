<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 5: Permutations and Combinations
// Complete content with nPr, nCr, arrangements, selections

const MATHS_ALGEBRA_5 = {
    id: 'maths-algebra-5',
    title: 'Permutations and Combinations',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'fundamental-principle',
            title: '1. Fundamental Principles',
            content: `
                <h3>Multiplication Principle</h3>
                <p>If task A in m ways, task B in n ways:</p>
                <p class="formula">Total ways = m × n</p>
                
                <h3>Addition Principle</h3>
                <p>If task A OR task B:</p>
                <p class="formula">Total ways = m + n</p>
                
                <h3>Factorial</h3>
                <p class="formula">n! = n × (n-1) × (n-2) × ... × 1</p>
                <p>0! = 1, 1! = 1</p>
            `
        },
        
        {
            id: 'permutations',
            title: '2. Permutations',
            content: `
                <h3>Definition</h3>
                <p>Arrangements where order matters</p>
                
                <h3>Formula</h3>
                <p class="formula">ⁿPᵣ = n!/(n-r)!</p>
                
                <h3>Special Cases</h3>
                <p>ⁿPₙ = n! (all n objects)</p>
                <p>ⁿP₀ = 1</p>
                <p>ⁿP₁ = n</p>
                
                <h3>Circular Permutations</h3>
                <p class="formula">(n-1)!</p>
                
                <h3>With Repetition</h3>
                <p>n objects with p alike, q alike:</p>
                <p class="formula">n!/(p!q!)</p>
            `
        },
        
        {
            id: 'combinations',
            title: '3. Combinations',
            content: `
                <h3>Definition</h3>
                <p>Selections where order doesn't matter</p>
                
                <h3>Formula</h3>
                <p class="formula">ⁿCᵣ = n!/[r!(n-r)!]</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>ⁿCᵣ = ⁿCₙ₋ᵣ</li>
                    <li>ⁿC₀ = ⁿCₙ = 1</li>
                    <li>ⁿC₁ = n</li>
                    <li>ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ</li>
                </ul>
                
                <h3>Relation with Permutation</h3>
                <p class="formula">ⁿPᵣ = ⁿCᵣ × r!</p>
            `
        },
        
        {
            id: 'applications',
            title: '4. Applications',
            content: `
                <h3>Distribution Problems</h3>
                <p>Distribute n objects in r groups</p>
                
                <h3>Selection with Conditions</h3>
                <p>At least, at most problems</p>
                
                <h3>Derangements</h3>
                <p>Permutations where no element in original position</p>
                <p class="formula">Dₙ = n![1 - 1/1! + 1/2! - 1/3! + ...]</p>
                
                <h3>Division into Groups</h3>
                <p>n objects into groups of p, q, r:</p>
                <p class="formula">n!/(p!q!r!)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Permutation', problem: '⁵P₃ = ?', solution: '5!/(5-3)! = 5!/2! = 60'},
        {id: 'ex2', title: 'Combination', problem: '⁶C₂ = ?', solution: '6!/(2!4!) = 15'},
        {id: 'ex3', title: 'Circular', problem: '5 people in circle', solution: '(5-1)! = 24'},
        {id: 'ex4', title: 'With repetition', problem: 'MISSISSIPPI arrangements', solution: '11!/(4!4!2!) = 34650'}
    ],
    
    problems: [
        {id: 'p1', question: 'ⁿPᵣ = ?', options: ['n!/r!', 'n!/(n-r)!', 'n!/[(n-r)!r!]', 'n!'], correct: 1},
        {id: 'p2', question: 'ⁿCᵣ = ?', options: ['n!/r!', 'n!/(n-r)!', 'n!/[r!(n-r)!]', 'n!'], correct: 2},
        {id: 'p3', question: 'ⁿC₀ = ?', options: ['0', '1', 'n', 'n!'], correct: 1},
        {id: 'p4', question: 'Circular permutation of n:', options: ['n!', '(n-1)!', '(n+1)!', 'n!/2'], correct: 1},
        {id: 'p5', question: 'ⁿCᵣ = ⁿCₙ₋ᵣ is:', options: ['True', 'False', 'Sometimes', 'Never'], correct: 0}
    ],
    
    keyPoints: [
        'Permutation: Order matters',
        'Combination: Order doesn\'t matter',
        'ⁿPᵣ = n!/(n-r)!',
        'ⁿCᵣ = n!/[r!(n-r)!]',
        'ⁿPᵣ = ⁿCᵣ × r!',
        'ⁿCᵣ = ⁿCₙ₋ᵣ',
        'Circular: (n-1)!',
        'With repetition: n!/(p!q!)',
        'ⁿC₀ = 1',
        '0! = 1'
    ],
    
    formulae: [
        {name: 'Permutation', formula: 'ⁿPᵣ = n!/(n-r)!'},
        {name: 'Combination', formula: 'ⁿCᵣ = n!/[r!(n-r)!]'},
        {name: 'Circular', formula: '(n-1)!'},
        {name: 'With Repetition', formula: 'n!/(p!q!r!)'}
    ]
};
window.MATHS_ALGEBRA_5 = MATHS_ALGEBRA_5;
</body>
</html>