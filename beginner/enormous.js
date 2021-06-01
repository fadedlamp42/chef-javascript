// https://www.codechef.com/problems/INTEST

input = ""
process.stdin.on('data', (d) => input += d)
process.stdin.on('end', () => {
    input = input.split('\n')
    main()
})

function main() {
    [_, k] = input.shift().split(' ').map(Number)
    let n = 0

    input.filter((x)  => x != "")    // remove empty lines
         .map(Number)                // map strings to numbers
         .forEach((x) => {
             if(x%k === 0) n++       // increment n when x is divisble by k
         })

    console.log(n)
}
