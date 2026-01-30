<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Trigonometry - Chapter 2: Inverse Trigonometric Functions
// Complete content with domain, range, properties, formulas

const MATHS_TRIG_2 = {
    id: 'maths-trig-2',
    title: 'Inverse Trigonometric Functions',
    subject: 'Mathematics',
    category: 'Trigonometry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>Definition</h3>
                <p>Inverse of trigonometric functions (restricted domains)</p>
                
                <h3>Notation</h3>
                <p>sin⁻¹x, cos⁻¹x, tan⁻¹x (or arcsin, arccos, arctan)</p>
                
                <h3>Domain and Range</h3>
                <table class="content-table">
                    <tr><th>Function</th><th>Domain</th><th>Range</th></tr>
                    <tr><td>sin⁻¹x</td><td>[-1, 1]</td><td>[-π/2, π/2]</td></tr>
                    <tr><td>cos⁻¹x</td><td>[-1, 1]</td><td>[0, π]</td></tr>
                    <tr><td>tan⁻¹x</td><td>(-∞, ∞)</td><td>(-π/2, π/2)</td></tr>
                    <tr><td>cot⁻¹x</td><td>(-∞, ∞)</td><td>(0, π)</td></tr>
                    <tr><td>sec⁻¹x</td><td>(-∞,-1]∪[1,∞)</td><td>[0,π]-{π/2}</td></tr>
                    <tr><td>cosec⁻¹x</td><td>(-∞,-1]∪[1,∞)</td><td>[-π/2,π/2]-{0}</td></tr>
                </table>
            `
        },
        
        {
            id: 'properties',
            title: '2. Basic Properties',
            content: `
                <h3>Reciprocal Relations</h3>
                <p class="formula">sin⁻¹(1/x) = cosec⁻¹x</p>
                <p class="formula">cos⁻¹(1/x) = sec⁻¹x</p>
                <p class="formula">tan⁻¹(1/x) = cot⁻¹x (x > 0)</p>
                
                <h3>Complementary Relations</h3>
                <p class="formula">sin⁻¹x + cos⁻¹x = π/2</p>
                <p class="formula">tan⁻¹x + cot⁻¹x = π/2</p>
                <p class="formula">sec⁻¹x + cosec⁻¹x = π/2</p>
                
                <h3>Negative Arguments</h3>
                <p class="formula">sin⁻¹(-x) = -sin⁻¹x</p>
                <p class="formula">cos⁻¹(-x) = π - cos⁻¹x</p>
                <p class="formula">tan⁻¹(-x) = -tan⁻¹x</p>
            `
        },
        
        {
            id: 'addition-formulas',
            title: '3. Addition and Subtraction Formulas',
            content: `
                <h3>sin⁻¹ Formulas</h3>
                <p class="formula">sin⁻¹x + sin⁻¹y = sin⁻¹[x√(1-y²) + y√(1-x²)]</p>
                <p class="formula">sin⁻¹x - sin⁻¹y = sin⁻¹[x√(1-y²) - y√(1-x²)]</p>
                
                <h3>cos⁻¹ Formulas</h3>
                <p class="formula">cos⁻¹x + cos⁻¹y = cos⁻¹[xy - √(1-x²)√(1-y²)]</p>
                <p class="formula">cos⁻¹x - cos⁻¹y = cos⁻¹[xy + √(1-x²)√(1-y²)]</p>
                
                <h3>tan⁻¹ Formulas</h3>
                <p class="formula">tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)]</p>
                <p class="formula">tan⁻¹x - tan⁻¹y = tan⁻¹[(x-y)/(1+xy)]</p>
                
                <h3>Special Cases</h3>
                <p class="formula">2tan⁻¹x = sin⁻¹[2x/(1+x²)]</p>
                <p class="formula">2tan⁻¹x = cos⁻¹[(1-x²)/(1+x²)]</p>
                <p class="formula">2tan⁻¹x = tan⁻¹[2x/(1-x²)]</p>
            `
        },
        
        {
            id: 'important-results',
            title: '4. Important Results',
            content: `
                <h3>Conversion Formulas</h3>
                <p class="formula">sin⁻¹x = cos⁻¹√(1-x²) = tan⁻¹[x/√(1-x²)]</p>
                <p class="formula">cos⁻¹x = sin⁻¹√(1-x²) = tan⁻¹[√(1-x²)/x]</p>
                <p class="formula">tan⁻¹x = sin⁻¹[x/√(1+x²)] = cos⁻¹[1/√(1+x²)]</p>
                
                <h3>Multiple Angle Formulas</h3>
                <p class="formula">3tan⁻¹x = tan⁻¹[(3x-x³)/(1-3x²)]</p>
                
                <h3>Standard Values</h3>
                <table class="content-table">
                    <tr><th>x</th><th>sin⁻¹x</th><th>cos⁻¹x</th><th>tan⁻¹x</th></tr>
                    <tr><td>0</td><td>0</td><td>π/2</td><td>0</td></tr>
                    <tr><td>1/2</td><td>π/6</td><td>π/3</td><td>π/6</td></tr>
                    <tr><td>1/√2</td><td>π/4</td><td>π/4</td><td>π/4</td></tr>
                    <tr><td>√3/2</td><td>π/3</td><td>π/6</td><td>π/3</td></tr>
                    <tr><td>1</td><td>π/2</td><td>0</td><td>π/4</td></tr>
                </table>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Basic', problem: 'sin⁻¹(1/2) = ?', solution: 'π/6'},
        {id: 'ex2', title: 'Complementary', problem: 'sin⁻¹(3/5) + cos⁻¹(3/5) = ?', solution: 'π/2'},
        {id: 'ex3', title: 'Addition', problem: 'tan⁻¹(1) + tan⁻¹(2) = ?', solution: 'tan⁻¹[(1+2)/(1-2)] = tan⁻¹(-3)'},
        {id: 'ex4', title: 'Negative', problem: 'sin⁻¹(-1/2) = ?', solution: '-π/6'}
    ],
    
    problems: [
        {id: 'p1', question: 'sin⁻¹x domain:', options: ['[-1,1]', '(-∞,∞)', '[0,1]', '[-π,π]'], correct: 0},
        {id: 'p2', question: 'sin⁻¹x + cos⁻¹x = ?', options: ['0', 'π/4', 'π/2', 'π'], correct: 2},
        {id: 'p3', question: 'tan⁻¹(1) = ?', options: ['0', 'π/6', 'π/4', 'π/2'], correct: 2},
        {id: 'p4', question: 'sin⁻¹(-x) = ?', options: ['sin⁻¹x', '-sin⁻¹x', 'π-sin⁻¹x', 'π+sin⁻¹x'], correct: 1},
        {id: 'p5', question: 'cos⁻¹x range:', options: ['[-π/2,π/2]', '[0,π]', '(-π/2,π/2)', '(0,π)'], correct: 1}
    ],
    
    keyPoints: [
        'sin⁻¹x: Domain [-1,1], Range [-π/2,π/2]',
        'cos⁻¹x: Domain [-1,1], Range [0,π]',
        'tan⁻¹x: Domain ℝ, Range (-π/2,π/2)',
        'sin⁻¹x + cos⁻¹x = π/2',
        'tan⁻¹x + cot⁻¹x = π/2',
        'sin⁻¹(-x) = -sin⁻¹x',
        'cos⁻¹(-x) = π - cos⁻¹x',
        'tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)]',
        '2tan⁻¹x = tan⁻¹[2x/(1-x²)]',
        'sin⁻¹(1/2) = π/6'
    ],
    
    formulae: [
        {name: 'Complementary', formula: 'sin⁻¹x + cos⁻¹x = π/2'},
        {name: 'tan⁻¹ Addition', formula: 'tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)]'},
        {name: 'Double Angle', formula: '2tan⁻¹x = tan⁻¹[2x/(1-x²)]'},
        {name: 'Negative', formula: 'sin⁻¹(-x) = -sin⁻¹x'}
    ]
};
window.MATHS_TRIG_2 = MATHS_TRIG_2;
</body>
</html>