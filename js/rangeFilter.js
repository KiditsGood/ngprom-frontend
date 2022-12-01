let sliderRan = document.querySelectorAll('.filter__range-slider');
let catalogParent = $('.catalog__filter-item')

sliderRan.forEach((sliderElement, index) => {
    let inputMax = sliderElement.parentElement.firstElementChild.lastElementChild
    let inputMin = sliderElement.parentElement.firstElementChild.firstElementChild
    let min = +sliderElement.dataset.min
    let max = +sliderElement.dataset.max
    let startMin = sliderElement.getAttribute('data-min-new')
    let startMax = sliderElement.getAttribute('data-max-new')

    if (sliderElement) {
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

        sliderElement.noUiSlider.on('change', function () {
            $('.filter--submit').remove()

            $(this.target.parentElement.parentElement).prepend(`
              <div class="filter--submit">
                <div class="filter__submit-triangle"></div>
                <div class="filter__submit">
                  <button class="filter__submit-button">Применить <span class="filter__submit-button--value">(451)</span></button>
                </div>
              </div>
            `)
        })
    }
})

$('.range--min, .range--max').on('change', function () {
    $('.filter--submit').remove()

    $(this).parent().parent().parent().prepend(`
      <div class="filter--submit">
        <div class="filter__submit-triangle"></div>
        <div class="filter__submit">
          <button class="filter__submit-button">Применить <span class="filter__submit-button--value">(451)</span></button>
        </div>
      </div>
    `)
})

$('.search__check label').on('click', function () {
    $('.filter--submit').remove()

    $(this).parent().parent().prepend(`
      <div class="filter--submit">
        <div class="filter__submit-triangle"></div>
        <div class="filter__submit">
          <button class="filter__submit-button">Применить <span class="filter__submit-button--value">(451)</span></button>
        </div>
      </div>
    `)
})