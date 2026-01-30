<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Coordinate Geometry - Chapter 3: Conic Sections
// Complete content with parabola, ellipse, hyperbola

const MATHS_COORDINATE_3 = {
    id: 'maths-coordinate-3',
    title: 'Conic Sections',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'parabola',
            title: '1. Parabola',
            content: `
                <h3>Definition</h3>
                <p>Locus of point equidistant from focus and directrix</p>
                
                <h3>Standard Equation</h3>
                <p class="formula">y² = 4ax</p>
                <ul>
                    <li>Focus: (a, 0)</li>
                    <li>Directrix: x = -a</li>
                    <li>Vertex: (0, 0)</li>
                    <li>Axis: y = 0</li>
                    <li>Latus rectum: 4a</li>
                </ul>
                
                <h3>Other Forms</h3>
                <p>y² = -4ax (opens left)</p>
                <p>x² = 4ay (opens up)</p>
                <p>x² = -4ay (opens down)</p>
                
                <h3>Focal Chord</h3>
                <p>Chord passing through focus</p>
                <p>For endpoints (at₁², 2at₁) and (at₂², 2at₂):</p>
                <p class="formula">t₁t₂ = -1</p>
            `
        },
        
        {
            id: 'ellipse',
            title: '2. Ellipse',
            content: `
                <h3>Definition</h3>
                <p>Locus where sum of distances from two foci is constant</p>
                
                <h3>Standard Equation</h3>
                <p class="formula">x²/a² + y²/b² = 1 (a > b)</p>
                <ul>
                    <li>Foci: (±ae, 0)</li>
                    <li>Vertices: (±a, 0)</li>
                    <li>Minor axis endpoints: (0, ±b)</li>
                    <li>Eccentricity: e = √(1 - b²/a²)</li>
                    <li>Latus rectum: 2b²/a</li>
                </ul>
                
                <h3>Relation</h3>
                <p class="formula">b² = a²(1 - e²)</p>
                
                <h3>Focal Property</h3>
                <p>PS + PS' = 2a (constant)</p>
                <p>Where S, S' are foci</p>
            `
        },
        
        {
            id: 'hyperbola',
            title: '3. Hyperbola',
            content: `
                <h3>Definition</h3>
                <p>Locus where difference of distances from two foci is constant</p>
                
                <h3>Standard Equation</h3>
                <p class="formula">x²/a² - y²/b² = 1</p>
                <ul>
                    <li>Foci: (±ae, 0)</li>
                    <li>Vertices: (±a, 0)</li>
                    <li>Eccentricity: e = √(1 + b²/a²)</li>
                    <li>Latus rectum: 2b²/a</li>
                    <li>Asymptotes: y = ±(b/a)x</li>
                </ul>
                
                <h3>Relation</h3>
                <p class="formula">b² = a²(e² - 1)</p>
                
                <h3>Focal Property</h3>
                <p>|PS - PS'| = 2a (constant)</p>
                
                <h3>Rectangular Hyperbola</h3>
                <p class="formula">xy = c²</p>
                <p>Asymptotes: x = 0, y = 0</p>
            `
        },
        
        {
            id: 'general-properties',
            title: '4. General Properties',
            content: `
                <h3>Eccentricity (e)</h3>
                <table class="content-table">
                    <tr><th>Conic</th><th>Eccentricity</th></tr>
                    <tr><td>Circle</td><td>e = 0</td></tr>
                    <tr><td>Ellipse</td><td>0 < e < 1</td></tr>
                    <tr><td>Parabola</td><td>e = 1</td></tr>
                    <tr><td>Hyperbola</td><td>e > 1</td></tr>
                </table>
                
                <h3>Tangent at (x₁, y₁)</h3>
                <p><strong>Parabola y² = 4ax:</strong> yy₁ = 2a(x + x₁)</p>
                <p><strong>Ellipse:</strong> xx₁/a² + yy₁/b² = 1</p>
                <p><strong>Hyperbola:</strong> xx₁/a² - yy₁/b² = 1</p>
                
                <h3>Normal</h3>
                <p>Perpendicular to tangent at point of contact</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Parabola', problem: 'y² = 16x. Find focus', solution: '4a = 16, a = 4. Focus: (4, 0)'},
        {id: 'ex2', title: 'Ellipse', problem: 'x²/25 + y²/9 = 1. Find e', solution: 'a²=25, b²=9. e = √(1-9/25) = 4/5'},
        {id: 'ex3', title: 'Hyperbola', problem: 'x²/16 - y²/9 = 1. Find e', solution: 'a²=16, b²=9. e = √(1+9/16) = 5/4'},
        {id: 'ex4', title: 'Latus Rectum', problem: 'Ellipse: a=5, b=3. Find LR', solution: 'LR = 2b²/a = 2×9/5 = 18/5'}
    ],
    
    problems: [
        {id: 'p1', question: 'Parabola: e = ?', options: ['0', '1', '<1', '>1'], correct: 1},
        {id: 'p2', question: 'Ellipse: e is:', options: ['0', '1', '0<e<1', 'e>1'], correct: 2},
        {id: 'p3', question: 'y² = 4ax, focus:', options: ['(a,0)', '(0,a)', '(-a,0)', '(2a,0)'], correct: 0},
        {id: 'p4', question: 'Hyperbola: e is:', options: ['<1', '=1', '>1', '0'], correct: 2},
        {id: 'p5', question: 'Circle: e = ?', options: ['0', '1', '∞', 'Undefined'], correct: 0}
    ],
    
    keyPoints: [
        'Parabola: y² = 4ax, e = 1',
        'Ellipse: x²/a² + y²/b² = 1, 0<e<1',
        'Hyperbola: x²/a² - y²/b² = 1, e>1',
        'Parabola focus: (a, 0)',
        'Ellipse: b² = a²(1-e²)',
        'Hyperbola: b² = a²(e²-1)',
        'Latus rectum: 4a (parabola)',
        'LR: 2b²/a (ellipse, hyperbola)',
        'Tangent: T = 0',
        'Eccentricity determines shape'
    ],
    
    formulae: [
        {name: 'Parabola', formula: 'y² = 4ax'},
        {name: 'Ellipse', formula: 'x²/a² + y²/b² = 1'},
        {name: 'Hyperbola', formula: 'x²/a² - y²/b² = 1'},
        {name: 'Ellipse e', formula: 'e = √(1 - b²/a²)'},
        {name: 'Hyperbola e', formula: 'e = √(1 + b²/a²)'}
    ]
};
window.MATHS_COORDINATE_3 = MATHS_COORDINATE_3;
</body>
</html>