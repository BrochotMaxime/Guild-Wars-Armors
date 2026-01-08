import { gameData } from './data.js';

console.log(gameData);
console.log(document.getElementById('profession'));

const professionSection = document.getElementById('profession-selection');
const armorSection = document.getElementById('armor-selection');
const playerInventorySection = document.getElementById('player-inventory');
const missingResourcesSection = document.getElementById('missing-resources');
const resourceSourcesSection = document.getElementById('resource-sources');

const professionSelect = document.getElementById('profession');

// Workflow step list
const sections = document.querySelectorAll('.step');

const updateWorkflowSteps = (currentStepIndex) => {
    sections.forEach((section, index) => {
        section.classList.remove('active', 'inactive', 'completed');
        if (index < currentStepIndex) {
            section.classList.add('completed');
        } else if (index === currentStepIndex) {
            section.classList.add('active');
        } else {
            section.classList.add('inactive');
        };
    });
};

const isProfessionValid = (profession) => !!profession;

professionSelect.addEventListener('change', () => {
    if (!isProfessionValid(professionSelect.value)) {
        alert('Please select a profession to proceed.');
        updateWorkflowSteps(0);
    } else {
        updateWorkflowSteps(1);
    }
});

// Populate professions
const populateProfessions = () => {
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "-- Choose a profession --";
    professionSelect.appendChild(defaultOption);

    Object.values(gameData.professions).forEach(prof => {
        const option = document.createElement('option');
        option.value = prof.id;
        option.textContent = prof.name;
        professionSelect.appendChild(option);
    });
};

// Appel direct
populateProfessions();
