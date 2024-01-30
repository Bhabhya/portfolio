import styled from "styled-components"

const Aboutme = () => {
  return (
    <Section>
        <div>
            <h1>About<span>M</span>e</h1>
            <div className="about">
                <div className="image">
                    <img src="/images/about.jpg"></img>
                </div>
                <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit perspiciatis voluptas iste labore voluptate fugit asperiores ipsum libero deleniti quas nam, earum aspernatur at consequatur voluptates illum cum nisi!
                Pariatur consequatur illum ipsa aut ea omnis voluptatem error? Harum temporibus ea molestias earum! Eius enim ut harum, sed mollitia voluptatibus, sapiente qui voluptas voluptates blanditiis tenetur labore provident aspernatur.
                Natus aut ex fugit a quasi asperiores odio, molestias voluptatem officia ipsum, adipisci labore numquam dolorem velit! Esse non nobis exercitationem eveniet laborum reiciendis, quo sit ab rem numquam eos.</p>
                <div className="card">
                    <h2>FRONTEND DEVELOPER</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet distinctio nisi impedit unde repellendus qui ea, maiores, possimus architecto natus consectetur consequatur amet quae aliquam alias explicabo quaerat placeat doloribus?</p>
                </div>
                </div>
            </div>
            
                
            

        </div>
    </Section>
  )
}

export default Aboutme

const Section=styled.div`

h1{
   padding-top: 50px;
    font-size: 3.5rem;
    padding-left: 80px;
}

.about{
    //padding-top: 60px;//
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;
}

.text{
    padding-left: 50px;
    padding-right: 100px;
}

span{
    color: #c6223d;
    font-size: 3.8rem;
}

.card{
    
    border: 2px solid #69bcbc;
    //padding: 10px 10px;//
    margin: 30px 200px;
    border-radius: 15px;
    padding: 20px 10px;
   
}

.card p{
    padding-top: 20px;
    //padding-bottom: 40px;//
   
    
}
   


`;