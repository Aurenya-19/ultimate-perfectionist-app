<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Calculus - Chapter 5: Definite Integrals and Applications
// Complete content with properties, area under curves, volume of revolution

const MATHS_CALCULUS_5 = {
    id: 'maths-calculus-5',
    title: 'Definite Integrals and Applications',
    subject: 'Mathematics',
    category: 'Calculus',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'definite-integral',
            title: '1. Definite Integral',
            content: `
                <h3>Definition</h3>
                <p class="formula">∫ₐᵇ f(x)dx = F(b) - F(a)</p>
                <p>Where F'(x) = f(x)</p>
                
                <h3>Fundamental Theorem</h3>
                <p><strong>Part 1:</strong> If F(x) = ∫ₐˣ f(t)dt, then F'(x) = f(x)</p>
                <p><strong>Part 2:</strong> ∫ₐᵇ f(x)dx = F(b) - F(a)</p>
                
                <h3>Properties</h3>
                <p>1. ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx</p>
                <p>2. ∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᶜᵇ f(x)dx</p>
                <p>3. ∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b-x)dx</p>
            `
        },
        
        {
            id: 'special-properties',
            title: '2. Special Properties',
            content: `
                <h3>Symmetric Limits</h3>
                <p>∫₋ₐᵃ f(x)dx = ∫₀ᵃ [f(x) + f(-x)]dx</p>
                
                <p><strong>If f(x) is even:</strong> f(-x) = f(x)</p>
                <p class="formula">∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx</p>
                
                <p><strong>If f(x) is odd:</strong> f(-x) = -f(x)</p>
                <p class="formula">∫₋ₐᵃ f(x)dx = 0</p>
                
                <h3>Periodic Functions</h3>
                <p>If f(x+T) = f(x):</p>
                <p class="formula">∫₀ⁿᵀ f(x)dx = n∫₀ᵀ f(x)dx</p>
                
                <h3>King Property</h3>
                <p class="formula">∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx</p>
            `
        },
        
        {
            id: 'area-under-curve',
            title: '3. Area Under Curves',
            content: `
                <h3>Area Between Curve and x-axis</h3>
                <p class="formula">A = ∫ₐᵇ |y|dx = ∫ₐᵇ |f(x)|dx</p>
                
                <h3>Area Between Two Curves</h3>
                <p class="formula">A = ∫ₐᵇ |f(x) - g(x)|dx</p>
                <p>Where f(x) ≥ g(x)</p>
                
                <h3>Area in Polar Coordinates</h3>
                <p class="formula">A = ½∫ₐᵇ r²dθ</p>
                
                <h3>Steps to Find Area</h3>
                <ol>
                    <li>Sketch the curves</li>
                    <li>Find intersection points</li>
                    <li>Identify upper and lower curves</li>
                    <li>Set up integral</li>
                    <li>Evaluate</li>
                </ol>
            `
        },
        
        {
            id: 'volume',
            title: '4. Volume of Solids of Revolution',
            content: `
                <h3>Rotation About x-axis</h3>
                <p class="formula">V = π∫ₐᵇ y²dx = π∫ₐᵇ [f(x)]²dx</p>
                
                <h3>Rotation About y-axis</h3>
                <p class="formula">V = π∫ᶜᵈ x²dy = π∫ᶜᵈ [g(y)]²dy</p>
                
                <h3>Shell Method</h3>
                <p class="formula">V = 2π∫ₐᵇ x·f(x)dx</p>
                
                <h3>Disk Method</h3>
                <p>For solid disk: V = π∫ₐᵇ R²dx</p>
                <p>For washer: V = π∫ₐᵇ (R² - r²)dx</p>
            `
        },
        
        {
            id: 'applications',
            title: '5. Other Applications',
            content: `
                <h3>Arc Length</h3>
                <p class="formula">L = ∫ₐᵇ √[1 + (dy/dx)²]dx</p>
                
                <h3>Surface Area of Revolution</h3>
                <p>About x-axis:</p>
                <p class="formula">S = 2π∫ₐᵇ y√[1 + (dy/dx)²]dx</p>
                
                <h3>Average Value</h3>
                <p class="formula">f_avg = (1/(b-a))∫ₐᵇ f(x)dx</p>
                
                <h3>Work Done</h3>
                <p class="formula">W = ∫ₐᵇ F(x)dx</p>
                
                <h3>Center of Mass</h3>
                <p class="formula">x̄ = ∫x dm / ∫dm</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Definite Integral', problem: '∫₀² x²dx', solution: '[x³/3]₀² = 8/3'},
        {id: 'ex2', title: 'Even Function', problem: '∫₋₁¹ x²dx', solution: '2∫₀¹ x²dx = 2[x³/3]₀¹ = 2/3'},
        {id: 'ex3', title: 'Area', problem: 'Area under y=x from 0 to 2', solution: '∫₀² xdx = [x²/2]₀² = 2'},
        {id: 'ex4', title: 'Volume', problem: 'y=x rotated about x-axis, 0 to 1', solution: 'V = π∫₀¹ x²dx = π/3'}
    ],
    
    problems: [
        {id: 'p1', question: '∫ₐᵇ f(x)dx = ?', options: ['F(a)-F(b)', 'F(b)-F(a)', 'F(b)+F(a)', 'F(b)×F(a)'], correct: 1},
        {id: 'p2', question: 'If f(x) odd, ∫₋ₐᵃ f(x)dx = ?', options: ['2∫₀ᵃf(x)dx', '0', '∫₀ᵃf(x)dx', 'a'], correct: 1},
        {id: 'p3', question: 'Area between curves:', options: ['∫(f-g)dx', '∫|f-g|dx', '∫(f+g)dx', '∫fg dx'], correct: 1},
        {id: 'p4', question: 'Volume (x-axis rotation):', options: ['π∫y dx', 'π∫y²dx', '∫y²dx', '2π∫y dx'], correct: 1},
        {id: 'p5', question: 'If f even, ∫₋ₐᵃ f(x)dx = ?', options: ['0', '∫₀ᵃf(x)dx', '2∫₀ᵃf(x)dx', 'a'], correct: 2}
    ],
    
    keyPoints: [
        '∫ₐᵇ f(x)dx = F(b) - F(a)',
        '∫ₐᵇ = -∫ᵇₐ',
        'Even: ∫₋ₐᵃ f = 2∫₀ᵃ f',
        'Odd: ∫₋ₐᵃ f = 0',
        'King: ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx',
        'Area = ∫|f(x) - g(x)|dx',
        'Volume = π∫y²dx (x-axis)',
        'Arc length = ∫√[1+(dy/dx)²]dx',
        'Average = (1/(b-a))∫f(x)dx',
        'Periodic: ∫₀ⁿᵀ f = n∫₀ᵀ f'
    ],
    
    formulae: [
        {name: 'Definite Integral', formula: '∫ₐᵇ f(x)dx = F(b) - F(a)'},
        {name: 'Even Function', formula: '∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx'},
        {name: 'Odd Function', formula: '∫₋ₐᵃ f(x)dx = 0'},
        {name: 'Area', formula: 'A = ∫ₐᵇ |f(x) - g(x)|dx'},
        {name: 'Volume', formula: 'V = π∫ₐᵇ y²dx'},
        {name: 'Arc Length', formula: 'L = ∫√[1+(dy/dx)²]dx'}
    ]
};
window.MATHS_CALCULUS_5 = MATHS_CALCULUS_5;
</body>
</html>