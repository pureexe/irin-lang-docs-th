$(function() {
  var bot;
  $("#app-template").change(function(){
    var path = $(this).val();
    if(path.substring(path.length-5,path.length) == ".irin"){
      $.get("/brain/"+path,function(res){
        $("#app-code").val(res);
      });
    }
  });
  $("#app-excute").click(function(){
    $("#app-console").html("");
    var sourcecode = $("#app-code").val();
    var myBlob = new Blob([sourcecode], {type : 'text/plain'});
    var url = URL.createObjectURL(myBlob);
    console.log(url);
    bot = new Irin(url,function(err){
      if(err){
        $("#app-console").append(botMessageBuilder(err.message+" At line:"+err.line,true));
        $("#app-input").prop("disabled",true);
        $("#app-send").prop("disabled",true);
      }else{
        $("#app-input").prop("disabled",false);
        $("#app-send").prop("disabled",false);
      }
    });
    $("#app-chat").modal();
  });
  userMessageBuilder = function(msg){
    return "<span class='user'>User:</span> "+msg+"<hr>";
  };
  botMessageBuilder = function(reply,forceErr){
    if(reply.substring(0,11) == "[Log:Error]"||forceErr){
      return "<span class='bot'>Bot:</span>  <span class='err'>"+reply+"</span><hr>";
    }else{
      return "<span class='bot'>Bot:</span> "+reply+"<hr>";
    }
  };
  $("#app-chat").keypress(function(e) {
    if(e.which == 13) {
        sendMessage();
    }
  });
  sendMessage = function(){
    var msg = $("#app-input").val();
    if(msg===""){
      return undefined;
    }
    var reply = bot.reply(msg);
    $("#app-input").val("");
    $("#app-console").append(userMessageBuilder(msg));
    $("#app-console").append(botMessageBuilder(reply));
    $("#app-console").animate({ scrollTop:$("#app-console").prop("scrollHeight") },0);
  };
  $("#app-send").click(sendMessage);

});
