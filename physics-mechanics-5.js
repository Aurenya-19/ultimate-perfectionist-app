<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Mechanics - Chapter 5: Rotational Motion
// Complete content with torque, moment of inertia, angular momentum

const PHYSICS_MECHANICS_5 = {
    id: 'physics-mechanics-5',
    title: 'Rotational Motion',
    subject: 'Physics',
    category: 'Mechanics',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Rotational Motion',
            content: `
                <h3>What is Rotational Motion?</h3>
                <p>Motion of a body about a fixed axis</p>
                
                <h3>Comparison with Linear Motion</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Linear Motion</th>
                            <th>Rotational Motion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Displacement (s)</td>
                            <td>Angular displacement (θ)</td>
                        </tr>
                        <tr>
                            <td>Velocity (v)</td>
                            <td>Angular velocity (ω)</td>
                        </tr>
                        <tr>
                            <td>Acceleration (a)</td>
                            <td>Angular acceleration (α)</td>
                        </tr>
                        <tr>
                            <td>Mass (m)</td>
                            <td>Moment of inertia (I)</td>
                        </tr>
                        <tr>
                            <td>Force (F)</td>
                            <td>Torque (τ)</td>
                        </tr>
                        <tr>
                            <td>Momentum (p = mv)</td>
                            <td>Angular momentum (L = Iω)</td>
                        </tr>
                        <tr>
                            <td>KE = ½mv²</td>
                            <td>KE = ½Iω²</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Angular Quantities</h3>
                
                <h4>Angular Displacement (θ)</h4>
                <p>Angle through which body rotates</p>
                <p class="formula">θ = s/r (in radians)</p>
                
                <h4>Angular Velocity (ω)</h4>
                <p class="formula">ω = dθ/dt = v/r</p>
                <p>SI Unit: rad/s</p>
                
                <h4>Angular Acceleration (α)</h4>
                <p class="formula">α = dω/dt = a/r</p>
                <p>SI Unit: rad/s²</p>
                
                <h3>Relation between Linear and Angular</h3>
                <p class="formula">v = rω</p>
                <p class="formula">a = rα</p>
                <p class="formula">s = rθ</p>
            `
        },
        
        {
            id: 'equations',
            title: '2. Equations of Rotational Motion',
            content: `
                <h3>Rotational Kinematics</h3>
                <p>For constant angular acceleration:</p>
                
                <div class="formula-box">
                    <h4>Three Equations (analogous to linear motion)</h4>
                    <p class="formula">ω = ω₀ + αt</p>
                    <p class="formula">θ = ω₀t + ½αt²</p>
                    <p class="formula">ω² = ω₀² + 2αθ</p>
                </div>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Linear</th>
                            <th>Rotational</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>v = u + at</td>
                            <td>ω = ω₀ + αt</td>
                        </tr>
                        <tr>
                            <td>s = ut + ½at²</td>
                            <td>θ = ω₀t + ½αt²</td>
                        </tr>
                        <tr>
                            <td>v² = u² + 2as</td>
                            <td>ω² = ω₀² + 2αθ</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="example-box">
                    <strong>Example:</strong> A wheel starts from rest and rotates with angular acceleration 2 rad/s². Find angular velocity after 5 seconds.
                    <br><br>
                    Given: ω₀ = 0, α = 2 rad/s², t = 5 s
                    <br><br>
                    ω = ω₀ + αt
                    <br>= 0 + 2(5)
                    <br>= <strong>10 rad/s</strong>
                </div>
            `
        },
        
        {
            id: 'moment-of-inertia',
            title: '3. Moment of Inertia',
            content: `
                <h3>Definition</h3>
                <p>Rotational analog of mass. Measure of resistance to rotational motion.</p>
                
                <p class="formula">I = Σmr² (for discrete particles)</p>
                <p class="formula">I = ∫r²dm (for continuous body)</p>
                
                <h3>Moment of Inertia of Common Objects</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Object</th>
                            <th>Axis</th>
                            <th>Moment of Inertia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Point mass</td>
                            <td>Distance r from axis</td>
                            <td>I = mr²</td>
                        </tr>
                        <tr>
                            <td>Thin rod</td>
                            <td>Through center, ⊥ to length</td>
                            <td>I = ML²/12</td>
                        </tr>
                        <tr>
                            <td>Thin rod</td>
                            <td>Through end, ⊥ to length</td>
                            <td>I = ML²/3</td>
                        </tr>
                        <tr>
                            <td>Solid cylinder/disk</td>
                            <td>Through center, along axis</td>
                            <td>I = MR²/2</td>
                        </tr>
                        <tr>
                            <td>Hollow cylinder</td>
                            <td>Through center, along axis</td>
                            <td>I = MR²</td>
                        </tr>
                        <tr>
                            <td>Solid sphere</td>
                            <td>Through center</td>
                            <td>I = 2MR²/5</td>
                        </tr>
                        <tr>
                            <td>Hollow sphere</td>
                            <td>Through center</td>
                            <td>I = 2MR²/3</td>
                        </tr>
                        <tr>
                            <td>Rectangular plate</td>
                            <td>Through center, ⊥ to plane</td>
                            <td>I = M(a²+b²)/12</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Parallel Axis Theorem</h3>
                <p>Moment of inertia about any axis parallel to axis through center of mass:</p>
                <p class="formula">I = I_cm + Md²</p>
                <p>Where d = distance between two parallel axes</p>
                
                <h3>Perpendicular Axis Theorem</h3>
                <p>For planar objects:</p>
                <p class="formula">I_z = I_x + I_y</p>
                <p>Where x, y, z are mutually perpendicular axes</p>
                
                <h3>Radius of Gyration (k)</h3>
                <p class="formula">I = Mk²</p>
                <p>k = distance from axis where entire mass can be assumed concentrated</p>
            `
        },
        
        {
            id: 'torque',
            title: '4. Torque',
            content: `
                <h3>Definition</h3>
                <p>Rotational analog of force. Turning effect of force.</p>
                
                <p class="formula">τ = r × F = rF sin θ</p>
                
                <p>Where:</p>
                <ul>
                    <li>r = position vector from axis</li>
                    <li>F = applied force</li>
                    <li>θ = angle between r and F</li>
                </ul>
                
                <p><strong>SI Unit:</strong> N⋅m</p>
                
                <h3>Direction of Torque</h3>
                <ul>
                    <li>Perpendicular to plane containing r and F</li>
                    <li>Given by right-hand rule</li>
                    <li>Clockwise: Negative</li>
                    <li>Anticlockwise: Positive</li>
                </ul>
                
                <h3>Newton's Second Law for Rotation</h3>
                <p class="formula">τ = Iα</p>
                <p>Analogous to F = ma</p>
                
                <div class="example-box">
                    <strong>Example:</strong> A force of 10 N is applied tangentially to a wheel of radius 0.5 m. Find torque.
                    <br><br>
                    τ = rF sin θ
                    <br>= 0.5 × 10 × sin 90°
                    <br>= 0.5 × 10 × 1
                    <br>= <strong>5 N⋅m</strong>
                </div>
                
                <h3>Couple</h3>
                <p>Two equal and opposite forces acting at different points</p>
                <p class="formula">τ_couple = F × d</p>
                <p>Where d = perpendicular distance between forces</p>
            `
        },
        
        {
            id: 'angular-momentum',
            title: '5. Angular Momentum',
            content: `
                <h3>Definition</h3>
                <p>Rotational analog of linear momentum</p>
                
                <p class="formula">L = r × p = r × mv</p>
                <p class="formula">L = Iω (for rigid body)</p>
                
                <p><strong>SI Unit:</strong> kg⋅m²/s</p>
                
                <h3>Relation with Torque</h3>
                <p class="formula">τ = dL/dt</p>
                <p>Torque = rate of change of angular momentum</p>
                
                <h3>Conservation of Angular Momentum</h3>
                <p><strong>If net external torque = 0, then L = constant</strong></p>
                
                <p class="formula">I₁ω₁ = I₂ω₂</p>
                
                <div class="example-box">
                    <strong>Applications:</strong>
                    <ul>
                        <li><strong>Ice skater:</strong> Pulls arms in → I decreases → ω increases</li>
                        <li><strong>Diver:</strong> Tucks body → I decreases → rotation faster</li>
                        <li><strong>Earth-Moon system:</strong> Angular momentum conserved</li>
                    </ul>
                </div>
                
                <h3>Relation between L and KE</h3>
                <p class="formula">KE = L²/2I</p>
                <p>Analogous to KE = p²/2m</p>
            `
        },
        
        {
            id: 'rolling-motion',
            title: '6. Rolling Motion',
            content: `
                <h3>Pure Rolling</h3>
                <p>Combination of translation and rotation without slipping</p>
                
                <p class="formula">v_cm = Rω</p>
                
                <p>Where:</p>
                <ul>
                    <li>v_cm = velocity of center of mass</li>
                    <li>R = radius</li>
                    <li>ω = angular velocity</li>
                </ul>
                
                <h3>Kinetic Energy in Rolling</h3>
                <p class="formula">KE_total = KE_translation + KE_rotation</p>
                <p class="formula">KE = ½Mv_cm² + ½Iω²</p>
                <p class="formula">KE = ½Mv_cm²(1 + k²/R²)</p>
                
                <h3>Acceleration on Incline</h3>
                <p>For object rolling down incline without slipping:</p>
                <p class="formula">a = g sin θ / (1 + I/MR²)</p>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Object</th>
                            <th>I/MR²</th>
                            <th>Acceleration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Solid cylinder</td>
                            <td>1/2</td>
                            <td>a = (2/3)g sin θ</td>
                        </tr>
                        <tr>
                            <td>Hollow cylinder</td>
                            <td>1</td>
                            <td>a = (1/2)g sin θ</td>
                        </tr>
                        <tr>
                            <td>Solid sphere</td>
                            <td>2/5</td>
                            <td>a = (5/7)g sin θ</td>
                        </tr>
                        <tr>
                            <td>Hollow sphere</td>
                            <td>2/3</td>
                            <td>a = (3/5)g sin θ</td>
                        </tr>
                    </tbody>
                </table>
                
                <p><strong>Order of reaching bottom (fastest first):</strong></p>
                <p>Solid sphere > Solid cylinder > Hollow sphere > Hollow cylinder</p>
                
                <div class="important-box">
                    <strong>Key Point:</strong> Smaller I/MR² ratio → Faster rolling
                </div>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Moment of Inertia',
            problem: 'Find moment of inertia of a thin rod of mass 2 kg and length 1 m about an axis through its end perpendicular to length.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: M = 2 kg, L = 1 m
                <br><br>
                For rod about end: I = ML²/3
                <br>= 2 × (1)² / 3
                <br>= 2/3
                <br>= <strong>0.67 kg⋅m²</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Torque and Angular Acceleration',
            problem: 'A torque of 20 N⋅m acts on a wheel of moment of inertia 5 kg⋅m². Find angular acceleration.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: τ = 20 N⋅m, I = 5 kg⋅m²
                <br><br>
                Using τ = Iα:
                <br>20 = 5 × α
                <br>α = 20/5
                <br>= <strong>4 rad/s²</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Conservation of Angular Momentum',
            problem: 'A skater with moment of inertia 4 kg⋅m² spins at 3 rad/s. She pulls her arms in, reducing I to 2 kg⋅m². Find new angular velocity.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: I₁ = 4 kg⋅m², ω₁ = 3 rad/s, I₂ = 2 kg⋅m²
                <br><br>
                By conservation: I₁ω₁ = I₂ω₂
                <br>4 × 3 = 2 × ω₂
                <br>12 = 2ω₂
                <br>ω₂ = 6 rad/s
                <br><br>
                <strong>New angular velocity = 6 rad/s (doubled!)</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Rolling Motion',
            problem: 'A solid sphere of mass 2 kg and radius 0.1 m rolls without slipping with velocity 5 m/s. Find total kinetic energy.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Given: M = 2 kg, R = 0.1 m, v = 5 m/s
                <br><br>
                For solid sphere: I = 2MR²/5
                <br>ω = v/R = 5/0.1 = 50 rad/s
                <br><br>
                KE = ½Mv² + ½Iω²
                <br>= ½(2)(5)² + ½(2×2×0.01/5)(50)²
                <br>= 25 + ½(0.008)(2500)
                <br>= 25 + 10
                <br>= <strong>35 J</strong>
                <br><br>
                Or use: KE = ½Mv²(1 + 2/5) = ½(2)(25)(7/5) = 35 J
            `,
            difficulty: 'hard'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'The moment of inertia of a solid sphere about its diameter is:',
            options: ['MR²/2', '2MR²/3', '2MR²/5', 'MR²'],
            correct: 2,
            explanation: 'For solid sphere about diameter: I = 2MR²/5',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'If angular velocity is doubled, kinetic energy becomes:',
            options: ['Double', 'Four times', 'Half', 'Same'],
            correct: 1,
            explanation: 'KE = ½Iω². If ω doubles, KE becomes 4 times (ω² term)',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Which will reach bottom of incline first when rolling?',
            options: ['Solid sphere', 'Hollow sphere', 'Solid cylinder', 'Hollow cylinder'],
            correct: 0,
            explanation: 'Solid sphere has smallest I/MR² ratio (2/5), so fastest',
            difficulty: 'medium'
        },
        
        {
            id: 'p4',
            question: 'Angular momentum is conserved when:',
            options: ['Net force = 0', 'Net torque = 0', 'Velocity constant', 'Acceleration = 0'],
            correct: 1,
            explanation: 'Angular momentum conserved when net external torque = 0',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'For pure rolling, v_cm and ω are related as:',
            options: ['v = Rω', 'v = R/ω', 'v = ω/R', 'v = R²ω'],
            correct: 0,
            explanation: 'For pure rolling without slipping: v_cm = Rω',
            difficulty: 'easy'
        }
    ],
    
    keyPoints: [
        'Rotational analog: s→θ, v→ω, a→α, m→I, F→τ, p→L',
        'Equations: ω=ω₀+αt, θ=ω₀t+½αt², ω²=ω₀²+2αθ',
        'Moment of inertia: I = Σmr² (resistance to rotation)',
        'Parallel axis theorem: I = I_cm + Md²',
        'Torque: τ = r×F = Iα',
        'Angular momentum: L = Iω',
        'Conservation: If τ_ext = 0, then L = constant',
        'Pure rolling: v_cm = Rω',
        'KE in rolling = ½Mv² + ½Iω²',
        'Smaller I/MR² → Faster rolling down incline'
    ],
    
    formulae: [
        {
            name: 'Angular Velocity',
            formula: 'ω = dθ/dt = v/r',
            description: 'Rate of change of angular displacement'
        },
        {
            name: 'Moment of Inertia',
            formula: 'I = Σmr² or ∫r²dm',
            description: 'Rotational inertia'
        },
        {
            name: 'Torque',
            formula: 'τ = r×F = Iα',
            description: 'Rotational analog of force'
        },
        {
            name: 'Angular Momentum',
            formula: 'L = Iω = r×p',
            description: 'Rotational momentum'
        },
        {
            name: 'Rotational KE',
            formula: 'KE = ½Iω²',
            description: 'Kinetic energy of rotation'
        },
        {
            name: 'Pure Rolling Condition',
            formula: 'v_cm = Rω',
            description: 'No slipping condition'
        },
        {
            name: 'Parallel Axis Theorem',
            formula: 'I = I_cm + Md²',
            description: 'MI about parallel axis'
        },
        {
            name: 'Rolling KE',
            formula: 'KE = ½Mv²(1 + I/MR²)',
            description: 'Total KE in rolling'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICS_MECHANICS_5;
}
window.PHYSICS_MECHANICS_5 = PHYSICS_MECHANICS_5;
</body>
</html>