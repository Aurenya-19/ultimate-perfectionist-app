<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Waves - Chapter 1: Simple Harmonic Motion and Waves
// Complete content with SHM, wave motion, superposition, resonance

const PHYSICS_WAVES_1 = {
    id: 'physics-waves-1',
    title: 'Simple Harmonic Motion and Waves',
    subject: 'Physics',
    category: 'Waves and Oscillations',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'shm',
            title: '1. Simple Harmonic Motion (SHM)',
            content: `
                <h3>Definition</h3>
                <p>Oscillatory motion where restoring force ∝ displacement</p>
                <p class="formula">F = -kx</p>
                
                <h3>Equation of SHM</h3>
                <p class="formula">x = A sin(ωt + φ)</p>
                <p>Where:</p>
                <ul>
                    <li>A = Amplitude</li>
                    <li>ω = Angular frequency = 2πf</li>
                    <li>φ = Phase constant</li>
                </ul>
                
                <h3>Velocity and Acceleration</h3>
                <p class="formula">v = Aω cos(ωt + φ) = ω√(A² - x²)</p>
                <p class="formula">a = -Aω² sin(ωt + φ) = -ω²x</p>
                
                <h3>Time Period</h3>
                <p class="formula">T = 2π/ω = 2π√(m/k)</p>
                
                <h3>Energy in SHM</h3>
                <p>KE = ½mω²(A² - x²)</p>
                <p>PE = ½mω²x²</p>
                <p class="formula">Total E = ½mω²A² = ½kA²</p>
            `
        },
        
        {
            id: 'spring-pendulum',
            title: '2. Spring and Pendulum',
            content: `
                <h3>Spring-Mass System</h3>
                <p class="formula">T = 2π√(m/k)</p>
                <p class="formula">f = (1/2π)√(k/m)</p>
                
                <h3>Simple Pendulum</h3>
                <p class="formula">T = 2π√(L/g)</p>
                <p>For small angles (θ < 10°)</p>
                
                <h3>Physical Pendulum</h3>
                <p class="formula">T = 2π√(I/mgd)</p>
                <p>Where I = moment of inertia, d = distance to pivot</p>
                
                <h3>Torsional Pendulum</h3>
                <p class="formula">T = 2π√(I/C)</p>
                <p>Where C = torsional constant</p>
            `
        },
        
        {
            id: 'wave-motion',
            title: '3. Wave Motion',
            content: `
                <h3>Wave Equation</h3>
                <p class="formula">y = A sin(kx - ωt + φ)</p>
                <p>Where:</p>
                <ul>
                    <li>k = 2π/λ (wave number)</li>
                    <li>ω = 2πf (angular frequency)</li>
                </ul>
                
                <h3>Wave Speed</h3>
                <p class="formula">v = fλ = ω/k</p>
                
                <h3>Types of Waves</h3>
                <p><strong>Transverse:</strong> Vibration ⊥ to direction</p>
                <p><strong>Longitudinal:</strong> Vibration ∥ to direction</p>
                
                <h3>Speed in Different Media</h3>
                <p>String: v = √(T/μ)</p>
                <p>Sound in gas: v = √(γRT/M)</p>
                <p>Sound in solid: v = √(E/ρ)</p>
            `
        },
        
        {
            id: 'superposition',
            title: '4. Superposition of Waves',
            content: `
                <h3>Principle</h3>
                <p>Resultant displacement = sum of individual displacements</p>
                
                <h3>Interference</h3>
                <p><strong>Constructive:</strong> Path difference = nλ</p>
                <p><strong>Destructive:</strong> Path difference = (n + ½)λ</p>
                
                <h3>Beats</h3>
                <p>When two waves of slightly different frequencies interfere</p>
                <p class="formula">Beat frequency = |f₁ - f₂|</p>
                
                <h3>Standing Waves</h3>
                <p class="formula">y = 2A sin(kx) cos(ωt)</p>
                <p>Nodes: sin(kx) = 0</p>
                <p>Antinodes: sin(kx) = ±1</p>
            `
        },
        
        {
            id: 'resonance',
            title: '5. Resonance and Doppler Effect',
            content: `
                <h3>Resonance</h3>
                <p>Maximum amplitude when driving frequency = natural frequency</p>
                
                <h3>Organ Pipes</h3>
                <p><strong>Open pipe:</strong> f = nv/(2L), n = 1,2,3...</p>
                <p><strong>Closed pipe:</strong> f = nv/(4L), n = 1,3,5...</p>
                
                <h3>Doppler Effect</h3>
                <p>Apparent frequency change due to relative motion</p>
                <p class="formula">f' = f[(v ± v₀)/(v ∓ vₛ)]</p>
                <p>Where:</p>
                <ul>
                    <li>v = speed of sound</li>
                    <li>v₀ = observer velocity</li>
                    <li>vₛ = source velocity</li>
                    <li>+ when approaching, - when receding</li>
                </ul>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'SHM Period', problem: 'm=1kg, k=100N/m. Find T', solution: 'T = 2π√(1/100) = 0.628 s'},
        {id: 'ex2', title: 'Pendulum', problem: 'L=1m, g=10m/s². Find T', solution: 'T = 2π√(1/10) = 1.99 s'},
        {id: 'ex3', title: 'Wave Speed', problem: 'f=50Hz, λ=2m. Find v', solution: 'v = 50×2 = 100 m/s'},
        {id: 'ex4', title: 'Beats', problem: 'f₁=256Hz, f₂=260Hz. Beat frequency?', solution: '|256-260| = 4 Hz'}
    ],
    
    problems: [
        {id: 'p1', question: 'SHM: a = ?', options: ['-ω²x', 'ω²x', '-ωx', 'ωx'], correct: 0},
        {id: 'p2', question: 'Spring: T = ?', options: ['2π√(k/m)', '2π√(m/k)', '√(m/k)', '√(k/m)'], correct: 1},
        {id: 'p3', question: 'Wave: v = ?', options: ['f/λ', 'fλ', 'f+λ', 'f-λ'], correct: 1},
        {id: 'p4', question: 'Constructive interference: path diff = ?', options: ['nλ', '(n+½)λ', 'λ/2', 'λ/4'], correct: 0},
        {id: 'p5', question: 'Beat frequency = ?', options: ['f₁+f₂', 'f₁-f₂', '|f₁-f₂|', 'f₁×f₂'], correct: 2}
    ],
    
    keyPoints: [
        'SHM: F = -kx',
        'x = A sin(ωt + φ)',
        'v = ω√(A² - x²)',
        'a = -ω²x',
        'T = 2π√(m/k) for spring',
        'T = 2π√(L/g) for pendulum',
        'Wave: v = fλ',
        'Beats: f_beat = |f₁ - f₂|',
        'Standing wave: y = 2A sin(kx)cos(ωt)',
        'Doppler: f\' = f[(v±v₀)/(v∓vₛ)]'
    ],
    
    formulae: [
        {name: 'SHM Equation', formula: 'x = A sin(ωt + φ)'},
        {name: 'Spring Period', formula: 'T = 2π√(m/k)'},
        {name: 'Pendulum Period', formula: 'T = 2π√(L/g)'},
        {name: 'Wave Speed', formula: 'v = fλ'},
        {name: 'Beat Frequency', formula: 'f_beat = |f₁ - f₂|'},
        {name: 'Doppler Effect', formula: 'f\' = f[(v±v₀)/(v∓vₛ)]'}
    ]
};
window.PHYSICS_WAVES_1 = PHYSICS_WAVES_1;
</body>
</html>