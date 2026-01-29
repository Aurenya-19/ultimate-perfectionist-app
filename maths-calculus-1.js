<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Calculus - Chapter 1: Limits and Continuity
// Complete content with limits, continuity, and applications

const MATHS_CALCULUS_1 = {
    id: 'maths-calculus-1',
    title: 'Limits and Continuity',
    subject: 'Mathematics',
    category: 'Calculus',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'limits-intro',
            title: '1. Introduction to Limits',
            content: `
                <h3>What is a Limit?</h3>
                <p>The limit of a function f(x) as x approaches 'a' is the value that f(x) gets closer to as x gets closer to 'a'.</p>
                
                <p class="formula">lim(x→a) f(x) = L</p>
                
                <p>This means: As x approaches a, f(x) approaches L</p>
                
                <h3>Important Points</h3>
                <ul>
                    <li>Limit may exist even if function is not defined at that point</li>
                    <li>Limit depends on values near the point, not at the point</li>
                    <li>Left-hand limit (LHL) and Right-hand limit (RHL) must be equal for limit to exist</li>
                </ul>
                
                <h3>Left-Hand and Right-Hand Limits</h3>
                <p><strong>Left-Hand Limit (LHL):</strong></p>
                <p class="formula">lim(x→a⁻) f(x) = L₁</p>
                <p>Approaching from left (x < a)</p>
                
                <p><strong>Right-Hand Limit (RHL):</strong></p>
                <p class="formula">lim(x→a⁺) f(x) = L₂</p>
                <p>Approaching from right (x > a)</p>
                
                <div class="important-box">
                    <strong>Limit exists if and only if:</strong>
                    <br>LHL = RHL
                    <br>lim(x→a⁻) f(x) = lim(x→a⁺) f(x)
                </div>
            `
        },
        
        {
            id: 'limit-theorems',
            title: '2. Limit Theorems',
            content: `
                <h3>Basic Limit Theorems</h3>
                <p>If lim(x→a) f(x) = L and lim(x→a) g(x) = M, then:</p>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Operation</th>
                            <th>Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sum</td>
                            <td>lim[f(x) + g(x)] = L + M</td>
                        </tr>
                        <tr>
                            <td>Difference</td>
                            <td>lim[f(x) - g(x)] = L - M</td>
                        </tr>
                        <tr>
                            <td>Product</td>
                            <td>lim[f(x)·g(x)] = L·M</td>
                        </tr>
                        <tr>
                            <td>Quotient</td>
                            <td>lim[f(x)/g(x)] = L/M (if M ≠ 0)</td>
                        </tr>
                        <tr>
                            <td>Constant Multiple</td>
                            <td>lim[k·f(x)] = k·L</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td>lim[f(x)]ⁿ = Lⁿ</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Standard Limits</h3>
                <div class="formula-box">
                    <p><strong>1. Trigonometric Limits:</strong></p>
                    <p class="formula">lim(x→0) (sin x)/x = 1</p>
                    <p class="formula">lim(x→0) (tan x)/x = 1</p>
                    <p class="formula">lim(x→0) (1 - cos x)/x = 0</p>
                    <p class="formula">lim(x→0) (1 - cos x)/x² = 1/2</p>
                    <br>
                    <p><strong>2. Exponential Limits:</strong></p>
                    <p class="formula">lim(x→0) (eˣ - 1)/x = 1</p>
                    <p class="formula">lim(x→0) (aˣ - 1)/x = ln a</p>
                    <br>
                    <p><strong>3. Logarithmic Limits:</strong></p>
                    <p class="formula">lim(x→0) ln(1 + x)/x = 1</p>
                    <p class="formula">lim(x→0) log_a(1 + x)/x = 1/ln a</p>
                    <br>
                    <p><strong>4. Important Limit:</strong></p>
                    <p class="formula">lim(x→∞) (1 + 1/x)ˣ = e</p>
                    <p class="formula">lim(x→0) (1 + x)^(1/x) = e</p>
                </div>
            `
        },
        
        {
            id: 'indeterminate-forms',
            title: '3. Indeterminate Forms',
            content: `
                <h3>What are Indeterminate Forms?</h3>
                <p>Forms that don't have a definite value and require special techniques to evaluate.</p>
                
                <h3>Seven Indeterminate Forms</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Form</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0/0</td>
                            <td>lim(x→0) (sin x)/x</td>
                        </tr>
                        <tr>
                            <td>∞/∞</td>
                            <td>lim(x→∞) x²/eˣ</td>
                        </tr>
                        <tr>
                            <td>0 × ∞</td>
                            <td>lim(x→0⁺) x·ln x</td>
                        </tr>
                        <tr>
                            <td>∞ - ∞</td>
                            <td>lim(x→∞) (x - √(x² + x))</td>
                        </tr>
                        <tr>
                            <td>0⁰</td>
                            <td>lim(x→0⁺) x^x</td>
                        </tr>
                        <tr>
                            <td>1^∞</td>
                            <td>lim(x→∞) (1 + 1/x)ˣ</td>
                        </tr>
                        <tr>
                            <td>∞⁰</td>
                            <td>lim(x→∞) x^(1/x)</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Methods to Evaluate Indeterminate Forms</h3>
                
                <h4>1. Factorization</h4>
                <div class="example-box">
                    <strong>Example:</strong> lim(x→2) (x² - 4)/(x - 2)
                    <br>= lim(x→2) (x + 2)(x - 2)/(x - 2)
                    <br>= lim(x→2) (x + 2) = 4
                </div>
                
                <h4>2. Rationalization</h4>
                <div class="example-box">
                    <strong>Example:</strong> lim(x→0) (√(1+x) - 1)/x
                    <br>Multiply by (√(1+x) + 1)/(√(1+x) + 1)
                    <br>= lim(x→0) (1+x-1)/(x(√(1+x) + 1))
                    <br>= lim(x→0) 1/(√(1+x) + 1) = 1/2
                </div>
                
                <h4>3. Using Standard Limits</h4>
                <div class="example-box">
                    <strong>Example:</strong> lim(x→0) (sin 3x)/(2x)
                    <br>= lim(x→0) (3/2)·(sin 3x)/(3x)
                    <br>= (3/2)·1 = 3/2
                </div>
                
                <h4>4. L'Hospital's Rule</h4>
                <p>For 0/0 or ∞/∞ forms:</p>
                <p class="formula">lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> lim(x→0) (eˣ - 1)/x
                    <br>Using L'Hospital: = lim(x→0) eˣ/1 = 1
                </div>
            `
        },
        
        {
            id: 'continuity',
            title: '4. Continuity',
            content: `
                <h3>Definition of Continuity</h3>
                <p>A function f(x) is continuous at x = a if:</p>
                <ol>
                    <li>f(a) is defined</li>
                    <li>lim(x→a) f(x) exists</li>
                    <li>lim(x→a) f(x) = f(a)</li>
                </ol>
                
                <div class="formula-box">
                    <strong>All three conditions must be satisfied!</strong>
                    <br><br>
                    Mathematically:
                    <br>lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a)
                </div>
                
                <h3>Types of Discontinuity</h3>
                
                <h4>1. Removable Discontinuity</h4>
                <p>Limit exists but not equal to function value</p>
                <p>Can be removed by redefining function at that point</p>
                
                <h4>2. Jump Discontinuity</h4>
                <p>LHL ≠ RHL</p>
                <p>Function "jumps" from one value to another</p>
                
                <h4>3. Infinite Discontinuity</h4>
                <p>Function approaches ±∞</p>
                <p>Example: f(x) = 1/x at x = 0</p>
                
                <h3>Properties of Continuous Functions</h3>
                <ul>
                    <li>Sum of continuous functions is continuous</li>
                    <li>Difference of continuous functions is continuous</li>
                    <li>Product of continuous functions is continuous</li>
                    <li>Quotient of continuous functions is continuous (if denominator ≠ 0)</li>
                    <li>Composition of continuous functions is continuous</li>
                </ul>
                
                <h3>Continuous Functions</h3>
                <p>The following are continuous everywhere in their domain:</p>
                <ul>
                    <li>Polynomial functions</li>
                    <li>Rational functions (except where denominator = 0)</li>
                    <li>Trigonometric functions</li>
                    <li>Exponential functions</li>
                    <li>Logarithmic functions</li>
                </ul>
            `
        },
        
        {
            id: 'theorems',
            title: '5. Important Theorems',
            content: `
                <h3>Intermediate Value Theorem (IVT)</h3>
                <p>If f is continuous on [a, b] and k is any value between f(a) and f(b), then there exists at least one c in (a, b) such that f(c) = k.</p>
                
                <div class="important-box">
                    <strong>Application:</strong> Used to prove existence of roots
                    <br>If f(a) and f(b) have opposite signs, then f(x) = 0 has at least one root in (a, b)
                </div>
                
                <h3>Extreme Value Theorem</h3>
                <p>If f is continuous on closed interval [a, b], then f attains both maximum and minimum values on [a, b].</p>
                
                <h3>Sandwich Theorem (Squeeze Theorem)</h3>
                <p>If g(x) ≤ f(x) ≤ h(x) for all x near a, and</p>
                <p>lim(x→a) g(x) = lim(x→a) h(x) = L</p>
                <p>Then lim(x→a) f(x) = L</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Prove lim(x→0) x²·sin(1/x) = 0
                    <br><br>
                    We know: -1 ≤ sin(1/x) ≤ 1
                    <br>Multiply by x²: -x² ≤ x²·sin(1/x) ≤ x²
                    <br><br>
                    lim(x→0) (-x²) = 0 and lim(x→0) x² = 0
                    <br>By Sandwich theorem: lim(x→0) x²·sin(1/x) = 0
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Basic Limit',
            problem: 'Evaluate: lim(x→2) (x² - 4)/(x - 2)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Direct substitution gives 0/0 (indeterminate)
                <br><br>
                Factorize numerator:
                <br>= lim(x→2) (x + 2)(x - 2)/(x - 2)
                <br>= lim(x→2) (x + 2)
                <br>= 2 + 2
                <br><strong>= 4</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Standard Limit',
            problem: 'Evaluate: lim(x→0) (sin 5x)/(3x)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                = lim(x→0) (5/3)·(sin 5x)/(5x)
                <br><br>
                Using standard limit: lim(θ→0) (sin θ)/θ = 1
                <br><br>
                = (5/3)·1
                <br><strong>= 5/3</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Rationalization',
            problem: 'Evaluate: lim(x→0) (√(1+x) - √(1-x))/x',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Rationalize by multiplying (√(1+x) + √(1-x))/(√(1+x) + √(1-x))
                <br><br>
                = lim(x→0) [(1+x) - (1-x)]/(x(√(1+x) + √(1-x)))
                <br>= lim(x→0) 2x/(x(√(1+x) + √(1-x)))
                <br>= lim(x→0) 2/(√(1+x) + √(1-x))
                <br>= 2/(1 + 1)
                <br><strong>= 1</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Continuity Check',
            problem: 'Check if f(x) = {x² if x ≤ 2; 2x if x > 2} is continuous at x = 2',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                <strong>1. f(2) = 2² = 4</strong> ✓ (defined)
                <br><br>
                <strong>2. LHL:</strong>
                <br>lim(x→2⁻) f(x) = lim(x→2⁻) x² = 4
                <br><br>
                <strong>RHL:</strong>
                <br>lim(x→2⁺) f(x) = lim(x→2⁺) 2x = 4
                <br><br>
                LHL = RHL = 4 ✓ (limit exists)
                <br><br>
                <strong>3. lim(x→2) f(x) = 4 = f(2)</strong> ✓
                <br><br>
                <strong>Conclusion: f(x) is continuous at x = 2</strong>
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'lim(x→0) (sin 3x)/(sin 2x) = ?',
            options: ['1', '3/2', '2/3', '0'],
            correct: 1,
            explanation: '= lim(x→0) (3/2)·(sin 3x)/(3x)·(2x)/(sin 2x) = (3/2)·1·1 = 3/2',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'lim(x→∞) (1 + 2/x)ˣ = ?',
            options: ['e', 'e²', '2e', '1'],
            correct: 1,
            explanation: 'Using lim(x→∞) (1 + k/x)ˣ = e^k, here k=2, so answer is e²',
            difficulty: 'medium'
        },
        
        {
            id: 'p3',
            question: 'If f(x) is continuous at x = 0 and f(0) = 2, then lim(x→0) f(x) = ?',
            options: ['0', '1', '2', 'Does not exist'],
            correct: 2,
            explanation: 'By definition of continuity: lim(x→a) f(x) = f(a). So lim(x→0) f(x) = f(0) = 2',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'lim(x→0) (eˣ - 1)/x = ?',
            options: ['0', '1', 'e', '∞'],
            correct: 1,
            explanation: 'This is a standard limit: lim(x→0) (eˣ - 1)/x = 1',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'The function f(x) = |x|/x is discontinuous at:',
            options: ['x = 0', 'x = 1', 'x = -1', 'Nowhere'],
            correct: 0,
            explanation: 'At x=0: LHL = -1, RHL = 1. Since LHL ≠ RHL, discontinuous at x = 0',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'Limit exists if LHL = RHL',
        'lim(x→0) (sin x)/x = 1 (most important standard limit)',
        'lim(x→0) (eˣ - 1)/x = 1',
        'lim(x→∞) (1 + 1/x)ˣ = e',
        'For continuity: lim(x→a) f(x) = f(a)',
        'All three conditions must be satisfied for continuity',
        'Polynomial functions are continuous everywhere',
        'L\'Hospital\'s rule: For 0/0 or ∞/∞, differentiate numerator and denominator',
        'Sandwich theorem: If g(x) ≤ f(x) ≤ h(x) and lim g = lim h, then lim f exists',
        'Removable discontinuity can be fixed by redefining function'
    ],
    
    formulae: [
        {
            name: 'Standard Limit 1',
            formula: 'lim(x→0) (sin x)/x = 1',
            description: 'Most important trigonometric limit'
        },
        {
            name: 'Standard Limit 2',
            formula: 'lim(x→0) (tan x)/x = 1',
            description: 'Tangent limit'
        },
        {
            name: 'Standard Limit 3',
            formula: 'lim(x→0) (eˣ - 1)/x = 1',
            description: 'Exponential limit'
        },
        {
            name: 'Standard Limit 4',
            formula: 'lim(x→∞) (1 + 1/x)ˣ = e',
            description: 'Definition of e'
        },
        {
            name: 'Standard Limit 5',
            formula: 'lim(x→0) ln(1 + x)/x = 1',
            description: 'Logarithmic limit'
        },
        {
            name: 'L\'Hospital\'s Rule',
            formula: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)',
            description: 'For 0/0 or ∞/∞ forms'
        },
        {
            name: 'Continuity Condition',
            formula: 'lim(x→a) f(x) = f(a)',
            description: 'Function continuous at x = a'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATHS_CALCULUS_1;
}
window.MATHS_CALCULUS_1 = MATHS_CALCULUS_1;
</body>
</html>