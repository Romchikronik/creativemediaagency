var 
images              = document.images,
images_total_count  = images.length,
images_loaded_count = 0;
preloader           = document.getElementById('page-preloader'),
perc_display        = document.getElementById('load_perc');

for (var i = 0; i < images_total_count; i++) {
image_clone = new Image();
image_clone.onload  = images_loaded;
image_clone.onerror = images_loaded;
image_clone.src     = images[i].src;
}

function images_loaded() {
    images_loaded_count ++;
    perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';
    $('html').css('overflow-y', 'hidden');  //  если что удалим
    
    if(images_loaded_count >= images_total_count){
        setTimeout( function() {
            if(!preloader.classList.contains('done')){
                preloader.classList.add('done');
                $('html').css('overflow-y', 'scroll');  // если что удалим
            }
        }, 1000);
    }
}


