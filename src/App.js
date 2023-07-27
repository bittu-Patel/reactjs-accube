import React from 'react'
import { useState } from 'react'
function App() {
  const [line1, setLine1]=useState(false)
  const [line2, setLine2]=useState(false)
  const [line3, setLine3]=useState(false)
  const [line4, setLine4]=useState(false)
  const [line5, setLine5]=useState(false)
  const [line6, setLine6]=useState(false)
  const [line7, setLine7]=useState(false)

  
  const scrollfac1=()=>{
    const section=document.querySelector("#facilityy");
    section.scrollIntoView({behavior:'smooth',block:'start'})
  };
const scrollfac2=()=>{
  const section=document.querySelector("#om");
  section.scrollIntoView({behavior:'smooth',block:'start'})
  };
const scrollfac3=()=>{
  const section=document.querySelector("#bittu");
  section.scrollIntoView({behavior:'smooth',block:'start'})
  };
const scrollfac4=()=>{
  const section=document.querySelector("#rishu");
  section.scrollIntoView({behavior:'smooth',block:'start'})
  };
const scrollfac5=()=>{
  const section=document.querySelector("#adarsh");
  section.scrollIntoView({behavior:'smooth',block:'start'})
  };
const scrollfac6=()=>{
  const section=document.querySelector("#vipul");
  section.scrollIntoView({behavior:'smooth',block:'start'})
  };
const scrollfac7=()=>{
  const section=document.querySelector("#mukesh");
  section.scrollIntoView({behavior:'smooth',block:'start'})
  };

  return (
    
    <div>
      <div className="main">
        <div className="head">
        <h3 className="h5">ACCUBE </h3>
        </div>
        <div className="h2">
        <div  onMouseLeave={()=>setLine1(false)} style={{display:"flex", flexDirection:"column"}}>
    <label onClick={()=>scrollfac1()} onMouseOver={()=>setLine1(true)}>FACILITIES  </label>
    <div style={{height:"3px", width:line1===true?"85px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div>

    <div onMouseLeave={()=>setLine2(false)} style={{display:"flex", flexDirection:"column"}}>
    <label onClick={()=>scrollfac2()} onMouseOver={()=>setLine2(true)}>ABOUT</label>
    <div style={{height:"3px", width:line2===true?"60px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div>

    <div onMouseLeave={()=>setLine3(false)} style={{display:"flex", flexDirection:"column"}}>
    <label onClick={()=>scrollfac3()} onMouseOver={()=>setLine3(true)}>COURSES</label>
    <div style={{height:"3px", width:line3===true?"85px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div>

    <div onMouseLeave={()=>setLine4(false)} style={{display:"flex", flexDirection:"column"}}>
    <label onClick={()=>scrollfac4()} onMouseOver={()=>setLine4(true)}>GALLERY</label>
    <div style={{height:"3px", width:line4===true?"80px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div>

    <div onMouseLeave={()=>setLine5(false)} style={{display:"flex", flexDirection:"column"}}>
    <label onClick={()=>scrollfac5()} onMouseOver={()=>setLine5(true)}>RESULTS</label>
    <div style={{height:"3px", width:line5===true?"80px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div> 

   
    <div onMouseLeave={()=>setLine7(false)} style={{display:"flex", flexDirection:"column"}}>
    <label onClick={()=>scrollfac7()} onMouseOver={()=>setLine7(true)}>CONTACT</label>
    <div style={{height:"3px", width:line7===true?"80px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div>
    <div onMouseLeave={()=>setLine6(false)} style={{display:"flex", flexDirection:"column"}}>
    <label  onMouseOver={()=>setLine6(true)}>LOGIN</label>
    <div style={{height:"3px", width:line6===true?"55px":"0px",background:"blue", transition:"0.2s"}}></div>
    </div>

    


        </div>
      </div>
      <div className='img1'>
        <div className='bg'>
        <label className='l1'onClick={()=>scrollfac1()}> ACCUBE</label>
        <p className='p1'> Cat Coaching Center</p>
        <button  className='b1'> learn more </button>
         </div>
        

      </div>
      <div className='main2' id='facilityy'>
        <label className='l2'> FEATURES</label>
        <label className='line'></label>


      </div>
<div className='head3'>
  <div className='list1'>
    <div className='list2'><i class="fa fa-laptop"  aria-hidden="true"></i></div>
  <p className='p5'>Online classes </p>
  </div>
  <div className='list1'>
  <div className='list2'><i class="fa fa-users" aria-hidden="true"></i></div>
  <p className='p5'>Offline classes</p>
  </div>
  <div className='list1'>
  <div className='list2'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
  <p className='p5'>Weekly mock test </p>
  </div>
  <div className='list1'>
  <div className='list2'><i class="fa fa-mobile " aria-hidden="true"></i></div>
  <p className='p5'>Online test facilities</p>
  </div>
</div>
<div className='head3'>
  <div className='list1'>
    <div className='list2'><i class="fa fa-book" aria-hidden="true"></i></div>
  <p className='p5'>Study material</p>
  </div>
  <div className='list1'>
  <div className='list2'><i class="fa fa-user" aria-hidden="true"></i></div>
  <p className='p5'>one-on-one doubtclearing</p>
  </div>
  <div className='list1'>
  <div className='list2'><i class="fa fa-users" aria-hidden="true"></i></div>
  <p className='p5'>Seminars by experts </p>
  </div>
  <div className='list1'>
  <div className='list2'><i class="fa fa-users" aria-hidden="true"></i></div>
  <p className='p5'>Career counselling</p>
  </div>
</div>
<div className='main2' id='om'> 
<label className='l2' >ABOUT US</label>
<label className='line'></label>
</div>
<div className='imp'>
  <div className='imp1'></div>
  <div className='imp2'>
    <br/>
    <p className='h'>ACCUBE has been facilitating students in realizing their dreams since 2013 (formerly known as NIT Classes). ACCUBE is formed with a mission to yield the best and make everyone achieve with our specialized teaching methodology. Core policy is Student First i.e. interest of the students is primary. We have facilitated hundreds of students in achieving their goals in various competitive exams. With us students get personalized attention to overcome weaknesses. ACCUBE focuses on diverse segments of education across the learners of multiple age-groups. Designed to shape the young aspirants attitude, aptitude and instill confidence in them as they get ready to take life head-on!
</p> <br/> 
<p className='h'>We help students crack MBA entrance exams like CAT, XAT, MAT, CMAT etc and to gain admissions into the IIMs and the Top MBA Institutes. We enable individuals to realize their potential and achieve their dreams.
</p><br/>
<p className='h'> All courses are divided into Basic, Foundation and Advanced module. Each student is expected to clear the Basic module before they graduate to the Foundation module and similarly after clearing 'Foundation Module' they graduate to the 'Advanced Module'. This helps the students build their foundations and perform with zeal in all their future endeavors. So our methodology is designed in the way we make learning comfortable for everyone. Hence, our motto – From Basics to Best
</p>
<br/>

<h3 className='w'>Why Choose Us?</h3>
<div className='lab'>
  <ul >
  <li> Online classes</li>
 <li>Offline classes</li>
 <li>Weekly mock test</li>
 <li>Online test facilities</li>
</ul>
<ul >
  <li>One-on-one doubt clearing</li>
 <li>Study material</li>
 <li> Seminars by experts</li>
 <li> Career counselling</li>
</ul>



</div>

  </div>

</div>
<div className='main8'>

<div className='main8p1'>
       <h2 className='lab7'id='bittu'>OUR COURSES</h2>
       <div className='main8p5'></div>
</div>


<div className='main8p2'>
           <div className='main8p3'>
            <div className='main8p4'>
              <div className='d'>
                <img src='https://www.mccubeindia.com/img/courses/1.jpg'></img>
              </div>
              <div className='label'>
                Common Admission Test
              </div>
            </div>   
            <div className='main8p4'>
              <div className='d'>
                <img src='https://www.mccubeindia.com/img/courses/2.jpg'></img>
              </div>
              <div className='label'>
                Common Management Admission Test
              </div>
            </div>
            <div className='main8p4'>
              <div className='d'>
                <img src='https://www.mccubeindia.com/img/courses/3.jpg'></img>
              </div>
              <div className='label'>
                Common Entrance Test
              </div>
            </div>
           </div>
</div>

<div className='main8p2'>
           <div className='main8p3'>
            <div className='main8p4'><br/>
              <div className='d'>
              <img src='https://www.mccubeindia.com/img/courses/4.jpg'></img>
              </div> <br/> 
              <div className='label'>
              NarseeMonjee Institute of Management Studies (NMIMS) Management Aptitude Test             
               </div>
            </div>   
            <div className='main8p4'>
              <div className='d'>
              <img src='https://www.mccubeindia.com/img/courses/5.jpg'></img>
              </div>
              <div className='label'>
              Symbiosis National Aptitude Online Test
              </div>
            </div>
            <div className='main8p4'>
              <div className='d'>
              <img src='https://www.mccubeindia.com/img/courses/6.jpg'></img>
              </div>
              <div className='label'>
              Integrated Programme in Management
              </div>
            </div>
           </div>
</div>
</div>
<label className='l2'id='rishu'> GALLERY</label>
        <label className='line'></label>
        <div className='gallery'>
        <img  className='im'src='https://i2.wp.com/renaissance.ac.in/wp-content/uploads/2020/03/Dr.-Varsha-Malviya-2.jpg'></img>
        <img  className='im'src='https://i2.wp.com/renaissance.ac.in/wp-content/uploads/2020/03/10.-Dr.-Zaheer-Ahmed-School-of-Science.jpg'></img>
        <img  className='im'src='https://classdigest.com/wp-content/uploads/2020/07/alfa4-1.jpg'></img>
        <img  className='im'src='https://th.bing.com/th/id/AXt6VzqCHRuWaPQ480x360?&rs=1&pid=ImgDet'></img>
        <img  className='im'src='https://lh3.googleusercontent.com/f4vId1xtHAkOPDspk3NVUuPDJljbo-sugjCQ27et7zy_jNGxDcNyVNNjvh8c7pAI8lJvyxLr8ja0WQ9Krxbbb9XwmtsWxlDEEt4omZR_qQKgnRxLbg=w1296-v1-e30'></img>
        <img  className='im'src='https://th.bing.com/th?id=AEbIWiWy+ZPUwxw480x360&rs=1&pid=ImgDet'></img>
        <img  className='im'src='https://s01.sgp1.digitaloceanspaces.com/facebook/911891-vjpdefeiqi-1532001856.jpg'></img>
        <img  className='im'src='https://th.bing.com/th/id/R.fbcb956c73df05c4dc17e9a623647e19?rik=qPAHzb4B1c7p5g&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2013%2f04%2f23%2farticle-2313660-19735BF6000005DC-692_634x366.jpg&ehk=5%2f13piNMYfkCB5iCl4Fl5nclwKglYmDA%2bjxz4EtWVSw%3d&risl=&pid=ImgRaw&r=0'></img>
        <img  className='im'src='https://images.assettype.com/freepressjournal/2021-07/6c7b709d-aaa9-441c-9d14-7ccf2b4282f4/3__2_.JPG'></img>
        </div>
        <div className='dd1'>
        <label className='l2'id='adarsh'> OUR TOP RESULTS</label>
        <label className='line'></label>
        <div className='chips'>
          <div className='box'>
            <div className='circle'> <img  className='c5' src='https://mccubeindia.com/img/testimonials/01.jpg'></img></div>
            <div className='rec'> <p>CAT - 99 % </p>
  
             <p>IIM Rohtak</p>

                            <h3>- Abhinav Mishra   </h3> </div>
          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/02.jpg'></img></div>
            <div className='rec'>
            <p> CAT-99% </p>
  
         <p>XIMB</p>

        <h3>- ALFIYA KHAN  </h3>
            </div>

          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/03.jpg'></img></div>
            <div className='rec'>
            <p>CAT -93% </p>
  
  <p>GIM</p>

 <h3>- KSHITIJ MISHRA  </h3>
            </div>
          </div>
          
        </div>
        <div className='chips'>
          <div className='box'>
            <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/04.jpg'></img></div>
            <div className='rec'>
            <p>CAT - 90 % </p>
  
          <p>IIM Rohtak</p>

       <h3>- NOSHIN MEV  </h3>
            </div>
          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/05.jpg'></img></div>
            <div className='rec'>
            <p>CAT - 96 % </p>
  
  <p>GIM</p>

 <h3>- MANEET GURUDUTTA   </h3>
            </div>

          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/06.jpg'></img></div>
            <div className='rec'>
            <p>CMAT -90 % </p>
  
  <p>GIM</p>

 <h3>- SAPAN MAHESHWARI   </h3>
            </div>
          </div>
          
        </div>
        <div className='chips'>
          <div className='box'>
            <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/07.jpg'></img> </div>
            <div className='rec'>
            <p>CMAT - 90 % </p>
  
  <p>GIM</p>

 <h3>- AVNI TRIVEDI   </h3>
            </div>
          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/08.jpg'></img></div>
            <div className='rec'>
            <p>CAT -90 % </p>
  
  <p>IIM Rohtak</p>

 <h3>- SHOURYA KESHRAWANI   </h3>
            </div>

          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/09.jpg'></img></div>
            <div className='rec'>
            <p>CAT - 94 % </p>
  
  <p>IIM Rohtak</p>

 <h3>- PARIDHI MAHENDRA  </h3>
            </div>
          </div>
        </div>
        <div className='chips'>
          <div className='box'>
            <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/10.jpg'></img></div>
            <div className='rec'>
            <p>CAT - 90 % </p>
  <p>IIM Rohtak</p>
 <h3>- AISHWARYA WADNERKER  </h3>
            </div>
          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/11.jpg'></img></div>
            <div className='rec'>
            <p>CAT - 90 % </p>
  <p>IIM Rohtak</p>
 <h3>- PALLAVI JAIN   </h3>
            </div>
          </div>
          <div className='box'>
          <div className='circle'> <img className='c5' src='https://mccubeindia.com/img/testimonials/12.jpg'></img></div>
            <div className='rec'>
            <p>NMAT 234 </p>
            <p>IIM Rohtak</p>
            <h3>- AKASH CHAUDHRY  </h3>
            </div>
          </div>
          
        </div>
        </div>
       <div className='last'><br/>
        <div className='end'>
<label className='fo'id='mukesh'>Contact Info</label><br/><br/><br/>
        <label className='fo'> <i class="fa fa-map-marker font" aria-hidden="true"> address</i></label>
        <label className='ad'>
          <p>3RD FLOOR, SN ARCADE, SCH</p>
            <p> NUMBER. 78, OPPOSITE PRESTIGE COLLEGE,</p>
             <p>INDORE, 452001 M.P.,</p>
              <p> INDIA</p>
        </label>
        <label className='mo'><i class="fa fa-phone font" aria-hidden="true"> +9340087927</i> </label> <br></br> <br></br> <br></br>
        <label className='mail'><i class="fa fa-envelope-o font" aria-hidden="true"></i>
        <p>accube.indore@gmail.com</p></label>
        </div>
       </div>
       <div className ="form" id='s'>
        <label className='any'></label>
        
     <form>
      
       <div className ="input-container">
         <label id='aman'>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
   </div>
        
        
    )
    }
export default App 







  
