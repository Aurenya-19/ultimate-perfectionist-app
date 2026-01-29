<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Chemistry - Physical Chemistry - Chapter 1: Atomic Structure
// Complete content with theory, models, examples, and problems

const CHEMISTRY_PHYSICAL_1 = {
    id: 'chemistry-physical-1',
    title: 'Atomic Structure',
    subject: 'Chemistry',
    category: 'Physical Chemistry',
    difficulty: 'Foundation',
    
    sections: [
        {
            id: 'introduction',
            title: '1. Discovery of Subatomic Particles',
            content: `
                <h3>Electron Discovery (J.J. Thomson, 1897)</h3>
                <p>Discovered through cathode ray tube experiments.</p>
                <ul>
                    <li>Charge: -1.6 × 10⁻¹⁹ C</li>
                    <li>Mass: 9.1 × 10⁻³¹ kg</li>
                    <li>e/m ratio: 1.76 × 10¹¹ C/kg</li>
                </ul>
                
                <h3>Proton Discovery (Goldstein, 1886)</h3>
                <p>Discovered through canal ray experiments.</p>
                <ul>
                    <li>Charge: +1.6 × 10⁻¹⁹ C</li>
                    <li>Mass: 1.67 × 10⁻²⁷ kg (1836 times electron mass)</li>
                </ul>
                
                <h3>Neutron Discovery (Chadwick, 1932)</h3>
                <ul>
                    <li>Charge: 0 (neutral)</li>
                    <li>Mass: 1.675 × 10⁻²⁷ kg (slightly more than proton)</li>
                </ul>
                
                <h3>Comparison of Subatomic Particles</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Particle</th>
                            <th>Symbol</th>
                            <th>Charge</th>
                            <th>Mass (kg)</th>
                            <th>Relative Mass</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Electron</td>
                            <td>e⁻</td>
                            <td>-1</td>
                            <td>9.1 × 10⁻³¹</td>
                            <td>1/1836</td>
                        </tr>
                        <tr>
                            <td>Proton</td>
                            <td>p⁺</td>
                            <td>+1</td>
                            <td>1.67 × 10⁻²⁷</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Neutron</td>
                            <td>n</td>
                            <td>0</td>
                            <td>1.675 × 10⁻²⁷</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        {
            id: 'atomic-models',
            title: '2. Atomic Models',
            content: `
                <h3>Thomson's Plum Pudding Model (1904)</h3>
                <ul>
                    <li>Atom is a sphere of positive charge</li>
                    <li>Electrons embedded like plums in pudding</li>
                    <li><strong>Limitation:</strong> Could not explain atomic spectra and stability</li>
                </ul>
                
                <h3>Rutherford's Nuclear Model (1911)</h3>
                <p><strong>Gold Foil Experiment:</strong></p>
                <ul>
                    <li>Most α-particles passed straight through</li>
                    <li>Few deflected at large angles</li>
                    <li>Very few bounced back</li>
                </ul>
                
                <p><strong>Conclusions:</strong></p>
                <ul>
                    <li>Atom is mostly empty space</li>
                    <li>Positive charge concentrated in nucleus (very small)</li>
                    <li>Electrons revolve around nucleus</li>
                </ul>
                
                <p><strong>Limitations:</strong></p>
                <ul>
                    <li>Could not explain stability of atom (revolving electron should lose energy)</li>
                    <li>Could not explain line spectra</li>
                </ul>
                
                <h3>Bohr's Atomic Model (1913)</h3>
                <p><strong>Postulates:</strong></p>
                <ol>
                    <li>Electrons revolve in fixed circular orbits (stationary states)</li>
                    <li>Angular momentum is quantized: mvr = nh/2π</li>
                    <li>Energy is emitted/absorbed only when electron jumps between orbits</li>
                    <li>ΔE = hν = E₂ - E₁</li>
                </ol>
                
                <div class="formula-box">
                    <h4>Important Bohr's Formulas</h4>
                    <p><strong>Radius of nth orbit:</strong></p>
                    <p class="formula">rₙ = 0.529 × n²/Z Å</p>
                    <p>For hydrogen (Z=1): r₁ = 0.529 Å, r₂ = 2.116 Å, etc.</p>
                    <br>
                    <p><strong>Energy of nth orbit:</strong></p>
                    <p class="formula">Eₙ = -13.6 × Z²/n² eV</p>
                    <p>For hydrogen: E₁ = -13.6 eV, E₂ = -3.4 eV, etc.</p>
                    <br>
                    <p><strong>Velocity of electron:</strong></p>
                    <p class="formula">vₙ = 2.18 × 10⁶ × Z/n m/s</p>
                </div>
                
                <h3>Hydrogen Spectrum</h3>
                <p>When electron jumps from higher to lower orbit, energy is emitted as photon.</p>
                <p class="formula">1/λ = R(1/n₁² - 1/n₂²)</p>
                <p>Where R = Rydberg constant = 1.097 × 10⁷ m⁻¹</p>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>n₁</th>
                            <th>n₂</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lyman</td>
                            <td>1</td>
                            <td>2,3,4...</td>
                            <td>UV</td>
                        </tr>
                        <tr>
                            <td>Balmer</td>
                            <td>2</td>
                            <td>3,4,5...</td>
                            <td>Visible</td>
                        </tr>
                        <tr>
                            <td>Paschen</td>
                            <td>3</td>
                            <td>4,5,6...</td>
                            <td>IR</td>
                        </tr>
                        <tr>
                            <td>Brackett</td>
                            <td>4</td>
                            <td>5,6,7...</td>
                            <td>IR</td>
                        </tr>
                        <tr>
                            <td>Pfund</td>
                            <td>5</td>
                            <td>6,7,8...</td>
                            <td>IR</td>
                        </tr>
                    </tbody>
                </table>
                
                <p><strong>Limitations of Bohr's Model:</strong></p>
                <ul>
                    <li>Works only for hydrogen-like atoms (one electron)</li>
                    <li>Could not explain fine structure of spectral lines</li>
                    <li>Could not explain Zeeman and Stark effects</li>
                    <li>Violates Heisenberg's uncertainty principle</li>
                </ul>
            `
        },
        
        {
            id: 'quantum-mechanics',
            title: '3. Quantum Mechanical Model',
            content: `
                <h3>de Broglie's Wave-Particle Duality (1924)</h3>
                <p>Every moving particle has wave nature.</p>
                <p class="formula">λ = h/mv = h/p</p>
                <p>Where: λ = wavelength, h = Planck's constant, m = mass, v = velocity, p = momentum</p>
                
                <div class="example-box">
                    <strong>Example:</strong> Calculate de Broglie wavelength of electron moving with velocity 10⁶ m/s.
                    <br><br>
                    λ = h/mv = (6.626 × 10⁻³⁴) / (9.1 × 10⁻³¹ × 10⁶)
                    <br>λ = 7.28 × 10⁻¹⁰ m = 7.28 Å
                </div>
                
                <h3>Heisenberg's Uncertainty Principle (1927)</h3>
                <p>It is impossible to determine simultaneously the exact position and momentum of a particle.</p>
                <p class="formula">Δx · Δp ≥ h/4π</p>
                <p>Or: Δx · Δv ≥ h/4πm</p>
                
                <h3>Schrödinger Wave Equation</h3>
                <p>Describes the behavior of electrons in atoms using wave functions (ψ).</p>
                <p class="formula">Ĥψ = Eψ</p>
                <p>Where: Ĥ = Hamiltonian operator, ψ = wave function, E = energy</p>
                
                <p><strong>Physical Significance:</strong></p>
                <ul>
                    <li>ψ = wave function (no physical meaning)</li>
                    <li>ψ² = probability density (probability of finding electron)</li>
                    <li>Orbital = region where probability of finding electron is maximum</li>
                </ul>
            `
        },
        
        {
            id: 'quantum-numbers',
            title: '4. Quantum Numbers',
            content: `
                <h3>Four Quantum Numbers</h3>
                
                <h4>1. Principal Quantum Number (n)</h4>
                <ul>
                    <li>Determines size and energy of orbital</li>
                    <li>Values: n = 1, 2, 3, 4... (K, L, M, N...)</li>
                    <li>Maximum electrons in shell = 2n²</li>
                </ul>
                
                <h4>2. Azimuthal Quantum Number (l)</h4>
                <ul>
                    <li>Determines shape of orbital</li>
                    <li>Values: l = 0 to (n-1)</li>
                    <li>l = 0 (s), 1 (p), 2 (d), 3 (f)</li>
                    <li>Maximum electrons in subshell = 2(2l+1)</li>
                </ul>
                
                <h4>3. Magnetic Quantum Number (m)</h4>
                <ul>
                    <li>Determines orientation of orbital</li>
                    <li>Values: m = -l to +l (including 0)</li>
                    <li>Total values = 2l + 1</li>
                </ul>
                
                <h4>4. Spin Quantum Number (s)</h4>
                <ul>
                    <li>Determines spin of electron</li>
                    <li>Values: s = +½ or -½</li>
                </ul>
                
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>n</th>
                            <th>l</th>
                            <th>Subshell</th>
                            <th>m values</th>
                            <th>Orbitals</th>
                            <th>Max e⁻</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>1s</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>0</td>
                            <td>2s</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1</td>
                            <td>2p</td>
                            <td>-1,0,+1</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>0</td>
                            <td>3s</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1</td>
                            <td>3p</td>
                            <td>-1,0,+1</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2</td>
                            <td>3d</td>
                            <td>-2,-1,0,+1,+2</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Shapes of Orbitals</h3>
                <ul>
                    <li><strong>s-orbital:</strong> Spherical (1 orbital)</li>
                    <li><strong>p-orbital:</strong> Dumbbell shaped (3 orbitals: px, py, pz)</li>
                    <li><strong>d-orbital:</strong> Double dumbbell (5 orbitals)</li>
                    <li><strong>f-orbital:</strong> Complex shape (7 orbitals)</li>
                </ul>
            `
        },
        
        {
            id: 'electronic-configuration',
            title: '5. Electronic Configuration',
            content: `
                <h3>Aufbau Principle</h3>
                <p>Electrons fill orbitals in order of increasing energy.</p>
                <p><strong>Order:</strong> 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p...</p>
                
                <h3>Pauli's Exclusion Principle</h3>
                <p>No two electrons in an atom can have same set of all four quantum numbers.</p>
                <p>Maximum 2 electrons per orbital (with opposite spins)</p>
                
                <h3>Hund's Rule of Maximum Multiplicity</h3>
                <p>Electrons occupy degenerate orbitals singly first, then pairing occurs.</p>
                <p>All singly occupied orbitals have parallel spins.</p>
                
                <div class="example-box">
                    <strong>Example: Electronic Configuration</strong>
                    <br><br>
                    <strong>Carbon (Z=6):</strong> 1s² 2s² 2p²
                    <br><strong>Nitrogen (Z=7):</strong> 1s² 2s² 2p³
                    <br><strong>Oxygen (Z=8):</strong> 1s² 2s² 2p⁴
                    <br><strong>Iron (Z=26):</strong> 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶
                    <br>Or: [Ar] 4s² 3d⁶
                </div>
                
                <h3>Exceptions in Electronic Configuration</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Element</th>
                            <th>Expected</th>
                            <th>Actual</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cr (24)</td>
                            <td>[Ar] 4s² 3d⁴</td>
                            <td>[Ar] 4s¹ 3d⁵</td>
                            <td>Half-filled d-orbital stability</td>
                        </tr>
                        <tr>
                            <td>Cu (29)</td>
                            <td>[Ar] 4s² 3d⁹</td>
                            <td>[Ar] 4s¹ 3d¹⁰</td>
                            <td>Fully-filled d-orbital stability</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example 1: Bohr\'s Model',
            problem: 'Calculate the energy of electron in 3rd orbit of hydrogen atom.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Using: Eₙ = -13.6 × Z²/n² eV
                <br><br>
                For hydrogen: Z = 1, n = 3
                <br><br>
                E₃ = -13.6 × (1)²/(3)²
                <br>E₃ = -13.6/9
                <br><strong>E₃ = -1.51 eV</strong>
            `,
            difficulty: 'easy'
        },
        
        {
            id: 'ex2',
            title: 'Example 2: Hydrogen Spectrum',
            problem: 'Calculate wavelength of first line in Balmer series (n₂ = 3 to n₁ = 2). R = 1.097 × 10⁷ m⁻¹',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                Using: 1/λ = R(1/n₁² - 1/n₂²)
                <br><br>
                1/λ = 1.097 × 10⁷ (1/2² - 1/3²)
                <br>1/λ = 1.097 × 10⁷ (1/4 - 1/9)
                <br>1/λ = 1.097 × 10⁷ (9-4)/36
                <br>1/λ = 1.097 × 10⁷ × 5/36
                <br>1/λ = 1.524 × 10⁶ m⁻¹
                <br><br>
                <strong>λ = 6.56 × 10⁻⁷ m = 656 nm</strong>
                <br>(This is the red line in Balmer series - Hα line)
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex3',
            title: 'Example 3: de Broglie Wavelength',
            problem: 'Calculate de Broglie wavelength of a ball of mass 0.1 kg moving with velocity 10 m/s.',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                λ = h/mv
                <br><br>
                λ = (6.626 × 10⁻³⁴) / (0.1 × 10)
                <br>λ = 6.626 × 10⁻³⁴ m
                <br><br>
                <strong>λ = 6.626 × 10⁻³⁴ m</strong>
                <br><br>
                This is extremely small, hence wave nature is not observable for macroscopic objects.
            `,
            difficulty: 'medium'
        },
        
        {
            id: 'ex4',
            title: 'Example 4: Quantum Numbers',
            problem: 'How many electrons can have n=3 and l=1?',
            solution: `
                <strong>Solution:</strong>
                <br><br>
                n = 3, l = 1 means 3p subshell
                <br><br>
                For l = 1:
                <br>m = -1, 0, +1 (3 orbitals)
                <br><br>
                Each orbital can hold 2 electrons
                <br><br>
                Total electrons = 3 × 2 = <strong>6 electrons</strong>
                <br><br>
                Or use formula: 2(2l+1) = 2(2×1+1) = 2×3 = 6
            `,
            difficulty: 'easy'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'The energy of electron in first orbit of hydrogen atom is:',
            options: ['-13.6 eV', '-3.4 eV', '-1.51 eV', '-0.85 eV'],
            correct: 0,
            explanation: 'E₁ = -13.6 × Z²/n² = -13.6 × 1/1 = -13.6 eV',
            difficulty: 'easy'
        },
        
        {
            id: 'p2',
            question: 'Which series of hydrogen spectrum lies in visible region?',
            options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
            correct: 1,
            explanation: 'Balmer series (n₁=2) lies in visible region. Lyman is UV, others are IR.',
            difficulty: 'easy'
        },
        
        {
            id: 'p3',
            question: 'Maximum number of electrons in a subshell with l=3 is:',
            options: ['2', '6', '10', '14'],
            correct: 3,
            explanation: 'Max electrons = 2(2l+1) = 2(2×3+1) = 2×7 = 14',
            difficulty: 'medium'
        },
        
        {
            id: 'p4',
            question: 'Electronic configuration of Cr (Z=24) is:',
            options: ['[Ar] 4s² 3d⁴', '[Ar] 4s¹ 3d⁵', '[Ar] 4s⁰ 3d⁶', '[Ar] 3d⁶'],
            correct: 1,
            explanation: 'Cr shows exception due to half-filled d-orbital stability: [Ar] 4s¹ 3d⁵',
            difficulty: 'medium'
        },
        
        {
            id: 'p5',
            question: 'de Broglie wavelength is associated with:',
            options: ['Only electrons', 'Only photons', 'All moving particles', 'Only charged particles'],
            correct: 2,
            explanation: 'de Broglie proposed wave nature for all moving particles (λ = h/mv)',
            difficulty: 'easy'
        }
    ],
    
    keyPoints: [
        'Electron: charge = -1, mass = 1/1836 amu',
        'Proton: charge = +1, mass = 1 amu',
        'Neutron: charge = 0, mass = 1 amu',
        'Bohr radius: rₙ = 0.529n²/Z Å',
        'Bohr energy: Eₙ = -13.6Z²/n² eV',
        'Rydberg formula: 1/λ = R(1/n₁² - 1/n₂²)',
        'de Broglie: λ = h/mv',
        'Uncertainty: Δx·Δp ≥ h/4π',
        'Max electrons in shell = 2n²',
        'Max electrons in subshell = 2(2l+1)',
        'Aufbau, Pauli, Hund rules for electronic configuration'
    ],
    
    formulae: [
        {
            name: 'Bohr Radius',
            formula: 'rₙ = 0.529 × n²/Z Å',
            description: 'Radius of nth orbit in hydrogen-like atom'
        },
        {
            name: 'Bohr Energy',
            formula: 'Eₙ = -13.6 × Z²/n² eV',
            description: 'Energy of electron in nth orbit'
        },
        {
            name: 'Rydberg Formula',
            formula: '1/λ = R(1/n₁² - 1/n₂²)',
            description: 'Wavelength of spectral lines (R = 1.097 × 10⁷ m⁻¹)'
        },
        {
            name: 'de Broglie Wavelength',
            formula: 'λ = h/mv = h/p',
            description: 'Wave nature of moving particles'
        },
        {
            name: 'Heisenberg Uncertainty',
            formula: 'Δx · Δp ≥ h/4π',
            description: 'Uncertainty in position and momentum'
        },
        {
            name: 'Max Electrons in Shell',
            formula: '2n²',
            description: 'Maximum electrons in nth shell'
        },
        {
            name: 'Max Electrons in Subshell',
            formula: '2(2l+1)',
            description: 'Maximum electrons in subshell with azimuthal quantum number l'
        }
    ]
};

// Export for use in chapter viewer
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHEMISTRY_PHYSICAL_1;
}
</body>
</html>