// Skip Husky install in production and CI

if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
    process.exit(0);
}
(async () => {
    const husky = (await require('husky')).default;
    console.log(husky());
})();
