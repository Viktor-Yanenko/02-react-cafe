import css from './VoteStats.module.css'
import { type Votes } from '../../types/votes'

interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}

export default function VoteStats({votes, totalVotes = 0, positiveRate = 0} : VoteStatsProps) {
    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>0</strong></p>
            <p className={css.stat}>Neutral: <strong>0</strong></p>
            <p className={css.stat}>Bad: <strong>0</strong></p>
            <p className={css.stat}>Total: <strong>0</strong></p>
            <p className={css.stat}>Positive: <strong>0%</strong></p>
        </div>
    )
}