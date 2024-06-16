window.addEventListener('DOMContentLoaded', (event) => {
    const shirts = document.querySelectorAll('img[class^="shirt"]');

    shirts.forEach(shirt => {
        shirt.addEventListener("mouseover", () => {
            if (shirt.classList.contains('shirt1')) {
                shirt.src = "https://w0.peakpx.com/wallpaper/491/881/HD-wallpaper-man-wearing-black-crew-neck-t-shirt.jpg";
            } else if (shirt.classList.contains('shirt2')) {
                shirt.src = "https://www.qualitylogoproducts.com/custom-tshirts/gildan-adult-heavy-cotton-tshirtwhite-hq.jpg?size=thumb";
            } else if (shirt.classList.contains('shirt3')) {
                shirt.src = "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/z/g/d/xl-st2-vebnor-original-imagpw72vhqfczsp.jpeg?q=90&crop=false";
            }
            shirt.style.cursor = "pointer";
        });

        shirt.addEventListener("mouseout", () => {
            if (shirt.classList.contains('shirt1')) {
                shirt.src = "https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg";
            } else if (shirt.classList.contains('shirt2')) {
                shirt.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3IuJm8lAGbmmccpc5ypeTcpHVg2oO31VSvgVCKDitZNg6p75gIUx3nu2JmUMx8W8OYY&usqp=CAU";
            } else if (shirt.classList.contains('shirt3')) {
                shirt.src = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/6282402/1.jpg?8807";
            }
        });
    });
});
