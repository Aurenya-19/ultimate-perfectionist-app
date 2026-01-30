<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Coordinate Geometry - Chapter 2: Circles
// Complete content with equations, tangent, normal, chord, properties

const MATHS_COORDINATE_2 = {
    id: 'maths-coordinate-2',
    title: 'Circles',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'equation',
            title: '1. Equation of Circle',
            content: `
                <h3>Standard Form</h3>
                <p>Circle with center (h, k) and radius r:</p>
                <p class="formula">(x - h)² + (y - k)² = r²</p>
                
                <h3>Center at Origin</h3>
                <p class="formula">x² + y² = r²</p>
                
                <h3>General Form</h3>
                <p class="formula">x² + y² + 2gx + 2fy + c = 0</p>
                <p>Center: (-g, -f)</p>
                <p>Radius: r = √(g² + f² - c)</p>
                
                <h3>Diameter Form</h3>
                <p>Circle with (x₁,y₁) and (x₂,y₂) as diameter endpoints:</p>
                <p class="formula">(x-x₁)(x-x₂) + (y-y₁)(y-y₂) = 0</p>
            `
        },
        
        {
            id: 'position',
            title: '2. Position of Point',
            content: `
                <h3>Point (x₁, y₁) and Circle x² + y² = r²</h3>
                
                <p>Let S = x₁² + y₁² - r²</p>
                
                <ul>
                    <li>S > 0: Point <strong>outside</strong> circle</li>
                    <li>S = 0: Point <strong>on</strong> circle</li>
                    <li>S < 0: Point <strong>inside</strong> circle</li>
                </ul>
            `
        },
        
        {
            id: 'tangent',
            title: '3. Tangent to Circle',
            content: `
                <h3>Tangent at Point (x₁, y₁)</h3>
                <p>For circle x² + y² = r²:</p>
                <p class="formula">xx₁ + yy₁ = r²</p>
                
                <p>For general circle x² + y² + 2gx + 2fy + c = 0:</p>
                <p class="formula">xx₁ + yy₁ + g(x+x₁) + f(y+y₁) + c = 0</p>
                
                <h3>Tangent with Slope m</h3>
                <p>For circle x² + y² = r²:</p>
                <p class="formula">y = mx ± r√(1 + m²)</p>
                
                <h3>Length of Tangent</h3>
                <p>From point (x₁, y₁) to circle x² + y² + 2gx + 2fy + c = 0:</p>
                <p class="formula">L = √(x₁² + y₁² + 2gx₁ + 2fy₁ + c)</p>
            `
        },
        
        {
            id: 'normal',
            title: '4. Normal to Circle',
            content: `
                <h3>Definition</h3>
                <p>Line perpendicular to tangent at point of contact</p>
                <p><strong>Normal always passes through center</strong></p>
                
                <h3>Equation of Normal</h3>
                <p>At point (x₁, y₁) on circle x² + y² = r²:</p>
                <p class="formula">y - y₁ = (y₁/x₁)(x - x₁)</p>
                
                <p>Or simply: Line joining (x₁, y₁) to center (0, 0)</p>
            `
        },
        
        {
            id: 'chord',
            title: '5. Chord Properties',
            content: `
                <h3>Chord of Contact</h3>
                <p>From external point (x₁, y₁) to circle x² + y² = r²:</p>
                <p class="formula">xx₁ + yy₁ = r²</p>
                
                <h3>Equation of Chord</h3>
                <p>Chord with midpoint (x₁, y₁):</p>
                <p class="formula">T = S₁</p>
                <p>Where T: xx₁ + yy₁ = r²</p>
                <p>S₁: x₁² + y₁² = r²</p>
                
                <h3>Length of Chord</h3>
                <p class="formula">L = 2√(r² - d²)</p>
                <p>Where d = perpendicular distance from center to chord</p>
                
                <h3>Important Results</h3>
                <ul>
                    <li>Perpendicular from center bisects chord</li>
                    <li>Equal chords equidistant from center</li>
                    <li>Diameter is longest chord</li>
                </ul>
            `
        },
        
        {
            id: 'special',
            title: '6. Special Cases',
            content: `
                <h3>Pair of Tangents</h3>
                <p>From point (x₁, y₁) to circle:</p>
                <p class="formula">SS₁ = T²</p>
                
                <h3>Director Circle</h3>
                <p>Locus of point from which perpendicular tangents drawn</p>
                <p>For x² + y² = r²: Director circle is x² + y² = 2r²</p>
                
                <h3>Radical Axis</h3>
                <p>Locus of points having equal tangent lengths to two circles</p>
                <p class="formula">S₁ - S₂ = 0</p>
                
                <h3>Orthogonal Circles</h3>
                <p>Circles intersecting at right angles</p>
                <p class="formula">2g₁g₂ + 2f₁f₂ = c₁ + c₂</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Standard Equation', problem: 'Center (3,4), radius 5', solution: '(x-3)² + (y-4)² = 25'},
        {id: 'ex2', title: 'Tangent', problem: 'Tangent at (3,4) on x²+y²=25', solution: '3x + 4y = 25'},
        {id: 'ex3', title: 'Length of Tangent', problem: 'From (5,0) to x²+y²=9', solution: 'L = √(25-9) = 4'},
        {id: 'ex4', title: 'Chord Length', problem: 'r=5, d=3. Find chord length', solution: 'L = 2√(25-9) = 8'}
    ],
    
    problems: [
        {id: 'p1', question: 'Equation x²+y²=25 has center:', options: ['(0,0)', '(5,0)', '(0,5)', '(5,5)'], correct: 0},
        {id: 'p2', question: 'Radius of x²+y²=16:', options: ['2', '4', '8', '16'], correct: 1},
        {id: 'p3', question: 'Normal passes through:', options: ['Origin', 'Center', 'Any point', 'Tangent'], correct: 1},
        {id: 'p4', question: 'Longest chord is:', options: ['Radius', 'Diameter', 'Tangent', 'Arc'], correct: 1},
        {id: 'p5', question: 'Tangent at (x₁,y₁) on x²+y²=r²:', options: ['xx₁+yy₁=r²', 'x+y=r', 'xy=r²', 'x²+y²=r'], correct: 0}
    ],
    
    keyPoints: [
        'Standard: (x-h)² + (y-k)² = r²',
        'General: x² + y² + 2gx + 2fy + c = 0',
        'Center: (-g, -f), Radius: √(g²+f²-c)',
        'Tangent at (x₁,y₁): xx₁ + yy₁ = r²',
        'Normal passes through center',
        'Length of tangent: √(S₁)',
        'Chord length: 2√(r²-d²)',
        'Perpendicular from center bisects chord',
        'Diameter is longest chord',
        'Director circle: x² + y² = 2r²'
    ],
    
    formulae: [
        {name: 'Standard Form', formula: '(x-h)² + (y-k)² = r²'},
        {name: 'General Form', formula: 'x² + y² + 2gx + 2fy + c = 0'},
        {name: 'Tangent', formula: 'xx₁ + yy₁ = r²'},
        {name: 'Length of Tangent', formula: 'L = √(x₁²+y₁²+2gx₁+2fy₁+c)'},
        {name: 'Chord Length', formula: 'L = 2√(r²-d²)'}
    ]
};
window.MATHS_COORDINATE_2 = MATHS_COORDINATE_2;
</body>
</html>