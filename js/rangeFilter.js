let sliderRan = document.querySelectorAll('.filter__range-slider');

sliderRan.forEach(sliderElement => {
    let inputMax = sliderElement.parentElement.firstElementChild.lastElementChild
    let inputMin = sliderElement.parentElement.firstElementChild.firstElementChild
    let min = +sliderElement.dataset.min
    let max = +sliderElement.dataset.max
    let startMin = sliderElement.getAttribute('data-min-new')
    let startMax = sliderElement.getAttribute('data-max-new')

    if (sliderElement) {
        console.log(123)

        noUiSlider.create(sliderElement, {
            start: [startMin, startMax],
            connect: true,
            range: {
                min,
                max
            },
            step: 1,
        });

        sliderElement.noUiSlider.on('update', (val, handle) => {
            const value = val[handle];

            if (handle) {
                inputMax.value = Math.round(value);
            } else {
                inputMin.value = Math.round(value);
            }
        });

        inputMin.addEventListener('change', function() {
            sliderElement.noUiSlider.set([this.value, null]);
        });
        inputMax.addEventListener('change', function() {
            sliderElement.noUiSlider.set([null, this.value]);
        });
    }
})