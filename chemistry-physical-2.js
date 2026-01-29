<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Physical Chemistry - Chapter 2: Chemical Bonding
// Complete content with ionic, covalent, VSEPR, hybridization, MOT

const CHEMISTRY_PHYSICAL_2 = {
    id: 'chemistry-physical-2',
    title: 'Chemical Bonding',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Introduction to Chemical Bonding',
            content: `
                <h3>Why do atoms form bonds?</h3>
                <p>Atoms combine to achieve <strong>stable electronic configuration</strong> (noble gas configuration)</p>
                <p>This leads to <strong>lower energy</strong> and <strong>greater stability</strong></p>
                
                <h3>Octet Rule</h3>
                <p>Atoms tend to gain, lose, or share electrons to achieve 8 electrons in their valence shell (except H, He which need 2)</p>
                
                <h3>Types of Chemical Bonds</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Bond Type</th>
                            <th>Formation</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ionic Bond</td>
                            <td>Transfer of electrons</td>
                            <td>NaCl, MgO</td>
                        </tr>
                        <tr>
                            <td>Covalent Bond</td>
                            <td>Sharing of electrons</td>
                            <td>H₂, O₂, CH₄</td>
                        </tr>
                        <tr>
                            <td>Coordinate Bond</td>
                            <td>Donation of electron pair</td>
                            <td>NH₄⁺, H₃O⁺</td>
                        </tr>
                        <tr>
                            <td>Metallic Bond</td>
                            <td>Sea of electrons</td>
                            <td>Na, Cu, Fe</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Electronegativity</h3>
                <p>Ability of an atom to attract shared electrons in a covalent bond</p>
                <p><strong>Pauling Scale:</strong> F = 4.0 (highest), Cs = 0.7 (lowest)</p>
                
                <h3>Bond Character</h3>
                <ul>
                    <li>ΔEN = 0: Pure covalent (H₂, Cl₂)</li>
                    <li>0 < ΔEN < 1.7: Polar covalent (HCl, H₂O)</li>
                    <li>ΔEN > 1.7: Ionic (NaCl, MgO)</li>
                </ul>
            `
        },
        
        {
            id: 'ionic-bonding',
            title: '2. Ionic Bonding',
            content: `
                <h3>Formation</h3>
                <p>Transfer of electrons from metal to non-metal</p>
                <p>Metal → Cation (positive ion)</p>
                <p>Non-metal → Anion (negative ion)</p>
                
                <div class="example-box">
                    <strong>Example: NaCl formation</strong>
                    <br>Na (2,8,1) → Na⁺ (2,8) + e⁻
                    <br>Cl (2,8,7) + e⁻ → Cl⁻ (2,8,8)
                    <br>Na⁺ + Cl⁻ → NaCl
                </div>
                
                <h3>Lattice Energy</h3>
                <p>Energy released when gaseous ions combine to form ionic solid</p>
                <p class="formula">M⁺(g) + X⁻(g) → MX(s) + Lattice Energy</p>
                
                <p><strong>Factors affecting lattice energy:</strong></p>
                <ul>
                    <li>Charge on ions (higher charge → higher lattice energy)</li>
                    <li>Size of ions (smaller size → higher lattice energy)</li>
                </ul>
                
                <h3>Born-Haber Cycle</h3>
                <p>Thermochemical cycle relating lattice energy to other thermodynamic quantities</p>
                
                <h3>Properties of Ionic Compounds</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>High melting/boiling points</td>
                            <td>Strong electrostatic forces</td>
                        </tr>
                        <tr>
                            <td>Conduct electricity in molten/aqueous state</td>
                            <td>Free moving ions</td>
                        </tr>
                        <tr>
                            <td>Soluble in polar solvents</td>
                            <td>Ion-dipole interactions</td>
                        </tr>
                        <tr>
                            <td>Hard but brittle</td>
                            <td>Strong forces but repulsion on displacement</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'covalent-bonding',
            title: '3. Covalent Bonding',
            content: `
                <h3>Formation</h3>
                <p>Sharing of electrons between atoms (usually non-metals)</p>
                
                <h3>Types of Covalent Bonds</h3>
                
                <h4>1. Single Bond</h4>
                <p>Sharing of one electron pair</p>
                <p>Example: H-H, Cl-Cl, H-Cl</p>
                
                <h4>2. Double Bond</h4>
                <p>Sharing of two electron pairs</p>
                <p>Example: O=O, C=O, C=C</p>
                
                <h4>3. Triple Bond</h4>
                <p>Sharing of three electron pairs</p>
                <p>Example: N≡N, C≡C, C≡O</p>
                
                <h3>Lewis Structures</h3>
                <p>Representation showing valence electrons as dots</p>
                
                <div class="example-box">
                    <strong>Example: H₂O</strong>
                    <br>O has 6 valence electrons
                    <br>Each H has 1 valence electron
                    <br>O forms 2 bonds with 2 H atoms
                    <br>O has 2 lone pairs
                    <br><br>
                    H-O-H with 2 lone pairs on O
                </div>
                
                <h3>Formal Charge</h3>
                <p class="formula">Formal Charge = V - N - B/2</p>
                <p>Where:</p>
                <ul>
                    <li>V = Valence electrons</li>
                    <li>N = Non-bonding electrons</li>
                    <li>B = Bonding electrons</li>
                </ul>
                
                <h3>Properties of Covalent Compounds</h3>
                <ul>
                    <li>Low melting/boiling points (weak intermolecular forces)</li>
                    <li>Do not conduct electricity (no free ions)</li>
                    <li>Soluble in non-polar solvents</li>
                    <li>Soft and flexible</li>
                </ul>
            `
        },
        
        {
            id: 'vsepr',
            title: '4. VSEPR Theory',
            content: `
                <h3>Valence Shell Electron Pair Repulsion Theory</h3>
                <p>Electron pairs around central atom arrange themselves to minimize repulsion</p>
                
                <h3>Order of Repulsion</h3>
                <p class="formula">lp-lp > lp-bp > bp-bp</p>
                <p>Where: lp = lone pair, bp = bond pair</p>
                
                <h3>Common Geometries</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Electron Pairs</th>
                            <th>Bond Pairs</th>
                            <th>Lone Pairs</th>
                            <th>Shape</th>
                            <th>Example</th>
                            <th>Bond Angle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>0</td>
                            <td>Linear</td>
                            <td>CO₂, BeCl₂</td>
                            <td>180°</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3</td>
                            <td>0</td>
                            <td>Trigonal planar</td>
                            <td>BF₃, BCl₃</td>
                            <td>120°</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                            <td>Bent</td>
                            <td>SO₂, SnCl₂</td>
                            <td><120°</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>4</td>
                            <td>0</td>
                            <td>Tetrahedral</td>
                            <td>CH₄, CCl₄</td>
                            <td>109.5°</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>3</td>
                            <td>1</td>
                            <td>Trigonal pyramidal</td>
                            <td>NH₃, PCl₃</td>
                            <td>107°</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2</td>
                            <td>2</td>
                            <td>Bent</td>
                            <td>H₂O, H₂S</td>
                            <td>104.5°</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>0</td>
                            <td>Trigonal bipyramidal</td>
                            <td>PCl₅</td>
                            <td>90°, 120°</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>6</td>
                            <td>0</td>
                            <td>Octahedral</td>
                            <td>SF₆</td>
                            <td>90°</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="important-box">
                    <strong>Key Points:</strong>
                    <ul>
                        <li>Lone pairs occupy more space than bond pairs</li>
                        <li>Lone pairs reduce bond angles</li>
                        <li>Multiple bonds treated as single electron pair</li>
                    </ul>
                </div>
            `
        },
        
        {
            id: 'hybridization',
            title: '5. Hybridization',
            content: `
                <h3>What is Hybridization?</h3>
                <p>Mixing of atomic orbitals to form new hybrid orbitals of equal energy</p>
                
                <h3>Types of Hybridization</h3>
                
                <h4>1. sp Hybridization</h4>
                <ul>
                    <li>1 s + 1 p orbital → 2 sp orbitals</li>
                    <li>Linear geometry (180°)</li>
                    <li>Example: BeCl₂, CO₂</li>
                </ul>
                
                <h4>2. sp² Hybridization</h4>
                <ul>
                    <li>1 s + 2 p orbitals → 3 sp² orbitals</li>
                    <li>Trigonal planar (120°)</li>
                    <li>Example: BF₃, C₂H₄</li>
                </ul>
                
                <h4>3. sp³ Hybridization</h4>
                <ul>
                    <li>1 s + 3 p orbitals → 4 sp³ orbitals</li>
                    <li>Tetrahedral (109.5°)</li>
                    <li>Example: CH₄, NH₃, H₂O</li>
                </ul>
                
                <h4>4. sp³d Hybridization</h4>
                <ul>
                    <li>1 s + 3 p + 1 d orbitals → 5 sp³d orbitals</li>
                    <li>Trigonal bipyramidal</li>
                    <li>Example: PCl₅</li>
                </ul>
                
                <h4>5. sp³d² Hybridization</h4>
                <ul>
                    <li>1 s + 3 p + 2 d orbitals → 6 sp³d² orbitals</li>
                    <li>Octahedral</li>
                    <li>Example: SF₆</li>
                </ul>
                
                <h3>Determining Hybridization</h3>
                <p class="formula">Hybridization = ½(V + M - C + A)</p>
                <p>Where:</p>
                <ul>
                    <li>V = Valence electrons of central atom</li>
                    <li>M = Monovalent atoms attached</li>
                    <li>C = Cationic charge</li>
                    <li>A = Anionic charge</li>
                </ul>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Hybridization</th>
                            <th>Shape</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>sp</td>
                            <td>Linear</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>sp²</td>
                            <td>Trigonal planar</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>sp³</td>
                            <td>Tetrahedral</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>sp³d</td>
                            <td>Trigonal bipyramidal</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>sp³d²</td>
                            <td>Octahedral</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'molecular-orbital',
            title: '6. Molecular Orbital Theory (MOT)',
            content: `
                <h3>Basic Concepts</h3>
                <p>Atomic orbitals combine to form molecular orbitals</p>
                
                <h3>Types of Molecular Orbitals</h3>
                
                <h4>1. Bonding Molecular Orbital (BMO)</h4>
                <ul>
                    <li>Lower energy than atomic orbitals</li>
                    <li>Electron density between nuclei</li>
                    <li>Stabilizes molecule</li>
                    <li>Denoted: σ, π</li>
                </ul>
                
                <h4>2. Antibonding Molecular Orbital (ABMO)</h4>
                <ul>
                    <li>Higher energy than atomic orbitals</li>
                    <li>Electron density away from nuclei</li>
                    <li>Destabilizes molecule</li>
                    <li>Denoted: σ*, π*</li>
                </ul>
                
                <h3>Bond Order</h3>
                <p class="formula">Bond Order = ½(Nb - Na)</p>
                <p>Where:</p>
                <ul>
                    <li>Nb = Number of electrons in bonding MOs</li>
                    <li>Na = Number of electrons in antibonding MOs</li>
                </ul>
                
                <p><strong>Interpretation:</strong></p>
                <ul>
                    <li>Bond Order = 0: No bond (molecule unstable)</li>
                    <li>Bond Order = 1: Single bond</li>
                    <li>Bond Order = 2: Double bond</li>
                    <li>Bond Order = 3: Triple bond</li>
                    <li>Higher bond order → Stronger bond → Shorter bond length</li>
                </ul>
                
                <h3>Magnetic Properties</h3>
                <ul>
                    <li><strong>Paramagnetic:</strong> Unpaired electrons (attracted to magnetic field)</li>
                    <li><strong>Diamagnetic:</strong> All electrons paired (repelled by magnetic field)</li>
                </ul>
                
                <div class="example-box">
                    <strong>Example: O₂ molecule</strong>
                    <br>Total electrons = 16
                    <br>Configuration: σ1s² σ*1s² σ2s² σ*2s² σ2p² π2p⁴ π*2p²
                    <br><br>
                    Bond Order = ½(10 - 6) = 2 (double bond)
                    <br>Magnetic: Paramagnetic (2 unpaired electrons in π*2p)
                </div>
                
                <h3>Comparison of Molecules</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Molecule</th>
                            <th>Bond Order</th>
                            <th>Magnetic Nature</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>H₂</td>
                            <td>1</td>
                            <td>Diamagnetic</td>
                        </tr>
                        <tr>
                            <td>N₂</td>
                            <td>3</td>
                            <td>Diamagnetic</td>
                        </tr>
                        <tr>
                            <td>O₂</td>
                            <td>2</td>
                            <td>Paramagnetic</td>
                        </tr>
                        <tr>
                            <td>F₂</td>
                            <td>1</td>
                            <td>Diamagnetic</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: VSEPR Theory',
            problem: 'Predict the shape of NH₃ molecule.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                N has 5 valence electrons
                <br>3 electrons form bonds with 3 H atoms
                <br>2 electrons remain as 1 lone pair
                <br><br>
                Total electron pairs = 4 (3 bond pairs + 1 lone pair)
                <br>Arrangement: Tetrahedral
                <br><br>
                <strong>Shape: Trigonal pyramidal</strong>
                <br><strong>Bond angle: ~107° (less than 109.5° due to lone pair)</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Hybridization',
            problem: 'Find hybridization of carbon in CH₄.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Using formula: H = ½(V + M - C + A)
                <br><br>
                V = 4 (valence electrons of C)
                <br>M = 4 (4 H atoms)
                <br>C = 0 (no charge)
                <br>A = 0 (no charge)
                <br><br>
                H = ½(4 + 4 - 0 + 0) = ½(8) = 4
                <br><br>
                <strong>Hybridization: sp³</strong>
                <br><strong>Shape: Tetrahedral</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: Bond Order',
            problem: 'Calculate bond order of N₂ molecule and predict its stability.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                N₂ has 14 electrons
                <br>Configuration: σ1s² σ*1s² σ2s² σ*2s² π2p⁴ σ2p²
                <br><br>
                Bonding electrons (Nb) = 10
                <br>Antibonding electrons (Na) = 4
                <br><br>
                Bond Order = ½(10 - 4) = ½(6) = <strong>3</strong>
                <br><br>
                <strong>Triple bond - Very stable molecule</strong>
                <br><strong>Magnetic: Diamagnetic (all paired)</strong>
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Formal Charge',
            problem: 'Calculate formal charge on O in H₂O.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                For oxygen in H₂O:
                <br>V = 6 (valence electrons)
                <br>N = 4 (2 lone pairs = 4 electrons)
                <br>B = 4 (2 bonds = 4 bonding electrons)
                <br><br>
                Formal Charge = V - N - B/2
                <br>= 6 - 4 - 4/2
                <br>= 6 - 4 - 2
                <br>= <strong>0</strong>
            `,
            difficulty: 'medium'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'The shape of CO₂ molecule is:',
            options: ['Linear', 'Bent', 'Trigonal planar', 'Tetrahedral'],
            correct: 0,
            explanation: 'CO₂ has sp hybridization with 2 bond pairs and 0 lone pairs → Linear shape (180°)',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'Which molecule is paramagnetic?',
            options: ['N₂', 'O₂', 'F₂', 'H₂'],
            correct: 1,
            explanation: 'O₂ has 2 unpaired electrons in π*2p orbitals, making it paramagnetic',
            difficulty: 'medium'
        },
        
        {
            id: 'p3',
            question: 'Hybridization of carbon in C₂H₄ is:',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correct: 1,
            explanation: 'C in C₂H₄ forms 3 sigma bonds (2 with H, 1 with C) and 1 pi bond → sp² hybridization',
            difficulty: 'easy'
        },
        
        {
            id: 'p4',
            question: 'Bond angle in H₂O is approximately:',
            options: ['90°', '104.5°', '109.5°', '120°'],
            correct: 1,
            explanation: 'H₂O has 2 lone pairs which compress bond angle from 109.5° to 104.5°',
            difficulty: 'easy'
        },
        
        {
            id: 'p5',
            question: 'Which has highest bond order?',
            options: ['O₂', 'O₂⁺', 'O₂⁻', 'O₂²⁻'],
            correct: 1,
            explanation: 'O₂⁺ has bond order 2.5 (highest). Removing electron from antibonding orbital increases bond order',
            difficulty: 'hard'
        }
    ],
    
    keyPoints: [
        'Octet rule: Atoms achieve 8 electrons in valence shell',
        'Ionic bond: Transfer of electrons (metal + non-metal)',
        'Covalent bond: Sharing of electrons (non-metal + non-metal)',
        'VSEPR: Electron pairs minimize repulsion',
        'Lone pair repulsion > Bond pair repulsion',
        'Hybridization: Mixing of atomic orbitals',
        'sp → Linear (180°), sp² → Trigonal planar (120°), sp³ → Tetrahedral (109.5°)',
        'Bond Order = ½(Nb - Na)',
        'Higher bond order → Stronger, shorter bond',
        'Paramagnetic: Unpaired electrons, Diamagnetic: All paired'
    ],
    
    formulae: [
        {
            name: 'Formal Charge',
            formula: 'FC = V - N - B/2',
            description: 'V=valence, N=non-bonding, B=bonding electrons'
        },
        {
            name: 'Hybridization Number',
            formula: 'H = ½(V + M - C + A)',
            description: 'V=valence, M=monovalent, C=cation, A=anion'
        },
        {
            name: 'Bond Order',
            formula: 'BO = ½(Nb - Na)',
            description: 'Nb=bonding electrons, Na=antibonding electrons'
        },
        {
            name: 'Lattice Energy (Born-Landé)',
            formula: 'U = -NAMz⁺z⁻e²/4πε₀r₀',
            description: 'Energy released in ionic solid formation'
        }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHEMISTRY_PHYSICAL_2;
}
window.CHEMISTRY_PHYSICAL_2 = CHEMISTRY_PHYSICAL_2;
</body>
</html>