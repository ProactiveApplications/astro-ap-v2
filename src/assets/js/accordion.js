class ModernAccordion {
constructor() {
    this.accordionItems = document.querySelectorAll('.accordion-item');
    this.init();
}

init() {
    this.accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => this.toggleItem(item));
    });
}

toggleItem(clickedItem) {
    const isActive = clickedItem.classList.contains('active');
    
    // Close all items
    this.accordionItems.forEach(item => {
        item.classList.remove('active');
    });

    // Open clicked item if it wasn't already active
    if (!isActive) {
        clickedItem.classList.add('active');
    }
    }
}

// Initialize the accordion when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernAccordion();
});