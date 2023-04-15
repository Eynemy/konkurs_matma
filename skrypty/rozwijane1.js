//skrypt na menu definicji
const definitions = document.querySelectorAll('.definition');
    definitions.forEach((definition) => {
      definition.addEventListener('mouseenter', () => {
        const tooltip = definition.querySelector('::after');
        tooltip.style.display = 'block';
      });
      definition.addEventListener('mouseleave', () => {
        const tooltip = definition.querySelector('::after');
        tooltip.style.display = 'none';
      });
    });

