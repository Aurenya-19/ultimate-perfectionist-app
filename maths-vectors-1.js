<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Vectors - Chapter 1: Vectors
// Complete content with operations, dot product, cross product, applications

const MATHS_VECTORS_1 = {
    id: 'maths-vectors-1',
    title: 'Vectors',
    subject: 'Mathematics',
    category: 'Vectors and 3D',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'basics',
            title: '1. Vector Basics',
            content: `
                <h3>Definition</h3>
                <p>Quantity with magnitude and direction</p>
                
                <h3>Representation</h3>
                <p class="formula">a⃗ = aₓî + ayĵ + azk̂</p>
                
                <h3>Magnitude</h3>
                <p class="formula">|a⃗| = √(aₓ² + ay² + az²)</p>
                
                <h3>Unit Vector</h3>
                <p class="formula">â = a⃗/|a⃗|</p>
                
                <h3>Position Vector</h3>
                <p>Vector from origin to point P(x,y,z)</p>
                <p class="formula">r⃗ = xî + yĵ + zk̂</p>
            `
        },
        
        {
            id: 'operations',
            title: '2. Vector Operations',
            content: `
                <h3>Addition</h3>
                <p class="formula">a⃗ + b⃗ = (aₓ+bₓ)î + (ay+by)ĵ + (az+bz)k̂</p>
                
                <h3>Subtraction</h3>
                <p class="formula">a⃗ - b⃗ = (aₓ-bₓ)î + (ay-by)ĵ + (az-bz)k̂</p>
                
                <h3>Scalar Multiplication</h3>
                <p class="formula">ka⃗ = kaₓî + kayĵ + kazk̂</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Commutative: a⃗ + b⃗ = b⃗ + a⃗</li>
                    <li>Associative: (a⃗ + b⃗) + c⃗ = a⃗ + (b⃗ + c⃗)</li>
                    <li>Distributive: k(a⃗ + b⃗) = ka⃗ + kb⃗</li>
                </ul>
            `
        },
        
        {
            id: 'dot-product',
            title: '3. Dot Product (Scalar Product)',
            content: `
                <h3>Definition</h3>
                <p class="formula">a⃗ · b⃗ = |a⃗||b⃗|cos θ</p>
                
                <h3>Component Form</h3>
                <p class="formula">a⃗ · b⃗ = aₓbₓ + ayby + azbz</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Commutative: a⃗ · b⃗ = b⃗ · a⃗</li>
                    <li>a⃗ · a⃗ = |a⃗|²</li>
                    <li>a⃗ ⊥ b⃗ ⟺ a⃗ · b⃗ = 0</li>
                    <li>î · î = ĵ · ĵ = k̂ · k̂ = 1</li>
                    <li>î · ĵ = ĵ · k̂ = k̂ · î = 0</li>
                </ul>
                
                <h3>Angle Between Vectors</h3>
                <p class="formula">cos θ = (a⃗ · b⃗)/(|a⃗||b⃗|)</p>
            `
        },
        
        {
            id: 'cross-product',
            title: '4. Cross Product (Vector Product)',
            content: `
                <h3>Definition</h3>
                <p class="formula">a⃗ × b⃗ = |a⃗||b⃗|sin θ n̂</p>
                <p>Where n̂ is perpendicular to both a⃗ and b⃗</p>
                
                <h3>Component Form</h3>
                <p class="formula">a⃗ × b⃗ = |î  ĵ  k̂|</p>
                <p class="formula">      |aₓ ay az|</p>
                <p class="formula">      |bₓ by bz|</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Anti-commutative: a⃗ × b⃗ = -(b⃗ × a⃗)</li>
                    <li>a⃗ × a⃗ = 0⃗</li>
                    <li>a⃗ ∥ b⃗ ⟺ a⃗ × b⃗ = 0⃗</li>
                    <li>î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ</li>
                </ul>
                
                <h3>Magnitude</h3>
                <p class="formula">|a⃗ × b⃗| = |a⃗||b⃗|sin θ</p>
                <p>= Area of parallelogram</p>
            `
        },
        
        {
            id: 'applications',
            title: '5. Applications',
            content: `
                <h3>Projection</h3>
                <p>Projection of a⃗ on b⃗:</p>
                <p class="formula">proj = (a⃗ · b⃗)/|b⃗|</p>
                
                <h3>Area of Triangle</h3>
                <p class="formula">Area = ½|a⃗ × b⃗|</p>
                
                <h3>Area of Parallelogram</h3>
                <p class="formula">Area = |a⃗ × b⃗|</p>
                
                <h3>Scalar Triple Product</h3>
                <p class="formula">[a⃗ b⃗ c⃗] = a⃗ · (b⃗ × c⃗)</p>
                <p>= Volume of parallelepiped</p>
                
                <h3>Coplanarity</h3>
                <p>Vectors coplanar if [a⃗ b⃗ c⃗] = 0</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Magnitude', problem: 'Find |3î + 4ĵ|', solution: '√(9+16) = 5'},
        {id: 'ex2', title: 'Dot Product', problem: '(2î+3ĵ)·(4î+5ĵ)', solution: '8+15 = 23'},
        {id: 'ex3', title: 'Cross Product', problem: 'î × ĵ', solution: 'k̂'},
        {id: 'ex4', title: 'Angle', problem: 'Find angle between î and ĵ', solution: 'cos⁻¹(0) = 90°'}
    ],
    
    problems: [
        {id: 'p1', question: '|3î + 4ĵ| = ?', options: ['3', '4', '5', '7'], correct: 2},
        {id: 'p2', question: 'î · ĵ = ?', options: ['0', '1', 'k̂', '-1'], correct: 0},
        {id: 'p3', question: 'î × ĵ = ?', options: ['0', '1', 'k̂', '-k̂'], correct: 2},
        {id: 'p4', question: 'a⃗ · a⃗ = ?', options: ['0', '1', '|a⃗|', '|a⃗|²'], correct: 3},
        {id: 'p5', question: 'If a⃗ ⊥ b⃗, then a⃗ · b⃗ = ?', options: ['0', '1', '|a⃗||b⃗|', '-1'], correct: 0}
    ],
    
    keyPoints: [
        'Vector has magnitude and direction',
        '|a⃗| = √(aₓ² + ay² + az²)',
        'Unit vector: â = a⃗/|a⃗|',
        'Dot product: a⃗ · b⃗ = |a⃗||b⃗|cos θ',
        'Cross product: a⃗ × b⃗ = |a⃗||b⃗|sin θ n̂',
        'a⃗ ⊥ b⃗ ⟺ a⃗ · b⃗ = 0',
        'a⃗ ∥ b⃗ ⟺ a⃗ × b⃗ = 0⃗',
        'î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ',
        'Area of triangle = ½|a⃗ × b⃗|',
        'Volume = |a⃗ · (b⃗ × c⃗)|'
    ],
    
    formulae: [
        {name: 'Magnitude', formula: '|a⃗| = √(aₓ² + ay² + az²)'},
        {name: 'Dot Product', formula: 'a⃗ · b⃗ = aₓbₓ + ayby + azbz'},
        {name: 'Cross Product', formula: 'a⃗ × b⃗ = |a⃗||b⃗|sin θ n̂'},
        {name: 'Angle', formula: 'cos θ = (a⃗ · b⃗)/(|a⃗||b⃗|)'},
        {name: 'Area Triangle', formula: 'A = ½|a⃗ × b⃗|'}
    ]
};
window.MATHS_VECTORS_1 = MATHS_VECTORS_1;
</body>
</html>