<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 6: Binomial Theorem
// Complete content with expansion, general term, middle term, properties

const MATHS_ALGEBRA_6 = {
    id: 'maths-algebra-6',
    title: 'Binomial Theorem',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'binomial-expansion',
            title: '1. Binomial Theorem',
            content: `
                <h3>Statement</h3>
                <p class="formula">(a + b)ⁿ = ⁿC₀aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + ... + ⁿCₙbⁿ</p>
                
                <h3>Compact Form</h3>
                <p class="formula">(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ</p>
                <p>Where r = 0 to n</p>
                
                <h3>Special Cases</h3>
                <p>(1 + x)ⁿ = ⁿC₀ + ⁿC₁x + ⁿC₂x² + ... + ⁿCₙxⁿ</p>
                <p>(1 - x)ⁿ = ⁿC₀ - ⁿC₁x + ⁿC₂x² - ... + (-1)ⁿⁿCₙxⁿ</p>
                
                <h3>Number of Terms</h3>
                <p>In (a + b)ⁿ: <strong>n + 1 terms</strong></p>
            `
        },
        
        {
            id: 'general-term',
            title: '2. General Term',
            content: `
                <h3>General Term (Tᵣ₊₁)</h3>
                <p class="formula">Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ</p>
                <p>(r + 1)th term in expansion</p>
                
                <h3>Finding Specific Term</h3>
                <p>To find term containing xᵖ:</p>
                <ol>
                    <li>Write general term</li>
                    <li>Equate power of x to p</li>
                    <li>Solve for r</li>
                    <li>Substitute r in Tᵣ₊₁</li>
                </ol>
            `
        },
        
        {
            id: 'middle-term',
            title: '3. Middle Term',
            content: `
                <h3>If n is Even</h3>
                <p>One middle term:</p>
                <p class="formula">T₍ₙ/₂₎₊₁</p>
                
                <h3>If n is Odd</h3>
                <p>Two middle terms:</p>
                <p class="formula">T₍ₙ₊₁₎/₂ and T₍ₙ₊₃₎/₂</p>
                
                <h3>Greatest Term</h3>
                <p>Term with maximum coefficient</p>
                <p>Usually middle term(s)</p>
            `
        },
        
        {
            id: 'properties',
            title: '4. Properties and Applications',
            content: `
                <h3>Sum of Coefficients</h3>
                <p>Put a = b = 1:</p>
                <p class="formula">ⁿC₀ + ⁿC₁ + ⁿC₂ + ... + ⁿCₙ = 2ⁿ</p>
                
                <h3>Sum of Odd/Even Coefficients</h3>
                <p>Put a = 1, b = -1:</p>
                <p class="formula">ⁿC₀ - ⁿC₁ + ⁿC₂ - ... = 0</p>
                <p>Sum of odd coefficients = Sum of even coefficients = 2ⁿ⁻¹</p>
                
                <h3>Binomial Coefficients</h3>
                <ul>
                    <li>ⁿC₀ = ⁿCₙ = 1</li>
                    <li>ⁿCᵣ = ⁿCₙ₋ᵣ</li>
                    <li>ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ</li>
                </ul>
                
                <h3>Pascal's Triangle</h3>
                <pre>
                    1
                   1 1
                  1 2 1
                 1 3 3 1
                1 4 6 4 1
                </pre>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Expansion', problem: '(x + 2)³', solution: 'x³ + 3x²(2) + 3x(4) + 8 = x³ + 6x² + 12x + 8'},
        {id: 'ex2', title: 'General Term', problem: '(x + 1/x)⁶, find T₄', solution: 'T₄ = ⁶C₃ x³(1/x)³ = 20'},
        {id: 'ex3', title: 'Middle Term', problem: '(x + y)⁸, middle term?', solution: 'T₅ = ⁸C₄ x⁴y⁴ = 70x⁴y⁴'},
        {id: 'ex4', title: 'Sum of Coefficients', problem: '(2x + 3)⁵, sum?', solution: 'Put x=1: (2+3)⁵ = 3125'}
    ],
    
    problems: [
        {id: 'p1', question: '(a+b)ⁿ has how many terms?', options: ['n', 'n+1', 'n-1', '2n'], correct: 1},
        {id: 'p2', question: 'General term Tᵣ₊₁ = ?', options: ['ⁿCᵣaⁿbʳ', 'ⁿCᵣaⁿ⁻ʳbʳ', 'ⁿCᵣaʳbⁿ', 'ⁿCᵣab'], correct: 1},
        {id: 'p3', question: 'Sum of all coefficients in (a+b)ⁿ:', options: ['n', '2ⁿ', 'n!', '2n'], correct: 1},
        {id: 'p4', question: 'If n=6, middle term is:', options: ['T₃', 'T₄', 'T₃,T₄', 'T₅'], correct: 1},
        {id: 'p5', question: 'ⁿC₀ + ⁿC₁ + ... + ⁿCₙ = ?', options: ['n', 'n!', '2ⁿ', 'n²'], correct: 2}
    ],
    
    keyPoints: [
        '(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳbʳ',
        'Number of terms = n + 1',
        'General term: Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳbʳ',
        'Middle term: T₍ₙ/₂₎₊₁ (n even)',
        'Sum of coefficients = 2ⁿ',
        'ⁿCᵣ = ⁿCₙ₋ᵣ',
        'Pascal\'s triangle',
        'Greatest term usually middle',
        '(1+x)ⁿ expansion',
        'Binomial coefficients symmetric'
    ],
    
    formulae: [
        {name: 'Binomial Theorem', formula: '(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳbʳ'},
        {name: 'General Term', formula: 'Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳbʳ'},
        {name: 'Sum of Coefficients', formula: 'Σ ⁿCᵣ = 2ⁿ'},
        {name: 'Middle Term (even n)', formula: 'T₍ₙ/₂₎₊₁'}
    ]
};
window.MATHS_ALGEBRA_6 = MATHS_ALGEBRA_6;
</body>
</html>