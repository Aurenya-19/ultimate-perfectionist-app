<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages Site</title>
</head>
<body>
// MASTER INTEGRATION FILE
// Combines all chapter data and provides unified interface

// Import all chapter databases
const ALL_CHAPTERS = {
    physics: [],
    chemistry: [],
    maths: []
};

// ==================== PHYSICS CHAPTERS ====================
const PHYSICS_CHAPTERS = [
    { id: 'p1', title: 'Units and Measurements', status: 'complete', problems: 50 },
    { id: 'p2', title: 'Motion in a Straight Line', status: 'complete', problems: 45 },
    { id: 'p3', title: 'Laws of Motion', status: 'complete', problems: 60 },
    { id: 'p4', title: 'Work, Energy and Power', status: 'complete', problems: 55 },
    { id: 'p5', title: 'Rotational Motion', status: 'complete', problems: 50 },
    { id: 'p6', title: 'Gravitation', status: 'complete', problems: 45 },
    { id: 'p7', title: 'Properties of Bulk Matter', status: 'partial', problems: 30 },
    { id: 'p8', title: 'Thermodynamics', status: 'complete', problems: 50 },
    { id: 'p9', title: 'Kinetic Theory of Gases', status: 'complete', problems: 40 },
    { id: 'p10', title: 'Oscillations and Waves', status: 'complete', problems: 55 },
    { id: 'p11', title: 'Electrostatics', status: 'complete', problems: 60 },
    { id: 'p12', title: 'Current Electricity', status: 'complete', problems: 50 },
    { id: 'p13', title: 'Magnetic Effects of Current', status: 'partial', problems: 35 },
    { id: 'p14', title: 'Magnetism and Matter', status: 'partial', problems: 30 },
    { id: 'p15', title: 'Electromagnetic Induction', status: 'complete', problems: 45 },
    { id: 'p16', title: 'AC Circuits', status: 'partial', problems: 25 },
    { id: 'p17', title: 'Electromagnetic Waves', status: 'partial', problems: 20 },
    { id: 'p18', title: 'Ray Optics and Optical Instruments', status: 'complete', problems: 50 }
];

// ==================== CHEMISTRY CHAPTERS ====================
const CHEMISTRY_CHAPTERS = [
    { id: 'c1', title: 'Atomic Structure', status: 'complete', problems: 45 },
    { id: 'c2', title: 'Classification of Elements', status: 'partial', problems: 25 },
    { id: 'c3', title: 'Chemical Bonding', status: 'complete', problems: 50 },
    { id: 'c4', title: 'States of Matter', status: 'partial', problems: 30 },
    { id: 'c5', title: 'Thermodynamics', status: 'complete', problems: 40 },
    { id: 'c6', title: 'Chemical Kinetics', status: 'partial', problems: 35 },
    { id: 'c7', title: 'Solutions', status: 'partial', problems: 30 },
    { id: 'c8', title: 'Equilibrium', status: 'complete', problems: 45 },
    { id: 'c9', title: 'Redox Reactions', status: 'partial', problems: 25 },
    { id: 'c10', title: 'Hydrocarbons', status: 'complete', problems: 40 },
    { id: 'c11', title: 'Organic Chemistry - Basic Principles', status: 'partial', problems: 30 },
    { id: 'c12', title: 'Aldehydes, Ketones and Carboxylic Acids', status: 'complete', problems: 45 },
    { id: 'c13', title: 'Amines', status: 'partial', problems: 25 },
    { id: 'c14', title: 'Biomolecules', status: 'partial', problems: 20 },
    { id: 'c15', title: 'Polymers', status: 'partial', problems: 20 },
    { id: 'c16', title: 'Electrochemistry', status: 'complete', problems: 40 },
    { id: 'c17', title: 'Surface Chemistry', status: 'partial', problems: 25 },
    { id: 'c18', title: 'Coordination Compounds', status: 'partial', problems: 30 }
];

