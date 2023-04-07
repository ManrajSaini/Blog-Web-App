
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.postimg.cc/x1P3wHzg/pexels-suzy-hazelwood-3695297-3.jpg) ;
    width: 100%;
    height: 55vh;
    background-position: left 0px bottom -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
    display: flex;
    margin:auto;
`;

const Image = styled(Wrapper)`
    background-image: url(https://i.postimg.cc/BZTbBG19/20230102-230448-01-2.jpg) ;
    width: 230vh;
    height: 55vh;
    background-position: left 0px bottom -50px;
    background-size: cover;
    border-radius: 50%;
    margin : auto;
    @media screen and (max-width: 992px) {
        display: none;
    }
`;

const Text = styled(Typography)`
    color: #000;
    margin: 20px 20px;
`;

const Info = styled(Wrapper)`
    justify-content: center;

`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
            <div>
                <Typography variant="h3" fontWeight={700} marginTop={5} color="#124699">Manraj Singh</Typography>
                <Text variant="h5">I am a proficient Web Developer and Software Engineer hailing from the enchanting land of India. Presently, I am pursuing my B.E. in Computer Science and Engineering at UIET, Panjab University, where I am sharpening my technical acumen to excel in my chosen field.<br/>
<br/>My abode is situated in the serene city of Mohali, Punjab, which is known for its vibrant culture and exquisite cuisine.<br/>

<br/>Recently, I have undertaken a fascinating project which involves Blog Writing using the advanced MERN stack. The development of this project has been a thrilling experience, where I have employed React.js for the frontend and styled it using the sophisticated MaterialUI. For the backend, I have integrated MongoDB and connected it seamlessly with Node.js and ExpressJS.<br/>
                
                </Text>
                <Text variant="h5">
                    If you wish to connect with me, please do not hesitate to reach out through any of the channels mentioned below. I would be delighted to hear from you and discuss any queries or opportunities that you may have.

Looking forward to hearing from you soon!
                        <Info>
                            <Link href="mailto:manraj.saini123@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email style={{ fontSize: 50 }}/>
                        </Link>
                        <Link href="https://github.com/ManrajSaini" color="inherit" target="_blank"><GitHub style={{ fontSize: 50 }}/></Link>
                        <Link href="https://www.linkedin.com/in/manraj-singh-006032250/" color="inherit" target="_blank">
                            <LinkedIn style={{ fontSize: 50 }}/>
                        </Link>
                        </Info>
                </Text>
            </div>

            <Image />   
            </Wrapper>
        </Box>
    )
}

export default About;