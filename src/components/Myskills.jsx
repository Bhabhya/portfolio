import styled from "styled-components"

const Myskills = () => {
  return (
    <Section>
        <div>
            <div className="skills">
                <h1>MY <span>SKILLS</span></h1>
            </div>

            <div className="technical">
                <div className="one">
                    <h2>TECHNICAL SKILL</h2>
                   <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TAILWIND CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT JS</li>
                   </ul>
                   <div className="image">
                    <img src="/images/logo.jpg"></img>
                   </div>
                </div>

                <div className="one">
                    <h2>COMMUNICATION SKILL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, rem! Maxime quasi libero, corrupti natus, facilis unde, dolorum blanditiis nulla ipsam voluptatem vel perferendis cumque placeat eligendi eius. Recusandae, fuga!</p>
                </div>

                <div className="one">
                    <h2>PROFESSIONAL SKILLS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem, nostrum sapiente numquam sunt nihil quia ipsum enim nam sed quibusdam esse unde ullam tempore, tenetur maiores? Exercitationem, repellendus deleniti?</p>
                </div>
            </div>
        </div>


    </Section>
  )
}

export default Myskills

const Section=styled.div`
    .skills{
        padding-top: 50px;
        text-align: center;

        h1{
            font-size: 3rem;
        }

        span{
            color: #69bcbc;
        }
    }

    .technical{
        display: flex;
        padding-top: 50px;
        margin: 30px 50px;
        justify-content: space-between;
        gap: 12px;
        
        

        h2{
            padding-bottom: 30px;
            text-align: center;
            text-decoration: underline;
        }

        .one{
            border: 1px solid whitesmoke;
            box-shadow: 0 0 5px cyan, 0 0 25px cyan , 0 0 25px cyan, 0 0 25px cyan , 0 0 25px cyan;
            padding-top: 50px;
           
            border-radius: 14px;
            padding-left: 10px;
            padding-right: 10px;
            width: 33%;
            text-align: center;
        }

        .one li{
            list-style: none;
        }

        .image img{
            padding-top: 50px;
        height: 150px;
        width: 180px;
    } 

    }

   

`;