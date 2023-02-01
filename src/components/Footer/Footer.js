import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {

    return (
        <>
            <footer>
                <p>Copyright 2023 Dark Blog | all rights reserved.</p>
                <div className="social">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/alex_127.0.0.1/">
                                <InstagramIcon style={{ color: '#F56EB3', cursor: 'pointer' }} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/D4rkGh7">
                                <TwitterIcon style={{ color: '#86E5FF', cursor: 'pointer' }} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}