import styled from 'styled-components'


const Navbar = () => {
  return (
   <Nav>
    <div className='navbar'>
        

        <div className='one'>
            
            <span>Portfolio</span>


            <div className='list'>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>PORTFOLIO</li>
                <li>CONTACT</li>
            </ul>
            </div>
            <div className='social'>
                <a href='#'><img src='/images/insta.webp' alt=''></img></a>
                <a href='#'><img src='/images/linkedin.png' alt=''></img></a>
                <a href='#'><img src='/images/mail.png' alt=''></img></a>

            </div>

           

        </div>

    </div>

   </Nav>
  )
}

export default Navbar

const Nav=styled.div`
height: 100px;

.navbar{
    margin: 40px 40px;
}

.one{
    max-width: 1366px;
   
    display: flex;
    align-items: center;
    justify-content: space-between;
    //background-color: whitesmoke;//
}

.social{
    display: flex;
    gap: 20px;
}

img{
    width: 50px;
    height: 50px;
    margin-top: 20px;
}

span{
    font-size: 24px;
    font-weight: 700;
}

.list ul{
    display: flex;
    justify-content: space-between;
    color: whitesmoke;
    gap: 25px;
    list-style: none;
    cursor: pointer;
}

.list li{
    &:hover{
        border: 1px solid whitesmoke;
        border-radius: 24px;
    }
}

`;