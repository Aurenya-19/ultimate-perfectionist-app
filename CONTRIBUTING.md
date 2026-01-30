<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
# 🤝 Contributing to NEXUS REALITY

First off, **thank you** for considering contributing to NEXUS REALITY! 🎉

This platform aims to democratize JEE preparation by providing free, high-quality educational content. Every contribution helps thousands of students achieve their dreams.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Content Guidelines](#content-guidelines)
- [Development Guidelines](#development-guidelines)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Harassment, trolling, or derogatory comments
- Publishing others' private information
- Any conduct which could reasonably be considered inappropriate

---

## 🎯 How Can I Contribute?

### 1. **Add New Chapters** 📚

We need content for these remaining chapters:
- **Physics:** Kinetic Theory of Gases
- **Chemistry:** Periodic Table, s-Block Elements, Haloalkanes, Biomolecules
- **Mathematics:** Trigonometric Equations, Statistics

### 2. **Improve Existing Content** ✨

- Add more examples
- Improve explanations
- Fix errors or typos
- Add diagrams/illustrations
- Enhance problem sets

### 3. **Fix Bugs** 🐛

- Report issues you find
- Fix existing issues
- Improve error handling
- Enhance user experience

### 4. **Add Features** 🚀

- Video explanations
- Interactive practice tests
- Discussion forum
- Performance analytics
- Mobile app

### 5. **Improve Documentation** 📖

- Update README
- Add tutorials
- Create guides
- Translate content

---

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, JavaScript
- Git and GitHub account
- Text editor (VS Code recommended)
- Web browser for testing

### Setup Development Environment

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/ultimate-perfectionist-app.git

# 3. Navigate to directory
cd ultimate-perfectionist-app

# 4. Add upstream remote
git remote add upstream https://github.com/Aurenya-19/ultimate-perfectionist-app.git

# 5. Create a new branch
git checkout -b feature/your-feature-name

# 6. Open in browser
# Use a local server (recommended)
python -m http.server 8000
# OR
npx serve

# Visit http://localhost:8000
```

---

## 📚 Content Guidelines

### Chapter Structure

Each chapter must follow this structure:

```javascript
const CHAPTER_NAME = {
    id: 'subject-category-number',
    title: 'Chapter Title',
    subject: 'Physics/Chemistry/Mathematics',
    category: 'Category Name',
    difficulty: 'Foundation/Intermediate/Advanced',
    
    sections: [
        {
            id: 'section-id',
            title: 'Section Title',
            content: `HTML content here`
        }
    ],
    
    examples: [
        {
            id: 'ex1',
            title: 'Example Title',
            problem: 'Problem statement',
            solution: 'Step-by-step solution'
        }
    ],
    
    problems: [
        {
            id: 'p1',
            question: 'Question text',
            options: ['A', 'B', 'C', 'D'],
            correct: 0  // Index of correct answer
        }
    ],
    
    keyPoints: [
        'Key point 1',
        'Key point 2'
    ],
    
    formulae: [
        {
            name: 'Formula Name',
            formula: 'Mathematical expression'
        }
    ]
};

window.CHAPTER_NAME = CHAPTER_NAME;
```

### Content Quality Standards

#### ✅ DO:
- Write clear, concise explanations
- Use proper mathematical notation
- Include step-by-step solutions
- Add relevant examples
- Cite sources when needed
- Use proper HTML formatting
- Test all formulas and solutions
- Follow JEE syllabus

#### ❌ DON'T:
- Copy content without attribution
- Use copyrighted material
- Include incorrect information
- Use offensive language
- Add unnecessary complexity
- Skip important concepts

### Writing Style

- **Clarity:** Explain concepts simply
- **Accuracy:** Verify all facts and formulas
- **Completeness:** Cover all important aspects
- **Consistency:** Follow existing style
- **Examples:** Include practical examples
- **Difficulty:** Match JEE level

---

## 💻 Development Guidelines

### File Naming Convention

```
subject-category-number.js
```

Examples:
- `physics-mechanics-1.js`
- `chemistry-organic-2.js`
- `maths-calculus-3.js`

### Code Style

```javascript
// Use clear variable names
const chapterData = {...};

// Add comments for complex logic
// This function loads chapter content dynamically

// Use consistent indentation (2 or 4 spaces)
const example = {
    id: 'ex1',
    title: 'Example'
};

// Use template literals for HTML
const html = `
    <div class="section">
        <h3>${title}</h3>
    </div>
`;
```

### HTML in Content

```html
<!-- Use semantic HTML -->
<h3>Heading</h3>
<p>Paragraph text</p>

<!-- Use classes for styling -->
<p class="formula">E = mc²</p>

<!-- Use tables for data -->
<table class="content-table">
    <tr><th>Header</th></tr>
    <tr><td>Data</td></tr>
</table>

<!-- Use lists appropriately -->
<ul>
    <li>Point 1</li>
    <li>Point 2</li>
</ul>
```

---

## 📤 Submitting Changes

### Step-by-Step Process

1. **Create a Branch**
```bash
git checkout -b feature/add-kinetic-theory
```

2. **Make Your Changes**
- Add/edit files
- Test thoroughly
- Follow guidelines

3. **Commit Changes**
```bash
git add .
git commit -m "Add: Kinetic Theory of Gases chapter"
```

**Commit Message Format:**
```
Type: Brief description

- Detailed point 1
- Detailed point 2
```

**Types:**
- `Add:` New content/features
- `Fix:` Bug fixes
- `Update:` Content improvements
- `Docs:` Documentation changes
- `Style:` Formatting changes
- `Refactor:` Code restructuring

4. **Push to Your Fork**
```bash
git push origin feature/add-kinetic-theory
```

5. **Create Pull Request**
- Go to GitHub
- Click "New Pull Request"
- Fill in description
- Link related issues
- Request review

### Pull Request Guidelines

**Title Format:**
```
[Type] Brief description
```

**Description Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New chapter
- [ ] Bug fix
- [ ] Feature addition
- [ ] Documentation update

## Checklist
- [ ] Code follows style guidelines
- [ ] Content is accurate
- [ ] Examples are tested
- [ ] No spelling/grammar errors
- [ ] Tested in browser

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #123
```

---

## 🎨 Style Guide

### Content Formatting

#### Headings
```html
<h3>Main Concept</h3>
<h4>Sub-concept</h4>
```

#### Formulas
```html
<p class="formula">E = mc²</p>
```

#### Important Points
```html
<p><strong>Important:</strong> Key information</p>
```

#### Lists
```html
<ul>
    <li>Point 1</li>
    <li>Point 2</li>
</ul>
```

#### Tables
```html
<table class="content-table">
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

### Mathematical Notation

Use standard notation:
- Superscripts: x², x³, xⁿ
- Subscripts: x₁, x₂, xₙ
- Greek letters: α, β, γ, θ, π, Σ, Δ
- Arrows: →, ⇌, ⇒
- Symbols: ≈, ≠, ≤, ≥, ∞, √, ∫, ∂

---

## 🧪 Testing

### Before Submitting

1. **Content Accuracy**
   - Verify all formulas
   - Check calculations
   - Validate examples

2. **Browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Mobile browsers

3. **Functionality**
   - Chapter loads correctly
   - All sections display
   - Examples work
   - Problems show answers

4. **Formatting**
   - No broken HTML
   - Proper styling
   - Responsive design

---

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation
- Part of making education accessible!

---

## 📞 Getting Help

### Questions?

- **GitHub Discussions:** Ask questions
- **Issues:** Report bugs
- **Email:** Contact maintainers

### Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)

---

## 🙏 Thank You!

Every contribution, no matter how small, makes a difference. You're helping thousands of students achieve their dreams!

**Together, we can democratize education! 🚀**

---

**Happy Contributing! 💙**
</body>
</html>