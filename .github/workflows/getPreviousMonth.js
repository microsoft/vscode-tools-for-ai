// Get the date 30 days ago from today

function get30DaysAgo() {
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);
    return thirtyDaysAgo;
}

function get30DaysAgoFormatted() {
    const thirtyDaysAgo = get30DaysAgo();
    return thirtyDaysAgo.toISOString().split('T')[0];
}

// Export for use in GitHub Actions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        get30DaysAgo,
        get30DaysAgoFormatted,
    };
}

// For direct execution (like in GitHub Actions)
if (require.main === module) {
    console.log(get30DaysAgoFormatted());
}
