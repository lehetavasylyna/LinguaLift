// Skip Husky install in production and CI
if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
    process.exit(0);
}

async function myFunction() {
    const husky = await husky.default;
    console.log(husky());
}

myFunction();
