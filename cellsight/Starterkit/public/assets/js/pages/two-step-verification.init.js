function moveToNext(t,u){t.value.length>0&&$("#digit"+u+"-input").focus()}var count=1;$(".two-step").keyup((function(t){0==count&&(count=1),8===t.keyCode?(5==count&&(count=3),$("#digit"+count+"-input").focus(),count--):count>0&&(count++,$("#digit"+count+"-input").focus())}));