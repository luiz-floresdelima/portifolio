import styles from "./Section.module.scss"

type SectionProps = {
    children?: JSX.Element[] | JSX.Element,
    title: string,
    description: string,
    id: string
}

function Section({children, title, description, id}:SectionProps){
    return (
        <section className={styles.section} id={styles[`${id}`]}>
            <div className={styles.header}>
                <div className={styles.headerSection}>
                    <h3>{title}</h3>
                    <small>{description}</small>
                </div>
            </div>
            <div className={styles.content}>
                {children}
                {/* <p>Meu nome é Luiz Filipe Flores de Lima, tenho 28 anos e sou Desenvolvedor FullStack na Alright
                Adtech Company. Gosto muito de aprender tecnologias novas, além das novidades de tecnologias
                existentes.</p>
                <p>Um pensamento que me motiva muito é "Entregue me desafios que entrego soluções". Sei que com esse
                pensamento vou além da minha zona de conforto, aprendendo novas formas de solucionar
                qualquer
                problema.</p>
                <p>No meu tempo livre, gosto de assistir bons filmes e séries, cozinhar e comer. Além de tudo isso,
                gosto muito de ensinar. Creio que é o melhor método para reforçar um conhecimento, sem contar
                com a ação de estar ajudando outras pessoas.</p> */}
            </div>
        </section>
    )
}

export { Section }