// ==================== MATHS CHAPTERS ====================
const MATHS_CHAPTERS = [
    { id: 'm1', title: 'Sets, Relations and Functions', status: 'complete', problems: 50 },
    { id: 'm2', title: 'Complex Numbers', status: 'complete', problems: 45 },
    { id: 'm3', title: 'Quadratic Equations', status: 'partial', problems: 30 },
    { id: 'm4', title: 'Sequences and Series', status: 'partial', problems: 35 },
    { id: 'm5', title: 'Permutations and Combinations', status: 'partial', problems: 40 },
    { id: 'm6', title: 'Matrices and Determinants', status: 'complete', problems: 50 },
    { id: 'm7', title: 'Binomial Theorem', status: 'partial', problems: 30 },
    { id: 'm8', title: 'Trigonometry', status: 'partial', problems: 45 },
    { id: 'm9', title: 'Coordinate Geometry', status: 'partial', problems: 40 },
    { id: 'm10', title: 'Vectors', status: 'partial', problems: 35 },
    { id: 'm11', title: '3D Geometry', status: 'partial', problems: 30 },
    { id: 'm12', title: 'Limits and Derivatives', status: 'complete', problems: 50 },
    { id: 'm13', title: 'Probability', status: 'complete', problems: 45 },
    { id: 'm14', title: 'Statistics', status: 'partial', problems: 25 }
];

// ==================== STATISTICS CALCULATOR ====================
function calculateStats() {
    const stats = {
        physics: {
            total: PHYSICS_CHAPTERS.length,
            complete: PHYSICS_CHAPTERS.filter(ch => ch.status === 'complete').length,
            problems: PHYSICS_CHAPTERS.reduce((sum, ch) => sum + ch.problems, 0)
        },
        chemistry: {
            total: CHEMISTRY_CHAPTERS.length,
            complete: CHEMISTRY_CHAPTERS.filter(ch => ch.status === 'complete').length,
            problems: CHEMISTRY_CHAPTERS.reduce((sum, ch) => sum + ch.problems, 0)
        },
        maths: {
            total: MATHS_CHAPTERS.length,
            complete: MATHS_CHAPTERS.filter(ch => ch.status === 'complete').length,
            problems: MATHS_CHAPTERS.reduce((sum, ch) => sum + ch.problems, 0)
        }
    };
    
    stats.overall = {
        totalChapters: stats.physics.total + stats.chemistry.total + stats.maths.total,
        completeChapters: stats.physics.complete + stats.chemistry.complete + stats.maths.complete,
        totalProblems: stats.physics.problems + stats.chemistry.problems + stats.maths.problems
    };
    
    stats.overall.completionPercentage = Math.round(
        (stats.overall.completeChapters / stats.overall.totalChapters) * 100
    );
    
    return stats;
}

// ==================== SEARCH FUNCTIONALITY ====================
function searchChapters(query) {
    query = query.toLowerCase();
    const results = {
        physics: [],
        chemistry: [],
        maths: []
    };
    
    PHYSICS_CHAPTERS.forEach(ch => {
        if (ch.title.toLowerCase().includes(query)) {
            results.physics.push(ch);
        }
    });
    
    CHEMISTRY_CHAPTERS.forEach(ch => {
        if (ch.title.toLowerCase().includes(query)) {
            results.chemistry.push(ch);
        }
    });
    
    MATHS_CHAPTERS.forEach(ch => {
        if (ch.title.toLowerCase().includes(query)) {
            results.maths.push(ch);
        }
    });
    
    return results;
}

// ==================== FILTER FUNCTIONALITY ====================
function filterChapters(subject, status) {
    let chapters = [];
    
    switch(subject) {
        case 'physics':
            chapters = PHYSICS_CHAPTERS;
            break;
        case 'chemistry':
            chapters = CHEMISTRY_CHAPTERS;
            break;
        case 'maths':
            chapters = MATHS_CHAPTERS;
            break;
        case 'all':
            chapters = [...PHYSICS_CHAPTERS, ...CHEMISTRY_CHAPTERS, ...MATHS_CHAPTERS];
            break;
    }
    
    if (status && status !== 'all') {
        chapters = chapters.filter(ch => ch.status === status);
    }
    
    return chapters;
}

// ==================== PROGRESS TRACKING ====================
class ProgressTracker {
    constructor() {
        this.progress = this.loadProgress();
    }
    
