<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Calculus - Chapter 3: Integration
// Complete content with indefinite, definite integrals, techniques, applications

const MATHS_CALCULUS_3 = {
    id: 'maths-calculus-3',
    title: 'Integration',
    subject: 'Mathematics',
    category: 'Calculus',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Integration',
            content: `
                <h3>What is Integration?</h3>
                <p>Reverse process of differentiation (anti-derivative)</p>
                
                <h3>Indefinite Integral</h3>
                <p class="formula">∫f(x)dx = F(x) + C</p>
                <p>Where F'(x) = f(x) and C is constant of integration</p>
                
                <h3>Standard Integrals</h3>
                <table class="content-table">
                    <tr><td>∫xⁿdx = xⁿ⁺¹/(n+1) + C</td><td>(n ≠ -1)</td></tr>
                    <tr><td>∫(1/x)dx = ln|x| + C</td><td></td></tr>
                    <tr><td>∫eˣdx = eˣ + C</td><td></td></tr>
                    <tr><td>∫aˣdx = aˣ/ln a + C</td><td></td></tr>
                    <tr><td>∫sin x dx = -cos x + C</td><td></td></tr>
                    <tr><td>∫cos x dx = sin x + C</td><td></td></tr>
                    <tr><td>∫sec²x dx = tan x + C</td><td></td></tr>
                    <tr><td>∫cosec²x dx = -cot x + C</td><td></td></tr>
                </table>
            `
        },
        
        {
            id: 'techniques',
            title: '2. Integration Techniques',
            content: `
                <h3>1. Substitution Method</h3>
                <p>Put x = g(t), then dx = g'(t)dt</p>
                <p class="formula">∫f(x)dx = ∫f(g(t))g'(t)dt</p>
                
                <h3>2. Integration by Parts</h3>
                <p class="formula">∫u dv = uv - ∫v du</p>
                <p>Choose u using ILATE rule:</p>
                <ul>
                    <li>I - Inverse trigonometric</li>
                    <li>L - Logarithmic</li>
                    <li>A - Algebraic</li>
                    <li>T - Trigonometric</li>
                    <li>E - Exponential</li>
                </ul>
                
                <h3>3. Partial Fractions</h3>
                <p>For rational functions P(x)/Q(x)</p>
                <p>Break into simpler fractions</p>
            `
        },
        
        {
            id: 'definite',
            title: '3. Definite Integrals',
            content: `
                <h3>Definition</h3>
                <p class="formula">∫ₐᵇf(x)dx = F(b) - F(a)</p>
                
                <h3>Properties</h3>
                <p>1. ∫ₐᵇf(x)dx = -∫ᵇₐf(x)dx</p>
                <p>2. ∫ₐᵇf(x)dx = ∫ₐᶜf(x)dx + ∫ᶜᵇf(x)dx</p>
                <p>3. ∫ₐᵇf(x)dx = ∫ₐᵇf(a+b-x)dx</p>
                <p>4. ∫₀ᵃf(x)dx = ∫₀ᵃf(a-x)dx</p>
                
                <h3>Special Results</h3>
                <p>If f(x) is even: ∫₋ₐᵃf(x)dx = 2∫₀ᵃf(x)dx</p>
                <p>If f(x) is odd: ∫₋ₐᵃf(x)dx = 0</p>
            `
        },
        
        {
            id: 'applications',
            title: '4. Applications',
            content: `
                <h3>Area Under Curve</h3>
                <p class="formula">Area = ∫ₐᵇy dx</p>
                
                <h3>Area Between Curves</h3>
                <p class="formula">Area = ∫ₐᵇ|f(x) - g(x)|dx</p>
                
                <h3>Volume of Revolution</h3>
                <p class="formula">V = π∫ₐᵇy²dx</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Basic Integration', problem: '∫x³dx', solution: 'x⁴/4 + C'},
        {id: 'ex2', title: 'Definite Integral', problem: '∫₀¹x²dx', solution: '[x³/3]₀¹ = 1/3'},
        {id: 'ex3', title: 'By Parts', problem: '∫x eˣdx', solution: 'xeˣ - eˣ + C'},
        {id: 'ex4', title: 'Area', problem: 'Area under y=x² from 0 to 2', solution: '∫₀²x²dx = 8/3'}
    ],
    
    problems: [
        {id: 'p1', question: '∫x²dx = ?', options: ['x³', 'x³/3 + C', '2x', 'x³ + C'], correct: 1},
        {id: 'p2', question: '∫eˣdx = ?', options: ['eˣ + C', 'eˣ', 'xeˣ', 'eˣ/x'], correct: 0},
        {id: 'p3', question: '∫sin x dx = ?', options: ['cos x', '-cos x + C', 'sin x', '-sin x'], correct: 1},
        {id: 'p4', question: 'If f(x) odd, ∫₋ₐᵃf(x)dx = ?', options: ['2∫₀ᵃf(x)dx', '0', '∫₀ᵃf(x)dx', 'a'], correct: 1},
        {id: 'p5', question: '∫(1/x)dx = ?', options: ['x', 'ln x + C', '1/x²', 'ln|x| + C'], correct: 3}
    ],
    
    keyPoints: [
        'Integration = Anti-differentiation',
        '∫xⁿdx = xⁿ⁺¹/(n+1) + C',
        '∫eˣdx = eˣ + C',
        '∫(1/x)dx = ln|x| + C',
        'By parts: ∫u dv = uv - ∫v du',
        'Definite: ∫ₐᵇf(x)dx = F(b) - F(a)',
        'Even function: ∫₋ₐᵃf(x)dx = 2∫₀ᵃf(x)dx',
        'Odd function: ∫₋ₐᵃf(x)dx = 0',
        'Area = ∫ₐᵇy dx',
        'Always add constant C for indefinite integrals'
    ],
    
    formulae: [
        {name: 'Power Rule', formula: '∫xⁿdx = xⁿ⁺¹/(n+1) + C'},
        {name: 'Exponential', formula: '∫eˣdx = eˣ + C'},
        {name: 'Logarithm', formula: '∫(1/x)dx = ln|x| + C'},
        {name: 'By Parts', formula: '∫u dv = uv - ∫v du'},
        {name: 'Definite Integral', formula: '∫ₐᵇf(x)dx = F(b) - F(a)'},
        {name: 'Area', formula: 'A = ∫ₐᵇy dx'}
    ]
};
window.MATHS_CALCULUS_3 = MATHS_CALCULUS_3;
</body>
</html>