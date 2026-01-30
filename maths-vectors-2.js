<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - 3D Geometry - Chapter 2: Three Dimensional Geometry
// Complete content with lines, planes, distance, angle formulas

const MATHS_VECTORS_2 = {
    id: 'maths-vectors-2',
    title: 'Three Dimensional Geometry',
    subject: 'Mathematics',
    category: 'Vectors and 3D',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'coordinates',
            title: '1. 3D Coordinate System',
            content: `
                <h3>Point in 3D</h3>
                <p>P(x, y, z)</p>
                
                <h3>Distance Formula</h3>
                <p class="formula">d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]</p>
                
                <h3>Section Formula</h3>
                <p>Point dividing P₁P₂ in ratio m:n:</p>
                <p class="formula">((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))</p>
                
                <h3>Midpoint</h3>
                <p class="formula">((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)</p>
                
                <h3>Direction Cosines</h3>
                <p class="formula">l = x/r, m = y/r, n = z/r</p>
                <p>Where r = √(x² + y² + z²)</p>
                <p class="formula">l² + m² + n² = 1</p>
            `
        },
        
        {
            id: 'line',
            title: '2. Equation of Line',
            content: `
                <h3>Vector Form</h3>
                <p class="formula">r⃗ = a⃗ + λb⃗</p>
                <p>Where a⃗ = position vector of point, b⃗ = direction vector</p>
                
                <h3>Cartesian Form</h3>
                <p class="formula">(x-x₁)/a = (y-y₁)/b = (z-z₁)/c</p>
                <p>Where (a,b,c) are direction ratios</p>
                
                <h3>Two Point Form</h3>
                <p>Line through (x₁,y₁,z₁) and (x₂,y₂,z₂):</p>
                <p class="formula">(x-x₁)/(x₂-x₁) = (y-y₁)/(y₂-y₁) = (z-z₁)/(z₂-z₁)</p>
                
                <h3>Angle Between Lines</h3>
                <p class="formula">cos θ = |a₁a₂ + b₁b₂ + c₁c₂|/√[(a₁²+b₁²+c₁²)(a₂²+b₂²+c₂²)]</p>
                
                <h3>Parallel Lines</h3>
                <p class="formula">a₁/a₂ = b₁/b₂ = c₁/c₂</p>
                
                <h3>Perpendicular Lines</h3>
                <p class="formula">a₁a₂ + b₁b₂ + c₁c₂ = 0</p>
            `
        },
        
        {
            id: 'plane',
            title: '3. Equation of Plane',
            content: `
                <h3>Vector Form</h3>
                <p class="formula">r⃗ · n⃗ = d</p>
                <p>Where n⃗ = normal vector</p>
                
                <h3>Cartesian Form</h3>
                <p class="formula">ax + by + cz = d</p>
                <p>Where (a,b,c) = direction ratios of normal</p>
                
                <h3>Intercept Form</h3>
                <p class="formula">x/a + y/b + z/c = 1</p>
                
                <h3>Three Point Form</h3>
                <p>Plane through (x₁,y₁,z₁), (x₂,y₂,z₂), (x₃,y₃,z₃)</p>
                
                <h3>Angle Between Planes</h3>
                <p class="formula">cos θ = |a₁a₂ + b₁b₂ + c₁c₂|/√[(a₁²+b₁²+c₁²)(a₂²+b₂²+c₂²)]</p>
                
                <h3>Parallel Planes</h3>
                <p class="formula">a₁/a₂ = b₁/b₂ = c₁/c₂</p>
                
                <h3>Perpendicular Planes</h3>
                <p class="formula">a₁a₂ + b₁b₂ + c₁c₂ = 0</p>
            `
        },
        
        {
            id: 'distance',
            title: '4. Distance Formulas',
            content: `
                <h3>Point to Plane</h3>
                <p>Distance from (x₁,y₁,z₁) to ax+by+cz=d:</p>
                <p class="formula">D = |ax₁ + by₁ + cz₁ - d|/√(a² + b² + c²)</p>
                
                <h3>Point to Line</h3>
                <p class="formula">D = |b⃗ × (a⃗₂ - a⃗₁)|/|b⃗|</p>
                
                <h3>Between Parallel Planes</h3>
                <p>ax+by+cz=d₁ and ax+by+cz=d₂:</p>
                <p class="formula">D = |d₁ - d₂|/√(a² + b² + c²)</p>
                
                <h3>Between Skew Lines</h3>
                <p class="formula">D = |(a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂)|/|b⃗₁ × b⃗₂|</p>
            `
        },
        
        {
            id: 'special-cases',
            title: '5. Special Cases',
            content: `
                <h3>Line and Plane</h3>
                <p><strong>Parallel:</strong> a·l + b·m + c·n = 0</p>
                <p><strong>Perpendicular:</strong> a/l = b/m = c/n</p>
                <p><strong>Angle:</strong> sin θ = |al+bm+cn|/√[(a²+b²+c²)(l²+m²+n²)]</p>
                
                <h3>Coplanar Lines</h3>
                <p>Lines are coplanar if:</p>
                <p class="formula">|(a⃗₂ - a⃗₁) · (b⃗₁ × b⃗₂)| = 0</p>
                
                <h3>Shortest Distance</h3>
                <p>Between two skew lines</p>
                
                <h3>Foot of Perpendicular</h3>
                <p>From point to line/plane</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Distance', problem: 'Distance between (1,2,3) and (4,6,8)', solution: 'd = √[(3)²+(4)²+(5)²] = √50 = 5√2'},
        {id: 'ex2', title: 'Direction Cosines', problem: 'For (3,4,12), find l,m,n', solution: 'r=13, l=3/13, m=4/13, n=12/13'},
        {id: 'ex3', title: 'Point to Plane', problem: '(1,1,1) to x+y+z=3', solution: 'D = |1+1+1-3|/√3 = 0'},
        {id: 'ex4', title: 'Angle', problem: 'Angle between x=y=z and x=-y=z', solution: 'cos θ = |1-1+1|/3 = 1/3'}
    ],
    
    problems: [
        {id: 'p1', question: 'l²+m²+n² = ?', options: ['0', '1', '2', '3'], correct: 1},
        {id: 'p2', question: 'Line vector form: r⃗ = ?', options: ['a⃗+λb⃗', 'a⃗-λb⃗', 'λa⃗+b⃗', 'a⃗×b⃗'], correct: 0},
        {id: 'p3', question: 'Parallel lines: a₁/a₂ = ?', options: ['b₁/b₂', 'b₂/b₁', 'c₁/c₂', 'Both A&C'], correct: 3},
        {id: 'p4', question: 'Perpendicular: a₁a₂+b₁b₂+c₁c₂ = ?', options: ['1', '0', '-1', '∞'], correct: 1},
        {id: 'p5', question: 'Plane intercept form:', options: ['x/a+y/b+z/c=0', 'x/a+y/b+z/c=1', 'ax+by+cz=1', 'xyz=abc'], correct: 1}
    ],
    
    keyPoints: [
        'Distance: d = √[(Δx)²+(Δy)²+(Δz)²]',
        'Direction cosines: l²+m²+n²=1',
        'Line: r⃗ = a⃗ + λb⃗',
        'Line: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c',
        'Plane: ax + by + cz = d',
        'Parallel: a₁/a₂ = b₁/b₂ = c₁/c₂',
        'Perpendicular: a₁a₂+b₁b₂+c₁c₂=0',
        'Point to plane: D = |ax₁+by₁+cz₁-d|/√(a²+b²+c²)',
        'Intercept form: x/a+y/b+z/c=1',
        'Angle: cos θ = dot product formula'
    ],
    
    formulae: [
        {name: 'Distance', formula: 'd = √[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]'},
        {name: 'Line (Cartesian)', formula: '(x-x₁)/a = (y-y₁)/b = (z-z₁)/c'},
        {name: 'Plane', formula: 'ax + by + cz = d'},
        {name: 'Point to Plane', formula: 'D = |ax₁+by₁+cz₁-d|/√(a²+b²+c²)'},
        {name: 'Direction Cosines', formula: 'l²+m²+n²=1'}
    ]
};
window.MATHS_VECTORS_2 = MATHS_VECTORS_2;
</body>
</html>