<template>
  <div>

<div class="header"    >

  <div class="gauche" ref="logo" >
<div class="imagelogo"  >
  <img src="@/public/images/logo.png" alt="logo menu">
</div>

<div class="elementmenu"    >

  <li v-for="item in menuItems" :key="item.id"  >
        <!-- <NuxtLink :to="{ path: item.path }" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink> -->
        <NuxtLink :to="item.path" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink>
  </li>

</div>

</div>


<div class="droite"  ref="logodroite"      >

<button class="signin">Sign in</button>
<button class="getstarted">Get Started</button>


</div>


  <div class="menuresponsivesection">
<div class="iconeresponsive">
  <Icon name="ci:hamburger-lg"  v-if="change" @click="clickk"/>
  <Icon name="material-symbols:close"  v-else @click="clickk" /> 
</div>

 <div class="responsivemenulist"     :class="[change ? 'A' : 'B']">
  <li v-for="item in menuItems" :key="item.id" class="rerd"                >
         <NuxtLink :to="{ path: item.path }" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink> 
        <NuxtLink :to="item.path" :class="{ active: $route.path === item.path }" class="er" >{{ item.label }}</NuxtLink>
  </li>
</div>

</div>   
</div>

  </div>


</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
const menuItems = [
{ id: 1, label: 'AI cover Letter Generator',path: '/#section1' },
{ id: 2, label: 'Resume Template',path: '/#section2' },
{ id: 3, label: 'Pricing',path: '/#section3' }
]

const logo=ref(null)
 const logodroite =ref(null)

const tel = gsap.timeline();
onMounted(() => {
     
     tel.from(logo.value, { 
       y: -30,        
           opacity:0,
          delay:1,
         ease:"bounce",
         stagger  : 0.2,
     });


      tel.from(logodroite.value, { 
        y: -5,        
           opacity:0,
    
         ease:"bounce",
       stagger  : 0.1,
      });

   });

const change=ref(true);


function clickk() {
    change.value = !change.value
        }
</script>

<style  lang="scss"  scoped>


  .header{
   position: relative;

   width: min(100%,1300PX);
   margin: 0 auto;
   .menuresponsivesection{
      position: fixed;
     

    // background-color: RED;
    width:50% ;
     height: 100vh;
     top:1px;
     right: 0;

     .responsivemenulist{

width:100% ;
// text-align: right;


     }
   }



    .iconeresponsive{
 position:absolute;
 top:25px;
 right:64px;
 
      .er{
      text-decoration: none;
      color: #1E201D;
      }
      color: #FFFFFF;
      font-size:40px;

    }



    
    .responsivemenulist{
      position:absolute;

  top: 62PX;
      width:50% ;
      list-style-type: none;
  text-decoration: none;
  font-size:20px;
      li {
  list-style-type: none;
  text-decoration: none;
  font-size:20px;
}

.er{
      text-decoration: none;
      
      color:#1E201D;
    
   
      }
    }




    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:  15px  35PX;
    .gauche{
    width:60% ;
display: flex;
align-items: center;
justify-content: space-between;
//  border:1px solid #ffffff;
      .imagelogo{
        width:120PX;
        // background-color: RED;
        img{
        width:100% ;}
      }
.elementmenu{
  display: flex;

  justify-content: space-between;

  font-size: 15px;
  width:77% ;
 
  .er{
    list-style-type: none;
    text-decoration: none;
    color:#909090 ;
  }

li{
 list-style-type: none;
 text-decoration: none;


}

}

    }
  display:flex;
   

}
.droite{
  button{
    border: none;
    border-radius: 12px;
    height: fit-content;
    padding: 7PX;
    cursor: pointer;
    min-width: fit-content;
  
  }
  display: flex;
  gap: 5px;
  max-width:20%;
  justify-content: space-between;
  //  background-color: RED;
  .signin{
     border: 1px solid #6DE754;
    color: #ffffff;
    background-color: transparent;
  }

  .getstarted{
     background-color: #6DE754;
    color: #1E201D;

  }

}


@media (max-width: 942px){
   
   .header{

justify-content: center;
  .gauche{
  //  border:4px solid red;
  //  background-color: GREEN;
   width:75%;
   margin-right:10px;
    .elementmenu{
     
    }
  
 
  }
  }
 }

 @media (max-width: 758px){

   .header{
    .droite{
      display:none;
    }
    .gauche{
      .elementmenu{
        display: none;
     
      }
    }
.menuresponsivesection{
// position: absolute;
  .responsivemenulist{
    background-color: #6DE754;
    height: 100VH;
    display: flex;
    animation:sideslide  1s;

   
   li{
    font-size: 20PX;
    padding: 8px;
    font-weight: bold;
   
   }


 
}
    

    .A{
      display: none;
       animation:sideslide  1s;
  }

 .B {
            display: block;
            color:#1E201D;
            animation:sideslide  1s;
           }




}
    
   }


 }

 @media (min-width: 758px){
    .header{
      .iconeresponsive{
            display: none;
        }

        .responsivemenulist{
          display: none;

       
          // .B {
          //   display: block;
          // }
        }
    }  
 }





 @keyframes sideslide {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>