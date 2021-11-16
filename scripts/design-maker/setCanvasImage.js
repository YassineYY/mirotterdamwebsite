export function setCanvasImage(canvas) {// get query string parameter
    const defaultLocationId = 5
    const locationId = getLocationId() || defaultLocationId // default location id of 5 for testing

    // Oude code, maakt gebruik van API
    // set background of canvas
    // canvas.style.backgroundImage
    //     = `url('${window.location.protocol}//${window.location.host}/api/locations/${locationId}/image')`

    canvas.style.backgroundImage = `url('assets/img/location_images/L-${locationId}.png')`
    alert('gets here');
}

function getLocationId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.location
}