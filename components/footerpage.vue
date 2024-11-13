<template>
  <div class="footer">
    <div>
  <div class="descriptionbtn">
<H1>What’s next</H1>
<p>
  Submit better job app — 10x faster. AI cover letter <br> generator, resume keyword checker, outreach message   <br> writer, and more. Powered by GPT 
</p>
<button>Try for free</button>
</div>  

<div class="footerelement">

  <div class="footerlist">
    <h5>Plateform</h5>
   <li>Plans and prices</li>
   <li>Ai create Letters</li>
   <li>Ai Resume checker</li>
   <li>Resume Template</li>
   <li>Self Tempaltes</li>
   <li>Blog</li>
  </div>


  <div  class="footerlist">
    <h5>Features</h5>
   <li>Ai Cover letter Creator</li>
   <li>Resume keyords Optimizer</li>
   <li>ATS checker</li>
   <li>Resume Template</li>
  </div>



  <div  class="footerlist">
    <h5>Ressources</h5>
   <li>4 AI Tools for Applying a Job</li>
   <li>How to optimize Resume keywords</li>
   <li>ATS checker</li>
   <li>Why you should use Chat GPT for create</li>
  <li> What should you include in a Cover Letter</li>
  </div>

  <div  class="footerlist ">
    <h5>Support</h5>
    <li>support@gmail.com</li>
   <div class="footerimg">
    <li><img src="@/public/images/instagram.png" alt="logo menu"></li>
    <li><img src="@/public/images/facebook.png" alt="logo menu"></li>
    <li><img src="@/public/images/linkedin.png" alt="logo menu"></li>
    <li><img src="@/public/images/telegram.png" alt="logo menu"></li>
   </div>
  </div>



</div>

</div>

<hr>
<p class="fin">©Copywriting|All Rights Reserved|Terms of se|Privacy <br>
CODE BY GODONOU JEAN-HUGUES OLUFEMI 
</p>
  </div>
</template>

<script>

</script>

<style lang="scss">

.footer{
  background-color:#6DE754 ;
  color:#000000;
  
  display:flex;
  flex-direction:column;
   align-items: center;
  // justify-content: center;
  gap:5PX;

  .footerelement{
     display: flex;
     justify-content: space-between;

margin-top: 20px;
    width:100% ;
    gap: 20PX;
    border-bottom: 1PX SOLID BLACK;
    
li{
  margin-bottom: 15px;
  font-size: 13px;
}
  }
}

.footerlist{
  list-style-type: none;

  .footerimg{
    display:flex;
    justify-content: space-between;
  }
img{
  height: 24px;
  width:24px;
}
h5{
  margin-bottom: 5px;
}
}
.bloc{
  width: min(100%,1300PX);
  margin: 0 auto;
}


.descriptionbtn{
text-align: center;
padding:30px;
  button{
    border:1px solid #000000;
    padding: 9px;
    background-color: transparent;
    border-radius:12px;

  }
  p{
    padding:20px;
  }
}

@media (max-width: 856px){

  .footer{
    display:flex;
    flex-direction: column;
    // border: 1PX SOLID RED;
     align-items: center;
    .footerelement{
      display:grid;
      grid-template-columns: 1fr 1fr;
    //  background-color: blue;
  
     .footerlist{
      // BORDER:1px solid black;
      display: flex;
      flex-direction: column;
     align-items: center;
     }

    }
  }

  .footerimg{
    // background-color:red;
    width:45% ;
  }

}


@media (max-width: 758px){

  .fin{
    text-align: center;
  } 
.footer{
  .footerelement{
  display: flex;
  flex-direction: column;

}
}





}


</style>