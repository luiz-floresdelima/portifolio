import styles from "./Skill.module.scss"

type SkillProps = {
    name: string,
    percent: number
}

function Skill({name,percent}: SkillProps) {
    return (
        <div className={styles.skill}>
            <h4>{name}</h4>
            <div className={styles.barHolder}>
                <div className={styles.backBar}>
                    <div className={styles.bar} style={{maxWidth: `${percent}%`}}></div>
                </div>
                <span>{percent}%</span>
            </div>
        </div>
    )
}

export { Skill }