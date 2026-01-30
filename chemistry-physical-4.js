<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Physical Chemistry - Chapter 4: Chemical Equilibrium
// Complete content with equilibrium constant, Le Chatelier, Kp, Kc

const CHEMISTRY_PHYSICAL_4 = {
    id: 'chemistry-physical-4',
    title: 'Chemical Equilibrium',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    difficulty: 'Intermediate',
    
    sections: [
        {
            id: 'equilibrium-basics',
            title: '1. Chemical Equilibrium',
            content: `
                <h3>Definition</h3>
                <p>State where forward and backward reaction rates are equal</p>
                
                <h3>Characteristics</h3>
                <ul>
                    <li>Dynamic equilibrium</li>
                    <li>Concentrations constant</li>
                    <li>Achieved in closed system</li>
                    <li>Can be approached from either direction</li>
                </ul>
                
                <h3>Law of Mass Action</h3>
                <p>For aA + bB ⇌ cC + dD</p>
                <p class="formula">Kc = [C]^c[D]^d / [A]^a[B]^b</p>
            `
        },
        
        {
            id: 'equilibrium-constant',
            title: '2. Equilibrium Constants',
            content: `
                <h3>Kc (Concentration)</h3>
                <p class="formula">Kc = [Products] / [Reactants]</p>
                
                <h3>Kp (Pressure)</h3>
                <p class="formula">Kp = (P_products) / (P_reactants)</p>
                
                <h3>Relation between Kp and Kc</h3>
                <p class="formula">Kp = Kc(RT)^Δn</p>
                <p>Where Δn = (moles of gaseous products) - (moles of gaseous reactants)</p>
                
                <h3>Properties of K</h3>
                <ul>
                    <li>K > 1: Products favored</li>
                    <li>K < 1: Reactants favored</li>
                    <li>K = 1: Equal amounts</li>
                    <li>Temperature dependent</li>
                </ul>
            `
        },
        
        {
            id: 'reaction-quotient',
            title: '3. Reaction Quotient (Q)',
            content: `
                <h3>Definition</h3>
                <p class="formula">Q = [C]^c[D]^d / [A]^a[B]^b</p>
                <p>At any instant (not at equilibrium)</p>
                
                <h3>Predicting Direction</h3>
                <ul>
                    <li><strong>Q < K:</strong> Forward reaction</li>
                    <li><strong>Q = K:</strong> At equilibrium</li>
                    <li><strong>Q > K:</strong> Backward reaction</li>
                </ul>
            `
        },
        
        {
            id: 'le-chatelier',
            title: "4. Le Chatelier's Principle",
            content: `
                <h3>Statement</h3>
                <p><strong>"If stress applied to equilibrium, system shifts to relieve stress"</strong></p>
                
                <h3>Effect of Concentration</h3>
                <ul>
                    <li>Increase reactant → Forward shift</li>
                    <li>Increase product → Backward shift</li>
                </ul>
                
                <h3>Effect of Pressure</h3>
                <ul>
                    <li>Increase P → Shift to fewer moles</li>
                    <li>Decrease P → Shift to more moles</li>
                    <li>No effect if Δn = 0</li>
                </ul>
                
                <h3>Effect of Temperature</h3>
                <ul>
                    <li>Increase T → Endothermic direction</li>
                    <li>Decrease T → Exothermic direction</li>
                </ul>
                
                <h3>Effect of Catalyst</h3>
                <p>No effect on equilibrium position</p>
                <p>Only increases rate of attaining equilibrium</p>
            `
        },
        
        {
            id: 'degree-dissociation',
            title: '5. Degree of Dissociation',
            content: `
                <h3>Definition</h3>
                <p class="formula">α = (moles dissociated) / (initial moles)</p>
                
                <h3>For AB ⇌ A + B</h3>
                <p>If initial = C, dissociated = Cα</p>
                <p>At equilibrium:</p>
                <ul>
                    <li>[AB] = C(1-α)</li>
                    <li>[A] = [B] = Cα</li>
                </ul>
                
                <p class="formula">Kc = Cα² / (1-α)</p>
                
                <h3>For Small α</h3>
                <p class="formula">α ≈ √(Kc/C)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Kc Calculation', problem: '[A]=0.1, [B]=0.2, [C]=0.4. A+B⇌C. Find Kc', solution: 'Kc = [C]/([A][B]) = 0.4/(0.1×0.2) = 20'},
        {id: 'ex2', title: 'Kp from Kc', problem: 'Kc=1, Δn=2, T=300K. Find Kp', solution: 'Kp = Kc(RT)² = 1×(0.082×300)² = 608'},
        {id: 'ex3', title: 'Reaction Direction', problem: 'K=10, Q=5. Direction?', solution: 'Q<K, so forward reaction'},
        {id: 'ex4', title: 'Degree of Dissociation', problem: 'Kc=0.01, C=1M. Find α', solution: 'α = √(Kc/C) = √0.01 = 0.1'}
    ],
    
    problems: [
        {id: 'p1', question: 'At equilibrium:', options: ['Rate_f = Rate_b', 'Rate_f > Rate_b', 'Rate_f < Rate_b', 'Rate_f = 0'], correct: 0},
        {id: 'p2', question: 'K > 1 means:', options: ['Reactants favored', 'Products favored', 'Equal', 'No reaction'], correct: 1},
        {id: 'p3', question: 'Kp = Kc when:', options: ['Δn=0', 'Δn=1', 'Δn=2', 'Always'], correct: 0},
        {id: 'p4', question: 'Catalyst affects:', options: ['K', 'Equilibrium position', 'Rate', 'ΔH'], correct: 2},
        {id: 'p5', question: 'Q < K means:', options: ['Equilibrium', 'Forward', 'Backward', 'No change'], correct: 1}
    ],
    
    keyPoints: [
        'Equilibrium: Rate_forward = Rate_backward',
        'Kc = [Products]/[Reactants]',
        'Kp = Kc(RT)^Δn',
        'K > 1: Products favored',
        'Q < K: Forward reaction',
        'Le Chatelier: System opposes stress',
        'Increase P: Shift to fewer moles',
        'Increase T: Endothermic direction',
        'Catalyst: No effect on K',
        'α = moles dissociated/initial moles'
    ],
    
    formulae: [
        {name: 'Equilibrium Constant', formula: 'Kc = [C]^c[D]^d/[A]^a[B]^b'},
        {name: 'Kp-Kc Relation', formula: 'Kp = Kc(RT)^Δn'},
        {name: 'Reaction Quotient', formula: 'Q = [Products]/[Reactants]'},
        {name: 'Degree of Dissociation', formula: 'α = √(Kc/C)'}
    ]
};
window.CHEMISTRY_PHYSICAL_4 = CHEMISTRY_PHYSICAL_4;
</body>
</html>