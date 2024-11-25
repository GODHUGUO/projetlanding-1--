<template>
  <div class="container">
  
<div class="section1">

<div class="section1part1">

<h1> <span>Win your dream job </span> <br>  with PostJob </h1>

</div>

<div class="section1part2">
    <p> Submit better job app — 10x faster. AI cover letter <br> generator, resume keyword checker, outreach message <br> writer, and more. Powered by GPT</p>
</div>


<div class="section1part3">

 <div><input type="text" placeholder="Your Email"></div>
<button class="startforfree">Start for free</button> 

</div>

 <div class="section1part4">


<div class="fleelement">

<div class="flexelement1">
  <div class="icone">
    <img src="@/public/images/file.png" alt="logo menu"> 
  </div>    
<p class="boldtitle">AI Cover Letter Generator</p>
<p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
</div>

 <div class="flexelement1">
  <div class="icone">
     <img src="@/public/images/radio.png" alt="logo menu"> 
 
  </div>    
<p     class="boldtitle"       >Smart Personalization</p>
<p>Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.</p>
</div> 

 <div class="flexelement1">
  <div class="icone">
     <img src="@/public/images/maximize.png" alt="logo menu"> 

  </div>    
<p class="boldtitle">AI Cover Letter Generator</p>
<p>A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data .</p>
</div> 

</div>








</div> 









</div>


<div class="section2">
<H3>Submit Better job <br>  applications</H3>

<h1>10x faster</h1>
<p>AI cover letter generator, resume keyword checker, outreach <br> message writer, and more. Powered by GPT</p>


<div class="degrade">
   
</div>
</div>


<div class="section3">

    <div class="section3part3">

<h2> <span>Spend less time </span> <br>  looking for work </h2>

</div>

<div class="section1part2">
    <p> We'll help you through the hardest part of  <br> your job search.</p>
</div>

 
<button class="startforfree">Create an Account</button> 

<div class="flexsix">
<div class="fleelement">

<div class="flexelement1">
  <div class="icone">
    <img src="@/public/images/file.png" alt="logo menu"> 
  </div>    
<p class="boldtitle">Cover Letter </p>
<p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
</div>

 <div class="flexelement1">
  <div class="icone">
     <img src="@/public/images/mail.png" alt="logo menu"> 
 
  </div>    
<p     class="boldtitle"       >Resignation Letters</p>
<p>Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.</p>
</div> 

 <div class="flexelement1">
  <div class="icone">
     <img src="@/public/images/git-pull-request.png" alt="logo menu"> 

  </div>    
<p class="boldtitle">Connection request</p>
<p>A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data .</p>
</div> 

</div>

<div class="fleelement">

<div class="flexelement1">
  <div class="icone">
    <img src="@/public/images/send.png" alt="logo menu"> 
  </div>    
<p class="boldtitle">Cover Letter </p>
<p>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
</div>

 <div class="flexelement1">
  <div class="icone">
     <img src="@/public/images/grid.png" alt="logo menu"> 
 
  </div>    
<p     class="boldtitle"       >Resignation Letters</p>
<p>Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.</p>
</div> 

 <div class="flexelement1">
  <div class="icone">
     <img src="@/public/images/codesandbox.png" alt="logo menu"> 

  </div>    
<p class="boldtitle">Connection request</p>
<p>A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data .</p>
</div> 

</div>
</div>


</div>


<div class="section4">
<div class="section4part1">
<div class="gauchesection4">
<span>             
    Free AI cover letter  generator powered  by GPT
</span> <br>

<p>
    A free AI cover letter generator powered by GPT is a tool  that uses artificial intelligence and natural language  processing to help job seekers create customized and  effective cover letters.
</p>  <br>
<button> Try for free Now</button>
</div>

<div class="droitesection4">
    <img src="@/public/images/Illustration.png" alt="logo menu">
</div>
</div>
</div>



<div class="section4   section5">
<div class="section4part1">


<div class="droitesection4">
    <img src="@/public/images/Illustration2.png" alt="logo menu">
</div>
<div class="gauchesection4">
<span>             
    Optimize the keywords in your resume
</span> <br>

<p>
    By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want.
</p>  <br>
<button> Optimize your Resume</button>
</div>

</div>
</div>


<div class="section4   section6">
<div class="section4part1">

    <div class="gauchesection4 section6span">
<span>             
    Free resume design templates
</span> <br>

<p>
    By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers.
</p>  <br>
<button class="btnresume"> Create an account</button>
</div>
<div class="droitesection4">
    <img src="@/public/images/Illustration3.png" alt="logo menu">
</div>


</div>
</div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const box = ref(null)

onMounted(() => {
  // Configure l’animation de défilement pour l'élément référencé par `box`
  gsap.to(box.value, {
    scrollTrigger: {
      trigger: box.value,
      start: "top 80%", // Déclenche l'animation quand l'élément atteint 80% de la hauteur de la fenêtre
      toggleActions: "play none none none" // Démarre l'animation une seule fois
    },
    opacity: 1,
    y: 0,
    duration: 1.5
  })
})
</script>

<style lang="scss">



@media (min-width: 827px){
   
   .mobilemenu{
       display: none;
      
   }
 }



 .container{
   
 }
