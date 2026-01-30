<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Trigonometry - Chapter 1: Trigonometric Functions
// Complete content with ratios, identities, equations, graphs

const MATHS_TRIG_1 = {
    id: 'maths-trig-1',
    title: 'Trigonometric Functions',
    subject: 'Mathematics',
    category: 'Trigonometry',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'basics',
            title: '1. Trigonometric Ratios',
            content: `
                <h3>Six Trigonometric Ratios</h3>
                <p class="formula">sin θ = Opposite/Hypotenuse</p>
                <p class="formula">cos θ = Adjacent/Hypotenuse</p>
                <p class="formula">tan θ = Opposite/Adjacent = sin θ/cos θ</p>
                <p class="formula">cosec θ = 1/sin θ</p>
                <p class="formula">sec θ = 1/cos θ</p>
                <p class="formula">cot θ = 1/tan θ = cos θ/sin θ</p>
                
                <h3>Standard Angles</h3>
                <table class="content-table">
                    <tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
                    <tr><td>sin θ</td><td>0</td><td>1/2</td><td>1/√2</td><td>√3/2</td><td>1</td></tr>
                    <tr><td>cos θ</td><td>1</td><td>√3/2</td><td>1/√2</td><td>1/2</td><td>0</td></tr>
                    <tr><td>tan θ</td><td>0</td><td>1/√3</td><td>1</td><td>√3</td><td>∞</td></tr>
                </table>
            `
        },
        
        {
            id: 'identities',
            title: '2. Trigonometric Identities',
            content: `
                <h3>Pythagorean Identities</h3>
                <p class="formula">sin²θ + cos²θ = 1</p>
                <p class="formula">1 + tan²θ = sec²θ</p>
                <p class="formula">1 + cot²θ = cosec²θ</p>
                
                <h3>Sum/Difference Formulas</h3>
                <p class="formula">sin(A ± B) = sin A cos B ± cos A sin B</p>
                <p class="formula">cos(A ± B) = cos A cos B ∓ sin A sin B</p>
                <p class="formula">tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)</p>
                
                <h3>Double Angle Formulas</h3>
                <p class="formula">sin 2A = 2 sin A cos A</p>
                <p class="formula">cos 2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A</p>
                <p class="formula">tan 2A = 2 tan A/(1 - tan²A)</p>
                
                <h3>Product to Sum</h3>
                <p class="formula">2 sin A cos B = sin(A+B) + sin(A-B)</p>
                <p class="formula">2 cos A cos B = cos(A+B) + cos(A-B)</p>
                <p class="formula">2 sin A sin B = cos(A-B) - cos(A+B)</p>
            `
        },
        
        {
            id: 'equations',
            title: '3. Trigonometric Equations',
            content: `
                <h3>General Solutions</h3>
                <p class="formula">sin θ = 0 → θ = nπ</p>
                <p class="formula">cos θ = 0 → θ = (2n+1)π/2</p>
                <p class="formula">tan θ = 0 → θ = nπ</p>
                
                <p class="formula">sin θ = sin α → θ = nπ + (-1)ⁿα</p>
                <p class="formula">cos θ = cos α → θ = 2nπ ± α</p>
                <p class="formula">tan θ = tan α → θ = nπ + α</p>
                
                <p>Where n ∈ Z (integer)</p>
            `
        },
        
        {
            id: 'graphs',
            title: '4. Graphs and Properties',
            content: `
                <h3>Periodicity</h3>
                <ul>
                    <li>sin x, cos x: Period = 2π</li>
                    <li>tan x, cot x: Period = π</li>
                </ul>
                
                <h3>Range</h3>
                <ul>
                    <li>sin x, cos x: [-1, 1]</li>
                    <li>tan x, cot x: (-∞, ∞)</li>
                    <li>sec x, cosec x: (-∞, -1] ∪ [1, ∞)</li>
                </ul>
                
                <h3>Even/Odd Functions</h3>
                <ul>
                    <li>Even: cos x, sec x</li>
                    <li>Odd: sin x, tan x, cot x, cosec x</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Identity', problem: 'Prove: sin²θ + cos²θ = 1', solution: 'From Pythagoras theorem'},
        {id: 'ex2', title: 'Equation', problem: 'Solve: sin θ = 1/2', solution: 'θ = nπ + (-1)ⁿ(π/6)'},
        {id: 'ex3', title: 'Double Angle', problem: 'Find sin 60° using sin 30°', solution: 'sin 60° = 2sin30°cos30° = √3/2'},
        {id: 'ex4', title: 'Sum Formula', problem: 'Find sin 75°', solution: 'sin(45°+30°) = (√6+√2)/4'}
    ],
    
    problems: [
        {id: 'p1', question: 'sin 30° = ?', options: ['1/2', '√3/2', '1/√2', '1'], correct: 0},
        {id: 'p2', question: 'sin²θ + cos²θ = ?', options: ['0', '1', '2', 'tan²θ'], correct: 1},
        {id: 'p3', question: 'Period of sin x:', options: ['π', '2π', 'π/2', '4π'], correct: 1},
        {id: 'p4', question: 'tan θ = sin θ/? ', options: ['cos θ', 'sec θ', 'cosec θ', 'cot θ'], correct: 0},
        {id: 'p5', question: 'cos 2A = ?', options: ['2cos A', 'cos²A - sin²A', 'sin²A - cos²A', '2sin A cos A'], correct: 1}
    ],
    
    keyPoints: [
        'sin²θ + cos²θ = 1',
        '1 + tan²θ = sec²θ',
        'sin(A±B) = sinAcosB ± cosAsinB',
        'cos(A±B) = cosAcosB ∓ sinAsinB',
        'sin 2A = 2sinAcosA',
        'cos 2A = cos²A - sin²A',
        'Period: sin,cos = 2π; tan,cot = π',
        'Range: sin,cos ∈ [-1,1]',
        'sin θ = sinα → θ = nπ + (-1)ⁿα',
        'cos θ = cosα → θ = 2nπ ± α'
    ],
    
    formulae: [
        {name: 'Pythagorean', formula: 'sin²θ + cos²θ = 1'},
        {name: 'Sum Formula', formula: 'sin(A+B) = sinAcosB + cosAsinB'},
        {name: 'Double Angle', formula: 'sin2A = 2sinAcosA'},
        {name: 'General Solution', formula: 'sinθ = sinα → θ = nπ + (-1)ⁿα'}
    ]
};
window.MATHS_TRIG_1 = MATHS_TRIG_1;
</body>
</html>