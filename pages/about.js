
import Link from 'next/link';
import Image from "../components/Image";
const About = () => (
    <div style={{fontSize: "2rem", color: 'blue'}}>
    <h1>About</h1>
    <Link href='/'>
    <button>Home</button>
    </Link>
    <Image/>
    {/*<a href='/'>Home</a>*/}
    </div>
)
export default About;