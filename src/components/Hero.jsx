import styled from "styled-components"

const Hero = () => {
  return (
    <Section>
        <div className='hero'>
            <div className="wrapper">
            <div className="text">
                <h2>BHABHYA</h2>
                <h1>FRONTEND DEVELOPER</h1>
                <div className="btn">
                <button>More about me</button>
                </div>
                <img src="/images/down.png" className="gif"></img>

                </div>

            </div>
            <div className="image">
                <img src="/images/girl.avif"></img>

            </div>

        </div>
    </Section>
  )
}

export default Hero

const Section=styled.div`

.hero{
    height: calc(100vh-100px);
    background:linear-gradient(180deg,#0c0c1d,#11113d);
    position: relative;
    padding-bottom: 30px;
    
}

.image{
    position: absolute;
    right: 20px;
    top: 0;
   
}

img{
    height: 300px;
    
}

.wrapper{
    max-width: 1366px;
    
    }

    .text{
       
       display: flex;
       flex-direction: column;
       justify-content: center;
       gap: 40px;
       margin: 50px 300px;
    }

    .gif{
        width: 50px;
        height: 50px;
        margin-top: -30px;
        margin-left: 80px;
    }

    h1{
        font-size: 3.5rem;
        font-weight: 700;
    }

    p{
        font-size: 2.5rem;
    }

    .btn{
        display: flex;
        gap: 10px;
        margin-left: 50px;
    }

    button{
        font-size: 20px;
        background-color: transparent;
        color: whitesmoke;
        border: 1px solid whitesmoke;
        border-radius: 15px;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
        
    }

`;