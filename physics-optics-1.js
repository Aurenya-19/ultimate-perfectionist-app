<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// Physics - Optics - Chapter 1: Ray Optics and Optical Instruments
// Complete content with reflection, refraction, mirrors, lenses, prism, instruments

const PHYSICS_OPTICS_1 = {
    id: 'physics-optics-1',
    title: 'Ray Optics and Optical Instruments',
    subject: 'Physics',
    category: 'Optics',
    difficulty: 'Advanced',
    
    sections: [
        {
            id: 'reflection',
            title: '1. Reflection of Light',
            content: `
                <h3>Laws of Reflection</h3>
                <p>1. Incident ray, reflected ray, normal lie in same plane</p>
                <p>2. Angle of incidence = Angle of reflection</p>
                <p class="formula">i = r</p>
                
                <h3>Plane Mirror</h3>
                <ul>
                    <li>Image: Virtual, erect, same size</li>
                    <li>Distance: Object distance = Image distance</li>
                    <li>Lateral inversion</li>
                </ul>
                
                <h3>Spherical Mirrors</h3>
                <p><strong>Concave:</strong> Converging</p>
                <p><strong>Convex:</strong> Diverging</p>
                
                <h3>Mirror Formula</h3>
                <p class="formula">1/f = 1/v + 1/u</p>
                <p class="formula">f = R/2</p>
                
                <h3>Magnification</h3>
                <p class="formula">m = -v/u = h'/h</p>
            `
        },
        
        {
            id: 'refraction',
            title: '2. Refraction of Light',
            content: `
                <h3>Laws of Refraction</h3>
                <p>1. Incident ray, refracted ray, normal coplanar</p>
                <p>2. Snell's Law:</p>
                <p class="formula">n₁ sin i = n₂ sin r</p>
                
                <h3>Refractive Index</h3>
                <p class="formula">n = c/v = sin i/sin r</p>
                
                <h3>Total Internal Reflection</h3>
                <p>When light goes from denser to rarer medium</p>
                <p><strong>Critical angle:</strong> sin C = n₂/n₁</p>
                <p>If i > C: Total internal reflection</p>
                
                <h3>Applications</h3>
                <ul>
                    <li>Optical fibers</li>
                    <li>Mirage</li>
                    <li>Diamond brilliance</li>
                </ul>
            `
        },
        
        {
            id: 'lenses',
            title: '3. Lenses',
            content: `
                <h3>Types</h3>
                <p><strong>Convex (Converging):</strong> f > 0</p>
                <p><strong>Concave (Diverging):</strong> f < 0</p>
                
                <h3>Lens Formula</h3>
                <p class="formula">1/f = 1/v - 1/u</p>
                
                <h3>Lens Maker's Formula</h3>
                <p class="formula">1/f = (n-1)(1/R₁ - 1/R₂)</p>
                
                <h3>Power of Lens</h3>
                <p class="formula">P = 1/f (in meters)</p>
                <p><strong>SI Unit:</strong> Dioptre (D)</p>
                
                <h3>Combination of Lenses</h3>
                <p class="formula">P = P₁ + P₂ + P₃</p>
                <p class="formula">1/f = 1/f₁ + 1/f₂ + 1/f₃</p>
                
                <h3>Magnification</h3>
                <p class="formula">m = v/u = h'/h</p>
            `
        },
        
        {
            id: 'prism',
            title: '4. Prism',
            content: `
                <h3>Prism Formula</h3>
                <p class="formula">n = sin[(A+δm)/2] / sin(A/2)</p>
                <p>Where:</p>
                <ul>
                    <li>A = Angle of prism</li>
                    <li>δm = Minimum deviation</li>
                </ul>
                
                <h3>Angle Relations</h3>
                <p class="formula">A = r₁ + r₂</p>
                <p class="formula">δ = i₁ + i₂ - A</p>
                
                <h3>At Minimum Deviation</h3>
                <p>i₁ = i₂, r₁ = r₂ = A/2</p>
                
                <h3>Dispersion</h3>
                <p>Splitting of white light into colors</p>
                <p>VIBGYOR: Violet deviates most, Red least</p>
                
                <h3>Angular Dispersion</h3>
                <p class="formula">θ = δv - δr = (nv - nr)A</p>
            `
        },
        
        {
            id: 'optical-instruments',
            title: '5. Optical Instruments',
            content: `
                <h3>Simple Microscope (Magnifying Glass)</h3>
                <p class="formula">m = D/f</p>
                <p>Where D = 25 cm (least distance of distinct vision)</p>
                
                <h3>Compound Microscope</h3>
                <p class="formula">m = m₀ × me = (v₀/u₀) × (D/fe)</p>
                <p>Objective: Short focal length</p>
                <p>Eyepiece: Magnifies image from objective</p>
                
                <h3>Telescope</h3>
                <p class="formula">m = f₀/fe</p>
                <p>Objective: Large focal length, large aperture</p>
                <p>Eyepiece: Short focal length</p>
                
                <h3>Resolving Power</h3>
                <p><strong>Microscope:</strong> RP = 2n sin θ/λ</p>
                <p><strong>Telescope:</strong> RP = D/(1.22λ)</p>
            `
        }
    ],
    
    examples: [
        {id: 'ex1', title: 'Mirror Formula', problem: 'u=-30cm, f=-15cm. Find v', solution: '1/v = 1/f - 1/u = 1/(-15) - 1/(-30) = -1/30, v = -30 cm'},
        {id: 'ex2', title: 'Lens Power', problem: 'f=50cm. Find P', solution: 'P = 1/0.5 = 2 D'},
        {id: 'ex3', title: 'Critical Angle', problem: 'n₁=1.5, n₂=1. Find C', solution: 'sin C = 1/1.5 = 0.667, C = 42°'},
        {id: 'ex4', title: 'Prism', problem: 'A=60°, δm=30°. Find n', solution: 'n = sin(45°)/sin(30°) = 1.414'}
    ],
    
    problems: [
        {id: 'p1', question: 'Mirror formula:', options: ['1/f=1/v+1/u', '1/f=1/v-1/u', 'f=v+u', 'f=v-u'], correct: 0},
        {id: 'p2', question: 'Lens power unit:', options: ['Watt', 'Dioptre', 'Candela', 'Lumen'], correct: 1},
        {id: 'p3', question: 'TIR occurs when:', options: ['Rarer to denser', 'Denser to rarer', 'Same medium', 'Vacuum'], correct: 1},
        {id: 'p4', question: 'Convex lens: f is:', options: ['Negative', 'Positive', 'Zero', 'Infinite'], correct: 1},
        {id: 'p5', question: 'In VIBGYOR, most deviated:', options: ['Red', 'Violet', 'Green', 'Yellow'], correct: 1}
    ],
    
    keyPoints: [
        'Reflection: i = r',
        'Mirror: 1/f = 1/v + 1/u',
        'Snell: n₁sini = n₂sinr',
        'TIR: sinC = n₂/n₁',
        'Lens: 1/f = 1/v - 1/u',
        'Power: P = 1/f (D)',
        'Lens maker: 1/f = (n-1)(1/R₁-1/R₂)',
        'Prism: n = sin[(A+δm)/2]/sin(A/2)',
        'Microscope: m = D/f',
        'Telescope: m = f₀/fe'
    ],
    
    formulae: [
        {name: 'Mirror Formula', formula: '1/f = 1/v + 1/u'},
        {name: 'Lens Formula', formula: '1/f = 1/v - 1/u'},
        {name: 'Snell\'s Law', formula: 'n₁sini = n₂sinr'},
        {name: 'Lens Power', formula: 'P = 1/f'},
        {name: 'Prism', formula: 'n = sin[(A+δm)/2]/sin(A/2)'},
        {name: 'Magnification', formula: 'm = v/u'}
    ]
};
window.PHYSICS_OPTICS_1 = PHYSICS_OPTICS_1;
</body>
</html>