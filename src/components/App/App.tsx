import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import { type VoteType, type Votes } from '../../types/votes'

export default function App() {

    function handleVotes(type: VoteType) {
    
    }

    function resetVotes() {
        
    }

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions />
            <VoteStats />
        </div>
    )
}