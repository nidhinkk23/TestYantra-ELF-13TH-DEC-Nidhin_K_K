const body = document.getElementById("body")
// body.style.backgroundColor = 'cyan'


const button = document.getElementById("btn")

let arr = ['cyan', 'red', 'black', 'blue', 'yellow']

button.addEventListener('click', function () {
    let i = 0

    body.style.backgroundColor = arr[i]

    button.addEventListener("click", function () {
        i++
        body.style.backgroundColor = arr[i]

        button.addEventListener("click", function () {
            i++
            body.style.backgroundColor = arr[i]
            button.addEventListener("click", function () {
                i++
                body.style.backgroundColor = arr[i]
                location.reload()
            })
        })
    })


})





























/* button.addEventListener("click", function () {
    body.style.backgroundColor = "yellow"

    button.addEventListener("click", function () {
        body.style.backgroundColor = "blue"

        button.addEventListener("click", function () {
            body.style.backgroundColor = "red"

            button.addEventListener("click", function () {
                body.style.backgroundColor = "orange"

                button.addEventListener("click", function () {
                    body.style.backgroundColor = "green"

                    button.addEventListener("click", function () {
                        body.style.backgroundColor = "blue"

                        button.addEventListener("click", function () {
                            body.style.backgroundColor = "black"
                           location.reload()
                        })
                    })
                })
            })
        })
    })
})
 */