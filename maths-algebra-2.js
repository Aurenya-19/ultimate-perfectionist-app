<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 2: Complex Numbers
// Complete content with operations, polar form, De Moivre's theorem

const MATHS_ALGEBRA_2 = {
    id: 'maths-algebra-2',
    title: 'Complex Numbers',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Complex Numbers',
            content: `
                <h3>Need for Complex Numbers</h3>
                <p>Equation x² + 1 = 0 has no real solution because x² = -1 is not possible in real numbers.</p>
                <p>To solve such equations, we introduce <strong>imaginary unit i</strong></p>
                
                <p class="formula">i = √(-1), therefore i² = -1</p>
                
                <h3>Definition</h3>
                <p>A complex number is of the form:</p>
                <p class="formula">z = a + ib</p>
                <p>Where:</p>
                <ul>
                    <li>a = Real part, denoted by Re(z)</li>
                    <li>b = Imaginary part, denoted by Im(z)</li>
                    <li>i = Imaginary unit (i² = -1)</li>
                </ul>
                
                <h3>Powers of i</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Power</th>
                            <th>Value</th>
                            <th>Pattern</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>i¹</td>
                            <td>i</td>
                            <td rowspan="4">Repeats every 4 powers</td>
                        </tr>
                        <tr>
                            <td>i²</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>i³</td>
                            <td>-i</td>
                        </tr>
                        <tr>
                            <td>i⁴</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                
                <p><strong>General formula:</strong> iⁿ = i^(n mod 4)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find i⁹⁹
                    <br>99 = 4×24 + 3
                    <br>i⁹⁹ = i³ = <strong>-i</strong>
                </div>
                
                <h3>Equality of Complex Numbers</h3>
                <p>Two complex numbers are equal if and only if their real and imaginary parts are equal.</p>
                <p class="formula">a + ib = c + id ⟺ a = c and b = d</p>
            `
        },
        
        {
            id: 'operations',
            title: '2. Operations on Complex Numbers',
            content: `
                <h3>Addition</h3>
                <p class="formula">(a + ib) + (c + id) = (a + c) + i(b + d)</p>
                <p>Add real parts and imaginary parts separately</p>
                
                <h3>Subtraction</h3>
                <p class="formula">(a + ib) - (c + id) = (a - c) + i(b - d)</p>
                
                <h3>Multiplication</h3>
                <p class="formula">(a + ib)(c + id) = (ac - bd) + i(ad + bc)</p>
                
                <div class="formula-box">
                    <strong>Derivation:</strong>
                    <br>(a + ib)(c + id) = ac + iad + ibc + i²bd
                    <br>= ac + iad + ibc - bd  (since i² = -1)
                    <br>= (ac - bd) + i(ad + bc)
                </div>
                
                <h3>Division</h3>
                <p>To divide, multiply numerator and denominator by conjugate of denominator</p>
                <p class="formula">(a + ib)/(c + id) = [(a + ib)(c - id)]/[(c + id)(c - id)]</p>
                <p class="formula">= [(ac + bd) + i(bc - ad)]/(c² + d²)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Simplify (3 + 4i)/(1 + 2i)
                    <br><br>
                    = (3 + 4i)(1 - 2i)/[(1 + 2i)(1 - 2i)]
                    <br>= (3 - 6i + 4i - 8i²)/(1 - 4i²)
                    <br>= (3 - 2i + 8)/(1 + 4)
                    <br>= (11 - 2i)/5
                    <br>= <strong>11/5 - 2i/5</strong>
                </div>
                
                <h3>Properties</h3>
                <ul>
                    <li><strong>Commutative:</strong> z₁ + z₂ = z₂ + z₁, z₁z₂ = z₂z₁</li>
                    <li><strong>Associative:</strong> (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)</li>
                    <li><strong>Distributive:</strong> z₁(z₂ + z₃) = z₁z₂ + z₁z₃</li>
                    <li><strong>Additive Identity:</strong> z + 0 = z</li>
                    <li><strong>Multiplicative Identity:</strong> z × 1 = z</li>
                </ul>
            `
        },
        
        {
            id: 'conjugate-modulus',
            title: '3. Conjugate and Modulus',
            content: `
                <h3>Conjugate</h3>
                <p>Conjugate of z = a + ib is denoted by z̄ (z-bar)</p>
                <p class="formula">z̄ = a - ib</p>
                
                <h3>Properties of Conjugate</h3>
                <ul>
                    <li>z + z̄ = 2Re(z) = 2a</li>
                    <li>z - z̄ = 2iIm(z) = 2ib</li>
                    <li>z·z̄ = a² + b² (always real and non-negative)</li>
                    <li>z̄̄ = z (conjugate of conjugate is original)</li>
                    <li>(z₁ + z₂)̄ = z̄₁ + z̄₂</li>
                    <li>(z₁z₂)̄ = z̄₁·z̄₂</li>
                    <li>(z₁/z₂)̄ = z̄₁/z̄₂</li>
                </ul>
                
                <h3>Modulus (Absolute Value)</h3>
                <p>Modulus of z = a + ib is denoted by |z|</p>
                <p class="formula">|z| = √(a² + b²)</p>
                
                <p>Geometrically: Distance of point (a, b) from origin</p>
                
                <h3>Properties of Modulus</h3>
                <ul>
                    <li>|z| ≥ 0 (always non-negative)</li>
                    <li>|z| = 0 ⟺ z = 0</li>
                    <li>|z| = |z̄|</li>
                    <li>z·z̄ = |z|²</li>
                    <li>|z₁z₂| = |z₁||z₂|</li>
                    <li>|z₁/z₂| = |z₁|/|z₂|</li>
                    <li>|z₁ + z₂| ≤ |z₁| + |z₂| (Triangle inequality)</li>
                    <li>||z₁| - |z₂|| ≤ |z₁ - z₂|</li>
                </ul>
                
                <div class="example-box">
                    <strong>Example:</strong> Find modulus of z = 3 + 4i
                    <br><br>
                    |z| = √(3² + 4²)
                    <br>= √(9 + 16)
                    <br>= √25
                    <br>= <strong>5</strong>
                </div>
            `
        },
        
        {
            id: 'argand-plane',
            title: '4. Argand Plane and Polar Form',
            content: `
                <h3>Argand Plane</h3>
                <p>Complex numbers can be represented geometrically on a plane called <strong>Argand plane</strong> or <strong>Complex plane</strong></p>
                <ul>
                    <li>X-axis: Real axis</li>
                    <li>Y-axis: Imaginary axis</li>
                    <li>Point (a, b) represents z = a + ib</li>
                </ul>
                
                <h3>Argument (Amplitude)</h3>
                <p>Angle made by line joining origin to point z with positive real axis</p>
                <p>Denoted by arg(z) or amp(z)</p>
                
                <p class="formula">tan(arg z) = b/a = Im(z)/Re(z)</p>
                
                <p><strong>Principal argument:</strong> Value of argument in (-π, π]</p>
                
                <h3>Polar Form</h3>
                <p>z = a + ib can be written as:</p>
                <p class="formula">z = r(cos θ + i sin θ)</p>
                <p>Where:</p>
                <ul>
                    <li>r = |z| = √(a² + b²) (modulus)</li>
                    <li>θ = arg(z) (argument)</li>
                    <li>a = r cos θ</li>
                    <li>b = r sin θ</li>
                </ul>
                
                <h3>Euler's Form</h3>
                <p class="formula">z = re^(iθ)</p>
                <p>Where e^(iθ) = cos θ + i sin θ (Euler's formula)</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Convert z = 1 + i to polar form
                    <br><br>
                    r = |z| = √(1² + 1²) = √2
                    <br>tan θ = 1/1 = 1 → θ = π/4
                    <br><br>
                    <strong>z = √2(cos π/4 + i sin π/4)</strong>
                </div>
            `
        },
        
        {
            id: 'de-moivre',
            title: "5. De Moivre's Theorem",
            content: `
                <h3>Statement</h3>
                <p>For any real number n:</p>
                <p class="formula">(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)</p>
                
                <p>Or in Euler form:</p>
                <p class="formula">(e^(iθ))ⁿ = e^(inθ)</p>
                
                <h3>Applications</h3>
                
                <h4>1. Finding Powers</h4>
                <div class="example-box">
                    <strong>Example:</strong> Find (1 + i)⁸
                    <br><br>
                    First convert to polar: 1 + i = √2(cos π/4 + i sin π/4)
                    <br><br>
                    (1 + i)⁸ = [√2(cos π/4 + i sin π/4)]⁸
                    <br>= (√2)⁸(cos 8π/4 + i sin 8π/4)
                    <br>= 16(cos 2π + i sin 2π)
                    <br>= 16(1 + 0)
                    <br>= <strong>16</strong>
                </div>
                
                <h4>2. Finding Roots</h4>
                <p>nth roots of unity: Solutions of zⁿ = 1</p>
                <p class="formula">z_k = cos(2πk/n) + i sin(2πk/n), k = 0, 1, 2, ..., n-1</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Find cube roots of unity (z³ = 1)
                    <br><br>
                    z₀ = cos 0 + i sin 0 = 1
                    <br>z₁ = cos 2π/3 + i sin 2π/3 = -1/2 + i√3/2 = ω
                    <br>z₂ = cos 4π/3 + i sin 4π/3 = -1/2 - i√3/2 = ω²
                    <br><br>
                    <strong>Properties:</strong>
                    <br>1 + ω + ω² = 0
                    <br>ω³ = 1
                </div>
                
                <h3>nth Roots of Complex Number</h3>
                <p>nth roots of z = r(cos θ + i sin θ):</p>
                <p class="formula">z_k = r^(1/n)[cos((θ + 2πk)/n) + i sin((θ + 2πk)/n)]</p>
                <p>where k = 0, 1, 2, ..., n-1</p>
            `
        },
        
        {
            id: 'quadratic',
            title: '6. Quadratic Equations with Complex Roots',
            content: `
                <h3>General Form</h3>
                <p>ax² + bx + c = 0</p>
                
                <h3>Discriminant</h3>
                <p class="formula">D = b² - 4ac</p>
                
                <h3>Nature of Roots</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Discriminant</th>
                            <th>Nature of Roots</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>D > 0</td>
                            <td>Two distinct real roots</td>
                        </tr>
                        <tr>
                            <td>D = 0</td>
                            <td>Two equal real roots</td>
                        </tr>
                        <tr>
                            <td>D < 0</td>
                            <td>Two complex conjugate roots</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Complex Roots</h3>
                <p>When D < 0, roots are:</p>
                <p class="formula">x = [-b ± √(b² - 4ac)]/(2a) = [-b ± i√|D|]/(2a)</p>
                
                <p><strong>Important:</strong> Complex roots always occur in conjugate pairs</p>
                <p>If α + iβ is a root, then α - iβ is also a root</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Solve x² + 2x + 5 = 0
                    <br><br>
                    D = 4 - 20 = -16 < 0
                    <br><br>
                    x = (-2 ± √(-16))/2
                    <br>= (-2 ± 4i)/2
                    <br>= <strong>-1 ± 2i</strong>
                    <br><br>
                    Roots: -1 + 2i and -1 - 2i (conjugate pair)
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Operations',
            problem: 'Simplify: (2 + 3i)(4 - 5i)',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                (2 + 3i)(4 - 5i)
                <br>= 2(4) + 2(-5i) + 3i(4) + 3i(-5i)
                <br>= 8 - 10i + 12i - 15i²
                <br>= 8 + 2i - 15(-1)
                <br>= 8 + 2i + 15
                <br>= <strong>23 + 2i</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Modulus',
            problem: 'If |z - 3 + 2i| = 4, find locus of z.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Let z = x + iy
                <br>|z - 3 + 2i| = 4
                <br>|(x + iy) - 3 + 2i| = 4
                <br>|(x - 3) + i(y + 2)| = 4
                <br><br>
                √[(x - 3)² + (y + 2)²] = 4
                <br>(x - 3)² + (y + 2)² = 16
                <br><br>
                <strong>Locus: Circle with center (3, -2) and radius 4</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: "Example 3: De Moivre's Theorem",
            problem: 'Find (1 + i√3)⁶',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Convert to polar form:
                <br>r = √(1² + (√3)²) = √4 = 2
                <br>tan θ = √3/1 → θ = π/3
                <br><br>
                1 + i√3 = 2(cos π/3 + i sin π/3)
                <br><br>
                (1 + i√3)⁶ = 2⁶(cos 6π/3 + i sin 6π/3)
                <br>= 64(cos 2π + i sin 2π)
                <br>= 64(1 + 0)
                <br>= <strong>64</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Cube Roots of Unity',
            problem: 'If ω is a cube root of unity, prove that 1 + ω + ω² = 0',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                ω is a cube root of unity, so ω³ = 1
                <br><br>
                ω³ - 1 = 0
                <br>(ω - 1)(ω² + ω + 1) = 0
                <br><br>
                Since ω ≠ 1 (ω is non-real cube root)
                <br>ω² + ω + 1 = 0
                <br><br>
                <strong>Therefore: 1 + ω + ω² = 0</strong> ✓
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'The value of i⁹⁹ + i¹⁰⁰ + i¹⁰¹ + i¹⁰² is:',
            options: ['0', '1', 'i', '-i'],
            correct: 0,
            explanation: 'i⁹⁹ = i³ = -i, i¹⁰⁰ = 1, i¹⁰¹ = i, i¹⁰² = -1. Sum = -i + 1 + i - 1 = 0',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'If z = 3 + 4i, then |z| is:',
            options: ['3', '4', '5', '7'],
            correct: 2,
            explanation: '|z| = √(3² + 4²) = √(9 + 16) = √25 = 5',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'The conjugate of (1 + 2i)/(3 - 4i) is:',
            options: ['(-1 + 10i)/25', '(-1 - 10i)/25', '(1 + 10i)/25', '(1 - 10i)/25'],
            correct: 1,
            explanation: 'First simplify: (1+2i)(3+4i)/25 = (-5+10i)/25. Conjugate: (-5-10i)/25 = (-1-10i)/5',
            difficulty: 'hard'
        },
        
        {
            id: 'p4',
            question: 'If ω is a cube root of unity, then ω² equals:',
            options: ['ω', '-ω', '1 + ω', '-(1 + ω)'],
            correct: 3,
            explanation: 'Since 1 + ω + ω² = 0, we get ω² = -(1 + ω)',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'The argument of -1 + i is:',
            options: ['π/4', '3π/4', '-π/4', '-3π/4'],
            correct: 1,
            explanation: 'Point (-1, 1) is in second quadrant. arg = π - π/4 = 3π/4',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'i² = -1, i⁴ = 1 (pattern repeats every 4 powers)',
        'z = a + ib, where a = Re(z), b = Im(z)',
        'Conjugate: z̄ = a - ib',
        'Modulus: |z| = √(a² + b²)',
        'z·z̄ = |z|²',
        'Polar form: z = r(cos θ + i sin θ)',
        "De Moivre's theorem: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)",
        'Cube roots of unity: 1, ω, ω² where 1 + ω + ω² = 0',
        'Complex roots occur in conjugate pairs',
        'Triangle inequality: |z₁ + z₂| ≤ |z₁| + |z₂|'
    ],
    
    formulae: [
        {
            name: 'Imaginary Unit',
            formula: 'i² = -1',
            description: 'Definition of imaginary unit'
        },
        {
            name: 'Modulus',
            formula: '|z| = √(a² + b²)',
            description: 'For z = a + ib'
        },
        {
            name: 'Conjugate Product',
            formula: 'z·z̄ = |z|²',
            description: 'Product of complex number and its conjugate'
        },
        {
            name: 'Polar Form',
            formula: 'z = r(cos θ + i sin θ)',
            description: 'r = |z|, θ = arg(z)'
        },
        {
            name: "De Moivre's Theorem",
            formula: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
            description: 'For finding powers and roots'
        },
        {
            name: 'Cube Roots of Unity',
            formula: '1 + ω + ω² = 0, ω³ = 1',
            description: 'Properties of cube roots of unity'
        },
        {
            name: 'Triangle Inequality',
            formula: '|z₁ + z₂| ≤ |z₁| + |z₂|',
            description: 'Modulus inequality'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATHS_ALGEBRA_2;
}
window.MATHS_ALGEBRA_2 = MATHS_ALGEBRA_2;
</body>
</html>