    loadProgress() {
        const saved = localStorage.getItem('nexus_progress');
        return saved ? JSON.parse(saved) : {
            completedChapters: [],
            solvedProblems: {},
            testScores: [],
            studyTime: 0,
            lastActive: new Date().toISOString()
        };
    }
    
    saveProgress() {
        localStorage.setItem('nexus_progress', JSON.stringify(this.progress));
    }
    
    markChapterComplete(chapterId) {
        if (!this.progress.completedChapters.includes(chapterId)) {
            this.progress.completedChapters.push(chapterId);
            this.saveProgress();
        }
    }
    
    markProblemSolved(chapterId, problemId) {
        if (!this.progress.solvedProblems[chapterId]) {
            this.progress.solvedProblems[chapterId] = [];
        }
        if (!this.progress.solvedProblems[chapterId].includes(problemId)) {
            this.progress.solvedProblems[chapterId].push(problemId);
            this.saveProgress();
        }
    }
    
    addTestScore(testId, score, maxScore) {
        this.progress.testScores.push({
            testId,
            score,
            maxScore,
            percentage: (score / maxScore) * 100,
            date: new Date().toISOString()
        });
        this.saveProgress();
    }
    
    addStudyTime(minutes) {
        this.progress.studyTime += minutes;
        this.progress.lastActive = new Date().toISOString();
        this.saveProgress();
    }
    
    getStats() {
        const totalChapters = PHYSICS_CHAPTERS.length + CHEMISTRY_CHAPTERS.length + MATHS_CHAPTERS.length;
        const completedChapters = this.progress.completedChapters.length;
        
        let totalProblems = 0;
        let solvedProblems = 0;
        
        Object.values(this.progress.solvedProblems).forEach(problems => {
            solvedProblems += problems.length;
        });
        
        [...PHYSICS_CHAPTERS, ...CHEMISTRY_CHAPTERS, ...MATHS_CHAPTERS].forEach(ch => {
            totalProblems += ch.problems;
        });
        
        const avgTestScore = this.progress.testScores.length > 0
            ? this.progress.testScores.reduce((sum, test) => sum + test.percentage, 0) / this.progress.testScores.length
            : 0;
        
        return {
            chaptersCompleted: completedChapters,
            totalChapters,
            chapterProgress: Math.round((completedChapters / totalChapters) * 100),
            problemsSolved: solvedProblems,
            totalProblems,
            problemProgress: Math.round((solvedProblems / totalProblems) * 100),
            testsAttempted: this.progress.testScores.length,
            averageScore: Math.round(avgTestScore),
            studyHours: Math.round(this.progress.studyTime / 60),
            lastActive: this.progress.lastActive
        };
    }
    
    reset() {
        this.progress = {
            completedChapters: [],
            solvedProblems: {},
            testScores: [],
            studyTime: 0,
            lastActive: new Date().toISOString()
        };
        this.saveProgress();
    }
}

// ==================== RECOMMENDATION ENGINE ====================
class RecommendationEngine {
    constructor(progressTracker) {
        this.tracker = progressTracker;
    }
    
    getRecommendedChapters(limit = 5) {
        const stats = this.tracker.getStats();
        const allChapters = [...PHYSICS_CHAPTERS, ...CHEMISTRY_CHAPTERS, ...MATHS_CHAPTERS];
        
        // Filter incomplete chapters
        const incomplete = allChapters.filter(ch => 
            !this.tracker.progress.completedChapters.includes(ch.id)
        );
        
        // Sort by status (complete chapters first for review)
        incomplete.sort((a, b) => {
            if (a.status === 'complete' && b.status !== 'complete') return -1;
            if (a.status !== 'complete' && b.status === 'complete') return 1;
            return 0;
        });
        
        return incomplete.slice(0, limit);
    }
    
    getWeakAreas() {
        const weakAreas = [];
        
        this.tracker.progress.testScores.forEach(test => {
            if (test.percentage < 60) {
                weakAreas.push({
                    testId: test.testId,
                    score: test.percentage,
                    date: test.date
                });
            }
        });
        
        return weakAreas;
    }
    