.section1,.section3{
    width: min(100%,1300PX);
    margin: 0 auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 15PX;
 
// border: 1px solid green;
    .section1part1{
     color: #ffffff;
     text-align: center;
    h1{
        font-size: 50Px;
    }
span{
    color: #6DE754;
}
    }

.section1part2{
    color:#909090 ;
    text-align: center;
}
    .section1part3{
        border: 1px solid #ffffff;
        padding: 5PX;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input[type="text"] {
  background-color: transparent;
  border: none;
  margin-left: 10PX;
 
}
        border-radius: 9px;
        width:35%;

button{
    border: none;
    padding: 5PX;
    border-radius: 5px;
    font-family: Montserrat;
}

        .startforfree{
            background-color: #6DE754;
            color: #1E201D;
        }

    }


    .section1part4{
    display: flex;
     justify-content: center;
    color: #909090;
       
    .fleelement{
        margin-top: 20PX;
        margin-bottom: 5PX;
        display: flex;
        justify-content: space-around;
       width:75% ;
       margin-bottom:50PX ;
      
// background-color: RED;
        .flexelement1{
            background-color:#1E201D ;
            padding: 8PX;
            width:30%;
           
            img{
                width:24PX;
                height:24PX;
            }
            font-size: 15PX;
            display: flex;
            flex-direction: column;
            border-radius: 12px;

            .boldtitle{
                color: #ffffff;
                padding: 4PX 0  ;
            }
        }  
    }

    }

}
// ----------------------------------------section2---------------

.section2{
 
     background-color: #6DE754;
   // background: linear-gradient(to top, #6DE754 100%, transparent 50%);
    border-radius: 12PX;
    text-align: center;
    width: min(100%,1300PX);
    margin: 0 auto;
    display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     img{
        width:90% ;
        border: 1px solid black;
     }
    h1{ 
        font-size: 85px;
    }
    H3{
        padding-top: 2%;
    }
    P{
        text-align: center;
        padding-bottom: 2%;
    }

    
}

// -----------------------section3--------------
.sect3{
    color:#ffffff;
   
}
.section3part3{
    color: #FFFFFF;
}

.section3{
   
    padding: 50px  0 5px 0;
    .startforfree{
border: 1px solid #6DE754;
color: #ffffff;
padding: 10PX;
background-color: transparent;
border-radius: 12px;
font-family: Montserrat;

    }
    .fleelement{
    
        margin-bottom: 30PX;
        display: flex;
        justify-content: space-around;
       width:75% ;
    

        .flexelement1{
            background-color:#1E201D ;
            padding: 8PX;
            width:30%;
            color: #909090;
            font-size: 15PX;
            display: flex;
            flex-direction: column;
            border-radius: 12px;
            img{
                width:24PX;
                height:24PX;
            }
           

            .boldtitle{
                color: #ffffff;
                padding: 4PX 0  ;
            }
        }  
    }

    .flexsix{
    
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

 
}
.degrade{
 
       width:1250px ;
         height: 534PX;
    // background:linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url('/images/image9.png');

    background: 
  linear-gradient(to top, rgba(109, 231, 84,    1) 0%, rgba(109, 231, 84, 0) 70%), 
  url('/images/image9.png');


    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    }


// -----------------------section4-----------------------------    


.section4{
    background-color: #6DE754;

    display: flex;
     justify-content: center;
    margin: 0 auto;
    .section4part1{
        button{
            border:1px solid black;
        }
        MAX-width: 64%;
        display: flex;
        gap: 20PX;
    justify-content: space-between;
    align-items: center;
    width: min(100%,1300PX);
    margin: 0 auto;

    
  
 
    span{
// color:  #161815;
font-size: 35px;
font-weight: bold;

    }
    P{
        font-size: 13PX;
        padding: 8PX 0;
    }
    img{
        
        width:431PX;
    }
    }


    .gauchesection4{
        button{

           
            
padding: 10PX;
background-color: transparent;
border-radius: 12px;
font-family: Montserrat;

        }
    }

}
.section6{
    background-color: #161815;
    color: #ffffff;
    width: min(100%,1300PX);
    margin: 0 auto;

}

.section6span{
    span{
        
     
        color: #ffffff;
    }


}
.btnresume{
    border: 1px solid #ffffff;
    color: #ffffff;
   
    
}

// -------------------mediaquries-------

@media (max-width: 827px) {



.section1{
// background-color: RED;

.section1part3{
  
    width:350PX ;
}

}



}
@media (max-width: 768px){
    .section1{
   .section1part4{
        // background-color: yellow;
       .fleelement{
        flex-direction: column;
         align-items: center;
        width: 100%;
       
        gap:10px;

        .flexelement1{
            
            width: 75%;
        }
       }
    }
}

.section3{
    .flexsix{
    .fleelement{
        flex-direction: column;
         align-items: center;
        width: 100%;
    
        gap:10px;

        .flexelement1{
            
            width: 75%;
        }
       }
    }
}


.section4{
    .section4part1{
        flex-direction:column;
        img{
            max-width:300px;
        }
    }
}
.degrade{
    display:none;
}

}


</style>