<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Organic Chemistry - Chapter 1: Basic Concepts of Organic Chemistry
// Complete content with IUPAC nomenclature, isomerism, reactions, mechanisms

const CHEMISTRY_ORGANIC_1 = {
    id: 'chemistry-organic-1',
    title: 'Basic Concepts of Organic Chemistry',
    subject: 'Chemistry',
    category: 'Organic Chemistry',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Organic Chemistry',
            content: `
                <h3>What is Organic Chemistry?</h3>
                <p>Study of carbon compounds (except CO, CO₂, carbonates, cyanides)</p>
                
                <h3>Why Carbon is Special?</h3>
                <ul>
                    <li><strong>Tetravalency:</strong> Forms 4 bonds</li>
                    <li><strong>Catenation:</strong> Forms long chains with itself</li>
                    <li><strong>Multiple bonding:</strong> Forms single, double, triple bonds</li>
                    <li><strong>Small size:</strong> Forms strong covalent bonds</li>
                </ul>
                
                <h3>Types of Organic Compounds</h3>
                
                <h4>1. Acyclic (Open Chain)</h4>
                <p>Carbon atoms in open chains</p>
                <p>Example: CH₃-CH₂-CH₃ (propane)</p>
                
                <h4>2. Cyclic (Closed Chain)</h4>
                <p>Carbon atoms form rings</p>
                
                <p><strong>a) Alicyclic:</strong> Ring without benzene</p>
                <p>Example: Cyclohexane</p>
                
                <p><strong>b) Aromatic:</strong> Benzene ring present</p>
                <p>Example: Benzene, Toluene</p>
                
                <h3>Functional Groups</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Group</th>
                            <th>Formula</th>
                            <th>Class</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hydroxyl</td>
                            <td>-OH</td>
                            <td>Alcohol</td>
                            <td>CH₃OH</td>
                        </tr>
                        <tr>
                            <td>Carbonyl</td>
                            <td>C=O</td>
                            <td>Aldehyde/Ketone</td>
                            <td>CH₃CHO</td>
                        </tr>
                        <tr>
                            <td>Carboxyl</td>
                            <td>-COOH</td>
                            <td>Carboxylic acid</td>
                            <td>CH₃COOH</td>
                        </tr>
                        <tr>
                            <td>Amino</td>
                            <td>-NH₂</td>
                            <td>Amine</td>
                            <td>CH₃NH₂</td>
                        </tr>
                        <tr>
                            <td>Halogen</td>
                            <td>-X</td>
                            <td>Haloalkane</td>
                            <td>CH₃Cl</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'iupac-nomenclature',
            title: '2. IUPAC Nomenclature',
            content: `
                <h3>IUPAC Naming Rules</h3>
                
                <h4>Step 1: Identify Longest Chain</h4>
                <p>Find the longest continuous carbon chain (parent chain)</p>
                
                <h4>Step 2: Number the Chain</h4>
                <p>Number from the end giving lowest numbers to:</p>
                <ol>
                    <li>Functional group (highest priority)</li>
                    <li>Multiple bonds</li>
                    <li>Substituents</li>
                </ol>
                
                <h4>Step 3: Name Substituents</h4>
                <p>Alkyl groups: -CH₃ (methyl), -C₂H₅ (ethyl), etc.</p>
                
                <h4>Step 4: Combine Name</h4>
                <p class="formula">Position-Substituent + Parent + Suffix</p>
                
                <h3>Common Prefixes</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Carbons</th>
                            <th>Prefix</th>
                            <th>Carbons</th>
                            <th>Prefix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Meth-</td>
                            <td>6</td>
                            <td>Hex-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Eth-</td>
                            <td>7</td>
                            <td>Hept-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Prop-</td>
                            <td>8</td>
                            <td>Oct-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>But-</td>
                            <td>9</td>
                            <td>Non-</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Pent-</td>
                            <td>10</td>
                            <td>Dec-</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Suffixes for Functional Groups</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Functional Group</th>
                            <th>Suffix</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alkane (C-C)</td>
                            <td>-ane</td>
                            <td>Ethane</td>
                        </tr>
                        <tr>
                            <td>Alkene (C=C)</td>
                            <td>-ene</td>
                            <td>Ethene</td>
                        </tr>
                        <tr>
                            <td>Alkyne (C≡C)</td>
                            <td>-yne</td>
                            <td>Ethyne</td>
                        </tr>
                        <tr>
                            <td>Alcohol (-OH)</td>
                            <td>-ol</td>
                            <td>Ethanol</td>
                        </tr>
                        <tr>
                            <td>Aldehyde (-CHO)</td>
                            <td>-al</td>
                            <td>Ethanal</td>
                        </tr>
                        <tr>
                            <td>Ketone (C=O)</td>
                            <td>-one</td>
                            <td>Propanone</td>
                        </tr>
                        <tr>
                            <td>Carboxylic acid (-COOH)</td>
                            <td>-oic acid</td>
                            <td>Ethanoic acid</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="example-box">
                    <strong>Example:</strong> Name CH₃-CH(CH₃)-CH₂-CH₃
                    <br><br>
                    Longest chain: 4 carbons (butane)
                    <br>Substituent: CH₃ at position 2
                    <br><strong>Name: 2-methylbutane</strong>
                </div>
            `
        },
        
        {
            id: 'isomerism',
            title: '3. Isomerism',
            content: `
                <h3>What is Isomerism?</h3>
                <p>Compounds with same molecular formula but different structures</p>
                
                <h3>Types of Isomerism</h3>
                
                <h4>A. Structural Isomerism</h4>
                <p>Different arrangement of atoms</p>
                
                <p><strong>1. Chain Isomerism</strong></p>
                <p>Different carbon chain arrangements</p>
                <p>Example: C₅H₁₂</p>
                <ul>
                    <li>n-pentane (straight chain)</li>
                    <li>2-methylbutane (branched)</li>
                    <li>2,2-dimethylpropane (highly branched)</li>
                </ul>
                
                <p><strong>2. Position Isomerism</strong></p>
                <p>Different position of functional group</p>
                <p>Example: C₃H₇OH</p>
                <ul>
                    <li>1-propanol (CH₃-CH₂-CH₂-OH)</li>
                    <li>2-propanol (CH₃-CH(OH)-CH₃)</li>
                </ul>
                
                <p><strong>3. Functional Group Isomerism</strong></p>
                <p>Different functional groups</p>
                <p>Example: C₂H₆O</p>
                <ul>
                    <li>Ethanol (CH₃-CH₂-OH) - Alcohol</li>
                    <li>Dimethyl ether (CH₃-O-CH₃) - Ether</li>
                </ul>
                
                <p><strong>4. Metamerism</strong></p>
                <p>Different alkyl groups on either side of functional group</p>
                <p>Example: C₄H₁₀O (ethers)</p>
                <ul>
                    <li>CH₃-O-C₃H₇</li>
                    <li>C₂H₅-O-C₂H₅</li>
                </ul>
                
                <h4>B. Stereoisomerism</h4>
                <p>Same structure but different spatial arrangement</p>
                
                <p><strong>1. Geometrical Isomerism (cis-trans)</strong></p>
                <p>Due to restricted rotation around C=C</p>
                <ul>
                    <li><strong>cis:</strong> Same groups on same side</li>
                    <li><strong>trans:</strong> Same groups on opposite sides</li>
                </ul>
                
                <p><strong>2. Optical Isomerism</strong></p>
                <p>Due to presence of chiral carbon (4 different groups)</p>
                <ul>
                    <li>Rotate plane polarized light</li>
                    <li>Mirror images (enantiomers)</li>
                    <li>d-form (dextrorotatory) - rotates right</li>
                    <li>l-form (levorotatory) - rotates left</li>
                </ul>
            `
        },
        
        {
            id: 'electronic-effects',
            title: '4. Electronic Effects',
            content: `
                <h3>1. Inductive Effect (I-effect)</h3>
                <p>Permanent polarization of σ-bond due to electronegativity difference</p>
                
                <p><strong>-I effect (Electron withdrawing):</strong></p>
                <p>Groups: -NO₂, -CN, -COOH, -F, -Cl, -Br, -I</p>
                <p>Order: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I</p>
                
                <p><strong>+I effect (Electron donating):</strong></p>
                <p>Groups: Alkyl groups (-CH₃, -C₂H₅, etc.)</p>
                <p>Order: -C(CH₃)₃ > -CH(CH₃)₂ > -C₂H₅ > -CH₃</p>
                
                <h3>2. Resonance Effect (Mesomeric Effect)</h3>
                <p>Delocalization of π-electrons</p>
                
                <p><strong>-M effect (Electron withdrawing):</strong></p>
                <p>Groups: -NO₂, -CN, -CHO, -COOH, -C=O</p>
                
                <p><strong>+M effect (Electron donating):</strong></p>
                <p>Groups: -OH, -OR, -NH₂, -NHR, -X (halogens)</p>
                
                <h3>3. Hyperconjugation</h3>
                <p>Delocalization of σ-electrons of C-H bond</p>
                <p>Stabilizes carbocations and alkenes</p>
                <p>More α-hydrogens → More stable</p>
                
                <h3>Stability Order</h3>
                
                <h4>Carbocations:</h4>
                <p class="formula">3° > 2° > 1° > CH₃⁺</p>
                
                <h4>Carbanions:</h4>
                <p class="formula">CH₃⁻ > 1° > 2° > 3°</p>
                
                <h4>Free Radicals:</h4>
                <p class="formula">3° > 2° > 1° > CH₃•</p>
            `
        },
        
        {
            id: 'reaction-mechanisms',
            title: '5. Reaction Mechanisms',
            content: `
                <h3>Types of Reactions</h3>
                
                <h4>1. Substitution Reactions</h4>
                <p>One atom/group replaced by another</p>
                
                <p><strong>a) Nucleophilic Substitution (SN)</strong></p>
                <p>Nucleophile attacks electron-deficient carbon</p>
                <ul>
                    <li><strong>SN1:</strong> Two-step, carbocation intermediate</li>
                    <li><strong>SN2:</strong> One-step, backside attack</li>
                </ul>
                
                <p><strong>b) Electrophilic Substitution (SE)</strong></p>
                <p>Electrophile attacks electron-rich center</p>
                <p>Common in aromatic compounds</p>
                
                <h4>2. Addition Reactions</h4>
                <p>Addition across multiple bond</p>
                
                <p><strong>a) Electrophilic Addition</strong></p>
                <p>Electrophile adds to C=C</p>
                <p>Example: Addition of HBr to alkene</p>
                
                <p><strong>b) Nucleophilic Addition</strong></p>
                <p>Nucleophile adds to C=O</p>
                <p>Example: Addition to aldehydes/ketones</p>
                
                <h4>3. Elimination Reactions</h4>
                <p>Removal of atoms/groups to form multiple bond</p>
                <ul>
                    <li><strong>E1:</strong> Two-step, carbocation intermediate</li>
                    <li><strong>E2:</strong> One-step, concerted mechanism</li>
                </ul>
                
                <h3>Reagent Types</h3>
                
                <h4>Nucleophiles (Nu⁻)</h4>
                <p>Electron-rich species, donate electron pair</p>
                <p>Examples: OH⁻, CN⁻, NH₃, H₂O</p>
                
                <h4>Electrophiles (E⁺)</h4>
                <p>Electron-deficient species, accept electron pair</p>
                <p>Examples: H⁺, NO₂⁺, Br⁺, carbocations</p>
                
                <h4>Free Radicals (R•)</h4>
                <p>Species with unpaired electron</p>
                <p>Highly reactive</p>
                
                <h3>Bond Fission</h3>
                
                <h4>Homolytic Fission</h4>
                <p>Bond breaks symmetrically, each atom gets one electron</p>
                <p>A:B → A• + B•</p>
                <p>Forms free radicals</p>
                
                <h4>Heterolytic Fission</h4>
                <p>Bond breaks asymmetrically, one atom gets both electrons</p>
                <p>A:B → A⁺ + :B⁻</p>
                <p>Forms ions</p>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: IUPAC Naming',
            problem: 'Name the compound: CH₃-CH₂-CH(CH₃)-CH₂-CH₃',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                <strong>Step 1:</strong> Longest chain = 5 carbons (pentane)
                <br><strong>Step 2:</strong> Number from left: 1-2-3-4-5
                <br><strong>Step 3:</strong> CH₃ substituent at position 3
                <br><br>
                <strong>Name: 3-methylpentane</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Isomerism',
            problem: 'How many structural isomers are possible for C₄H₁₀?',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                C₄H₁₀ has <strong>2 structural isomers:</strong>
                <br><br>
                <strong>1. n-butane:</strong> CH₃-CH₂-CH₂-CH₃ (straight chain)
                <br><br>
                <strong>2. Isobutane (2-methylpropane):</strong>
                <br>CH₃-CH(CH₃)-CH₃ (branched)
                <br><br>
                <strong>Answer: 2 isomers</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Carbocation Stability',
            problem: 'Arrange in order of stability: CH₃⁺, (CH₃)₂CH⁺, (CH₃)₃C⁺, CH₃CH₂⁺',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Carbocation stability order: 3° > 2° > 1° > CH₃⁺
                <br><br>
                (CH₃)₃C⁺ = 3° (tertiary)
                <br>(CH₃)₂CH⁺ = 2° (secondary)
                <br>CH₃CH₂⁺ = 1° (primary)
                <br>CH₃⁺ = methyl
                <br><br>
                <strong>Order: (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Functional Group Isomers',
            problem: 'Write functional group isomers of C₃H₆O',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                C₃H₆O can have:
                <br><br>
                <strong>1. Aldehyde:</strong> CH₃-CH₂-CHO (Propanal)
                <br><br>
                <strong>2. Ketone:</strong> CH₃-CO-CH₃ (Propanone/Acetone)
                <br><br>
                <strong>3. Cyclic ether:</strong> (Oxirane derivatives)
                <br><br>
                <strong>Main isomers: Propanal and Propanone</strong>
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'IUPAC name of CH₃-CH₂-CH₂-OH is:',
            options: ['Propanol', '1-propanol', 'Propan-1-ol', 'All correct'],
            correct: 3,
            explanation: 'All three names are acceptable IUPAC names for the same compound',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'Which shows +I effect?',
            options: ['-NO₂', '-CH₃', '-Cl', '-COOH'],
            correct: 1,
            explanation: 'Alkyl groups like -CH₃ show +I effect (electron donating)',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Most stable carbocation is:',
            options: ['CH₃⁺', 'CH₃CH₂⁺', '(CH₃)₂CH⁺', '(CH₃)₃C⁺'],
            correct: 3,
            explanation: 'Tertiary carbocation (CH₃)₃C⁺ is most stable due to hyperconjugation',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'Functional group isomers have:',
            options: ['Same functional group', 'Different functional groups', 'Same structure', 'Same properties'],
            correct: 1,
            explanation: 'Functional group isomers have same molecular formula but different functional groups',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'Homolytic fission produces:',
            options: ['Ions', 'Free radicals', 'Molecules', 'Atoms'],
            correct: 1,
            explanation: 'Homolytic fission breaks bond symmetrically, producing free radicals',
            difficulty: 'medium'
        }
    ],
    
    keyPoints: [
        'Carbon shows tetravalency and catenation',
        'IUPAC naming: Position-Substituent + Parent + Suffix',
        'Isomers: Same molecular formula, different structures',
        'Structural isomerism: Chain, position, functional group, metamerism',
        'Stereoisomerism: Geometrical (cis-trans), Optical',
        '+I effect: Alkyl groups (electron donating)',
        '-I effect: -NO₂, -CN, -COOH, halogens (electron withdrawing)',
        'Carbocation stability: 3° > 2° > 1° > CH₃⁺',
        'Carbanion stability: CH₃⁻ > 1° > 2° > 3°',
        'Reactions: Substitution, Addition, Elimination'
    ],
    
    formulae: [
        {
            name: 'Carbocation Stability',
            formula: '3° > 2° > 1° > CH₃⁺',
            description: 'Due to hyperconjugation and inductive effect'
        },
        {
            name: 'Carbanion Stability',
            formula: 'CH₃⁻ > 1° > 2° > 3°',
            description: 'Opposite to carbocation'
        },
        {
            name: '+I Effect Order',
            formula: '-C(CH₃)₃ > -CH(CH₃)₂ > -C₂H₅ > -CH₃',
            description: 'Electron donating groups'
        },
        {
            name: '-I Effect Order',
            formula: '-NO₂ > -CN > -COOH > -F > -Cl > -Br > -I',
            description: 'Electron withdrawing groups'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHEMISTRY_ORGANIC_1;
}
window.CHEMISTRY_ORGANIC_1 = CHEMISTRY_ORGANIC_1;
</body>
</html>