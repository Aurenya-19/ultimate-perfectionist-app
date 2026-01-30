<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 3: Quadratic Equations
// Complete content with roots, discriminant, sum-product relations, applications

const MATHS_ALGEBRA_3 = {
    id: 'maths-algebra-3',
    title: 'Quadratic Equations',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Quadratic Equations',
            content: `
                <h3>Definition</h3>
                <p>An equation of the form:</p>
                <p class="formula">ax² + bx + c = 0, where a ≠ 0</p>
                
                <p>Where:</p>
                <ul>
                    <li>a, b, c are real constants</li>
                    <li>a is coefficient of x² (leading coefficient)</li>
                    <li>b is coefficient of x</li>
                    <li>c is constant term</li>
                    <li>x is the variable</li>
                </ul>
                
                <h3>Standard Form</h3>
                <p class="formula">ax² + bx + c = 0</p>
                
                <h3>Examples</h3>
                <ul>
                    <li>x² - 5x + 6 = 0 (a=1, b=-5, c=6)</li>
                    <li>2x² + 3x - 2 = 0 (a=2, b=3, c=-2)</li>
                    <li>x² - 4 = 0 (a=1, b=0, c=-4)</li>
                    <li>x² + 1 = 0 (a=1, b=0, c=1)</li>
                </ul>
                
                <h3>Roots/Solutions</h3>
                <p>Values of x that satisfy the equation are called <strong>roots</strong> or <strong>solutions</strong></p>
                <p>A quadratic equation has <strong>exactly 2 roots</strong> (may be equal or complex)</p>
            `
        },
        
        {
            id: 'solving-methods',
            title: '2. Methods of Solving Quadratic Equations',
            content: `
                <h3>1. Factorization Method</h3>
                <p>Express ax² + bx + c as product of two linear factors</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Solve x² - 5x + 6 = 0
                    <br><br>
                    x² - 5x + 6 = 0
                    <br>(x - 2)(x - 3) = 0
                    <br>x - 2 = 0 or x - 3 = 0
                    <br><strong>x = 2 or x = 3</strong>
                </div>
                
                <h3>2. Completing the Square</h3>
                <p>Convert to perfect square form</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Solve x² + 6x + 5 = 0
                    <br><br>
                    x² + 6x = -5
                    <br>x² + 6x + 9 = -5 + 9
                    <br>(x + 3)² = 4
                    <br>x + 3 = ±2
                    <br><strong>x = -1 or x = -5</strong>
                </div>
                
                <h3>3. Quadratic Formula (Sridharacharya Formula)</h3>
                <p>Most general method:</p>
                <p class="formula">x = [-b ± √(b² - 4ac)]/(2a)</p>
                
                <div class="formula-box">
                    <strong>Derivation:</strong>
                    <br>ax² + bx + c = 0
                    <br>x² + (b/a)x + c/a = 0
                    <br>x² + (b/a)x = -c/a
                    <br>x² + (b/a)x + (b/2a)² = -c/a + (b/2a)²
                    <br>(x + b/2a)² = (b² - 4ac)/(4a²)
                    <br>x + b/2a = ±√(b² - 4ac)/(2a)
                    <br><strong>x = [-b ± √(b² - 4ac)]/(2a)</strong>
                </div>
                
                <div class="example-box">
                    <strong>Example:</strong> Solve 2x² + 5x + 2 = 0
                    <br><br>
                    a = 2, b = 5, c = 2
                    <br>x = [-5 ± √(25 - 16)]/4
                    <br>= [-5 ± √9]/4
                    <br>= [-5 ± 3]/4
                    <br><strong>x = -1/2 or x = -2</strong>
                </div>
            `
        },
        
        {
            id: 'discriminant',
            title: '3. Discriminant and Nature of Roots',
            content: `
                <h3>Discriminant (D or Δ)</h3>
                <p class="formula">D = b² - 4ac</p>
                
                <h3>Nature of Roots Based on Discriminant</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Discriminant</th>
                            <th>Nature of Roots</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>D > 0</td>
                            <td>Two distinct real roots</td>
                            <td>x² - 5x + 6 = 0</td>
                        </tr>
                        <tr>
                            <td>D = 0</td>
                            <td>Two equal real roots (repeated)</td>
                            <td>x² - 4x + 4 = 0</td>
                        </tr>
                        <tr>
                            <td>D < 0</td>
                            <td>Two complex conjugate roots</td>
                            <td>x² + x + 1 = 0</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Additional Conditions (when a, b, c are rational)</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Condition</th>
                            <th>Nature of Roots</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>D > 0 and perfect square</td>
                            <td>Two distinct rational roots</td>
                        </tr>
                        <tr>
                            <td>D > 0 and not perfect square</td>
                            <td>Two distinct irrational roots</td>
                        </tr>
                        <tr>
                            <td>D = 0</td>
                            <td>Two equal rational roots</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="important-box">
                    <strong>Important:</strong> If roots are irrational and of form p ± √q, they occur in conjugate pairs.
                    <br>If one root is 2 + √3, the other must be 2 - √3
                </div>
                
                <div class="example-box">
                    <strong>Example:</strong> Find nature of roots of x² + 2x + 5 = 0
                    <br><br>
                    D = b² - 4ac = 4 - 20 = -16 < 0
                    <br><strong>Roots are complex (imaginary)</strong>
                </div>
            `
        },
        
        {
            id: 'sum-product',
            title: '4. Relation Between Roots and Coefficients',
            content: `
                <h3>For Equation ax² + bx + c = 0</h3>
                <p>If α and β are the two roots, then:</p>
                
                <h4>Sum of Roots:</h4>
                <p class="formula">α + β = -b/a</p>
                
                <h4>Product of Roots:</h4>
                <p class="formula">α × β = c/a</p>
                
                <h3>Formation of Quadratic Equation</h3>
                <p>If α and β are roots, equation is:</p>
                <p class="formula">x² - (α + β)x + αβ = 0</p>
                <p class="formula">x² - (sum of roots)x + (product of roots) = 0</p>
                
                <div class="example-box">
                    <strong>Example 1:</strong> Find sum and product of roots of 2x² - 6x + 3 = 0
                    <br><br>
                    Sum = -b/a = -(-6)/2 = <strong>3</strong>
                    <br>Product = c/a = 3/2 = <strong>1.5</strong>
                </div>
                
                <div class="example-box">
                    <strong>Example 2:</strong> Form equation with roots 2 and 3
                    <br><br>
                    Sum = 2 + 3 = 5
                    <br>Product = 2 × 3 = 6
                    <br>Equation: x² - 5x + 6 = 0
                </div>
                
                <h3>Useful Relations</h3>
                <p>If α and β are roots:</p>
                <ul>
                    <li>α² + β² = (α + β)² - 2αβ</li>
                    <li>α³ + β³ = (α + β)³ - 3αβ(α + β)</li>
                    <li>|α - β| = √[(α + β)² - 4αβ] = √D/|a|</li>
                    <li>1/α + 1/β = (α + β)/αβ</li>
                </ul>
            `
        },
        
        {
            id: 'special-cases',
            title: '5. Special Cases and Conditions',
            content: `
                <h3>Common Root Problems</h3>
                
                <h4>If equations have one common root:</h4>
                <p>Let α be the common root of:</p>
                <ul>
                    <li>a₁x² + b₁x + c₁ = 0</li>
                    <li>a₂x² + b₂x + c₂ = 0</li>
                </ul>
                <p>Then α satisfies both equations</p>
                
                <h3>Conditions on Roots</h3>
                
                <h4>1. Both roots positive:</h4>
                <ul>
                    <li>D ≥ 0</li>
                    <li>Sum of roots > 0 (−b/a > 0)</li>
                    <li>Product of roots > 0 (c/a > 0)</li>
                </ul>
                
                <h4>2. Both roots negative:</h4>
                <ul>
                    <li>D ≥ 0</li>
                    <li>Sum of roots < 0 (−b/a < 0)</li>
                    <li>Product of roots > 0 (c/a > 0)</li>
                </ul>
                
                <h4>3. Roots of opposite signs:</h4>
                <ul>
                    <li>Product of roots < 0 (c/a < 0)</li>
                </ul>
                
                <h4>4. Roots are reciprocals:</h4>
                <ul>
                    <li>Product = 1, so c/a = 1 → c = a</li>
                </ul>
                
                <h4>5. Roots are equal in magnitude but opposite in sign:</h4>
                <ul>
                    <li>Sum = 0, so −b/a = 0 → b = 0</li>
                </ul>
                
                <h3>Maximum and Minimum Values</h3>
                <p>For quadratic expression f(x) = ax² + bx + c:</p>
                
                <h4>If a > 0 (parabola opens upward):</h4>
                <p>Minimum value at x = −b/(2a)</p>
                <p class="formula">f_min = c - b²/(4a) = (4ac - b²)/(4a) = -D/(4a)</p>
                
                <h4>If a < 0 (parabola opens downward):</h4>
                <p>Maximum value at x = −b/(2a)</p>
                <p class="formula">f_max = c - b²/(4a) = -D/(4a)</p>
            `
        },
        
        {
            id: 'applications',
            title: '6. Applications of Quadratic Equations',
            content: `
                <h3>1. Word Problems</h3>
                
                <div class="example-box">
                    <strong>Example:</strong> The sum of a number and its reciprocal is 2.5. Find the number.
                    <br><br>
                    Let number be x
                    <br>x + 1/x = 2.5
                    <br>x² + 1 = 2.5x
                    <br>x² - 2.5x + 1 = 0
                    <br>2x² - 5x + 2 = 0
                    <br>(2x - 1)(x - 2) = 0
                    <br><strong>x = 1/2 or x = 2</strong>
                </div>
                
                <h3>2. Area and Perimeter Problems</h3>
                
                <div class="example-box">
                    <strong>Example:</strong> A rectangular plot has length 3m more than width. If area is 40 m², find dimensions.
                    <br><br>
                    Let width = x, then length = x + 3
                    <br>Area: x(x + 3) = 40
                    <br>x² + 3x - 40 = 0
                    <br>(x + 8)(x - 5) = 0
                    <br>x = -8 (rejected) or x = 5
                    <br><strong>Width = 5m, Length = 8m</strong>
                </div>
                
                <h3>3. Time, Speed, Distance Problems</h3>
                
                <div class="example-box">
                    <strong>Example:</strong> A train travels 360 km at uniform speed. If speed was 5 km/h more, it would take 1 hour less. Find speed.
                    <br><br>
                    Let speed = x km/h
                    <br>Time = 360/x hours
                    <br>New time = 360/(x+5) hours
                    <br><br>
                    360/x - 360/(x+5) = 1
                    <br>360(x+5) - 360x = x(x+5)
                    <br>1800 = x² + 5x
                    <br>x² + 5x - 1800 = 0
                    <br>(x + 45)(x - 40) = 0
                    <br><strong>Speed = 40 km/h</strong>
                </div>
                
                <h3>4. Age Problems</h3>
                <h3>5. Profit/Loss Problems</h3>
                <h3>6. Work Problems</h3>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Solving by Formula',
            problem: 'Solve 3x² - 5x + 2 = 0 using quadratic formula',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                a = 3, b = -5, c = 2
                <br><br>
                x = [-b ± √(b² - 4ac)]/(2a)
                <br>= [5 ± √(25 - 24)]/6
                <br>= [5 ± √1]/6
                <br>= [5 ± 1]/6
                <br><br>
                x = 6/6 = 1 or x = 4/6 = 2/3
                <br><br>
                <strong>x = 1 or x = 2/3</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Nature of Roots',
            problem: 'Find value of k for which x² + kx + 4 = 0 has equal roots',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                For equal roots: D = 0
                <br>b² - 4ac = 0
                <br>k² - 4(1)(4) = 0
                <br>k² - 16 = 0
                <br>k² = 16
                <br><strong>k = ±4</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Sum and Product',
            problem: 'If α and β are roots of x² - 7x + 12 = 0, find α² + β²',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Sum: α + β = 7
                <br>Product: αβ = 12
                <br><br>
                α² + β² = (α + β)² - 2αβ
                <br>= 7² - 2(12)
                <br>= 49 - 24
                <br>= <strong>25</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Formation of Equation',
            problem: 'Form quadratic equation with roots 3 + √2 and 3 - √2',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Sum = (3 + √2) + (3 - √2) = 6
                <br>Product = (3 + √2)(3 - √2) = 9 - 2 = 7
                <br><br>
                Equation: x² - (sum)x + (product) = 0
                <br><strong>x² - 6x + 7 = 0</strong>
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'Roots of x² - 5x + 6 = 0 are:',
            options: ['2, 3', '-2, -3', '1, 6', '-1, -6'],
            correct: 0,
            explanation: 'x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'If D < 0, roots are:',
            options: ['Real and equal', 'Real and distinct', 'Complex', 'Rational'],
            correct: 2,
            explanation: 'When discriminant is negative, roots are complex (imaginary)',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Sum of roots of 2x² - 6x + 3 = 0 is:',
            options: ['3', '-3', '6', '-6'],
            correct: 0,
            explanation: 'Sum = -b/a = -(-6)/2 = 3',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'For equation x² + px + q = 0, product of roots is:',
            options: ['p', '-p', 'q', '-q'],
            correct: 2,
            explanation: 'Product of roots = c/a = q/1 = q',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'If roots are reciprocals, then:',
            options: ['a = b', 'b = c', 'a = c', 'a + c = 0'],
            correct: 2,
            explanation: 'If roots are reciprocals, product = 1, so c/a = 1, hence a = c',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'Standard form: ax² + bx + c = 0, a ≠ 0',
        'Quadratic formula: x = [-b ± √(b² - 4ac)]/(2a)',
        'Discriminant: D = b² - 4ac',
        'D > 0: Two distinct real roots',
        'D = 0: Two equal real roots',
        'D < 0: Two complex conjugate roots',
        'Sum of roots: α + β = -b/a',
        'Product of roots: αβ = c/a',
        'Equation from roots: x² - (α+β)x + αβ = 0',
        'Maximum/Minimum at x = -b/(2a)'
    ],
    
    formulae: [
        {
            name: 'Quadratic Formula',
            formula: 'x = [-b ± √(b² - 4ac)]/(2a)',
            description: 'General solution for ax² + bx + c = 0'
        },
        {
            name: 'Discriminant',
            formula: 'D = b² - 4ac',
            description: 'Determines nature of roots'
        },
        {
            name: 'Sum of Roots',
            formula: 'α + β = -b/a',
            description: 'Relation between roots and coefficients'
        },
        {
            name: 'Product of Roots',
            formula: 'αβ = c/a',
            description: 'Relation between roots and coefficients'
        },
        {
            name: 'Equation from Roots',
            formula: 'x² - (α+β)x + αβ = 0',
            description: 'Form equation given roots'
        },
        {
            name: 'Vertex (Max/Min)',
            formula: 'x = -b/(2a), y = -D/(4a)',
            description: 'Vertex of parabola'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATHS_ALGEBRA_3;
}
window.MATHS_ALGEBRA_3 = MATHS_ALGEBRA_3;
</body>
</html>