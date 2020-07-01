
shiver(document.body);

function shiver(node) 
{

    $(node).find('.usertext-body').each(function(){
      handleComment(this);
    });
    
}

function handleComment(comment) 
{
  var text = $(comment).text();

  var new_text = '';
  
  var word_list = text.split(/ \n/);

  
  


  $(comment).text(new_text);

}