<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Calculus - Chapter 2: Differentiation
// Complete content with derivative rules, applications, all function types

const MATHS_CALCULUS_2 = {
    id: 'maths-calculus-2',
    title: 'Differentiation',
    subject: 'Mathematics',
    category: 'Calculus',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Differentiation',
            content: `
                <h3>What is Differentiation?</h3>
                <p>Process of finding the rate of change of a function with respect to a variable.</p>
                
                <h3>Derivative (First Principle)</h3>
                <p class="formula">f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>
                
                <h3>Notations</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Notation</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>f'(x)</td>
                            <td>Derivative of f(x)</td>
                        </tr>
                        <tr>
                            <td>dy/dx</td>
                            <td>Derivative of y with respect to x</td>
                        </tr>
                        <tr>
                            <td>Df(x)</td>
                            <td>Differential operator</td>
                        </tr>
                        <tr>
                            <td>y'</td>
                            <td>First derivative</td>
                        </tr>
                        <tr>
                            <td>y''</td>
                            <td>Second derivative</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Geometrical Meaning</h3>
                <p>Derivative at a point = <strong>Slope of tangent</strong> at that point</p>
                
                <h3>Physical Meaning</h3>
                <ul>
                    <li>Velocity = ds/dt (rate of change of displacement)</li>
                    <li>Acceleration = dv/dt (rate of change of velocity)</li>
                </ul>
                
                <div class="example-box">
                    <strong>Example:</strong> Find derivative of f(x) = x² from first principle
                    <br><br>
                    f'(x) = lim(h→0) [(x+h)² - x²]/h
                    <br>= lim(h→0) [x² + 2xh + h² - x²]/h
                    <br>= lim(h→0) [2xh + h²]/h
                    <br>= lim(h→0) [2x + h]
                    <br>= <strong>2x</strong>
                </div>
            `
        },
        
        {
            id: 'basic-rules',
            title: '2. Basic Differentiation Rules',
            content: `
                <h3>Standard Derivatives</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Function</th>
                            <th>Derivative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>d/dx(c) = 0</td>
                            <td>Constant</td>
                        </tr>
                        <tr>
                            <td>d/dx(x) = 1</td>
                            <td>Linear</td>
                        </tr>
                        <tr>
                            <td>d/dx(xⁿ) = nxⁿ⁻¹</td>
                            <td>Power rule</td>
                        </tr>
                        <tr>
                            <td>d/dx(eˣ) = eˣ</td>
                            <td>Exponential</td>
                        </tr>
                        <tr>
                            <td>d/dx(aˣ) = aˣ ln a</td>
                            <td>General exponential</td>
                        </tr>
                        <tr>
                            <td>d/dx(ln x) = 1/x</td>
                            <td>Natural log</td>
                        </tr>
                        <tr>
                            <td>d/dx(log_a x) = 1/(x ln a)</td>
                            <td>General log</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Trigonometric Derivatives</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Function</th>
                            <th>Derivative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>d/dx(sin x) = cos x</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(cos x) = -sin x</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(tan x) = sec² x</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(cot x) = -cosec² x</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(sec x) = sec x tan x</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(cosec x) = -cosec x cot x</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Inverse Trigonometric Derivatives</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Function</th>
                            <th>Derivative</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>d/dx(sin⁻¹ x) = 1/√(1-x²)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(cos⁻¹ x) = -1/√(1-x²)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(tan⁻¹ x) = 1/(1+x²)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(cot⁻¹ x) = -1/(1+x²)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(sec⁻¹ x) = 1/(|x|√(x²-1))</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>d/dx(cosec⁻¹ x) = -1/(|x|√(x²-1))</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'rules',
            title: '3. Rules of Differentiation',
            content: `
                <h3>1. Constant Multiple Rule</h3>
                <p class="formula">d/dx[cf(x)] = c·f'(x)</p>
                
                <h3>2. Sum/Difference Rule</h3>
                <p class="formula">d/dx[f(x) ± g(x)] = f'(x) ± g'(x)</p>
                
                <h3>3. Product Rule</h3>
                <p class="formula">d/dx[f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> d/dx(x²·sin x)
                    <br>= 2x·sin x + x²·cos x
                </div>
                
                <h3>4. Quotient Rule</h3>
                <p class="formula">d/dx[f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)]/[g(x)]²</p>
                
                <div class="example-box">
                    <strong>Example:</strong> d/dx(sin x/x)
                    <br>= [x·cos x - sin x·1]/x²
                    <br>= (x cos x - sin x)/x²
                </div>
                
                <h3>5. Chain Rule</h3>
                <p class="formula">d/dx[f(g(x))] = f'(g(x))·g'(x)</p>
                <p>Or: dy/dx = (dy/du)·(du/dx)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> d/dx(sin(x²))
                    <br>Let u = x², then y = sin u
                    <br>dy/dx = cos u · 2x
                    <br>= 2x cos(x²)
                </div>
                
                <h3>6. Power Rule (General)</h3>
                <p class="formula">d/dx[f(x)]ⁿ = n[f(x)]ⁿ⁻¹·f'(x)</p>
            `
        },
        
        {
            id: 'special-techniques',
            title: '4. Special Differentiation Techniques',
            content: `
                <h3>1. Logarithmic Differentiation</h3>
                <p>Used when function is of form [f(x)]^[g(x)]</p>
                
                <p><strong>Method:</strong></p>
                <ol>
                    <li>Take ln on both sides</li>
                    <li>Differentiate using chain rule</li>
                    <li>Solve for dy/dx</li>
                </ol>
                
                <div class="example-box">
                    <strong>Example:</strong> Find dy/dx if y = x^x
                    <br><br>
                    ln y = x ln x
                    <br>1/y · dy/dx = ln x + x·(1/x)
                    <br>1/y · dy/dx = ln x + 1
                    <br>dy/dx = y(ln x + 1)
                    <br><strong>dy/dx = x^x(ln x + 1)</strong>
                </div>
                
                <h3>2. Parametric Differentiation</h3>
                <p>When x and y are given in terms of parameter t:</p>
                <p class="formula">dy/dx = (dy/dt)/(dx/dt)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> x = t², y = t³
                    <br><br>
                    dx/dt = 2t, dy/dt = 3t²
                    <br>dy/dx = 3t²/2t = <strong>3t/2</strong>
                </div>
                
                <h3>3. Implicit Differentiation</h3>
                <p>When y is not explicitly expressed in terms of x</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find dy/dx if x² + y² = 25
                    <br><br>
                    Differentiate both sides:
                    <br>2x + 2y·dy/dx = 0
                    <br>dy/dx = -2x/2y
                    <br><strong>dy/dx = -x/y</strong>
                </div>
                
                <h3>4. Higher Order Derivatives</h3>
                <p>Second derivative: d²y/dx² = d/dx(dy/dx)</p>
                <p>Third derivative: d³y/dx³ = d/dx(d²y/dx²)</p>
                <p>nth derivative: dⁿy/dxⁿ</p>
            `
        },
        
        {
            id: 'applications',
            title: '5. Applications of Derivatives',
            content: `
                <h3>1. Equation of Tangent and Normal</h3>
                
                <h4>Tangent at (x₁, y₁):</h4>
                <p class="formula">y - y₁ = m(x - x₁)</p>
                <p>where m = dy/dx at (x₁, y₁)</p>
                
                <h4>Normal at (x₁, y₁):</h4>
                <p class="formula">y - y₁ = -1/m(x - x₁)</p>
                
                <h3>2. Increasing and Decreasing Functions</h3>
                <ul>
                    <li>f'(x) > 0 → f(x) is <strong>increasing</strong></li>
                    <li>f'(x) < 0 → f(x) is <strong>decreasing</strong></li>
                    <li>f'(x) = 0 → f(x) is <strong>stationary</strong></li>
                </ul>
                
                <h3>3. Maxima and Minima</h3>
                
                <h4>Critical Points:</h4>
                <p>Points where f'(x) = 0 or f'(x) doesn't exist</p>
                
                <h4>First Derivative Test:</h4>
                <ul>
                    <li>f'(x) changes from + to - → <strong>Local maximum</strong></li>
                    <li>f'(x) changes from - to + → <strong>Local minimum</strong></li>
                    <li>f'(x) doesn't change sign → <strong>Neither</strong></li>
                </ul>
                
                <h4>Second Derivative Test:</h4>
                <p>At critical point x = a:</p>
                <ul>
                    <li>f''(a) < 0 → <strong>Local maximum</strong></li>
                    <li>f''(a) > 0 → <strong>Local minimum</strong></li>
                    <li>f''(a) = 0 → <strong>Test fails</strong> (use first derivative test)</li>
                </ul>
                
                <h3>4. Rate of Change</h3>
                <p>If y = f(x), then dy/dx represents rate of change of y with respect to x</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Radius of circle increases at 2 cm/s. Find rate of increase of area when r = 5 cm.
                    <br><br>
                    A = πr²
                    <br>dA/dt = 2πr · dr/dt
                    <br>= 2π(5)(2)
                    <br>= <strong>20π cm²/s</strong>
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Basic Differentiation',
            problem: 'Find dy/dx if y = 3x⁴ - 5x² + 7x - 2',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                dy/dx = d/dx(3x⁴) - d/dx(5x²) + d/dx(7x) - d/dx(2)
                <br>= 3(4x³) - 5(2x) + 7(1) - 0
                <br>= 12x³ - 10x + 7
                <br><br>
                <strong>Answer: dy/dx = 12x³ - 10x + 7</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Product Rule',
            problem: 'Differentiate y = x³·eˣ',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Using product rule: d/dx(uv) = u'v + uv'
                <br><br>
                u = x³, v = eˣ
                <br>u' = 3x², v' = eˣ
                <br><br>
                dy/dx = 3x²·eˣ + x³·eˣ
                <br>= eˣ(3x² + x³)
                <br>= <strong>x²eˣ(3 + x)</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Chain Rule',
            problem: 'Find dy/dx if y = sin(3x² + 5)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Let u = 3x² + 5, then y = sin u
                <br><br>
                dy/du = cos u
                <br>du/dx = 6x
                <br><br>
                dy/dx = (dy/du)·(du/dx)
                <br>= cos u · 6x
                <br>= 6x cos(3x² + 5)
                <br><br>
                <strong>Answer: dy/dx = 6x cos(3x² + 5)</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Logarithmic Differentiation',
            problem: 'Find dy/dx if y = (sin x)^x',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Taking ln both sides:
                <br>ln y = x ln(sin x)
                <br><br>
                Differentiating:
                <br>1/y · dy/dx = ln(sin x) + x · (cos x/sin x)
                <br>1/y · dy/dx = ln(sin x) + x cot x
                <br><br>
                dy/dx = y[ln(sin x) + x cot x]
                <br><br>
                <strong>dy/dx = (sin x)^x[ln(sin x) + x cot x]</strong>
            `,
            difficulty: 'hard'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'If y = x⁵, then dy/dx = ?',
            options: ['x⁴', '5x⁴', '5x⁵', 'x⁵'],
            correct: 1,
            explanation: 'Using power rule: d/dx(xⁿ) = nxⁿ⁻¹, so d/dx(x⁵) = 5x⁴',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'd/dx(eˣ) = ?',
            options: ['eˣ', 'xeˣ⁻¹', 'eˣ ln e', 'eˣ/x'],
            correct: 0,
            explanation: 'Derivative of eˣ is eˣ itself',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'If y = sin x, then d²y/dx² = ?',
            options: ['cos x', '-cos x', 'sin x', '-sin x'],
            correct: 3,
            explanation: 'dy/dx = cos x, d²y/dx² = -sin x',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'd/dx(tan⁻¹ x) = ?',
            options: ['1/(1-x²)', '1/(1+x²)', '-1/(1+x²)', 'sec² x'],
            correct: 1,
            explanation: 'Standard derivative: d/dx(tan⁻¹ x) = 1/(1+x²)',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'If f(x) = x³ - 3x + 5, then f\'(2) = ?',
            options: ['9', '11', '7', '5'],
            correct: 0,
            explanation: 'f\'(x) = 3x² - 3, f\'(2) = 3(4) - 3 = 12 - 3 = 9',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'Derivative = Rate of change = Slope of tangent',
        'Power rule: d/dx(xⁿ) = nxⁿ⁻¹',
        'd/dx(eˣ) = eˣ, d/dx(ln x) = 1/x',
        'd/dx(sin x) = cos x, d/dx(cos x) = -sin x',
        'Product rule: (uv)\' = u\'v + uv\'',
        'Quotient rule: (u/v)\' = (u\'v - uv\')/v²',
        'Chain rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x)',
        'f\'(x) > 0 → increasing, f\'(x) < 0 → decreasing',
        'f\'(x) = 0 → critical point (possible max/min)',
        'f\'\'(x) < 0 → maximum, f\'\'(x) > 0 → minimum'
    ],
    
    formulae: [
        {
            name: 'Power Rule',
            formula: 'd/dx(xⁿ) = nxⁿ⁻¹',
            description: 'Most basic differentiation rule'
        },
        {
            name: 'Product Rule',
            formula: 'd/dx(uv) = u\'v + uv\'',
            description: 'Derivative of product'
        },
        {
            name: 'Quotient Rule',
            formula: 'd/dx(u/v) = (u\'v - uv\')/v²',
            description: 'Derivative of quotient'
        },
        {
            name: 'Chain Rule',
            formula: 'dy/dx = (dy/du)·(du/dx)',
            description: 'Derivative of composite function'
        },
        {
            name: 'Exponential',
            formula: 'd/dx(eˣ) = eˣ',
            description: 'Derivative of e^x'
        },
        {
            name: 'Logarithm',
            formula: 'd/dx(ln x) = 1/x',
            description: 'Derivative of natural log'
        },
        {
            name: 'Sine',
            formula: 'd/dx(sin x) = cos x',
            description: 'Derivative of sine'
        },
        {
            name: 'Cosine',
            formula: 'd/dx(cos x) = -sin x',
            description: 'Derivative of cosine'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATHS_CALCULUS_2;
}
window.MATHS_CALCULUS_2 = MATHS_CALCULUS_2;
</body>
</html>