<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// OLYMPIAD & ADVANCED LEVEL CONTENT
// JEE Advanced, INPHO, IMO, Research Level Problems

const OLYMPIAD_CHAPTERS = {
  // ==================== ADVANCED MECHANICS ====================
  p3_advanced: {
    theory: {
      introduction: `Advanced mechanics goes beyond Newton's laws to explore complex systems, non-inertial frames, variable mass systems, and relativistic effects. This content is designed for JEE Advanced, Physics Olympiad (INPHO, IPhO), and research-level understanding.`,
      sections: [
        {
          title: 'Non-Inertial Reference Frames',
          content: `In non-inertial (accelerating) reference frames, Newton's laws don't hold in their standard form. We introduce pseudo forces (fictitious forces) to make the laws work.

**Pseudo Forces**:
1. **Translational Pseudo Force**: F_pseudo = -ma_frame
   - Acts on all objects in the accelerating frame
   - Opposite to frame's acceleration
   
2. **Centrifugal Force**: F_cf = mω²r
   - In rotating frames
   - Directed radially outward
   
3. **Coriolis Force**: F_cor = -2m(v⃗ × ω⃗)
   - Acts on moving objects in rotating frames
   - Perpendicular to both velocity and angular velocity
   - Responsible for cyclone rotation, Foucault pendulum

**Euler Force**: F_euler = -m(α⃗ × r⃗)
   - In frames with angular acceleration α⃗`,
          formulas: [
            { name: 'Translational pseudo force', expr: 'F⃗_pseudo = -ma⃗_frame' },
            { name: 'Centrifugal force', expr: 'F⃗_cf = mω²r r̂' },
            { name: 'Coriolis force', expr: 'F⃗_cor = -2m(v⃗ × ω⃗)' },
            { name: 'Euler force', expr: 'F⃗_euler = -m(α⃗ × r⃗)' }
          ],
          keyPoints: [
            'Pseudo forces are not real forces - they arise from frame acceleration',
            'Coriolis force is responsible for weather patterns',
            'In rotating Earth frame, all moving objects experience Coriolis force',
            'Foucault pendulum proves Earth\'s rotation'
          ]
        },
        {
          title: 'Variable Mass Systems (Rocket Equation)',
          content: `For systems where mass changes with time (rockets, rain drops, conveyor belts), we need modified equations.

**Tsiolkovsky Rocket Equation**:
Δv = v_exhaust × ln(m_initial/m_final)

**Differential Form**:
F_thrust = v_rel × (dm/dt)

Where v_rel is exhaust velocity relative to rocket.

**General Variable Mass Equation**:
F_ext = m(dv/dt) + v_rel(dm/dt)

**Applications**:
1. Rocket propulsion
2. Raindrop falling through cloud
3. Sand falling on conveyor belt
4. Chain falling off table`,
          formulas: [
            { name: 'Rocket equation', expr: 'Δv = v_e ln(m₀/m_f)', description: 'Tsiolkovsky equation' },
            { name: 'Thrust force', expr: 'F = v_rel(dm/dt)' },
            { name: 'Variable mass', expr: 'F_ext = m(dv/dt) + v_rel(dm/dt)' },
            { name: 'Multi-stage rocket', expr: 'Δv_total = Σ v_e,i ln(m_i/m_f,i)' }
          ]
        },
        {
          title: 'Lagrangian Mechanics (Introduction)',
          content: `Lagrangian mechanics is a reformulation of classical mechanics using energy rather than forces.

**Lagrangian**: L = T - V
Where T = kinetic energy, V = potential energy

**Euler-Lagrange Equation**:
d/dt(∂L/∂q̇) - ∂L/∂q = 0

Where q is generalized coordinate, q̇ is generalized velocity.

**Advantages**:
1. Works with any coordinate system
2. Constraints automatically incorporated
3. Easier for complex systems
4. Foundation for quantum mechanics

**Example - Simple Pendulum**:
L = ½ml²θ̇² - mgl(1 - cos θ)

Applying Euler-Lagrange:
ml²θ̈ + mgl sin θ = 0
θ̈ + (g/l) sin θ = 0`,
          formulas: [
            { name: 'Lagrangian', expr: 'L = T - V' },
            { name: 'Euler-Lagrange', expr: 'd/dt(∂L/∂q̇) - ∂L/∂q = 0' },
            { name: 'Generalized momentum', expr: 'p = ∂L/∂q̇' },
            { name: 'Hamiltonian', expr: 'H = Σ p_i q̇_i - L = T + V' }
          ]
        },
        {
          title: 'Collision Theory - Advanced',
          content: `**Coefficient of Restitution (e)**:
e = (v₂ - v₁)/(u₁ - u₂) = √(h_bounce/h_drop)

**Oblique Collisions**:
- Resolve velocities into normal and tangential components
- Apply e only to normal components
- Tangential components unchanged (if frictionless)

**Impulse-Momentum in 2D**:
J⃗ = ∫F⃗ dt = Δp⃗

**Center of Mass Frame**:
In CM frame, total momentum = 0
Useful for analyzing collisions

**Scattering Cross-Section** (Advanced):
σ = πb² (for hard sphere scattering)
Where b is impact parameter`,
          formulas: [
            { name: 'Restitution coefficient', expr: 'e = (v₂-v₁)/(u₁-u₂)', description: '0 ≤ e ≤ 1' },
            { name: 'Energy loss', expr: 'ΔKE = ½μ(1-e²)(u₁-u₂)²', description: 'μ = reduced mass' },
            { name: 'Oblique collision', expr: 'e = (v₂ₙ-v₁ₙ)/(u₁ₙ-u₂ₙ)', description: 'normal components only' },
            { name: 'Reduced mass', expr: 'μ = m₁m₂/(m₁+m₂)' }
          ]
        },
        {
          title: 'Rigid Body Dynamics - Advanced',
          content: `**Parallel Axis Theorem**:
I = I_cm + Md²

**Perpendicular Axis Theorem** (for planar objects):
I_z = I_x + I_y

**Moment of Inertia - Continuous Bodies**:
I = ∫r² dm

**Rolling Motion**:
- Pure rolling: v_cm = ωR
- Kinetic energy: KE = ½Mv²_cm + ½Iω²
- For pure rolling: KE = ½Mv²_cm(1 + k²)
  where k² = I/(MR²) is radius of gyration

**Instantaneous Axis of Rotation**:
For pure rolling, instantaneous axis passes through contact point.

**Angular Momentum**:
L⃗ = I⃗ω⃗ (for symmetric bodies)
τ⃗ = dL⃗/dt`,
          formulas: [
            { name: 'Parallel axis', expr: 'I = I_cm + Md²' },
            { name: 'Perpendicular axis', expr: 'I_z = I_x + I_y', description: 'planar objects' },
            { name: 'Rolling KE', expr: 'KE = ½Mv²(1 + I/(MR²))' },
            { name: 'Angular momentum', expr: 'L = Iω' },
            { name: 'Torque', expr: 'τ = Iα = dL/dt' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'olympiad',
        question: 'A rocket of initial mass m₀ = 1000 kg ejects gas at a constant rate of 10 kg/s with exhaust velocity 2000 m/s relative to the rocket. If the rocket starts from rest in gravity-free space, find its velocity after 50 seconds. (Ignore external forces)',
        options: ['1386 m/s', '2000 m/s', '2773 m/s', '3466 m/s'],
        correct: 0,
        solution: `Given:
- m₀ = 1000 kg
- dm/dt = 10 kg/s
- v_exhaust = 2000 m/s
- t = 50 s
- Initial velocity u = 0

After 50 seconds:
Mass ejected = 10 × 50 = 500 kg
Final mass m_f = 1000 - 500 = 500 kg

Using Tsiolkovsky Rocket Equation:
Δv = v_e ln(m₀/m_f)
Δv = 2000 × ln(1000/500)
Δv = 2000 × ln(2)
Δv = 2000 × 0.693
Δv = 1386 m/s

Since initial velocity = 0:
Final velocity = 1386 m/s

Answer: A) 1386 m/s

**Advanced Note**: This is the ideal rocket equation. In reality, gravity losses and atmospheric drag reduce the final velocity significantly.`
      },
      {
        id: 2,
        difficulty: 'olympiad',
        question: 'A disc of mass M and radius R is rolling without slipping on a horizontal surface with velocity v. It then rolls up an incline of angle θ. What is the maximum height it reaches? (Use energy conservation)',
        options: ['v²/(2g)', '3v²/(4g)', 'v²/g', '3v²/(2g)'],
        correct: 1,
        solution: `Initial state (rolling on horizontal surface):
- Translational KE: KE_trans = ½Mv²
- Rotational KE: KE_rot = ½Iω²

For a disc: I = ½MR²
For pure rolling: v = ωR, so ω = v/R

KE_rot = ½ × (½MR²) × (v/R)²
KE_rot = ¼Mv²

Total initial KE:
KE_total = ½Mv² + ¼Mv² = ¾Mv²

At maximum height h:
All KE converts to PE
PE = Mgh

By conservation of energy:
¾Mv² = Mgh
h = 3v²/(4g)

Answer: B) 3v²/(4g)

**Key Insight**: For rolling objects, we must include rotational kinetic energy. The factor 3/4 comes from the disc's moment of inertia. For a solid sphere, it would be 7/10, and for a hollow sphere, 5/6.

**General Formula**: h = v²(1 + k²)/(2g)
where k² = I/(MR²) is the squared radius of gyration.`
      },
      {
        id: 3,
        difficulty: 'olympiad',
        question: 'A particle of mass m moves in a circular path of radius r on a horizontal frictionless table. It is connected to a string that passes through a hole at the center and is pulled down with constant velocity v₀. If the initial angular velocity is ω₀, find the angular velocity when the radius becomes r/2. (Use angular momentum conservation)',
        options: ['2ω₀', '4ω₀', '√2 ω₀', '8ω₀'],
        correct: 1,
        solution: `This is a central force problem with no external torque.

Angular momentum is conserved:
L_initial = L_final

Initial state:
L_i = mr²ω₀

Final state (radius = r/2):
L_f = m(r/2)²ω_f

Conservation of angular momentum:
mr²ω₀ = m(r/2)²ω_f
r²ω₀ = (r²/4)ω_f
ω_f = 4ω₀

Answer: B) 4ω₀

**Physical Explanation**: As the radius decreases, the particle must spin faster to conserve angular momentum. This is similar to a figure skater spinning faster when pulling arms inward.

**Energy Analysis** (Advanced):
The work done in pulling the string increases the kinetic energy:
KE_initial = ½m(rω₀)² = ½mr²ω₀²
KE_final = ½m(r/2 × 4ω₀)² = ½m × 4r²ω₀² = 2mr²ω₀²

Energy increased by factor of 4! This energy comes from the work done in pulling the string against the centrifugal force.`
      },
      {
        id: 4,
        difficulty: 'olympiad',
        question: 'A uniform rod of length L and mass M is pivoted at one end and released from horizontal position. Find the angular velocity when it becomes vertical. (Use energy method)',
        options: ['√(g/L)', '√(2g/L)', '√(3g/L)', '√(6g/L)'],
        correct: 2,
        solution: `Initial state (horizontal):
- Height of center of mass: h_i = L/2
- Angular velocity: ω_i = 0
- PE_i = Mg(L/2)
- KE_i = 0

Final state (vertical):
- Height of center of mass: h_f = 0 (taking pivot as reference)
- Angular velocity: ω_f = ?
- PE_f = 0
- KE_f = ½Iω_f²

Moment of inertia about pivot:
I = (1/3)ML² (for rod about end)

Energy conservation:
PE_i + KE_i = PE_f + KE_f
Mg(L/2) + 0 = 0 + ½ × (1/3)ML² × ω_f²
MgL/2 = (1/6)ML²ω_f²
gL/2 = (1/6)L²ω_f²
ω_f² = 3g/L
ω_f = √(3g/L)

Answer: C) √(3g/L)

**Verification using Torque Method**:
τ = Iα
Mg(L/2)cos θ = (1/3)ML² × α
α = (3g/2L)cos θ

Using: ω dω = α dθ
∫₀^ω ω dω = ∫₀^(π/2) (3g/2L)cos θ dθ
ω²/2 = (3g/2L)[sin θ]₀^(π/2)
ω²/2 = 3g/2L
ω = √(3g/L) ✓

**Advanced**: The linear velocity of the tip when vertical is:
v_tip = ωL = L√(3g/L) = √(3gL)`
      },
      {
        id: 5,
        difficulty: 'olympiad',
        question: 'Two particles of masses m₁ and m₂ undergo a perfectly elastic collision in 2D. Initially, m₁ moves with velocity v₀ along x-axis and m₂ is at rest. After collision, m₁ moves at angle θ₁ = 30° to x-axis. If m₁ = m₂ = m, find the angle θ₂ at which m₂ moves.',
        options: ['30°', '45°', '60°', '90°'],
        correct: 2,
        solution: `For elastic collision with equal masses:

Conservation of momentum (x-component):
mv₀ = mv₁cos(30°) + mv₂cos(θ₂)
v₀ = v₁(√3/2) + v₂cos(θ₂) ... (1)

Conservation of momentum (y-component):
0 = mv₁sin(30°) - mv₂sin(θ₂)
0 = v₁(1/2) - v₂sin(θ₂)
v₁/2 = v₂sin(θ₂) ... (2)

Conservation of energy (elastic collision):
½mv₀² = ½mv₁² + ½mv₂²
v₀² = v₁² + v₂² ... (3)

**Key Property for Equal Mass Elastic Collision**:
When one particle is initially at rest, the two particles move at 90° to each other after collision!

Therefore: θ₁ + θ₂ = 90°
θ₂ = 90° - 30° = 60°

**Verification**:
From (2): v₁ = 2v₂sin(60°) = 2v₂(√3/2) = √3 v₂
From (3): v₀² = 3v₂² + v₂² = 4v₂²
So: v₂ = v₀/2, v₁ = √3v₀/2

Check (1): v₀ = (√3v₀/2)(√3/2) + (v₀/2)cos(60°)
v₀ = 3v₀/4 + v₀/4 = v₀ ✓

Answer: C) 60°

**General Result**: For elastic collision between equal masses where one is initially at rest, the angle between final velocities is always 90°. This is used in billiards and particle physics!`
      },
      {
        id: 6,
        difficulty: 'olympiad',
        question: 'A bead of mass m slides without friction on a vertical hoop of radius R rotating about a vertical diameter with constant angular velocity ω. Find the angle θ from the vertical at which the bead can remain in equilibrium. (Consider centrifugal force in rotating frame)',
        options: ['cos⁻¹(g/(ω²R))', 'sin⁻¹(g/(ω²R))', 'tan⁻¹(g/(ω²R))', 'No equilibrium possible'],
        correct: 0,
        solution: `In the rotating frame, the bead experiences:
1. Weight: mg (downward)
2. Normal force: N (perpendicular to hoop)
3. Centrifugal force: mω²r (outward)

where r = R sin θ (distance from rotation axis)

For equilibrium, net force = 0

Resolving along the hoop (tangential direction):
mg sin θ = mω²r cos θ
mg sin θ = mω²(R sin θ) cos θ
g = ω²R cos θ

cos θ = g/(ω²R)
θ = cos⁻¹(g/(ω²R))

**Condition for real solution**:
g/(ω²R) ≤ 1
ω² ≥ g/R
ω ≥ √(g/R)

If ω < √(g/R), no equilibrium exists (bead stays at bottom).

Answer: A) cos⁻¹(g/(ω²R))

**Physical Insight**:
- As ω increases, θ decreases (bead moves toward horizontal)
- At ω = √(g/R), θ = 0° (bead at bottom)
- As ω → ∞, θ → 90° (bead approaches horizontal)

**Stability Analysis** (Advanced):
This equilibrium is stable. Small perturbations result in oscillations about this angle with frequency:
ω_osc = √(ω² - g/R)

This is a classic problem in rotating reference frames and appears in many physics olympiads!`
      }
    ]
  },

  // ==================== ADVANCED ELECTROMAGNETISM ====================
  p11_advanced: {
    theory: {
      introduction: `Advanced electromagnetism covers Maxwell's equations, electromagnetic waves, relativistic electrodynamics, and quantum effects. This is graduate-level physics essential for understanding modern technology and fundamental physics.`,
      sections: [
        {
          title: 'Maxwell\'s Equations (Complete Form)',
          content: `Maxwell's equations are the fundamental equations of electromagnetism, unifying electricity, magnetism, and optics.

**Gauss's Law (Electric)**:
∇·E⃗ = ρ/ε₀
∮E⃗·dA⃗ = Q_enclosed/ε₀

**Gauss's Law (Magnetic)**:
∇·B⃗ = 0
∮B⃗·dA⃗ = 0
(No magnetic monopoles)

**Faraday's Law**:
∇×E⃗ = -∂B⃗/∂t
∮E⃗·dl⃗ = -dΦ_B/dt

**Ampere-Maxwell Law**:
∇×B⃗ = μ₀J⃗ + μ₀ε₀∂E⃗/∂t
∮B⃗·dl⃗ = μ₀I_enclosed + μ₀ε₀dΦ_E/dt

The term μ₀ε₀∂E⃗/∂t is Maxwell's displacement current - his revolutionary addition!`,
          formulas: [
            { name: 'Gauss (E)', expr: '∇·E⃗ = ρ/ε₀' },
            { name: 'Gauss (B)', expr: '∇·B⃗ = 0' },
            { name: 'Faraday', expr: '∇×E⃗ = -∂B⃗/∂t' },
            { name: 'Ampere-Maxwell', expr: '∇×B⃗ = μ₀J⃗ + μ₀ε₀∂E⃗/∂t' },
            { name: 'Wave equation', expr: '∇²E⃗ = μ₀ε₀∂²E⃗/∂t²' },
            { name: 'Speed of light', expr: 'c = 1/√(μ₀ε₀) = 3×10⁸ m/s' }
          ],
          keyPoints: [
            'Maxwell unified electricity and magnetism',
            'Predicted electromagnetic waves',
            'Showed light is an EM wave',
            'Foundation of special relativity'
          ]
        },
        {
          title: 'Electromagnetic Waves',
          content: `From Maxwell's equations, we can derive the wave equation for EM fields:

∇²E⃗ - μ₀ε₀∂²E⃗/∂t² = 0

**Solution**: E⃗ = E₀ sin(k⃗·r⃗ - ωt)

**Properties**:
1. Transverse waves: E⃗ ⊥ B⃗ ⊥ direction of propagation
2. E and B are in phase
3. |E|/|B| = c
4. Speed: c = ω/k = 1/√(μ₀ε₀)

**Energy Density**:
u = ½ε₀E² + B²/(2μ₀) = ε₀E²

**Poynting Vector** (Energy flux):
S⃗ = (1/μ₀)E⃗×B⃗

**Intensity**: I = <S> = ½ε₀cE₀²

**Radiation Pressure**:
P = I/c (complete absorption)
P = 2I/c (complete reflection)`,
          formulas: [
            { name: 'Wave equation', expr: '∇²E⃗ = (1/c²)∂²E⃗/∂t²' },
            { name: 'E-B relation', expr: 'E = cB' },
            { name: 'Energy density', expr: 'u = ε₀E²' },
            { name: 'Poynting vector', expr: 'S⃗ = (1/μ₀)E⃗×B⃗', unit: 'W/m²' },
            { name: 'Intensity', expr: 'I = ½ε₀cE₀²' },
            { name: 'Radiation pressure', expr: 'P = I/c' }
          ]
        },
        {
          title: 'Electromagnetic Spectrum',
          content: `EM waves span an enormous range of frequencies:

**Radio Waves**: λ > 1 mm, f < 300 GHz
- AM radio: 540-1600 kHz
- FM radio: 88-108 MHz
- TV, cell phones, WiFi

**Microwaves**: 1 mm < λ < 1 m
- Radar, satellite communication
- Microwave ovens: 2.45 GHz

**Infrared**: 700 nm < λ < 1 mm
- Thermal radiation
- Night vision, remote controls

**Visible Light**: 400-700 nm
- Red: 700 nm, Violet: 400 nm
- Only EM waves visible to human eye

**Ultraviolet**: 10-400 nm
- Causes sunburn
- Sterilization, fluorescence

**X-rays**: 0.01-10 nm
- Medical imaging
- High energy

**Gamma Rays**: λ < 0.01 nm
- Nuclear reactions
- Cosmic rays
- Most energetic EM radiation`,
          formulas: [
            { name: 'Wavelength-frequency', expr: 'λf = c' },
            { name: 'Energy', expr: 'E = hf = hc/λ', description: 'h = Planck constant' },
            { name: 'Photon momentum', expr: 'p = h/λ = E/c' }
          ]
        },
        {
          title: 'Lorentz Force and Relativistic Effects',
          content: `**Lorentz Force** (complete form):
F⃗ = q(E⃗ + v⃗×B⃗)

**Relativistic Transformation**:
Electric and magnetic fields transform between reference frames!

If frame S' moves with velocity v relative to S:
E'∥ = E∥
E'⊥ = γ(E⊥ + v×B)
B'∥ = B∥
B'⊥ = γ(B⊥ - v×E/c²)

where γ = 1/√(1-v²/c²)

**Key Insight**: E and B are not separate entities - they are components of the electromagnetic field tensor. What appears as pure E in one frame appears as E+B in another!

**Electromagnetic Field Tensor**:
F^μν = [matrix with E and B components]

This is the truly fundamental object in electromagnetism.`,
          formulas: [
            { name: 'Lorentz force', expr: 'F⃗ = q(E⃗ + v⃗×B⃗)' },
            { name: 'Cyclotron frequency', expr: 'ω_c = qB/m' },
            { name: 'Larmor formula', expr: 'P = (q²a²)/(6πε₀c³)', description: 'Radiated power' }
          ]
        },
        {
          title: 'Advanced Capacitor Configurations',
          content: `**Spherical Capacitor**:
C = 4πε₀(ab)/(b-a)
where a = inner radius, b = outer radius

**Cylindrical Capacitor**:
C = 2πε₀L/ln(b/a)
where L = length

**Capacitor with Multiple Dielectrics**:

**Series dielectrics** (perpendicular to plates):
1/C = 1/C₁ + 1/C₂ + ...

**Parallel dielectrics** (parallel to plates):
C = C₁ + C₂ + ...

**Energy Density in Dielectric**:
u = ½ε₀KE² = ½DE

where D = ε₀KE is electric displacement`,
          formulas: [
            { name: 'Spherical', expr: 'C = 4πε₀ab/(b-a)' },
            { name: 'Cylindrical', expr: 'C = 2πε₀L/ln(b/a)' },
            { name: 'With dielectric', expr: 'C = Kε₀A/d' },
            { name: 'Energy density', expr: 'u = ½ε₀KE²' }
          ]
        }
      ]
    },
    problems: [
      {
        id: 1,
        difficulty: 'olympiad',
        question: 'An electromagnetic wave in vacuum has electric field E = E₀ sin(kz - ωt) x̂. If E₀ = 300 V/m, find the magnitude of the magnetic field and the intensity of the wave. (c = 3×10⁸ m/s, ε₀ = 8.85×10⁻¹² F/m)',
        options: ['B₀ = 1 μT, I = 119.6 W/m²', 'B₀ = 2 μT, I = 239.2 W/m²', 'B₀ = 0.5 μT, I = 59.8 W/m²', 'B₀ = 1.5 μT, I = 179.4 W/m²'],
        correct: 0,
        solution: `Given: E₀ = 300 V/m, c = 3×10⁸ m/s, ε₀ = 8.85×10⁻¹² F/m

**Part 1: Magnetic Field**

For EM waves: E₀/B₀ = c
B₀ = E₀/c
B₀ = 300/(3×10⁸)
B₀ = 10⁻⁶ T = 1 μT

**Part 2: Intensity**

Intensity: I = ½ε₀cE₀²
I = ½ × 8.85×10⁻¹² × 3×10⁸ × (300)²
I = ½ × 8.85×10⁻¹² × 3×10⁸ × 9×10⁴
I = ½ × 8.85 × 3 × 9 × 10⁰
I = ½ × 238.95
I = 119.475 W/m²
I ≈ 119.6 W/m²

Answer: A) B₀ = 1 μT, I = 119.6 W/m²

**Physical Insight**:
- The magnetic field in EM waves is very small compared to electric field
- This intensity is comparable to sunlight (about 1000 W/m²)
- The Poynting vector S⃗ = (E⃗×B⃗)/μ₀ points in the +z direction (direction of propagation)

**Advanced**: The radiation pressure on a perfect absorber would be:
P = I/c = 119.6/(3×10⁸) = 3.99×10⁻⁷ Pa

This is tiny but measurable and important for solar sails!`
      },
      {
        id: 2,
        difficulty: 'olympiad',
        question: 'A charged particle (q = 1.6×10⁻¹⁹ C, m = 9.1×10⁻³¹ kg) enters a region with E = 10⁴ V/m (upward) and B = 0.5 T (into page) with velocity v perpendicular to both fields. Find the velocity for which the particle moves undeflected. What is this configuration called?',
        options: ['v = 2×10⁴ m/s, Velocity Selector', 'v = 5×10⁴ m/s, Mass Spectrometer', 'v = 2×10⁴ m/s, Cyclotron', 'v = 10⁴ m/s, Velocity Selector'],
        correct: 0,
        solution: `For undeflected motion, net force = 0

Lorentz force: F⃗ = q(E⃗ + v⃗×B⃗)

Electric force: F_E = qE (upward)
Magnetic force: F_B = qvB (downward, by right-hand rule)

For no deflection:
qE = qvB
E = vB
v = E/B
v = 10⁴/0.5
v = 2×10⁴ m/s

**This is called a Velocity Selector** (or Wien filter)

Answer: A) v = 2×10⁴ m/s, Velocity Selector

**Detailed Explanation**:

**Velocity Selector**: Device that allows only particles with specific velocity to pass through undeflected.

**Working Principle**:
1. Particles with v = E/B: No deflection (straight path)
2. Particles with v > E/B: Magnetic force > Electric force → deflected downward
3. Particles with v < E/B: Electric force > Magnetic force → deflected upward

**Applications**:
1. Mass spectrometry (select particles of specific velocity)
2. Particle physics experiments
3. Isotope separation

**Advanced Analysis**:
If the particle has v ≠ E/B, it follows a complex trajectory. For small deviations:
- Trajectory is approximately parabolic
- Deflection ∝ (v - E/B)

**Related Devices**:
- **Mass Spectrometer**: Uses velocity selector + magnetic field to separate by mass
- **Cyclotron**: Uses magnetic field for circular acceleration
- **Synchrotron**: Relativistic particle accelerator

**Numerical Check**:
v = 2×10⁴ m/s = 20 km/s
This is about 0.007% of speed of light - non-relativistic ✓`
      },
      {
        id: 3,
        difficulty: 'olympiad',
        question: 'A spherical capacitor has inner radius a = 5 cm and outer radius b = 10 cm. It is filled with a dielectric of constant K = 5. Find its capacitance. (ε₀ = 8.85×10⁻¹² F/m, 4πε₀ ≈ 1.11×10⁻¹⁰ F/m)',
        options: ['27.75 pF', '55.5 pF', '111 pF', '222 pF'],
        correct: 1,
        solution: `Given:
- a = 5 cm = 0.05 m
- b = 10 cm = 0.10 m
- K = 5
- 4πε₀ = 1.11×10⁻¹⁰ F/m

**Spherical Capacitor Formula**:
C = 4πε₀K(ab)/(b-a)

Substituting values:
C = 1.11×10⁻¹⁰ × 5 × (0.05 × 0.10)/(0.10 - 0.05)
C = 5.55×10⁻¹⁰ × (0.005)/(0.05)
C = 5.55×10⁻¹⁰ × 0.1
C = 5.55×10⁻¹¹ F
C = 55.5 pF

Answer: B) 55.5 pF

**Derivation** (Advanced):

For spherical capacitor, electric field between spheres:
E = Q/(4πε₀Kr²)

Potential difference:
V = ∫ᵇₐ E dr = Q/(4πε₀K) ∫ᵇₐ dr/r²
V = Q/(4πε₀K) [-1/r]ᵇₐ
V = Q/(4πε₀K) (1/a - 1/b)
V = Q(b-a)/(4πε₀Kab)

Capacitance:
C = Q/V = 4πε₀Kab/(b-a)

**Special Cases**:
1. If b → ∞: C → 4πε₀Ka (isolated sphere)
2. If b - a << a: C → ε₀KA/d (parallel plate)
   where A = 4πa², d = b-a

**Energy Stored**:
U = ½CV² = ½Q²/C

For this capacitor at V = 100 V:
U = ½ × 55.5×10⁻¹² × (100)²
U = 2.775×10⁻⁷ J = 277.5 nJ

**Practical Note**: Spherical capacitors are used in:
- Van de Graaff generators
- High voltage applications
- Precision measurements`
      }
    ]
  }
};

// Merge with main database
if (typeof CHAPTERS_DATABASE !== 'undefined') {
  // Add olympiad problems to existing chapters
  if (CHAPTERS_DATABASE.physics) {
    const p3 = CHAPTERS_DATABASE.physics.find(ch => ch.id === 'p3');
    if (p3 && OLYMPIAD_CHAPTERS.p3_advanced) {
      if (!p3.olympiad) p3.olympiad = {};
      p3.olympiad = OLYMPIAD_CHAPTERS.p3_advanced;
    }
    
    const p11 = CHAPTERS_DATABASE.physics.find(ch => ch.id === 'p11');
    if (p11 && OLYMPIAD_CHAPTERS.p11_advanced) {
      if (!p11.olympiad) p11.olympiad = {};
      p11.olympiad = OLYMPIAD_CHAPTERS.p11_advanced;
    }
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = OLYMPIAD_CHAPTERS;
}
</body>
</html>