import { Section } from "../Section/Section"
import { Skill } from "../Skill/Skill";
import { Timeline } from "../Timeline/Timeline";

type MainProps = {
    skills: {
        name:string,
        percent:number
    }[],
    experiences:{
        role: string,
        where: string,
        start: string,
        end: string,
        description: string
    }[],
}

function Main({skills,experiences}:MainProps) {

    return (
        <>
            <main>
                <Section title="Introdução" description="Um pouco sobre mim" id="intro">
                    <p>Meu nome é Luiz Filipe Flores de Lima, tenho 28 anos e sou Desenvolvedor FullStack na Alright
                    Adtech Company. Gosto muito de aprender tecnologias novas, além das novidades de tecnologias
                        existentes.</p>
                    <p>Um pensamento que me motiva muito é "Entregue me desafios que entrego soluções". Sei que com esse
                    pensamento vou além da minha zona de conforto, aprendendo novas formas de solucionar
                    qualquer
                        problema.</p>
                    <p>No meu tempo livre, gosto de assistir bons filmes e séries, cozinhar e comer. Além de tudo isso,
                    gosto muito de ensinar. Creio que é o melhor método para reforçar um conhecimento, sem contar
                        com a ação de estar ajudando outras pessoas.</p>
                </Section>
                <Section title="Habilidades" description="Minhas skills" id="skills">
                    {
                        skills.map((skill,index) => {
                            return (
                                <Skill name={skill.name} percent={skill.percent} key={`skill-${index}`}/>
                            )
                        })
                    }
                </Section>
                <Section title="Experiências" description="Por onde já passei" id="experience">
                    <Timeline experiences={[...experiences]} />
                </Section>
            </main>
        </>
    )
}

export { Main };