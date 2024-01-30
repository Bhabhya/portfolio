import styled from "styled-components"

const Contact = () => {
  return (
    <Section>
        <div>
            <div className="wrapper">
                <h1>Contact <span>ME</span></h1>
                <div className="top">
                    <div className="work">
                    <h2>Let's Work Together</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id corrupti nesciunt delectus rerum necessitatibus maiores iusto non illum. Placeat et repellendus quisquam error ea tenetur sequi rem odio porro iusto!</p>
                    </div>
                    <div>
                    <form className="contact">
                        <label>Name:</label>
                        <input type="name" placeholder="enter your name"></input>
                        <label>Contact no.</label>
                        <input type="number" placeholder="enter your contact no."></input>
            <label>Email-id: </label>
            <input type="email" placeholder="enter your email"></input>
            
        </form>
        </div>

                </div>
            </div>

        </div>
    </Section>
  )
}

export default Contact

const Section=styled.div`
padding-top: 100px;
text-align: center;
h1{
font-size: 2rem;
}


span{
    color: #7a6dd0;
}

.top{
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
}

.work{
    width: 30%;
    padding-left: 150px;
}

.contact{
    flex-direction: column;
    display: flex;
    //background-color: cyan;//
    margin-right: 80px;
  padding-right: 80px;
    padding-bottom: 80px;
}

form{
    padding-right: 80px;
}
`;