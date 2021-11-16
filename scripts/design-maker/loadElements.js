export function loadElements(elementOnClick) {

    // Oude code haalt alle afbeeldingen op
    // fetch('api/elements')
    //     .then(res => res.json())
    //     .then(files => files.forEach(file => {
    //         // adds images to menu
    //         let image = document.createElement('img')
    //         image.src = 'assets/elements/' + file
    //         document.getElementById('elements-menu').appendChild(image)
    //
    //         // add image to canvas onclick
    //         image.addEventListener('click', (e) => elementOnClick(e.target))
    //     }))

    // TODO haal afbeeldingen dynamisch op
    const files = ['Bloem1.png', 'Bloem2.png', 'Bloem3.png', 'Bloem4.png', 'Bloem5.png']
    files.forEach(file => {
        // adds images to menu
        let image = document.createElement('img')
        image.src = 'assets/elements/' + file
        document.getElementById('elements-menu').appendChild(image)

        // add image to canvas onclick
        image.addEventListener('click', (e) => elementOnClick(e.target))
    })
}

