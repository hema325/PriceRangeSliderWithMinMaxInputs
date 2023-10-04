
const minInput = document.querySelector(".min-input"),
    maxInput = document.querySelector(".max-input"),
    minRange = document.querySelector(".min-range"),
    maxRange = document.querySelector(".max-range"),
    progress = document.querySelector(".progress");


const priceGab = 1000;

const updatePrice = (min, max) => {
    minInput.value = minRange.value = min;
    maxInput.value = maxRange.value = max;
    progress.style.left = `${min / minRange.max * 100}%`;
    progress.style.right = `${100 - max / minRange.max * 100}%`
}

const handlePriceInputs = e => {

    let min = Number(minInput.value),
        max = Number(maxInput.value);

    min = min < maxRange.min ? maxRange.min : max - min < priceGab && e.target.classList.contains("min-input") ? max - priceGab : min;
    max = max > maxRange.max ? maxRange.max : max - min < priceGab && e.target.classList.contains("max-input") ? min + priceGab : max;

    updatePrice(min, max);
}

const handleRangeInputs = e => {

    let min = Number(minRange.value),
        max = Number(maxRange.value);

    min = max - min < priceGab && e.target.classList.contains("min-range") ? max - priceGab : min;
    max = max - min < priceGab && e.target.classList.contains("max-range") ? min + priceGab : max;

    updatePrice(min, max);
}

minInput.addEventListener("change", handlePriceInputs);
maxInput.addEventListener("change", handlePriceInputs);
minRange.addEventListener("input", handleRangeInputs);
maxRange.addEventListener("input", handleRangeInputs);
