<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Modern Physics - Chapter 1: Dual Nature & Atoms
// Complete content with photoelectric effect, de Broglie, Bohr model, nuclear physics

const PHYSICS_MODERN_1 = {
    id: 'physics-modern-1',
    title: 'Dual Nature of Matter and Atoms',
    subject: 'Physics',
    category: 'Modern Physics',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'photoelectric',
            title: '1. Photoelectric Effect',
            content: `
                <h3>Phenomenon</h3>
                <p>Emission of electrons when light falls on metal surface</p>
                
                <h3>Einstein's Equation</h3>
                <p class="formula">KEmax = hf - φ</p>
                <p>Where:</p>
                <ul>
                    <li>h = Planck's constant = 6.63×10⁻³⁴ J·s</li>
                    <li>f = frequency of light</li>
                    <li>φ = work function</li>
                </ul>
                
                <h3>Threshold Frequency</h3>
                <p class="formula">f₀ = φ/h</p>
                <p>Minimum frequency for photoelectric effect</p>
                
                <h3>Stopping Potential</h3>
                <p class="formula">eV₀ = KEmax = hf - φ</p>
                
                <h3>Key Points</h3>
                <ul>
                    <li>Instantaneous emission</li>
                    <li>No time lag</li>
                    <li>Depends on frequency, not intensity</li>
                    <li>Intensity affects number of electrons</li>
                </ul>
            `
        },
        
        {
            id: 'de-broglie',
            title: '2. de Broglie Wavelength',
            content: `
                <h3>Matter Waves</h3>
                <p>All matter has wave nature</p>
                
                <h3>de Broglie Equation</h3>
                <p class="formula">λ = h/p = h/(mv)</p>
                
                <h3>For Electron</h3>
                <p class="formula">λ = h/√(2meV)</p>
                <p>Where V = accelerating potential</p>
                
                <h3>Davisson-Germer Experiment</h3>
                <p>Confirmed wave nature of electrons</p>
                <p>Electron diffraction from crystal</p>
            `
        },
        
        {
            id: 'bohr-model',
            title: "3. Bohr's Atomic Model",
            content: `
                <h3>Postulates</h3>
                <ul>
                    <li>Electrons in fixed orbits</li>
                    <li>Angular momentum quantized: mvr = nh/(2π)</li>
                    <li>Energy emitted/absorbed: E = hf</li>
                </ul>
                
                <h3>Radius of nth Orbit</h3>
                <p class="formula">rₙ = n²r₀</p>
                <p>Where r₀ = 0.529 Å (Bohr radius)</p>
                
                <h3>Energy of nth Level</h3>
                <p class="formula">Eₙ = -13.6/n² eV</p>
                
                <h3>Spectral Lines</h3>
                <p class="formula">1/λ = R(1/n₁² - 1/n₂²)</p>
                <p>R = Rydberg constant = 1.097×10⁷ m⁻¹</p>
                
                <h3>Series</h3>
                <ul>
                    <li><strong>Lyman:</strong> n₁=1 (UV)</li>
                    <li><strong>Balmer:</strong> n₁=2 (Visible)</li>
                    <li><strong>Paschen:</strong> n₁=3 (IR)</li>
                </ul>
            `
        },
        
        {
            id: 'x-rays',
            title: '4. X-Rays',
            content: `
                <h3>Production</h3>
                <p>High-speed electrons hit metal target</p>
                
                <h3>Minimum Wavelength</h3>
                <p class="formula">λmin = hc/(eV)</p>
                <p>Where V = accelerating voltage</p>
                
                <h3>Properties</h3>
                <ul>
                    <li>Electromagnetic waves</li>
                    <li>High penetrating power</li>
                    <li>Cause ionization</li>
                    <li>Affect photographic plate</li>
                </ul>
                
                <h3>Uses</h3>
                <ul>
                    <li>Medical diagnosis</li>
                    <li>Crystal structure study</li>
                    <li>Security scanning</li>
                </ul>
            `
        },
        
        {
            id: 'nucleus',
            title: '5. Atomic Nucleus',
            content: `
                <h3>Composition</h3>
                <p>Protons (Z) + Neutrons (N)</p>
                <p>Mass number: A = Z + N</p>
                
                <h3>Nuclear Size</h3>
                <p class="formula">R = R₀A^(1/3)</p>
                <p>Where R₀ = 1.2×10⁻¹⁵ m</p>
                
                <h3>Mass Defect</h3>
                <p class="formula">Δm = [Zmp + Nmn - M]</p>
                
                <h3>Binding Energy</h3>
                <p class="formula">BE = Δm × c²</p>
                <p>BE per nucleon = BE/A</p>
                
                <h3>Radioactivity</h3>
                <p><strong>α-decay:</strong> ₂He⁴ emission</p>
                <p><strong>β-decay:</strong> electron/positron emission</p>
                <p><strong>γ-decay:</strong> high energy photon</p>
                
                <h3>Decay Law</h3>
                <p class="formula">N = N₀e^(-λt)</p>
                <p>Half-life: T₁/₂ = 0.693/λ</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Photoelectric', problem: 'φ=2eV, f=10¹⁵Hz. Find KEmax', solution: 'KE = hf-φ = 6.63×10⁻³⁴×10¹⁵/(1.6×10⁻¹⁹) - 2 = 2.14 eV'},
        {id: 'ex2', title: 'de Broglie', problem: 'm=1kg, v=100m/s. Find λ', solution: 'λ = h/(mv) = 6.63×10⁻³⁴/(1×100) = 6.63×10⁻³⁶ m'},
        {id: 'ex3', title: 'Bohr Energy', problem: 'Find E₂ for hydrogen', solution: 'E₂ = -13.6/4 = -3.4 eV'},
        {id: 'ex4', title: 'Half-life', problem: 'λ=0.01/s. Find T₁/₂', solution: 'T₁/₂ = 0.693/0.01 = 69.3 s'}
    ],
    
    problems: [
        {id: 'p1', question: 'Photoelectric: KE = ?', options: ['hf', 'hf-φ', 'φ-hf', 'hf+φ'], correct: 1},
        {id: 'p2', question: 'de Broglie: λ = ?', options: ['h/p', 'p/h', 'hp', 'h+p'], correct: 0},
        {id: 'p3', question: 'Bohr radius r₀:', options: ['0.529 nm', '0.529 Å', '5.29 Å', '52.9 Å'], correct: 1},
        {id: 'p4', question: 'Balmer series: n₁ = ?', options: ['1', '2', '3', '4'], correct: 1},
        {id: 'p5', question: 'α-particle is:', options: ['Electron', 'Proton', 'He nucleus', 'Neutron'], correct: 2}
    ],
    
    keyPoints: [
        'Photoelectric: KE = hf - φ',
        'Threshold: f₀ = φ/h',
        'de Broglie: λ = h/p',
        'Bohr: rₙ = n²r₀',
        'Energy: Eₙ = -13.6/n² eV',
        'Rydberg: 1/λ = R(1/n₁² - 1/n₂²)',
        'X-ray: λmin = hc/(eV)',
        'Nuclear size: R = R₀A^(1/3)',
        'BE = Δm×c²',
        'Decay: N = N₀e^(-λt)'
    ],
    
    formulae: [
        {name: 'Einstein Equation', formula: 'KEmax = hf - φ'},
        {name: 'de Broglie', formula: 'λ = h/p'},
        {name: 'Bohr Radius', formula: 'rₙ = n²×0.529 Å'},
        {name: 'Energy Level', formula: 'Eₙ = -13.6/n² eV'},
        {name: 'Rydberg Formula', formula: '1/λ = R(1/n₁² - 1/n₂²)'},
        {name: 'Binding Energy', formula: 'BE = Δm×c²'},
        {name: 'Radioactive Decay', formula: 'N = N₀e^(-λt)'}
    ]
};
window.PHYSICS_MODERN_1 = PHYSICS_MODERN_1;
</body>
</html>