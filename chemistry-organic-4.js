<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Organic Chemistry - Chapter 4: Alcohols, Phenols and Ethers
// Complete content with preparation, reactions, acidity, Williamson synthesis

const CHEMISTRY_ORGANIC_4 = {
    id: 'chemistry-organic-4',
    title: 'Alcohols, Phenols and Ethers',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'classification',
            title: '1. Classification and Nomenclature',
            content: `
                <h3>Alcohols (R-OH)</h3>
                <p><strong>1° Alcohol:</strong> -CH₂OH (one R group)</p>
                <p><strong>2° Alcohol:</strong> -CHOH- (two R groups)</p>
                <p><strong>3° Alcohol:</strong> -COH- (three R groups)</p>
                
                <h3>Phenols (Ar-OH)</h3>
                <p>OH attached to benzene ring</p>
                <p>Example: C₆H₅OH (phenol)</p>
                
                <h3>Ethers (R-O-R')</h3>
                <p><strong>Symmetrical:</strong> R = R'</p>
                <p><strong>Unsymmetrical:</strong> R ≠ R'</p>
                
                <h3>Nomenclature</h3>
                <p><strong>Alcohols:</strong> -ol suffix</p>
                <p>CH₃OH: Methanol, C₂H₅OH: Ethanol</p>
                
                <p><strong>Ethers:</strong> alkoxy alkane</p>
                <p>CH₃-O-CH₃: Methoxymethane (dimethyl ether)</p>
            `
        },
        
        {
            id: 'preparation',
            title: '2. Preparation Methods',
            content: `
                <h3>Alcohols</h3>
                
                <h4>1. From Alkenes</h4>
                <p>Hydration: R-CH=CH₂ + H₂O → R-CH₂-CH₂OH</p>
                <p>Hydroboration-oxidation: Anti-Markovnikov</p>
                
                <h4>2. From Carbonyl Compounds</h4>
                <p>Reduction: RCHO → RCH₂OH (1° alcohol)</p>
                <p>R₂CO → R₂CHOH (2° alcohol)</p>
                
                <h4>3. Grignard Reagent</h4>
                <p>HCHO + RMgX → RCH₂OH (1°)</p>
                <p>RCHO + R'MgX → RR'CHOH (2°)</p>
                <p>R₂CO + R'MgX → R₂R'COH (3°)</p>
                
                <h3>Phenols</h3>
                <ul>
                    <li>Dow's process: C₆H₅Cl + NaOH → C₆H₅OH</li>
                    <li>From diazonium salt: C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH</li>
                </ul>
                
                <h3>Ethers</h3>
                <p><strong>Williamson synthesis:</strong></p>
                <p>R-O⁻Na⁺ + R'-X → R-O-R' + NaX</p>
                
                <p><strong>Dehydration of alcohols:</strong></p>
                <p>2ROH → R-O-R + H₂O (140°C, H₂SO₄)</p>
            `
        },
        
        {
            id: 'reactions-alcohols',
            title: '3. Reactions of Alcohols',
            content: `
                <h3>1. Oxidation</h3>
                <p>1° alcohol → Aldehyde → Carboxylic acid</p>
                <p>2° alcohol → Ketone</p>
                <p>3° alcohol → No oxidation</p>
                
                <h3>2. Dehydration</h3>
                <p>ROH → Alkene + H₂O (conc. H₂SO₄, 170°C)</p>
                <p>Follows Saytzeff rule</p>
                
                <h3>3. Reaction with HX</h3>
                <p>ROH + HX → RX + H₂O</p>
                <p>Reactivity: 3° > 2° > 1°</p>
                <p>HX reactivity: HI > HBr > HCl</p>
                
                <h3>4. Esterification</h3>
                <p>ROH + RCOOH → RCOOR' + H₂O</p>
                
                <h3>5. Lucas Test</h3>
                <p>Distinguishes 1°, 2°, 3° alcohols</p>
                <p>ZnCl₂/HCl: 3° immediate, 2° ~5 min, 1° no reaction</p>
            `
        },
        
        {
            id: 'phenols',
            title: '4. Reactions of Phenols',
            content: `
                <h3>Acidic Nature</h3>
                <p>C₆H₅OH ⇌ C₆H₅O⁻ + H⁺</p>
                <p><strong>Acidity order:</strong> Phenol > Water > Alcohol</p>
                <p>Reason: Resonance stabilization of phenoxide ion</p>
                
                <h3>Electrophilic Substitution</h3>
                <p>-OH is o,p-directing and activating</p>
                
                <h4>1. Nitration</h4>
                <p>C₆H₅OH + HNO₃ → o-NO₂-C₆H₄OH + p-NO₂-C₆H₄OH</p>
                
                <h4>2. Bromination</h4>
                <p>C₆H₅OH + 3Br₂ → 2,4,6-tribromophenol (white ppt)</p>
                
                <h4>3. Sulfonation</h4>
                <p>C₆H₅OH + H₂SO₄ → o,p-HOC₆H₄SO₃H</p>
                
                <h3>Kolbe's Reaction</h3>
                <p>C₆H₅ONa + CO₂ → C₆H₄(OH)COOH (salicylic acid)</p>
                
                <h3>Reimer-Tiemann Reaction</h3>
                <p>C₆H₅OH + CHCl₃/NaOH → o-HOC₆H₄CHO (salicylaldehyde)</p>
            `
        },
        
        {
            id: 'ethers',
            title: '5. Reactions of Ethers',
            content: `
                <h3>1. Cleavage by HX</h3>
                <p>R-O-R' + HX → RX + R'OH</p>
                <p>Reactivity: HI > HBr > HCl</p>
                
                <h3>2. Electrophilic Substitution (Aromatic)</h3>
                <p>C₆H₅-O-CH₃ undergoes nitration, halogenation</p>
                <p>-OCH₃ is o,p-directing</p>
                
                <h3>3. Peroxide Formation</h3>
                <p>R-O-R + O₂ → R-O-O-R (explosive)</p>
                <p>Dangerous in old ether samples</p>
                
                <h3>Distinguishing Tests</h3>
                <table class="content-table">
                    <tr><th>Test</th><th>Alcohol</th><th>Phenol</th><th>Ether</th></tr>
                    <tr><td>FeCl₃</td><td>No color</td><td>Violet</td><td>No color</td></tr>
                    <tr><td>Na metal</td><td>H₂ gas</td><td>H₂ gas</td><td>No reaction</td></tr>
                    <tr><td>Lucas</td><td>Turbidity</td><td>No reaction</td><td>No reaction</td></tr>
                </table>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Oxidation', problem: 'CH₃CH₂OH + [O] → ?', solution: 'CH₃CHO (then CH₃COOH)'},
        {id: 'ex2', title: 'Williamson', problem: 'CH₃ONa + C₂H₅Br → ?', solution: 'CH₃-O-C₂H₅'},
        {id: 'ex3', title: 'Acidity', problem: 'Most acidic: ROH, H₂O, ArOH?', solution: 'ArOH (phenol)'},
        {id: 'ex4', title: 'Bromination', problem: 'Phenol + Br₂(aq) → ?', solution: '2,4,6-tribromophenol (white ppt)'}
    ],
    
    problems: [
        {id: 'p1', question: '1° alcohol oxidation gives:', options: ['Ketone', 'Aldehyde', 'Ether', 'Alkene'], correct: 1},
        {id: 'p2', question: 'Most acidic:', options: ['CH₃OH', 'H₂O', 'C₆H₅OH', 'C₂H₅OH'], correct: 2},
        {id: 'p3', question: 'Williamson synthesis gives:', options: ['Alcohol', 'Ether', 'Phenol', 'Aldehyde'], correct: 1},
        {id: 'p4', question: 'Lucas test fastest for:', options: ['1° alcohol', '2° alcohol', '3° alcohol', 'Phenol'], correct: 2},
        {id: 'p5', question: 'Phenol + FeCl₃ gives:', options: ['Red', 'Violet', 'Blue', 'Green'], correct: 1}
    ],
    
    keyPoints: [
        'Alcohols: 1°, 2°, 3° based on C-OH',
        'Phenols more acidic than alcohols',
        'Williamson: R-O⁻ + R\'-X → R-O-R\'',
        '1° → Aldehyde, 2° → Ketone',
        '3° alcohol: No oxidation',
        'Lucas: 3° > 2° > 1°',
        'Phenol + Br₂ → Tribromophenol',
        'Kolbe: Phenol + CO₂ → Salicylic acid',
        'Ether cleavage: R-O-R + HX → RX + R\'OH',
        'FeCl₃ test: Phenol gives violet'
    ],
    
    formulae: [
        {name: 'Williamson Synthesis', formula: 'R-O⁻ + R\'-X → R-O-R\''},
        {name: 'Kolbe Reaction', formula: 'C₆H₅ONa + CO₂ → Salicylic acid'},
        {name: 'Ether Cleavage', formula: 'R-O-R + HX → RX + R\'OH'}
    ]
};
window.CHEMISTRY_ORGANIC_4 = CHEMISTRY_ORGANIC_4;
</body>
</html>