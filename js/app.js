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

const isProfessionValid = (profession) => profession !== "";

professionSelect.addEventListener('change', () => {
    if (!isProfessionValid(professionSelect.value)) {
        alert('Please select a profession to proceed.');
        updateWorkflowSteps(0);
    } else {
        updateWorkflowSteps(1);
    };

    // Populate armor sets based on selected profession
    populateArmorsOptions(professionSelect.value);
});


// Populate professions dropdown in section 1
const populateProfessionsOptions = () => {
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
populateProfessionsOptions();


// Code to handle armor selection in section 2
const armorSelect = document.querySelector('.armor-sets');

const armorSelectElement = document.createElement('select');

const populateArmorsOptions = (professionId) => {
    armorSelect.innerHTML = ''; // Clear previous options

    const armorLabelElement = document.createElement('label');
    armorLabelElement.htmlFor = 'armor-select';
    armorLabelElement.textContent = professionId.charAt(0).toUpperCase() + professionId.slice(1) + " armors : ";
    armorSelect.appendChild(armorLabelElement);

    armorSelectElement.id = 'armor-select';
    armorSelectElement.name = 'armor-select';
    armorLabelElement.appendChild(armorSelectElement);
    
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "-- Choose an armor --";
    armorSelectElement.appendChild(defaultOption);

    const filteredArmors = Object.values(gameData.armors).filter(armor => armor.profession === professionId);

    filteredArmors.forEach(armor => {
        const option = document.createElement('option');
        option.value = armor.id;
        option.textContent = armor.name;
        armorSelectElement.appendChild(option);
    });
};

// Code to handle material cost according to armor selection in section 2

const armorCost = document.querySelector('.armor-cost');

const isArmorValid = (armorId) => armorId !== '';

const fillArmorCost = (armor) => {
    // Gold
    const goldLine = document.createElement('p');
    goldLine.textContent = `Gold: ${armor.cost.gold}`;
    armorCost.appendChild(goldLine);

    // Materials
    const materialsTitle = document.createElement('p');
    materialsTitle.textContent = 'Materials:';
    armorCost.appendChild(materialsTitle);

    const materialsList = document.createElement('ul');

    Object.entries(armor.cost.materials).forEach(([materialId, quantity]) => {
        const material = gameData.materials[materialId];

        const li = document.createElement('li');
        li.textContent = `${material.name}: ${quantity}`;
        materialsList.appendChild(li);
    });

    armorCost.appendChild(materialsList);
};

armorSelectElement.addEventListener('change', () => {
    armorCost.innerHTML = '';

    if (!isArmorValid(armorSelectElement.value)) {
        alert('Please select an armor to proceed.');
        return;
    }

    const selectedArmor = Object.values(gameData.armors).find(armor => armor.id === armorSelectElement.value);

    fillArmorCost(selectedArmor);
});


// Checking player inventory
