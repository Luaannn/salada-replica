document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Accordion Logic mimicking Radix UI data-attributes for animation support
  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('[data-accordion-item]');
      const content = item.querySelector('[data-accordion-content]');
      const chevron = trigger.querySelector('[data-lucide="chevron-down"]');
      
      const isOpen = item.dataset.state === 'open';
      
      // Close all others
      document.querySelectorAll('[data-accordion-item]').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.dataset.state = 'closed';
          const otherContent = otherItem.querySelector('[data-accordion-content]');
          const otherChevron = otherItem.querySelector('[data-lucide="chevron-down"]');
          
          otherContent.style.display = 'none'; // Simple fallback
          otherContent.dataset.state = 'closed';
          if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current
      if (isOpen) {
        item.dataset.state = 'closed';
        content.dataset.state = 'closed';
        content.style.display = 'none';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      } else {
        item.dataset.state = 'open';
        content.dataset.state = 'open';
        content.style.display = 'block';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });
});
