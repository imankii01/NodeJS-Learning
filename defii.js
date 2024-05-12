function modExp(base, exponent, modulus) {
    if (modulus === 1) return 0;
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }
        exponent = Math.floor(exponent / 2);
        base = (base * base) % modulus;
    }
    return result;
}
function generateRandomPrime() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    let prime;
    do {
        prime = Math.floor(Math.random() * 1000) + 1000; 
    } while (!isPrime(prime)); 
    return prime;
}

function diffieHellman() {
    const prime = generateRandomPrime();
    const primitiveRoot = 2;

    const alicePrivate = Math.floor(Math.random() * (prime - 1)) + 1;

    const bobPrivate = Math.floor(Math.random() * (prime - 1)) + 1;
    const alicePublic = modExp(primitiveRoot, alicePrivate, prime);

    const bobPublic = modExp(primitiveRoot, bobPrivate, prime);

    const aliceSecret = modExp(bobPublic, alicePrivate, prime);

    const bobSecret = modExp(alicePublic, bobPrivate, prime);

    if (aliceSecret === bobSecret) {
        console.log("Shared secret keys match!");
        console.log("Shared secret key:", aliceSecret);
    } else {
        console.log("Error: Shared secret keys do not match!");
    }
}

diffieHellman();
