const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', () => {
  const inputValue = parseFloat(document.getElementById('input-value').value);
  const inputUnit = document.getElementById('input-unit').value;
  const outputUnit = document.getElementById('output-unit').value;
  let outputValue;

  switch (inputUnit) {
    case 'meter':
      outputValue = convertMeterTo(outputUnit, inputValue);
      break;
    case 'kilometer':
      outputValue = convertKilometerTo(outputUnit, inputValue);
      break;
    case 'centimeter':
      outputValue = convertCentimeterTo(outputUnit, inputValue);
      break;
    case 'inch':
      outputValue = convertInchTo(outputUnit, inputValue);
      break;
    default:
      outputValue = inputValue;
  }

  document.getElementById('output-value').value = outputValue;
});

function convertMeterTo(unit, value) {
  switch (unit) {
    case 'meter':
      return value;
    case 'kilometer':
      return value / 1000;
    case 'centimeter':
      return value * 100;
    case 'inch':
      return value / 0.0254;
    default:
      return value;
  }
}

function convertKilometerTo(unit, value) {
  switch (unit) {
    case 'meter':
      return value * 1000;
    case 'kilometer':
      return value;
    case 'centimeter':
      return value * 100000;
    case 'inch':
      return value / 0.0000254;
    default:
      return value;
  }
}

function convertCentimeterTo(unit, value) {
switch (unit) {
    case 'meter':
    return value / 100;
    case 'kilometer':
        return value / 100000;
        case 'centimeter':
    return value;
        case 'inch':
        return value / 2.54;
        default:
        return value;
        }
    }
    
    function convertInchTo(unit, value) {
    switch (unit) {
    case 'meter':
    return value * 0.0254;
    case 'kilometer':
    return value * 0.0000254;
    case 'centimeter':
    return value * 2.54;
    case 'inch':
    return value;
    default:
    return value;
    }
    }