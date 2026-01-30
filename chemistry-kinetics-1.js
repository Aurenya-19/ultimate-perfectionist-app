<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Physical Chemistry - Chapter 6: Chemical Kinetics
// Complete content with rate laws, order, Arrhenius equation, mechanisms

const CHEMISTRY_KINETICS_1 = {
    id: 'chemistry-kinetics-1',
    title: 'Chemical Kinetics',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'rate-of-reaction',
            title: '1. Rate of Reaction',
            content: `
                <h3>Definition</h3>
                <p>Change in concentration per unit time</p>
                <p class="formula">Rate = -d[R]/dt = d[P]/dt</p>
                
                <h3>Average vs Instantaneous Rate</h3>
                <p><strong>Average:</strong> Δ[C]/Δt</p>
                <p><strong>Instantaneous:</strong> d[C]/dt</p>
                
                <h3>For Reaction: aA + bB → cC + dD</h3>
                <p class="formula">Rate = -(1/a)d[A]/dt = -(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt</p>
                
                <h3>Units</h3>
                <p>mol L⁻¹ s⁻¹ or M/s</p>
            `
        },
        
        {
            id: 'rate-law',
            title: '2. Rate Law and Order',
            content: `
                <h3>Rate Law</h3>
                <p class="formula">Rate = k[A]^m[B]^n</p>
                <p>Where k = rate constant</p>
                
                <h3>Order of Reaction</h3>
                <p>Order = m + n</p>
                <ul>
                    <li>m = order w.r.t. A</li>
                    <li>n = order w.r.t. B</li>
                </ul>
                
                <h3>Units of k</h3>
                <table class="content-table">
                    <tr><th>Order</th><th>Units of k</th></tr>
                    <tr><td>0</td><td>mol L⁻¹ s⁻¹</td></tr>
                    <tr><td>1</td><td>s⁻¹</td></tr>
                    <tr><td>2</td><td>L mol⁻¹ s⁻¹</td></tr>
                </table>
                
                <h3>Molecularity</h3>
                <p>Number of molecules in elementary step</p>
                <ul>
                    <li>Unimolecular: 1</li>
                    <li>Bimolecular: 2</li>
                    <li>Termolecular: 3</li>
                </ul>
            `
        },
        
        {
            id: 'integrated-rate',
            title: '3. Integrated Rate Laws',
            content: `
                <h3>Zero Order</h3>
                <p class="formula">[A] = [A]₀ - kt</p>
                <p class="formula">t₁/₂ = [A]₀/(2k)</p>
                
                <h3>First Order</h3>
                <p class="formula">ln[A] = ln[A]₀ - kt</p>
                <p class="formula">t₁/₂ = 0.693/k</p>
                <p>Half-life independent of initial concentration</p>
                
                <h3>Second Order</h3>
                <p class="formula">1/[A] = 1/[A]₀ + kt</p>
                <p class="formula">t₁/₂ = 1/(k[A]₀)</p>
                
                <h3>Pseudo First Order</h3>
                <p>When one reactant in large excess</p>
                <p>Example: Hydrolysis of ester</p>
            `
        },
        
        {
            id: 'temperature-effect',
            title: '4. Temperature Dependence',
            content: `
                <h3>Arrhenius Equation</h3>
                <p class="formula">k = Ae^(-Ea/RT)</p>
                <p>Where:</p>
                <ul>
                    <li>A = Pre-exponential factor</li>
                    <li>Ea = Activation energy</li>
                    <li>R = Gas constant</li>
                    <li>T = Temperature (K)</li>
                </ul>
                
                <h3>Logarithmic Form</h3>
                <p class="formula">ln k = ln A - Ea/(RT)</p>
                
                <h3>Two Temperatures</h3>
                <p class="formula">ln(k₂/k₁) = (Ea/R)[1/T₁ - 1/T₂]</p>
                
                <h3>Effect of Temperature</h3>
                <p>Rate approximately doubles for every 10°C rise</p>
            `
        },
        
        {
            id: 'collision-theory',
            title: '5. Collision Theory & Mechanisms',
            content: `
                <h3>Collision Theory</h3>
                <p>For reaction to occur:</p>
                <ul>
                    <li>Molecules must collide</li>
                    <li>With proper orientation</li>
                    <li>With energy ≥ Ea</li>
                </ul>
                
                <h3>Activation Energy</h3>
                <p>Minimum energy required for reaction</p>
                <p class="formula">Ea = Threshold energy - Average KE</p>
                
                <h3>Reaction Mechanism</h3>
                <p>Series of elementary steps</p>
                <p><strong>Rate determining step:</strong> Slowest step</p>
                
                <h3>Catalyst</h3>
                <ul>
                    <li>Increases rate by lowering Ea</li>
                    <li>Provides alternate pathway</li>
                    <li>Not consumed in reaction</li>
                    <li>Doesn't change ΔG or equilibrium</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'First Order', problem: 'k=0.693 s⁻¹. Find t₁/₂', solution: 't₁/₂ = 0.693/0.693 = 1 s'},
        {id: 'ex2', title: 'Arrhenius', problem: 'Ea=50kJ, T=300K. If T→310K, find k₂/k₁', solution: 'ln(k₂/k₁) = (50000/8.314)[1/300-1/310] ≈ 0.67, k₂/k₁ ≈ 2'},
        {id: 'ex3', title: 'Order', problem: 'Rate = k[A]²[B]. Order?', solution: 'Order = 2+1 = 3'},
        {id: 'ex4', title: 'Half-life', problem: '[A]₀=1M, k=0.1 s⁻¹ (1st order). Find t₁/₂', solution: 't₁/₂ = 0.693/0.1 = 6.93 s'}
    ],
    
    problems: [
        {id: 'p1', question: 'First order: t₁/₂ = ?', options: ['[A]₀/k', '0.693/k', '1/k[A]₀', 'k'], correct: 1},
        {id: 'p2', question: 'Units of k for 1st order:', options: ['M/s', 's⁻¹', 'M⁻¹s⁻¹', 'M'], correct: 1},
        {id: 'p3', question: 'Arrhenius: k = ?', options: ['Ae^(Ea/RT)', 'Ae^(-Ea/RT)', 'A-Ea/RT', 'A+Ea/RT'], correct: 1},
        {id: 'p4', question: 'Catalyst affects:', options: ['ΔG', 'Equilibrium', 'Ea', 'ΔH'], correct: 2},
        {id: 'p5', question: 'Zero order: [A] = ?', options: ['[A]₀-kt', '[A]₀e^(-kt)', 'ln[A]₀-kt', '1/[A]₀+kt'], correct: 0}
    ],
    
    keyPoints: [
        'Rate = -d[R]/dt = d[P]/dt',
        'Rate law: Rate = k[A]^m[B]^n',
        'Order = m + n',
        'Zero order: [A] = [A]₀ - kt',
        'First order: ln[A] = ln[A]₀ - kt',
        't₁/₂ = 0.693/k (1st order)',
        'Arrhenius: k = Ae^(-Ea/RT)',
        'Catalyst lowers Ea',
        'Rate doubles per 10°C rise',
        'Molecularity ≠ Order (generally)'
    ],
    
    formulae: [
        {name: 'Rate Law', formula: 'Rate = k[A]^m[B]^n'},
        {name: 'First Order', formula: 'ln[A] = ln[A]₀ - kt'},
        {name: 'Half-life (1st)', formula: 't₁/₂ = 0.693/k'},
        {name: 'Arrhenius', formula: 'k = Ae^(-Ea/RT)'},
        {name: 'Two Temperatures', formula: 'ln(k₂/k₁) = (Ea/R)[1/T₁-1/T₂]'}
    ]
};
window.CHEMISTRY_KINETICS_1 = CHEMISTRY_KINETICS_1;
</body>
</html>