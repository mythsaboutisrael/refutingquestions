// Your JavaScript code goes here
document.addEventListener('DOMContentLoaded', function() {
  // Code to execute after the DOM is ready
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    link.setAttribute('target', '_blank');
  });
});


function mai_header_mobile_menu_hide_show_content(element){
            var mai_selected_mobile_menu_content = element.parentElement.querySelector('.mai-mobile-menu-item-dropdown-content');
            var mai_selected_mobile_menu_chevron_down = element.parentElement.querySelector('.mai-mobile-menu-chevron-down');
            var mai_selected_mobile_menu_chevron_up = element.parentElement.querySelector('.mai-mobile-menu-chevron-up');
        
        
            if (mai_header_mobile_menu_hide_show_content !== null) {
                    mai_selected_mobile_menu_content.classList.toggle("mai-mobile-content-hide-div"); 
                    mai_selected_mobile_menu_chevron_down.classList.toggle("mai-hide-div"); 
                    mai_selected_mobile_menu_chevron_up.classList.toggle("mai-hide-div");
              }      
          }
