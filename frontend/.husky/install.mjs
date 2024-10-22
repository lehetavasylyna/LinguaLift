// Skip Husky install in production and CI
// import husky from 'husky';
// import husky from 'husky';

if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
    process.exit(0);
}
async function myFunction() {
    const husky = await husky.default;
    console.log(husky());
}

myFunction();
