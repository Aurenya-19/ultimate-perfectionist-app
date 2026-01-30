<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Organic Chemistry - Chapter 3: Aldehydes, Ketones & Carboxylic Acids
// Complete content with preparation, reactions, nucleophilic addition

const CHEMISTRY_ORGANIC_3 = {
    id: 'chemistry-organic-3',
    title: 'Aldehydes, Ketones and Carboxylic Acids',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'structure-nomenclature',
            title: '1. Structure and Nomenclature',
            content: `
                <h3>Functional Groups</h3>
                <p><strong>Aldehyde:</strong> -CHO (carbonyl at end)</p>
                <p><strong>Ketone:</strong> >C=O (carbonyl in middle)</p>
                <p><strong>Carboxylic Acid:</strong> -COOH</p>
                
                <h3>Nomenclature</h3>
                <p><strong>Aldehydes:</strong> -al suffix</p>
                <p>Examples: Methanal (HCHO), Ethanal (CH₃CHO)</p>
                
                <p><strong>Ketones:</strong> -one suffix</p>
                <p>Examples: Propanone (CH₃COCH₃), Butanone</p>
                
                <p><strong>Carboxylic Acids:</strong> -oic acid suffix</p>
                <p>Examples: Methanoic acid (HCOOH), Ethanoic acid (CH₃COOH)</p>
            `
        },
        
        {
            id: 'preparation',
            title: '2. Preparation Methods',
            content: `
                <h3>Aldehydes</h3>
                <ul>
                    <li><strong>Oxidation of 1° alcohols:</strong> RCH₂OH → RCHO</li>
                    <li><strong>Rosenmund reduction:</strong> RCOCl + H₂ → RCHO</li>
                    <li><strong>Stephen reaction:</strong> RCN → RCHO</li>
                </ul>
                
                <h3>Ketones</h3>
                <ul>
                    <li><strong>Oxidation of 2° alcohols:</strong> R₂CHOH → R₂CO</li>
                    <li><strong>Friedel-Crafts acylation:</strong> Benzene + RCOCl → ArCOR</li>
                    <li><strong>Hydration of alkynes:</strong> RC≡CH → RCOCH₃</li>
                </ul>
                
                <h3>Carboxylic Acids</h3>
                <ul>
                    <li><strong>Oxidation of 1° alcohols/aldehydes:</strong> RCH₂OH → RCOOH</li>
                    <li><strong>Hydrolysis of nitriles:</strong> RCN + H₂O → RCOOH</li>
                    <li><strong>Grignard + CO₂:</strong> RMgX + CO₂ → RCOOH</li>
                </ul>
            `
        },
        
        {
            id: 'reactions',
            title: '3. Nucleophilic Addition Reactions',
            content: `
                <h3>Mechanism</h3>
                <p>Nucleophile attacks electrophilic C=O carbon</p>
                
                <h3>1. Addition of HCN</h3>
                <p class="formula">RCHO + HCN → RCH(OH)CN (Cyanohydrin)</p>
                
                <h3>2. Addition of NH₃ Derivatives</h3>
                <ul>
                    <li>NH₂OH → Oxime</li>
                    <li>NH₂NH₂ → Hydrazone</li>
                    <li>NH₂NHCONH₂ → Semicarbazone</li>
                </ul>
                
                <h3>3. Addition of Grignard Reagent</h3>
                <p>RCHO + R'MgX → R-CHOH-R' (2° alcohol)</p>
                <p>R₂CO + R'MgX → R₂C(OH)R' (3° alcohol)</p>
                
                <h3>4. Aldol Condensation</h3>
                <p>2CH₃CHO → CH₃CH(OH)CH₂CHO (Aldol)</p>
                <p>Heat → CH₃CH=CHCHO (α,β-unsaturated aldehyde)</p>
                
                <h3>5. Cannizzaro Reaction</h3>
                <p>Aldehydes without α-H in strong base:</p>
                <p>2HCHO → CH₃OH + HCOO⁻</p>
            `
        },
        
        {
            id: 'oxidation-reduction',
            title: '4. Oxidation and Reduction',
            content: `
                <h3>Oxidation</h3>
                <p><strong>Aldehydes:</strong> Easily oxidized to acids</p>
                <p>RCHO + [O] → RCOOH</p>
                
                <p><strong>Ketones:</strong> Resistant to oxidation</p>
                
                <h3>Distinguishing Tests</h3>
                <p><strong>Tollen's Test (Silver mirror):</strong></p>
                <p>RCHO + 2[Ag(NH₃)₂]⁺ → RCOO⁻ + 2Ag↓</p>
                
                <p><strong>Fehling's Test:</strong></p>
                <p>RCHO + Cu²⁺ → RCOO⁻ + Cu₂O↓ (red ppt)</p>
                
                <h3>Reduction</h3>
                <p><strong>To alcohols:</strong></p>
                <p>RCHO + H₂/Ni → RCH₂OH</p>
                <p>R₂CO + H₂/Ni → R₂CHOH</p>
                
                <p><strong>Clemmensen:</strong> Zn-Hg/HCl → RCH₃</p>
                <p><strong>Wolff-Kishner:</strong> NH₂NH₂/KOH → RCH₃</p>
            `
        },
        
        {
            id: 'carboxylic-acids',
            title: '5. Carboxylic Acid Reactions',
            content: `
                <h3>Acidic Nature</h3>
                <p>RCOOH ⇌ RCOO⁻ + H⁺</p>
                <p>Stronger than alcohols, weaker than mineral acids</p>
                
                <h3>Derivatives</h3>
                <ul>
                    <li><strong>Acid chloride:</strong> RCOOH + SOCl₂ → RCOCl</li>
                    <li><strong>Ester:</strong> RCOOH + R'OH → RCOOR' (esterification)</li>
                    <li><strong>Amide:</strong> RCOOH + NH₃ → RCONH₂</li>
                    <li><strong>Anhydride:</strong> 2RCOOH → (RCO)₂O</li>
                </ul>
                
                <h3>Decarboxylation</h3>
                <p>RCOOH → RH + CO₂</p>
                <p>Soda lime heating</p>
                
                <h3>Hell-Volhard-Zelinsky Reaction</h3>
                <p>α-halogenation of carboxylic acids</p>
                <p>RCH₂COOH + Cl₂/P → RCHClCOOH</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Aldol', problem: '2CH₃CHO + NaOH → ?', solution: 'CH₃CH(OH)CH₂CHO (Aldol)'},
        {id: 'ex2', title: 'Grignard', problem: 'HCHO + CH₃MgBr → ?', solution: 'CH₃CH₂OH (1° alcohol)'},
        {id: 'ex3', title: 'Oxidation', problem: 'CH₃CHO + [O] → ?', solution: 'CH₃COOH'},
        {id: 'ex4', title: 'Esterification', problem: 'CH₃COOH + C₂H₅OH → ?', solution: 'CH₃COOC₂H₅ + H₂O'}
    ],
    
    problems: [
        {id: 'p1', question: 'Aldehyde functional group:', options: ['-OH', '-CHO', '>CO', '-COOH'], correct: 1},
        {id: 'p2', question: 'Tollen\'s test positive for:', options: ['Ketones', 'Aldehydes', 'Alcohols', 'Ethers'], correct: 1},
        {id: 'p3', question: 'Aldol condensation requires:', options: ['α-H', 'β-H', 'No H', 'Aromatic'], correct: 0},
        {id: 'p4', question: 'Carboxylic acid + alcohol → ?', options: ['Ester', 'Ether', 'Aldehyde', 'Ketone'], correct: 0},
        {id: 'p5', question: 'Cannizzaro for aldehydes:', options: ['With α-H', 'Without α-H', 'Aromatic only', 'All'], correct: 1}
    ],
    
    keyPoints: [
        'Aldehyde: -CHO, Ketone: >C=O',
        'Aldehydes easily oxidized',
        'Ketones resist oxidation',
        'Nucleophilic addition at C=O',
        'Aldol needs α-hydrogen',
        'Cannizzaro: No α-H aldehydes',
        'Tollen\'s: Ag mirror test',
        'Fehling\'s: Cu₂O red ppt',
        'RCOOH more acidic than ROH',
        'Esterification: RCOOH + R\'OH'
    ],
    
    formulae: [
        {name: 'Aldol Condensation', formula: '2RCHO → RCH(OH)CH₂CHO'},
        {name: 'Cannizzaro', formula: '2HCHO → CH₃OH + HCOO⁻'},
        {name: 'Esterification', formula: 'RCOOH + R\'OH → RCOOR\' + H₂O'},
        {name: 'Tollen\'s Test', formula: 'RCHO + 2Ag⁺ → RCOO⁻ + 2Ag'}
    ]
};
window.CHEMISTRY_ORGANIC_3 = CHEMISTRY_ORGANIC_3;
</body>
</html>