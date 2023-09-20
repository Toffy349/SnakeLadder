
let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }
        //events such as snakes and the ladders and the random placement
        if (p1sum == 4) {
            p1sum = 15
        }
        if (p1sum == 14) {
            p1sum = 26
        }
        if (p1sum == 816) {
            p1sum = 6
        }
        if (p1sum == 21) {
            p1sum = 43
        }
        if (p1sum == 49) {
            p1sum = 11
        }
        if (p1sum == 57) {
            p1sum = 25
        }
        if (p1sum == 62) {
            p1sum = 19
        }
        if (p1sum == 64) {
            p1sum = 60
        }
        if (p1sum == 28) {
            p1sum = 84
        }
        if (p1sum == 73) {
            p1sum = 35
        }
        if (p1sum == 71) {
            p1sum = 91
        }
        if (p1sum == 80) {
            p1sum = 100
        }
        if (p1sum == 93) {
            p1sum = 75
        }
        if (p1sum == 98) {
            p1sum = 61
        }
        if (p1sum == 8) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 17) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 8) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 33) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 37) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 41) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 51) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 56) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p1sum == 78) {
            p1sum = Math.floor(Math.random() * 99) + 1;
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

        if (p2sum == 4) {
            p2sum = 15
        }
        if (p2sum == 14) {
            p2sum = 26
        }
        if (p2sum == 816) {
            p2sum = 6
        }
        if (p2sum == 21) {
            p2sum = 43
        }
        if (p2sum == 49) {
            p2sum = 11
        }
        if (p2sum == 57) {
            p2sum = 25
        }
        if (p2sum == 62) {
            p2sum = 19
        }
        if (p2sum == 64) {
            p2sum = 60
        }
        if (p2sum == 28) {
            p2sum = 84
        }
        if (p2sum == 73) {
            p2sum = 35
        }
        if (p2sum == 71) {
            p2sum = 91
        }
        if (p2sum == 80) {
            p2sum = 100
        }
        if (p2sum == 93) {
            p2sum = 75
        }
        if (p2sum == 98) {
            p2sum = 61
        }
        if (p2sum == 8) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 17) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 8) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 33) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 37) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 41) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 51) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 56) {
            p2sum = Math.floor(Math.random() * 99) + 1;
        }
        if (p2sum == 78) {
            p2sum = Math.floor(Math.random() * 99) + 1;

        }
        sum = p2sum

    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 64}px`
        document.getElementById(`${player}`).style.top = `${-0 * 64 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 64}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 63 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 64}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 63 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 64}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 63 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 64}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 63 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})