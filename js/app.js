// Work on workflow steps based on user selections

// Sections representing each step in the workflow
const professionSection = document.getElementById('profession-selection');
const armorSection = document.getElementById('armor-selection');
const playerInventorySection = document.getElementById('player-inventory');
const missingResourcesSection = document.getElementById('missing-resources');
const resourceSourcesSection = document.getElementById('resource-sources');

const professionSelected = document.getElementById('profession');

// Workflow step list
const sections = document.querySelectorAll('.step');

// Function to update the states of workflow steps
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

// Function to validate profession selection
const isProfessionValid = (profession) => {
    if (!profession) {
        return false;
    } else {
        return true;
    }
};

// Profession change event
professionSelected.addEventListener('change', () => {
    if (!isProfessionValid(professionSelected.value)) {
        alert('Please select a profession to proceed.');
        updateWorkflowSteps(0); // First step active
    } else {
        updateWorkflowSteps(1); // Second step active
    };
});