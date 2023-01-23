import { TimelineItem } from "../TimelineItem/TimelineItem"
import styles from "./Timeline.module.scss"

type TimelineProps = {
    experiences:{
        role: string,
        where: string,
        start: string,
        end: string,
        description: string
    }[]
}

function Timeline({experiences}:TimelineProps) {
    return (
        <div className={styles.timeline}>
            {
                experiences.map((item,index)=> {
                    return (
                        <TimelineItem {...item} key={`timelineitem-${index}`}/>
                    )
                })
            }
        </div>
    )
}

export { Timeline }