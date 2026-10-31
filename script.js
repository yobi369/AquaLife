const catalogue={ "20l":{name:"20L Refill",kind:"REFILL SERIES",price:"KSh 220",detail:"A larger everyday refill format.",parcel:false,number:"01"}, "10l":{name:"10L Refill",kind:"REFILL SERIES",price:"KSh 180",detail:"A practical refill format.",parcel:false,number:"02"}, "5l":{name:"5L Bottle",kind:"BOTTLE SERIES",price:"KSh 350",detail:"A standalone 5-litre bottle.",parcel:false,number:"03"}, "15l":{name:"1.5L Parcel",kind:"PARCEL SERIES",price:"KSh 350",detail:"The 1.5-litre parcel option.",parcel:true,number:"04"}, "1l":{name:"1L Parcel",kind:"PARCEL SERIES",price:"KSh 330",detail:"The 1-litre parcel option.",parcel:true,number:"05"}, "500ml":{name:"500ml Parcel",kind:"PARCEL SERIES",price:"KSh 300",detail:"The 500ml parcel option.",parcel:true,number:"06"}};
const phone="254729103423";
function orderUrl(message){return "https://wa.me/"+phone+"?text="+encodeURIComponent(message)}
function selectFormat(id){const item=catalogue[id];if(!item)return;document.querySelectorAll(".format-option").forEach(button=>{const active=button.dataset.id===id;button.classList.toggle("active",active);button.setAttribute("aria-selected",String(active))});document.querySelector("#selection-number").textContent=item.number+" / 06";document.querySelector("#selection-kind").textContent=item.kind;document.querySelector("#selection-name").textContent=item.name;document.querySelector("#selection-detail").textContent=item.detail;document.querySelector("#selection-price").textContent=item.price;document.querySelector("#parcel-note").hidden=!item.parcel;const suffix=item.parcel?" (price is per parcel)":"";document.querySelector("#selection-order").href=orderUrl("Hi Mount Abadares, I would like to order "+item.name+suffix+". Please confirm availability and delivery to my location: ");}
document.querySelectorAll(".format-option").forEach(button=>button.addEventListener("click",()=>selectFormat(button.dataset.id)));
selectFormat("20l");
document.querySelectorAll("[data-whatsapp]").forEach(link=>{const message=link.dataset.whatsapp==="bulk"?"Hi Mount Abadares, I am interested in an order of 50 or more parcels and would like to arrange free delivery within Machakos County. My location is: ":"Hi Mount Abadares, I would like to place an order. My location is: ";link.href=orderUrl(message);link.target="_blank";link.rel="noopener noreferrer"});
const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
/* Accessible customer testimonial carousel.
   Customer quotes intentionally remain unpublished until supplied and approved. */
(()=>{
 const people=[
  {name:"Daniel Kilonzo",initials:"DK"},
  {name:"John Muturi",initials:"JM"},
  {name:"Samson Juma",initials:"SJ"},
  {name:"Mary Wambua",initials:"MW"},
  {name:"Jane Wangui",initials:"JW"}
 ];
 const copy="Customer feedback will appear here once it has been received and approved for publication.";
 const name=document.querySelector("#testimonial-name");
 if(!name)return;
 const initials=document.querySelector("#testimonial-initials");
 const count=document.querySelector("#testimonial-count");
 const quote=document.querySelector("#testimonial-copy");
 const dots=[...document.querySelectorAll(".testimonial-dot")];
 const stage=document.querySelector(".testimonial-stage");
 let index=0,timer=null;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 function show(next){
  index=(next+people.length)%people.length;
  const person=people[index];
  name.textContent=person.name;
  initials.textContent=person.initials;
  count.textContent=String(index+1).padStart(2,"0")+" / 05";
  quote.textContent=copy;
  dots.forEach((dot,i)=>{
   const active=i===index;
   dot.classList.toggle("active",active);
   if(active)dot.setAttribute("aria-current","true");
   else dot.removeAttribute("aria-current");
  });
 }
 function stop(){if(timer){window.clearInterval(timer);timer=null;}}
 function start(){stop();if(!reduced&&!document.hidden)timer=window.setInterval(()=>show(index+1),6500);}
 document.querySelector("#testimonial-prev").addEventListener("click",()=>{show(index-1);start();});
 document.querySelector("#testimonial-next").addEventListener("click",()=>{show(index+1);start();});
 dots.forEach((dot,i)=>dot.addEventListener("click",()=>{show(i);start();}));
 stage.addEventListener("mouseenter",stop);
 stage.addEventListener("mouseleave",start);
 stage.addEventListener("focusin",stop);
 stage.addEventListener("focusout",start);
 document.addEventListener("visibilitychange",()=>document.hidden?stop():start());
 show(0);start();
})();
