<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Mathematics - Calculus - Chapter 4: Applications of Derivatives
// Complete content with maxima, minima, tangent, normal, rate of change

const MATHS_CALCULUS_4 = {
    id: 'maths-calculus-4',
    title: 'Applications of Derivatives',
    subject: 'Mathematics',
    category: 'Calculus',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'rate-of-change',
            title: '1. Rate of Change',
            content: `
                <h3>Instantaneous Rate</h3>
                <p class="formula">dy/dx = lim(Δx→0) Δy/Δx</p>
                
                <h3>Applications</h3>
                <ul>
                    <li>Velocity = ds/dt</li>
                    <li>Acceleration = dv/dt = d²s/dt²</li>
                    <li>Growth/decay rate</li>
                </ul>
            `
        },
        
        {
            id: 'tangent-normal',
            title: '2. Tangent and Normal',
            content: `
                <h3>Slope of Tangent</h3>
                <p class="formula">m = dy/dx at (x₁, y₁)</p>
                
                <h3>Equation of Tangent</h3>
                <p class="formula">y - y₁ = m(x - x₁)</p>
                
                <h3>Equation of Normal</h3>
                <p class="formula">y - y₁ = (-1/m)(x - x₁)</p>
                
                <h3>Angle Between Curves</h3>
                <p class="formula">tan θ = |(m₁ - m₂)/(1 + m₁m₂)|</p>
            `
        },
        
        {
            id: 'increasing-decreasing',
            title: '3. Increasing/Decreasing Functions',
            content: `
                <h3>Increasing Function</h3>
                <p>f'(x) > 0 in interval</p>
                
                <h3>Decreasing Function</h3>
                <p>f'(x) < 0 in interval</p>
                
                <h3>Strictly Monotonic</h3>
                <p>f'(x) ≥ 0 (increasing) or f'(x) ≤ 0 (decreasing)</p>
            `
        },
        
        {
            id: 'maxima-minima',
            title: '4. Maxima and Minima',
            content: `
                <h3>Critical Points</h3>
                <p>Where f'(x) = 0 or f'(x) doesn't exist</p>
                
                <h3>First Derivative Test</h3>
                <ul>
                    <li>f' changes + to -: Local maximum</li>
                    <li>f' changes - to +: Local minimum</li>
                    <li>f' doesn't change sign: Neither</li>
                </ul>
                
                <h3>Second Derivative Test</h3>
                <p>At critical point x = c:</p>
                <ul>
                    <li>f''(c) < 0: Local maximum</li>
                    <li>f''(c) > 0: Local minimum</li>
                    <li>f''(c) = 0: Test fails, use first derivative</li>
                </ul>
                
                <h3>Global Extrema</h3>
                <p>Check:</p>
                <ol>
                    <li>Critical points</li>
                    <li>Endpoints of interval</li>
                </ol>
            `
        },
        
        {
            id: 'approximations',
            title: '5. Approximations',
            content: `
                <h3>Linear Approximation</h3>
                <p class="formula">f(x + Δx) ≈ f(x) + f'(x)Δx</p>
                
                <h3>Differential</h3>
                <p class="formula">dy = f'(x)dx</p>
                
                <h3>Mean Value Theorem</h3>
                <p>If f continuous on [a,b] and differentiable on (a,b):</p>
                <p class="formula">f'(c) = [f(b) - f(a)]/(b - a)</p>
                <p>for some c in (a,b)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Tangent', problem: 'y=x² at (1,1). Find tangent', solution: 'm=2x|ₓ₌₁=2, y-1=2(x-1) → y=2x-1'},
        {id: 'ex2', title: 'Maxima', problem: 'f(x)=x³-3x. Find max/min', solution: 'f\'=3x²-3=0 → x=±1. Max at x=-1, Min at x=1'},
        {id: 'ex3', title: 'Increasing', problem: 'f(x)=x²+2x. Where increasing?', solution: 'f\'=2x+2>0 → x>-1'},
        {id: 'ex4', title: 'Approximation', problem: '√26 ≈ ?', solution: 'f(x)=√x, x=25, Δx=1. √26≈5+1/(2×5)=5.1'}
    ],
    
    problems: [
        {id: 'p1', question: 'Slope of tangent = ?', options: ['dy/dx', 'd²y/dx²', 'y', 'x'], correct: 0},
        {id: 'p2', question: 'f\'(x)>0 means:', options: ['Decreasing', 'Increasing', 'Constant', 'Max'], correct: 1},
        {id: 'p3', question: 'At maxima, f\'(x) = ?', options: ['>0', '<0', '=0', '≠0'], correct: 2},
        {id: 'p4', question: 'f\'\'(c)<0 at critical point:', options: ['Min', 'Max', 'Neither', 'Both'], correct: 1},
        {id: 'p5', question: 'Normal slope when tangent slope is m:', options: ['m', '-m', '1/m', '-1/m'], correct: 3}
    ],
    
    keyPoints: [
        'Rate of change = dy/dx',
        'Tangent slope = f\'(x)',
        'Normal slope = -1/f\'(x)',
        'f\'(x) > 0: Increasing',
        'f\'(x) < 0: Decreasing',
        'Critical point: f\'(x) = 0',
        'f\'\'(x) < 0: Maximum',
        'f\'\'(x) > 0: Minimum',
        'Linear approx: f(x+Δx) ≈ f(x) + f\'(x)Δx',
        'Check endpoints for global extrema'
    ],
    
    formulae: [
        {name: 'Tangent', formula: 'y - y₁ = m(x - x₁)'},
        {name: 'Normal', formula: 'y - y₁ = (-1/m)(x - x₁)'},
        {name: 'Linear Approximation', formula: 'f(x+Δx) ≈ f(x) + f\'(x)Δx'},
        {name: 'Mean Value Theorem', formula: 'f\'(c) = [f(b)-f(a)]/(b-a)'}
    ]
};
window.MATHS_CALCULUS_4 = MATHS_CALCULUS_4;
</body>
</html>