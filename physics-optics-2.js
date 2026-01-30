<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Optics - Chapter 2: Wave Optics
// Complete content with interference, diffraction, polarization, Huygens principle

const PHYSICS_OPTICS_2 = {
    id: 'physics-optics-2',
    title: 'Wave Optics',
    subject: 'Physics',
    category: 'Optics',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'huygens',
            title: "1. Huygens' Principle",
            content: `
                <h3>Principle</h3>
                <p>Every point on wavefront acts as source of secondary wavelets</p>
                <p>New wavefront = envelope of secondary wavelets</p>
                
                <h3>Refraction Using Huygens</h3>
                <p class="formula">n₁/n₂ = v₁/v₂ = λ₁/λ₂</p>
                <p class="formula">n₁ sin i = n₂ sin r</p>
                
                <h3>Wave Nature of Light</h3>
                <ul>
                    <li>Interference</li>
                    <li>Diffraction</li>
                    <li>Polarization</li>
                </ul>
            `
        },
        
        {
            id: 'interference',
            title: '2. Interference',
            content: `
                <h3>Conditions for Interference</h3>
                <ul>
                    <li>Coherent sources (constant phase difference)</li>
                    <li>Same frequency</li>
                    <li>Same amplitude (for maximum contrast)</li>
                </ul>
                
                <h3>Path Difference</h3>
                <p><strong>Constructive:</strong> Δx = nλ (bright fringe)</p>
                <p><strong>Destructive:</strong> Δx = (n + ½)λ (dark fringe)</p>
                
                <h3>Young's Double Slit Experiment (YDSE)</h3>
                <p class="formula">β = λD/d</p>
                <p>Where:</p>
                <ul>
                    <li>β = Fringe width</li>
                    <li>λ = Wavelength</li>
                    <li>D = Screen distance</li>
                    <li>d = Slit separation</li>
                </ul>
                
                <h3>Position of Fringes</h3>
                <p><strong>Bright:</strong> yn = nλD/d</p>
                <p><strong>Dark:</strong> yn = (n + ½)λD/d</p>
                
                <h3>Intensity</h3>
                <p class="formula">I = I₁ + I₂ + 2√(I₁I₂) cos φ</p>
                <p>Imax = (√I₁ + √I₂)²</p>
                <p>Imin = (√I₁ - √I₂)²</p>
            `
        },
        
        {
            id: 'diffraction',
            title: '3. Diffraction',
            content: `
                <h3>Definition</h3>
                <p>Bending of light around obstacles/apertures</p>
                
                <h3>Single Slit Diffraction</h3>
                <p><strong>Central maximum width:</strong></p>
                <p class="formula">2θ = 2λ/a</p>
                <p>Where a = slit width</p>
                
                <h3>Minima Condition</h3>
                <p class="formula">a sin θ = nλ</p>
                <p>n = 1, 2, 3, ...</p>
                
                <h3>Angular Width</h3>
                <p class="formula">θ = λ/a</p>
                
                <h3>Linear Width on Screen</h3>
                <p class="formula">Width = 2λD/a</p>
                
                <h3>Difference: Interference vs Diffraction</h3>
                <table class="content-table">
                    <tr><th>Interference</th><th>Diffraction</th></tr>
                    <tr><td>Two sources</td><td>Single source</td></tr>
                    <tr><td>Equal width fringes</td><td>Central max wider</td></tr>
                    <tr><td>Equal intensity</td><td>Decreasing intensity</td></tr>
                </table>
            `
        },
        
        {
            id: 'polarization',
            title: '4. Polarization',
            content: `
                <h3>Definition</h3>
                <p>Restriction of vibrations to single plane</p>
                <p>Proves transverse nature of light</p>
                
                <h3>Unpolarized vs Polarized</h3>
                <p><strong>Unpolarized:</strong> Vibrations in all planes</p>
                <p><strong>Polarized:</strong> Vibrations in one plane</p>
                
                <h3>Malus' Law</h3>
                <p class="formula">I = I₀ cos²θ</p>
                <p>Where θ = angle between polarizer and analyzer</p>
                
                <h3>Brewster's Law</h3>
                <p>At polarizing angle:</p>
                <p class="formula">tan ip = n</p>
                <p>Reflected light is completely polarized</p>
                
                <h3>Methods of Polarization</h3>
                <ul>
                    <li>Reflection</li>
                    <li>Refraction</li>
                    <li>Scattering</li>
                    <li>Double refraction</li>
                </ul>
            `
        },
        
        {
            id: 'resolving-power',
            title: '5. Resolving Power',
            content: `
                <h3>Rayleigh Criterion</h3>
                <p>Two sources just resolved when central maximum of one coincides with first minimum of other</p>
                
                <h3>Microscope</h3>
                <p class="formula">RP = 2n sin θ / λ</p>
                <p>Where:</p>
                <ul>
                    <li>n = refractive index of medium</li>
                    <li>θ = half angle of cone</li>
                </ul>
                
                <h3>Telescope</h3>
                <p class="formula">RP = D / (1.22λ)</p>
                <p>Where D = aperture diameter</p>
                
                <h3>Limit of Resolution</h3>
                <p><strong>Microscope:</strong> dmin = λ/(2n sin θ)</p>
                <p><strong>Telescope:</strong> dθ = 1.22λ/D</p>
                
                <h3>Increasing Resolving Power</h3>
                <ul>
                    <li>Decrease wavelength (use blue light)</li>
                    <li>Increase aperture</li>
                    <li>Increase refractive index (oil immersion)</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'YDSE Fringe Width', problem: 'λ=600nm, D=1m, d=1mm. Find β', solution: 'β = (600×10⁻⁹×1)/(1×10⁻³) = 0.6 mm'},
        {id: 'ex2', title: 'Malus Law', problem: 'I₀=100, θ=60°. Find I', solution: 'I = 100×cos²60° = 100×0.25 = 25 units'},
        {id: 'ex3', title: 'Brewster', problem: 'n=1.5. Find ip', solution: 'tan ip = 1.5, ip = 56.3°'},
        {id: 'ex4', title: 'Diffraction', problem: 'a=0.1mm, λ=500nm. Find angular width', solution: 'θ = 500×10⁻⁹/(0.1×10⁻³) = 5×10⁻³ rad'}
    ],
    
    problems: [
        {id: 'p1', question: 'YDSE: β = ?', options: ['λd/D', 'λD/d', 'Dd/λ', 'dD/λ'], correct: 1},
        {id: 'p2', question: 'Constructive interference: path diff = ?', options: ['nλ', '(n+½)λ', 'λ/2', 'λ/4'], correct: 0},
        {id: 'p3', question: 'Malus law: I = ?', options: ['I₀cosθ', 'I₀cos²θ', 'I₀sinθ', 'I₀sin²θ'], correct: 1},
        {id: 'p4', question: 'Brewster: tan ip = ?', options: ['1/n', 'n', 'n²', '√n'], correct: 1},
        {id: 'p5', question: 'Polarization proves light is:', options: ['Longitudinal', 'Transverse', 'Stationary', 'Particle'], correct: 1}
    ],
    
    keyPoints: [
        'Huygens: Wavefront theory',
        'Coherent sources needed for interference',
        'Constructive: Δx = nλ',
        'Destructive: Δx = (n+½)λ',
        'YDSE: β = λD/d',
        'Diffraction: a sinθ = nλ',
        'Malus: I = I₀cos²θ',
        'Brewster: tan ip = n',
        'Polarization proves transverse nature',
        'RP (telescope) = D/(1.22λ)'
    ],
    
    formulae: [
        {name: 'Fringe Width', formula: 'β = λD/d'},
        {name: 'Bright Fringe', formula: 'yn = nλD/d'},
        {name: 'Malus Law', formula: 'I = I₀cos²θ'},
        {name: 'Brewster Law', formula: 'tan ip = n'},
        {name: 'Diffraction Minima', formula: 'a sinθ = nλ'},
        {name: 'Resolving Power', formula: 'RP = D/(1.22λ)'}
    ]
};
window.PHYSICS_OPTICS_2 = PHYSICS_OPTICS_2;
</body>
</html>