function eventClicked(){document.getElementById("form-event").classList.add("view-event"),document.getElementById("event-title").classList.replace("d-block","d-none"),document.getElementById("event-category").classList.replace("d-block","d-none"),document.getElementById("btn-save-event").setAttribute("hidden",!0)}function editEvent(e){var t=e.getAttribute("data-id");"new-event"==t?(document.getElementById("modal-title").innerHTML="",document.getElementById("modal-title").innerHTML="Add Event",document.getElementById("btn-save-event").innerHTML="Add Event",eventTyped()):"edit-event"==t?(e.innerHTML="Cancel",document.getElementById("btn-save-event").innerHTML="Update Event",e.removeAttribute("hidden"),eventTyped()):(e.innerHTML="Edit",eventClicked())}function eventTyped(){document.getElementById("form-event").classList.remove("view-event"),document.getElementById("event-title").classList.replace("d-none","d-block"),document.getElementById("event-category").classList.replace("d-none","d-block"),document.getElementById("btn-save-event").removeAttribute("hidden")}document.addEventListener("DOMContentLoaded",(function(){var e=new bootstrap.Modal(document.getElementById("event-modal"),{keyboard:!1});document.getElementById("event-modal");var t=document.getElementById("modal-title"),n=document.getElementById("form-event"),d=null,a=(document.getElementsByClassName("needs-validation"),new Date),l=a.getDate(),i=a.getMonth(),o=a.getFullYear(),r=FullCalendar.Draggable,s=document.getElementById("external-events"),c=[{title:"All Day Event",start:new Date(o,i,1),className:"bg-warning text-light"},{title:"Long Event",start:new Date(o,i,l-5),end:new Date(o,i,l-2),className:"bg-warning text-light"},{id:999,title:"Repeating Event",start:new Date(o,i,l-3,16,0),allDay:!1,className:"bg-info text-light"},{id:999,title:"Repeating Event",start:new Date(o,i,l+4,16,0),allDay:!1,className:"bg-primary text-light"},{title:"Meeting",start:new Date(o,i,l,10,30),allDay:!1,className:"bg-success text-light"},{title:"Lunch",start:new Date(o,i,l,12,0),end:new Date(o,i,l,14,0),allDay:!1,className:"bg-danger text-light"},{title:"Birthday Party",start:new Date(o,i,l+1,19,0),end:new Date(o,i,l+1,22,30),allDay:!1,className:"bg-success text-light"},{title:"Click for Google",start:new Date(o,i,28),end:new Date(o,i,29),url:"http://google.com/",className:"bg-dark text-light"}];new r(s,{itemSelector:".external-event",eventData:function(e){return{id:Math.floor(11e3*Math.random()),title:e.innerText,allDay:!0,start:new Date,className:e.getAttribute("data-class")}}});var m=document.getElementById("calendar");function v(a){document.getElementById("form-event").reset(),e.show(),n.classList.remove("was-validated"),n.reset(),d=null,t.innerText="Create Event",newEventData=a}function u(){return window.innerWidth>=768&&window.innerWidth<1200?"timeGridWeek":window.innerWidth<=768?"listMonth":"dayGridMonth"}var g=new FullCalendar.Calendar(m,{timeZone:"local",editable:!0,droppable:!0,selectable:!0,navLinks:!0,initialView:u(),themeSystem:"bootstrap",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},windowResize:function(e){var t=u();g.changeView(t)},eventResize:function(e){var t=c.findIndex((function(t){return t.id==e.event.id}));c[t]&&(c[t].title=e.event.title,c[t].className=e.event.classNames[0])},eventClick:function(t){document.getElementById("edit-event-btn").removeAttribute("hidden"),document.getElementById("btn-save-event").setAttribute("hidden",!0),document.getElementById("edit-event-btn").setAttribute("data-id","edit-event"),document.getElementById("edit-event-btn").innerHTML="Edit",eventClicked(),e.show(),n.reset(),d=t.event,document.getElementById("modal-title").innerHTML="",document.getElementById("event-title").value=d.title,document.getElementById("event-category").value=d.className,console.log("selectedEvent",d),document.getElementById("btn-delete-event").removeAttribute("hidden")},dateClick:function(e){document.getElementById("edit-event-btn").setAttribute("hidden",!0),document.getElementById("btn-save-event").removeAttribute("hidden"),v(e)},events:c,eventReceive:function(e){var t={id:parseInt(e.event.id),title:e.event.title,className:e.event.classNames[0]};c.push(t)},eventDrop:function(e){var t=c.findIndex((function(t){return t.id==e.event.id}));c[t]&&(c[t].title=e.event.title,c[t].className=e.event.classNames[0])}});setTimeout((()=>{g.render()}),0),n.addEventListener("submit",(function(t){t.preventDefault();var n=document.getElementById("event-title").value,a=document.getElementById("event-category").value;if(d){var l=document.getElementById("eventid").value;d.setProp("id",l),d.setProp("title",n),d.setProp("classNames",[a]);var i=c.findIndex((function(e){return e.id==d.id}));c[i]&&(c[i].title=n,c[i].className=a),g.render()}else{var o={id:(1e4*Math.random()).toFixed(0),title:n,start:new Date(document.querySelector("#calendar").value),allDay:!0,className:a};g.addEvent(o),c.push(o)}e.hide()})),document.getElementById("btn-delete-event").addEventListener("click",(function(t){if(d){for(var n=0;n<c.length;n++)c[n].id==d.id&&(c.splice(n,1),n--);d.remove(),d=null,e.hide()}})),document.getElementById("btn-new-event").addEventListener("click",(function(e){v(),document.getElementById("edit-event-btn").click()}))}));