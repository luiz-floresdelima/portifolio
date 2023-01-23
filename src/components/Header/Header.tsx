import Image from 'next/image'
import styles from "./Header.module.scss"
import { FiGithub, FiLinkedin } from "react-icons/fi";

type HeaderProps = {
    name: string,
    job: string,
    github: string,
    linkedin: string
}

function Header({ name, job, github, linkedin }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.contentTop}>
                <picture>
                    <Image
                        src="/perfil.jpeg"
                        alt="Profile Picture"
                        width={180}
                        height={37}
                        priority
                        unoptimized={true}
                    />
                </picture>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <h1>
                        {name}
                    </h1>
                    <h2>
                        {job}
                    </h2>
                    <div className={styles.socials}>
                        <a href={github} rel="noopener" target="_blank">
                            <FiGithub width="24"/>
                        </a>
                        <a href={linkedin} rel="noopener" target="_blank">
                            <FiLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };