
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.postimg.cc/kMcMtgKz/pexels-suzy-hazelwood-3604571-1.jpg);
    width: 100%;
    height: 56vh;
    background-position: left 0px top 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #000;
    margin: 20px 20px;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3" fontWeight={700} marginTop={5} color="#124699">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                <Link href="https://github.com/ManrajSaini" target="_blank" color="inherit">
                        <GitHub style={{ fontSize: 30 , marginRight: 5}}/>
                    </Link>
                    Welcome to my world of innovation and creativity! If you're looking for a dedicated and passionate professional to collaborate with, look no further. I have recently updated my Github profile with my latest projects and experiments, showcasing my skills and expertise. Head over to my Github page now to see for yourself! (Click on Icon)<br/>

<br/>
<Link href="https://www.linkedin.com/in/manraj-singh-006032250/" color="inherit" target="_blank">
                        <LinkedIn style={{ fontSize: 30 , marginRight: 5}}/>
                    </Link>
Additionally, I'm always open to expanding my network and connecting with like-minded individuals. Let's take our conversation to the next level on LinkedIn - you can find me there by searching for my name. (Click on Icon)<br/>

<br/>
<Link href="mailto:manraj.saini123@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email style={{ fontSize: 30, marginRight: 5 }} />
                    </Link>
If you're interested in discussing a potential collaboration or just want to say hi, feel free to send me an email. I'd love to hear from you! Together, we can create something truly remarkable. (Click on Icon)
                    
                    
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;