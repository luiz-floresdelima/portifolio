import styles from "./TimelineItem.module.scss"

type TimelineItemProps = {
    role: string,
    where: string,
    start: string,
    end: string,
    description: string
}

function TimelineItem({role,where,start,end,description}:TimelineItemProps) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemPoint}></div>
            <div className={styles.itemInfo}>
                <div className={styles.itemHead}>
                    <h5>{start} - {end}</h5>
                    <h4>{where}</h4>
                    <span>{role}</span>
                </div>
                <div className={styles.itemDescription}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export { TimelineItem }