    getStudyPlan(daysUntilExam) {
        const stats = this.tracker.getStats();
        const remainingChapters = stats.totalChapters - stats.chaptersCompleted;
        const chaptersPerDay = Math.ceil(remainingChapters / daysUntilExam);
        
        return {
            daysRemaining: daysUntilExam,
            chaptersRemaining: remainingChapters,
            chaptersPerDay,
            recommendedStudyHours: chaptersPerDay * 3, // 3 hours per chapter
            revisionDays: Math.ceil(daysUntilExam * 0.2), // 20% for revision
            testDays: Math.ceil(daysUntilExam * 0.1) // 10% for tests
        };
    }
}

// ==================== PERFORMANCE ANALYTICS ====================
class PerformanceAnalytics {
    constructor(progressTracker) {
        this.tracker = progressTracker;
    }
    
    getSubjectWisePerformance() {
        const performance = {
            physics: { solved: 0, total: 0 },
            chemistry: { solved: 0, total: 0 },
            maths: { solved: 0, total: 0 }
        };
        
        PHYSICS_CHAPTERS.forEach(ch => {
            performance.physics.total += ch.problems;
            if (this.tracker.progress.solvedProblems[ch.id]) {
                performance.physics.solved += this.tracker.progress.solvedProblems[ch.id].length;
            }
        });
        
        CHEMISTRY_CHAPTERS.forEach(ch => {
            performance.chemistry.total += ch.problems;
            if (this.tracker.progress.solvedProblems[ch.id]) {
                performance.chemistry.solved += this.tracker.progress.solvedProblems[ch.id].length;
            }
        });
        
        MATHS_CHAPTERS.forEach(ch => {
            performance.maths.total += ch.problems;
            if (this.tracker.progress.solvedProblems[ch.id]) {
                performance.maths.solved += this.tracker.progress.solvedProblems[ch.id].length;
            }
        });
        
        // Calculate percentages
        Object.keys(performance).forEach(subject => {
            performance[subject].percentage = Math.round(
                (performance[subject].solved / performance[subject].total) * 100
            );
        });
        
        return performance;
    }
    
    getProgressOverTime() {
        const timeline = [];
        const sortedScores = [...this.tracker.progress.testScores].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
        
        sortedScores.forEach(test => {
            timeline.push({
                date: new Date(test.date).toLocaleDateString(),
                score: test.percentage,
                testId: test.testId
            });
        });
        
        return timeline;
    }
    
    getStrengthsAndWeaknesses() {
        const subjectPerf = this.getSubjectWisePerformance();
        const strengths = [];
        const weaknesses = [];
        
        Object.entries(subjectPerf).forEach(([subject, data]) => {
            if (data.percentage >= 70) {
                strengths.push({ subject, percentage: data.percentage });
            } else if (data.percentage < 50) {
                weaknesses.push({ subject, percentage: data.percentage });
            }
        });
        
        return { strengths, weaknesses };
    }
}

// ==================== GLOBAL INSTANCES ====================
const progressTracker = new ProgressTracker();
const recommendationEngine = new RecommendationEngine(progressTracker);
const performanceAnalytics = new PerformanceAnalytics(progressTracker);

// ==================== EXPORT ====================
if (typeof window !== 'undefined') {
    window.NEXUS = {
        chapters: {
            physics: PHYSICS_CHAPTERS,
            chemistry: CHEMISTRY_CHAPTERS,
            maths: MATHS_CHAPTERS
        },
        stats: calculateStats(),
        search: searchChapters,
        filter: filterChapters,
        progress: progressTracker,
        recommendations: recommendationEngine,
        analytics: performanceAnalytics
    };
    
    console.log('🎯 NEXUS REALITY - Master Integration Loaded!');
    console.log('📊 Platform Statistics:', window.NEXUS.stats);
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PHYSICS_CHAPTERS,
        CHEMISTRY_CHAPTERS,
        MATHS_CHAPTERS,
        calculateStats,
        searchChapters,
        filterChapters,
        ProgressTracker,
        RecommendationEngine,
        PerformanceAnalytics
    };
}
</body>
</html>