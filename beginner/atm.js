// https://www.codechef.com/problems/HS08TEST

let input = ""
process.stdin.on('data', (d) => input += d)
process.stdin.on('end', () => {
    input = input.split('\n')
    main()
})

function main() {
    let [withdraw, balance] = input[0].split(' ').map(Number)
    withdraw += 0.5

    if(withdraw <= balance && withdraw%5 === 0.5)
        process.stdout.write((balance - withdraw).toFixed(2))
    else
        process.stdout.write(balance.toFixed(2))

    process.stdout.write('\n')
}
