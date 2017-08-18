$(document).ready(function(){


  $('input#name').focus(function(){
    var $this = $(this);
    $this
      .css({
        'opacity':0.5
      })
      .animate({
        'opacity':1
      }, 300);
  });

  $('#main-form .next-one input').on('change keyup',function(){
    var $this = $(this),
        text = $this.val(),
        $parent = $this.closest('.form-group'),
        $next = $parent.next();
    if( text ){
      $next.removeClass('hidden');
    }else{
      $next.addClass('hidden');
    }



  });
  $('input#pets-number').on('change keyup',function(){
    var $this = $(this),
        pets_number = $this.val();
        /*
    pets_number =  2
    pets_index  = 2
        */
    if( pets_number >= 1 && pets_number <= 50 ){
      var pets_index = 0;
      var html = '';

      while( pets_index < pets_number ){
        pets_index++;
        html = html + '<div class="col-xs-4">'+
        '<input type="text" class="form-control" name="pet-names[]">'+
        '</div>';
      }

      $('#pets-names-wrapper').html( html );
    }else{
      alert('Revisa tu número');
    }

  });




  /*
  <div class="form-group next-one hidden">
    <label for="email" class="col-xs-3">Email:</label>
    <div  class="col-xs-9">
      <input type="email" class="form-control col-xs-9" id="email">
    </div>
  </div>

  */


});
