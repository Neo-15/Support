/* Smooth scroll */
    let  data_scroll_array = document.querySelectorAll('[data-scroll]');
    let main_tag = document.querySelectorAll('body', 'html');

    data_scroll_array.forEach(element => {
        let data_scroll_item = element;

        function smoothScroll(){

            let blockid = this.data("scroll"),
            blockOffset = blockid.offset().top-115;
    
            main_tag.animate({scrollTop: blockOffset},500);
        }
    
        data_scroll_item .addEventListener("click", smoothScroll);
    });

    

    
  