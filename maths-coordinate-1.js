<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Coordinate Geometry - Chapter 1: Straight Lines
// Complete content with slope, equations, distance formulas, angle between lines

const MATHS_COORDINATE_1 = {
    id: 'maths-coordinate-1',
    title: 'Straight Lines',
    subject: 'Mathematics',
    category: 'Coordinate Geometry',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>Distance Formula</h3>
                <p>Distance between two points A(x₁, y₁) and B(x₂, y₂):</p>
                <p class="formula">AB = √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Distance between (1, 2) and (4, 6)
                    <br>= √[(4-1)² + (6-2)²]
                    <br>= √[9 + 16]
                    <br>= √25 = <strong>5 units</strong>
                </div>
                
                <h3>Section Formula</h3>
                <p>Point dividing line segment joining A(x₁, y₁) and B(x₂, y₂) in ratio m:n</p>
                
                <h4>Internal Division:</h4>
                <p class="formula">P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))</p>
                
                <h4>External Division:</h4>
                <p class="formula">P = ((mx₂ - nx₁)/(m-n), (my₂ - ny₁)/(m-n))</p>
                
                <h3>Midpoint Formula</h3>
                <p>Midpoint of line segment joining A(x₁, y₁) and B(x₂, y₂):</p>
                <p class="formula">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
                
                <h3>Centroid of Triangle</h3>
                <p>For triangle with vertices A(x₁, y₁), B(x₂, y₂), C(x₃, y₃):</p>
                <p class="formula">G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)</p>
                
                <h3>Area of Triangle</h3>
                <p class="formula">Area = ½|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|</p>
                
                <div class="important-box">
                    <strong>Collinearity Condition:</strong>
                    <br>Three points are collinear if Area = 0
                </div>
            `
        },
        
        {
            id: 'slope',
            title: '2. Slope of a Line',
            content: `
                <h3>Definition</h3>
                <p>Slope (m) = tan θ, where θ is angle with positive x-axis</p>
                
                <h3>Slope Formula</h3>
                <p>For line passing through A(x₁, y₁) and B(x₂, y₂):</p>
                <p class="formula">m = (y₂ - y₁)/(x₂ - x₁) = tan θ</p>
                
                <h3>Special Cases</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Line Type</th>
                            <th>Angle θ</th>
                            <th>Slope m</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Parallel to x-axis</td>
                            <td>0°</td>
                            <td>m = 0</td>
                        </tr>
                        <tr>
                            <td>Parallel to y-axis</td>
                            <td>90°</td>
                            <td>m = ∞ (undefined)</td>
                        </tr>
                        <tr>
                            <td>Makes 45° with x-axis</td>
                            <td>45°</td>
                            <td>m = 1</td>
                        </tr>
                        <tr>
                            <td>Makes 135° with x-axis</td>
                            <td>135°</td>
                            <td>m = -1</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Parallel and Perpendicular Lines</h3>
                
                <h4>Parallel Lines:</h4>
                <p>If two lines are parallel:</p>
                <p class="formula">m₁ = m₂</p>
                
                <h4>Perpendicular Lines:</h4>
                <p>If two lines are perpendicular:</p>
                <p class="formula">m₁ × m₂ = -1</p>
                <p>Or: m₂ = -1/m₁</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Line with slope 2 is perpendicular to line with slope:
                    <br>m₂ = -1/2 = <strong>-1/2</strong>
                </div>
            `
        },
        
        {
            id: 'equations',
            title: '3. Equations of a Straight Line',
            content: `
                <h3>1. Slope-Intercept Form</h3>
                <p class="formula">y = mx + c</p>
                <p>Where:</p>
                <ul>
                    <li>m = slope</li>
                    <li>c = y-intercept</li>
                </ul>
                
                <h3>2. Point-Slope Form</h3>
                <p>Line passing through (x₁, y₁) with slope m:</p>
                <p class="formula">y - y₁ = m(x - x₁)</p>
                
                <h3>3. Two-Point Form</h3>
                <p>Line passing through (x₁, y₁) and (x₂, y₂):</p>
                <p class="formula">(y - y₁)/(y₂ - y₁) = (x - x₁)/(x₂ - x₁)</p>
                
                <h3>4. Intercept Form</h3>
                <p>Line with x-intercept a and y-intercept b:</p>
                <p class="formula">x/a + y/b = 1</p>
                
                <h3>5. Normal Form</h3>
                <p>Line at perpendicular distance p from origin, making angle α with x-axis:</p>
                <p class="formula">x cos α + y sin α = p</p>
                
                <h3>6. General Form</h3>
                <p class="formula">Ax + By + C = 0</p>
                <p>Where A, B, C are constants</p>
                
                <p><strong>Slope from general form:</strong> m = -A/B</p>
                <p><strong>x-intercept:</strong> -C/A</p>
                <p><strong>y-intercept:</strong> -C/B</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find equation of line with slope 2 passing through (1, 3)
                    <br><br>
                    Using point-slope form:
                    <br>y - 3 = 2(x - 1)
                    <br>y - 3 = 2x - 2
                    <br><strong>y = 2x + 1</strong>
                </div>
            `
        },
        
        {
            id: 'distance-formulas',
            title: '4. Distance Formulas',
            content: `
                <h3>Distance from Point to Line</h3>
                <p>Distance from point (x₁, y₁) to line Ax + By + C = 0:</p>
                <p class="formula">d = |Ax₁ + By₁ + C|/√(A² + B²)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Distance from (2, 3) to line 3x + 4y - 5 = 0
                    <br><br>
                    d = |3(2) + 4(3) - 5|/√(3² + 4²)
                    <br>= |6 + 12 - 5|/√(9 + 16)
                    <br>= |13|/√25
                    <br>= 13/5 = <strong>2.6 units</strong>
                </div>
                
                <h3>Distance Between Parallel Lines</h3>
                <p>For parallel lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0:</p>
                <p class="formula">d = |C₁ - C₂|/√(A² + B²)</p>
                
                <h3>Foot of Perpendicular</h3>
                <p>Foot of perpendicular from point (x₁, y₁) to line Ax + By + C = 0:</p>
                <p class="formula">((B(Bx₁ - Ay₁) - AC)/(A² + B²), (A(-Bx₁ + Ay₁) - BC)/(A² + B²))</p>
                
                <h3>Image/Reflection of Point</h3>
                <p>Image of point (x₁, y₁) in line Ax + By + C = 0:</p>
                <p class="formula">((x₁ - 2A(Ax₁ + By₁ + C)/(A² + B²)), (y₁ - 2B(Ax₁ + By₁ + C)/(A² + B²)))</p>
            `
        },
        
        {
            id: 'angle-between-lines',
            title: '5. Angle Between Two Lines',
            content: `
                <h3>Acute Angle Formula</h3>
                <p>Angle θ between lines with slopes m₁ and m₂:</p>
                <p class="formula">tan θ = |(m₁ - m₂)/(1 + m₁m₂)|</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find angle between lines y = 2x + 1 and y = 3x - 2
                    <br><br>
                    m₁ = 2, m₂ = 3
                    <br>tan θ = |(2 - 3)/(1 + 2×3)|
                    <br>= |-1/(1 + 6)|
                    <br>= 1/7
                    <br>θ = tan⁻¹(1/7) ≈ <strong>8.13°</strong>
                </div>
                
                <h3>Angle Between Lines in General Form</h3>
                <p>For lines A₁x + B₁y + C₁ = 0 and A₂x + B₂y + C₂ = 0:</p>
                <p class="formula">tan θ = |(A₁B₂ - A₂B₁)/(A₁A₂ + B₁B₂)|</p>
                
                <h3>Condition for Parallel Lines</h3>
                <p class="formula">A₁/A₂ = B₁/B₂ ≠ C₁/C₂</p>
                
                <h3>Condition for Perpendicular Lines</h3>
                <p class="formula">A₁A₂ + B₁B₂ = 0</p>
                
                <h3>Condition for Coincident Lines</h3>
                <p class="formula">A₁/A₂ = B₁/B₂ = C₁/C₂</p>
            `
        },
        
        {
            id: 'family-of-lines',
            title: '6. Family of Lines',
            content: `
                <h3>1. Lines Through Intersection</h3>
                <p>Family of lines passing through intersection of L₁ = 0 and L₂ = 0:</p>
                <p class="formula">L₁ + λL₂ = 0</p>
                <p>Where λ is a parameter</p>
                
                <h3>2. Lines Parallel to Given Line</h3>
                <p>Lines parallel to Ax + By + C = 0:</p>
                <p class="formula">Ax + By + k = 0</p>
                <p>Where k is any constant</p>
                
                <h3>3. Lines Perpendicular to Given Line</h3>
                <p>Lines perpendicular to Ax + By + C = 0:</p>
                <p class="formula">Bx - Ay + k = 0</p>
                
                <h3>Angle Bisectors</h3>
                <p>Bisectors of angles between lines L₁ = 0 and L₂ = 0:</p>
                <p class="formula">L₁/√(A₁² + B₁²) = ±L₂/√(A₂² + B₂²)</p>
                
                <div class="important-box">
                    <strong>Note:</strong> The two bisectors are perpendicular to each other
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Distance Formula',
            problem: 'Find distance between points (3, 4) and (6, 8)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                d = √[(x₂ - x₁)² + (y₂ - y₁)²]
                <br>= √[(6 - 3)² + (8 - 4)²]
                <br>= √[3² + 4²]
                <br>= √[9 + 16]
                <br>= √25
                <br>= <strong>5 units</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Equation of Line',
            problem: 'Find equation of line passing through (2, 3) and (4, 7)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Using two-point form:
                <br>(y - y₁)/(y₂ - y₁) = (x - x₁)/(x₂ - x₁)
                <br><br>
                (y - 3)/(7 - 3) = (x - 2)/(4 - 2)
                <br>(y - 3)/4 = (x - 2)/2
                <br>2(y - 3) = 4(x - 2)
                <br>2y - 6 = 4x - 8
                <br>4x - 2y - 2 = 0
                <br><strong>2x - y - 1 = 0</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Distance from Point to Line',
            problem: 'Find distance from point (1, 2) to line 3x + 4y - 10 = 0',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                d = |Ax₁ + By₁ + C|/√(A² + B²)
                <br><br>
                = |3(1) + 4(2) - 10|/√(3² + 4²)
                <br>= |3 + 8 - 10|/√(9 + 16)
                <br>= |1|/√25
                <br>= 1/5
                <br>= <strong>0.2 units</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Angle Between Lines',
            problem: 'Find acute angle between lines x + y = 1 and x - y = 1',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Line 1: y = -x + 1, m₁ = -1
                <br>Line 2: y = x - 1, m₂ = 1
                <br><br>
                tan θ = |(m₁ - m₂)/(1 + m₁m₂)|
                <br>= |(-1 - 1)/(1 + (-1)(1))|
                <br>= |-2/(1 - 1)|
                <br>= |-2/0|
                <br><br>
                Since denominator = 0, lines are perpendicular
                <br><strong>θ = 90°</strong>
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'Slope of line parallel to x-axis is:',
            options: ['0', '1', '∞', '-1'],
            correct: 0,
            explanation: 'Line parallel to x-axis has slope = 0',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'If two lines are perpendicular and one has slope 3, the other has slope:',
            options: ['3', '-3', '1/3', '-1/3'],
            correct: 3,
            explanation: 'For perpendicular lines: m₁ × m₂ = -1, so m₂ = -1/3',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Equation y = 2x + 5 has y-intercept:',
            options: ['2', '5', '-5', '2.5'],
            correct: 1,
            explanation: 'In y = mx + c form, c is y-intercept. Here c = 5',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'Distance between parallel lines 3x + 4y - 5 = 0 and 3x + 4y + 10 = 0 is:',
            options: ['3', '5', '15', '3'],
            correct: 0,
            explanation: 'd = |C₁ - C₂|/√(A² + B²) = |-5 - 10|/√(9 + 16) = 15/5 = 3',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'Slope of line 2x + 3y - 6 = 0 is:',
            options: ['2/3', '-2/3', '3/2', '-3/2'],
            correct: 1,
            explanation: 'From Ax + By + C = 0, slope m = -A/B = -2/3',
            difficulty: 'easy'
        }
    ],
    
    keyPoints: [
        'Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]',
        'Slope: m = (y₂-y₁)/(x₂-x₁) = tan θ',
        'Parallel lines: m₁ = m₂',
        'Perpendicular lines: m₁ × m₂ = -1',
        'Slope-intercept form: y = mx + c',
        'Point-slope form: y - y₁ = m(x - x₁)',
        'General form: Ax + By + C = 0',
        'Distance from point to line: d = |Ax₁ + By₁ + C|/√(A² + B²)',
        'Angle between lines: tan θ = |(m₁ - m₂)/(1 + m₁m₂)|',
        'Collinear points have area of triangle = 0'
    ],
    
    formulae: [
        {
            name: 'Distance Formula',
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            description: 'Distance between two points'
        },
        {
            name: 'Slope Formula',
            formula: 'm = (y₂-y₁)/(x₂-x₁)',
            description: 'Slope of line through two points'
        },
        {
            name: 'Slope-Intercept Form',
            formula: 'y = mx + c',
            description: 'm = slope, c = y-intercept'
        },
        {
            name: 'Point-Slope Form',
            formula: 'y - y₁ = m(x - x₁)',
            description: 'Line through point with given slope'
        },
        {
            name: 'Distance Point to Line',
            formula: 'd = |Ax₁ + By₁ + C|/√(A² + B²)',
            description: 'Perpendicular distance'
        },
        {
            name: 'Angle Between Lines',
            formula: 'tan θ = |(m₁ - m₂)/(1 + m₁m₂)|',
            description: 'Acute angle between two lines'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATHS_COORDINATE_1;
}
window.MATHS_COORDINATE_1 = MATHS_COORDINATE_1;
</body>
</html>