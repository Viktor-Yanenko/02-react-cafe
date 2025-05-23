import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'
import { type VoteType, type Votes } from '../../types/votes'

export default function App() {

    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    function handleVotes(type: VoteType) {
        setVotes(votes => ({
            ...votes,
            [type]: votes[type] + 1,
        }))
    }

    function resetVotes() {
        setVotes({good: 0, neutral: 0, bad: 0})
    }

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes ? (votes.good / totalVotes) * 100 : 0;

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVotes} onReset={resetVotes} canReset={!!totalVotes} />
            {totalVotes ?
                <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> :
                <Notification />
            }
        </div>
    )
}