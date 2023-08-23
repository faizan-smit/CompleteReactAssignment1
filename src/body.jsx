import Myimg from './img/faizanalam.jpg'

let Body = ()=> {


    return (



        <div id="body">



        <div id="leftside">


                <div>

                    <h3 class="headings">
                        EDUCATION

                    </h3>
                    <p class="headings--p"><span>VIRTUAL UNIVERSITY OF PAKISTAN.</span>				        <sup>In Process</sup></p>
                    <p>BS in Software Engineering</p>
                </div>

                <div>

                    <h3 class="headings">
                        EXPERIENCE
                    </h3>
                    <p class="headings--p"><span>SUMMIT BANK LIMITED</span>					         <sup>May ‘21 – Dec ‘21</sup></p>
                    <ul class="theul"><li>
                        IT – Support Officer at Summit Bank Head Office IT – Support Department.

                    </li></ul>

                </div>


                <div>

                    <h3 class="headings">SKILLS</h3>
                    <ul class="theul">
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Firebase
                        </li>
                        <li>
                            NodeJS
                        </li>
                        <li>
                            ExpressJS
                        </li>
                        <li>
                            ReactJS
                        </li>
                    </ul>

                </div>


                <div>

                    <h3 class="headings">FREELANCING</h3>
                    <ul class="theul">
                        <li>
                            Freelancing of Graphic Designing
                        </li>
                    </ul>

                </div>

                


        </div>

        <div id="rightside">

            <div class="img--div">

                <img src={Myimg} alt="" />


            </div>

            <div class="info">
                <div class="info--center">

                <h3>

                    Muhammad Faizan Alam

                </h3>

                <p>
                    <a href="mailto:FAIZANKANGO@GMAIL.COM">FAIZANKANGO@GMAIL.COM</a><br />
                    0092-347-2346549 <br />
                    3/696 SHAH FAISAL COLONY BLOCK 3, KARACHI. <br />

                </p>

                <h3>
                    SUMMARY
                </h3>
                <p>
                    Experienced and results-oriented always trying to seek a challenging position in a competitive environment to enhance my knowledge and to avail opportunities by using my experience and qualification.
                </p>


                </div>

            </div>


        </div>



    </div>


    )


};

export default Body