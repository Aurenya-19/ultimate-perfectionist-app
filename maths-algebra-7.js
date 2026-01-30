<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Algebra - Chapter 7: Matrices and Determinants
// Complete content with operations, inverse, determinants, Cramer's rule

const MATHS_ALGEBRA_7 = {
    id: 'maths-algebra-7',
    title: 'Matrices and Determinants',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'matrices',
            title: '1. Matrices',
            content: `
                <h3>Definition</h3>
                <p>Rectangular array of numbers</p>
                <p>Order: m × n (m rows, n columns)</p>
                
                <h3>Types</h3>
                <ul>
                    <li><strong>Row matrix:</strong> 1 × n</li>
                    <li><strong>Column matrix:</strong> m × 1</li>
                    <li><strong>Square matrix:</strong> m = n</li>
                    <li><strong>Diagonal:</strong> aᵢⱼ = 0 for i ≠ j</li>
                    <li><strong>Identity (I):</strong> Diagonal with 1s</li>
                    <li><strong>Zero (O):</strong> All elements 0</li>
                </ul>
                
                <h3>Operations</h3>
                <p><strong>Addition:</strong> Same order, add corresponding elements</p>
                <p><strong>Scalar multiplication:</strong> Multiply each element by scalar</p>
                <p><strong>Multiplication:</strong> (m×n)(n×p) = (m×p)</p>
                <p class="formula">(AB)ᵢⱼ = Σ aᵢₖbₖⱼ</p>
            `
        },
        
        {
            id: 'properties',
            title: '2. Properties of Matrices',
            content: `
                <h3>Addition</h3>
                <ul>
                    <li>Commutative: A + B = B + A</li>
                    <li>Associative: (A+B)+C = A+(B+C)</li>
                </ul>
                
                <h3>Multiplication</h3>
                <ul>
                    <li>NOT commutative: AB ≠ BA (generally)</li>
                    <li>Associative: (AB)C = A(BC)</li>
                    <li>Distributive: A(B+C) = AB + AC</li>
                    <li>AI = IA = A</li>
                </ul>
                
                <h3>Transpose (Aᵀ)</h3>
                <p>Rows ↔ Columns</p>
                <ul>
                    <li>(Aᵀ)ᵀ = A</li>
                    <li>(A+B)ᵀ = Aᵀ + Bᵀ</li>
                    <li>(AB)ᵀ = BᵀAᵀ</li>
                </ul>
                
                <h3>Symmetric & Skew-Symmetric</h3>
                <p><strong>Symmetric:</strong> Aᵀ = A</p>
                <p><strong>Skew-symmetric:</strong> Aᵀ = -A</p>
            `
        },
        
        {
            id: 'determinants',
            title: '3. Determinants',
            content: `
                <h3>2×2 Determinant</h3>
                <p class="formula">|A| = |a b| = ad - bc</p>
                <p class="formula">    |c d|</p>
                
                <h3>3×3 Determinant</h3>
                <p>Expand along row/column:</p>
                <p class="formula">|A| = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃</p>
                <p>Where Cᵢⱼ = cofactor</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>|Aᵀ| = |A|</li>
                    <li>|AB| = |A||B|</li>
                    <li>|kA| = kⁿ|A| (n×n matrix)</li>
                    <li>Row/column interchange: sign changes</li>
                    <li>Two rows/columns same: |A| = 0</li>
                </ul>
            `
        },
        
        {
            id: 'inverse',
            title: '4. Inverse of Matrix',
            content: `
                <h3>Definition</h3>
                <p>A⁻¹ such that AA⁻¹ = A⁻¹A = I</p>
                
                <h3>Formula</h3>
                <p class="formula">A⁻¹ = (1/|A|) × adj(A)</p>
                <p>Where adj(A) = transpose of cofactor matrix</p>
                
                <h3>Conditions</h3>
                <ul>
                    <li>|A| ≠ 0 (non-singular)</li>
                    <li>Square matrix only</li>
                </ul>
                
                <h3>Properties</h3>
                <ul>
                    <li>(A⁻¹)⁻¹ = A</li>
                    <li>(AB)⁻¹ = B⁻¹A⁻¹</li>
                    <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
                    <li>|A⁻¹| = 1/|A|</li>
                </ul>
            `
        },
        
        {
            id: 'cramers-rule',
            title: "5. Cramer's Rule",
            content: `
                <h3>System of Equations</h3>
                <p>AX = B</p>
                <p>Where A = coefficient matrix, X = variables, B = constants</p>
                
                <h3>Solution</h3>
                <p class="formula">X = A⁻¹B</p>
                
                <h3>Cramer's Rule</h3>
                <p>For n equations in n variables:</p>
                <p class="formula">xᵢ = |Aᵢ|/|A|</p>
                <p>Where Aᵢ = A with ith column replaced by B</p>
                
                <h3>Conditions</h3>
                <ul>
                    <li>|A| ≠ 0: Unique solution</li>
                    <li>|A| = 0, |Aᵢ| ≠ 0: No solution</li>
                    <li>|A| = 0, |Aᵢ| = 0: Infinite solutions</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Matrix Multiplication', problem: '[1 2][3] = ?', solution: '[1×3 + 2×4] = [11]'},
        {id: 'ex2', title: 'Determinant 2×2', problem: '|2 3| = ?', solution: '2×5 - 3×4 = -2'},
        {id: 'ex3', title: 'Inverse', problem: 'A = [2 1], find A⁻¹', solution: 'A⁻¹ = (1/3)[3 -1]'},
        {id: 'ex4', title: "Cramer's", problem: '2x+y=5, x+y=3', solution: 'x=2, y=1'}
    ],
    
    problems: [
        {id: 'p1', question: '(AB)ᵀ = ?', options: ['AᵀBᵀ', 'BᵀAᵀ', 'AB', 'BA'], correct: 1},
        {id: 'p2', question: '|AB| = ?', options: ['|A|+|B|', '|A||B|', '|A|-|B|', '|A|/|B|'], correct: 1},
        {id: 'p3', question: 'A⁻¹ exists if:', options: ['|A|=0', '|A|≠0', '|A|>0', '|A|<0'], correct: 1},
        {id: 'p4', question: 'Identity matrix I:', options: ['All 0', 'All 1', 'Diagonal 1', 'Any'], correct: 2},
        {id: 'p5', question: 'Symmetric: Aᵀ = ?', options: ['A', '-A', '0', 'I'], correct: 0}
    ],
    
    keyPoints: [
        'Matrix: Rectangular array',
        'Multiplication: (m×n)(n×p) = (m×p)',
        'AB ≠ BA (generally)',
        '(AB)ᵀ = BᵀAᵀ',
        '|AB| = |A||B|',
        'A⁻¹ = (1/|A|)×adj(A)',
        'A⁻¹ exists if |A| ≠ 0',
        'AX = B → X = A⁻¹B',
        "Cramer's: xᵢ = |Aᵢ|/|A|",
        'Symmetric: Aᵀ = A'
    ],
    
    formulae: [
        {name: 'Determinant 2×2', formula: '|A| = ad - bc'},
        {name: 'Inverse', formula: 'A⁻¹ = (1/|A|)×adj(A)'},
        {name: 'Transpose Product', formula: '(AB)ᵀ = BᵀAᵀ'},
        {name: "Cramer's Rule", formula: 'xᵢ = |Aᵢ|/|A|'}
    ]
};
window.MATHS_ALGEBRA_7 = MATHS_ALGEBRA_7;
</body>
</html>