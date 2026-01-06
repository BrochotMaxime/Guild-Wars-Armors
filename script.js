const professionSection = document.getElementById('profession-selection');
const armorSection = document.getElementById('armor-selection');
const playerInventorySection = document.getElementById('player-inventory');
const missingResourcesSection = document.getElementById('missing-resources');
const resourceSourcesSection = document.getElementById('resource-sources');

// Reset all workflow steps and restore profession selection as entry point
const sections = document.querySelectorAll('.step');

const professionSelected = document.getElementById('profession');

const professionSelection = () => {
    resetSections(sections);
    if (professionSelected.value === '') {
        alert('Please select a profession to proceed.');
        return;
    } else {
        activateNextSection(professionSection, armorSection);
    }
};

professionSelected.addEventListener('change', professionSelection);

const resetSections = (sections) => {
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('inactive'); 
    });
    professionSection.classList.add('active');
};

const activateNextSection = (inactiveSection, activeSection) => {
    inactiveSection.classList.remove('active');
    activeSection.classList.remove('inactive');
    activeSection.classList.add('active');
};