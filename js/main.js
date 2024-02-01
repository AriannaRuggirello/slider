(function () {
    const pictures = [

        '1',
        '2',
        '3',
        '4',
        '5',
        '6',


    ];
    const buttons = document.querySelectorAll('.btn');
    const imageDiv = document.querySelector('.image-container');

    let counter = 0;
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {

            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                console.log('btn left' + counter);
                imageDiv.style.background = `url("images/${pictures[counter]}.jpg")`

            }

            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                console.log(counter);
                console.log('btn right' + counter);

                imageDiv.style.background = `url("images/${pictures[counter]}.jpg") center/cover no-repeat`


            }

        })
    })
})();





