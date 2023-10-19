(function($) {
  // Initialize Color Picker
  $('.color-picker').wpColorPicker();

  // Let's clean up all the notices from other plugins to make it look nicer
  $(".error").remove();
  $('[class*="notice"]').each(function() {
    let $element = $(this);

    if (!$element.hasClass("settings-error")) {
      $(this).remove();
    }
  });

  $(window).load(function() {
    // We used a loader as a placeholder to prevent layout shifting on load
    $(".load-settings").remove();

    // Window loaded, lets show settings
    $(".settings-container").show();

    let $hash = $(location).attr('hash').slice(1);
    let toggled = false;
    let input_group_text_max_width = 0;

    // Love the style of labels next to inputs, but dislike the various sizes, let's fix that
    $(".input-group-text").each(function() {
      let input_group_width = $(this).innerWidth();

      if (input_group_width > input_group_text_max_width) {
        input_group_text_max_width = input_group_width;
      }
    });

    $(".input-group-text").css("width", input_group_text_max_width);

    if ($hash) {
      let $selected_section_section = $hash;

      // Add active class and add handling for before and after active element
      $(".nav-link[selected-section=" + $selected_section_section + "]").prevAll().removeClass('active');
      $(".nav-link[selected-section=" + $selected_section_section + "]").prevAll().addClass('previous');
      $(".nav-link[selected-section=" + $selected_section_section + "]").removeClass('previous');
      $(".nav-link[selected-section=" + $selected_section_section + "]").addClass('active');
      $(".nav-link[selected-section=" + $selected_section_section + "]").nextAll().removeClass('active');
      $(".nav-link[selected-section=" + $selected_section_section + "]").nextAll().removeClass('previous');

      // Update Title Bar
      $(".row.top-bar").text(slug_to_title($selected_section_section));

      // Handles displaying clicked tab while hiding others
      $(".options").each(function() {
        let $section_element = $(this);
        let $section = $(this).attr('section');

        if ($section != $selected_section_section) {
          $section_element.hide();
        } else {
          $section_element.show();
        }
      });
    }
    
    $(".nav-link").on("click", function(e) {
      let $selected_section_element = $(this);
      let $selected_section_section = $selected_section_element.attr('selected-section');

      // Add active class and add handling for before and after active element
      $(".nav-link[selected-section=" + $selected_section_section + "]").prevAll().removeClass('active');
      $(".nav-link[selected-section=" + $selected_section_section + "]").prevAll().addClass('previous');
      $(".nav-link[selected-section=" + $selected_section_section + "]").removeClass('previous');
      $(".nav-link[selected-section=" + $selected_section_section + "]").addClass('active');
      $(".nav-link[selected-section=" + $selected_section_section + "]").nextAll().removeClass('active');
      $(".nav-link[selected-section=" + $selected_section_section + "]").nextAll().removeClass('previous');

      // Update Title Bar
      $(".row.top-bar").text(slug_to_title($selected_section_section));

      // Handles displaying clicked tab while hiding others
      $(".options").each(function() {
        let $section_element = $(this);
        let $section = $(this).attr('section');

        if ($section != $selected_section_section) {
          $section_element.hide();
        } else {
          $section_element.show();
        }
      });

      // Close helpers
      toggled = false;

      $(this).parent().parent().parent().find(".col-lg-8").toggleClass("col-lg-10").toggleClass("col-lg-8");
      $(this).parent().parent().parent().find(".col-md-10").toggleClass("col-md-12").toggleClass("col-md-10");
      $(".helper-sidebar").hide();
    });

    // Helper Sidebar
    $(".helper-icon").click(function() {
      var helper = $(this).parents('.input-group').find('.helper-placeholder').text();
      
      if (!toggled) {
        toggled = true;

        $(".bootstrap-wrapper").find(".col-lg-10").toggleClass("col-lg-10").toggleClass("col-lg-8");
        $(".bootstrap-wrapper").find(".col-md-12").toggleClass("col-md-12").toggleClass("col-md-10");
        $(".helper-sidebar").toggle();
      }
      $(".helper-text").text(helper);
      
      $('html,body').animate({ scrollTop: 0 }, 'fast');
    });

    $(".helper-close").click(function() {
      toggled = false;

      $(".bootstrap-wrapper").find(".col-lg-8").toggleClass("col-lg-10").toggleClass("col-lg-8");
      $(".bootstrap-wrapper").find(".col-md-10").toggleClass("col-md-12").toggleClass("col-md-10");
      $(".helper-sidebar").toggle();
    });

    // Validation
    $("#submit").click(function(e) {
      let validated = true;

      // Number
      $("[type=number]").each(function() {
        let $number = $(this).val();

        $(this).removeClass('invalid');
        if($number && !validator.isInt($number)) {
          $(this).addClass('invalid');
          $(this).addText('invalid');
          validated = false;
        }
      });

      // Email
      $("[type=email]").each(function() {
        let $email = $(this).val();

        $(this).removeClass('invalid');
        if($email && !validator.isEmail($email)) {
          $(this).addClass('invalid');
          $(this).addText('invalid');
          validated = false;
        }
      });

      // URL
      $("[type=url]").each(function() {
        let $url = $(this).val();

        $(this).removeClass('invalid');
        if($url && !validator.isURL($url)) {
          $(this).addClass('invalid');
          $(this).addText('invalid');
          validated = false;
        }
      });
      
      if (!validated) {
        e.preventDefault();
      }
    });

    // Dropdown Toggle Initial Load Handling
    $('.toggle').each(function() {
      $(this).find('.togglable').hide();
      let dropdown_value = $(this).find('.toggle-select').val() ? $(this).find('.toggle-select').val().toLowerCase() : '';

      if (!dropdown_value) {
        return;
      }

      $('.input-group' + '.' + dropdown_value).each(function() {
				$(this).show();
        
        if($(this)[0] === $('.input-group' + '.' + dropdown_value).last()[0]) {
          $(this).css("margin-bottom", 0)
        }
			});
    });

    // Dropdown Toggle Change Handling
		$('.toggle-select').on('change', function() {
			let dropdown_value = $(this).val().toLowerCase();

			$(this).parent().parent().find('.togglable').each(function() {
				$(this).hide();
			});

			$('.input-group' + '.' + dropdown_value).each(function() {
				$(this).show();

        if($(this)[0] === $('.input-group' + '.' + dropdown_value).last()[0]) {
          $(this).css("margin-bottom", 0)
        }
			});
		});

    function slug_to_title(str) {
      var split_str = str.split('-');
      
      for (var i = 0; i < split_str.length; i++) {
        split_str[i] = split_str[i].toUpperCase();     
      }

      return split_str.join(' '); 
    }
  });
})(jQuery);
