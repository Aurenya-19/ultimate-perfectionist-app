<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Calculus - Chapter 6: Differential Equations
// Complete content with order, degree, solutions, variable separable, linear DE

const MATHS_CALCULUS_6 = {
    id: 'maths-calculus-6',
    title: 'Differential Equations',
    subject: 'Mathematics',
    category: 'Calculus',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'basics',
            title: '1. Basic Concepts',
            content: `
                <h3>Definition</h3>
                <p>Equation involving derivatives</p>
                <p>Example: dy/dx = x + y</p>
                
                <h3>Order</h3>
                <p>Highest derivative present</p>
                <p>d²y/dx² + dy/dx = 0 → Order = 2</p>
                
                <h3>Degree</h3>
                <p>Power of highest order derivative (after removing fractions/radicals)</p>
                <p>(dy/dx)² + dy/dx = x → Degree = 2</p>
                
                <h3>Solution</h3>
                <p><strong>General solution:</strong> Contains arbitrary constants</p>
                <p><strong>Particular solution:</strong> Specific values of constants</p>
            `
        },
        
        {
            id: 'variable-separable',
            title: '2. Variable Separable',
            content: `
                <h3>Form</h3>
                <p class="formula">dy/dx = f(x)g(y)</p>
                
                <h3>Method</h3>
                <p>Separate variables:</p>
                <p class="formula">dy/g(y) = f(x)dx</p>
                <p>Integrate both sides:</p>
                <p class="formula">∫dy/g(y) = ∫f(x)dx + C</p>
                
                <h3>Example</h3>
                <p>dy/dx = xy</p>
                <p>dy/y = x dx</p>
                <p>∫dy/y = ∫x dx</p>
                <p>ln|y| = x²/2 + C</p>
                <p>y = Ae^(x²/2)</p>
            `
        },
        
        {
            id: 'homogeneous',
            title: '3. Homogeneous Equations',
            content: `
                <h3>Form</h3>
                <p class="formula">dy/dx = f(y/x)</p>
                
                <h3>Substitution</h3>
                <p>Put y = vx, then dy/dx = v + x(dv/dx)</p>
                
                <h3>Method</h3>
                <ol>
                    <li>Substitute y = vx</li>
                    <li>v + x(dv/dx) = f(v)</li>
                    <li>Separate variables in v and x</li>
                    <li>Integrate</li>
                    <li>Replace v = y/x</li>
                </ol>
                
                <h3>Example</h3>
                <p>dy/dx = (x+y)/x = 1 + y/x</p>
                <p>Put y = vx: v + x(dv/dx) = 1 + v</p>
                <p>x(dv/dx) = 1</p>
                <p>dv = dx/x</p>
                <p>v = ln|x| + C</p>
                <p>y/x = ln|x| + C</p>
            `
        },
        
        {
            id: 'linear-de',
            title: '4. Linear Differential Equations',
            content: `
                <h3>Form</h3>
                <p class="formula">dy/dx + Py = Q</p>
                <p>Where P, Q are functions of x (or constants)</p>
                
                <h3>Integrating Factor (IF)</h3>
                <p class="formula">IF = e^(∫P dx)</p>
                
                <h3>Solution</h3>
                <p class="formula">y × IF = ∫(Q × IF)dx + C</p>
                
                <h3>Steps</h3>
                <ol>
                    <li>Write in standard form: dy/dx + Py = Q</li>
                    <li>Find IF = e^(∫P dx)</li>
                    <li>Multiply equation by IF</li>
                    <li>Integrate: y(IF) = ∫Q(IF)dx + C</li>
                </ol>
                
                <h3>Example</h3>
                <p>dy/dx + y = x</p>
                <p>P = 1, Q = x</p>
                <p>IF = e^(∫1 dx) = e^x</p>
                <p>y·e^x = ∫x·e^x dx + C</p>
                <p>y = x - 1 + Ce^(-x)</p>
            `
        },
        
        {
            id: 'applications',
            title: '5. Applications',
            content: `
                <h3>Growth and Decay</h3>
                <p class="formula">dy/dt = ky</p>
                <p>Solution: y = y₀e^(kt)</p>
                <ul>
                    <li>k > 0: Growth (population, compound interest)</li>
                    <li>k < 0: Decay (radioactive decay, cooling)</li>
                </ul>
                
                <h3>Newton's Law of Cooling</h3>
                <p class="formula">dT/dt = -k(T - T_s)</p>
                <p>Where T_s = surrounding temperature</p>
                
                <h3>Orthogonal Trajectories</h3>
                <p>Curves intersecting at right angles</p>
                <p>If dy/dx = f(x,y), orthogonal: dy/dx = -1/f(x,y)</p>
                
                <h3>Geometric Applications</h3>
                <ul>
                    <li>Tangent/normal problems</li>
                    <li>Curve sketching</li>
                    <li>Family of curves</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Variable Separable', problem: 'dy/dx = x/y', solution: 'y dy = x dx → y²/2 = x²/2 + C → y² = x² + C'},
        {id: 'ex2', title: 'Linear DE', problem: 'dy/dx + 2y = 4', solution: 'IF = e^(2x), y = 2 + Ce^(-2x)'},
        {id: 'ex3', title: 'Growth', problem: 'dy/dt = 0.05y, y(0)=100', solution: 'y = 100e^(0.05t)'},
        {id: 'ex4', title: 'Order & Degree', problem: '(d²y/dx²)³ + dy/dx = 0', solution: 'Order = 2, Degree = 3'}
    ],
    
    problems: [
        {id: 'p1', question: 'Order of d²y/dx² + dy/dx = 0:', options: ['1', '2', '3', '0'], correct: 1},
        {id: 'p2', question: 'Variable separable: dy/dx = ?', options: ['f(x)+g(y)', 'f(x)g(y)', 'f(x)/g(y)', 'f(xy)'], correct: 1},
        {id: 'p3', question: 'Linear DE: dy/dx + Py = Q, IF = ?', options: ['e^P', 'e^(∫P dx)', 'e^Q', '∫P dx'], correct: 1},
        {id: 'p4', question: 'Growth equation: dy/dt = ?', options: ['ky', 'k/y', 'kt', 'k+y'], correct: 0},
        {id: 'p5', question: 'Homogeneous: dy/dx = ?', options: ['f(x,y)', 'f(y/x)', 'f(x)', 'f(y)'], correct: 1}
    ],
    
    keyPoints: [
        'Order = highest derivative',
        'Degree = power of highest derivative',
        'Variable separable: dy/g(y) = f(x)dx',
        'Homogeneous: Put y = vx',
        'Linear: dy/dx + Py = Q',
        'IF = e^(∫P dx)',
        'Solution: y(IF) = ∫Q(IF)dx + C',
        'Growth: dy/dt = ky',
        'Solution: y = y₀e^(kt)',
        'General solution has constants'
    ],
    
    formulae: [
        {name: 'Variable Separable', formula: '∫dy/g(y) = ∫f(x)dx'},
        {name: 'Integrating Factor', formula: 'IF = e^(∫P dx)'},
        {name: 'Linear DE Solution', formula: 'y(IF) = ∫Q(IF)dx + C'},
        {name: 'Growth/Decay', formula: 'y = y₀e^(kt)'}
    ]
};
window.MATHS_CALCULUS_6 = MATHS_CALCULUS_6;
</body>
</html>