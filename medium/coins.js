// https://www.codechef.com/problems/COINS

let input = ""
process.stdin.on('data', (d) => input += d)
process.stdin.on('end', () => {
    input = input.split('\n')
    main()
})

let cache = new Map()

function main() {
    input.filter((x) => x !== "")   // filter empty lines
        .map(Number)
        .forEach(solve)
}

function solve(n) {
    console.log(maxValue(n))
}

function maxValue(n) {
    if(n <= 2) return n
    if(n in cache) return cache[n]

    if(n <= Math.floor(n/2) + Math.floor(n/3) + Math.floor(n/4)) {
        cache[n] = maxValue(Math.floor(n/2)) + maxValue(Math.floor(n/3)) + maxValue(Math.floor(n/4))
    }
    else {
        cache[n] = n
    }

    return cache[n]
}
