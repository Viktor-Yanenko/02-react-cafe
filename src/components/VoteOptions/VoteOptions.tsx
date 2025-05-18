import css from './VoteOptions.module.css'
import { type VoteType } from '../../types/votes';

interface VoteOptionsProps{
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

export default function VoteOptions({onVote, onReset, canReset}: VoteOptionsProps) {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={()=>onVote('good')} type='button'>Good</button>
            <button className={css.button} onClick={()=>onVote('neutral')} type='button'>Neutral</button>
            <button className={css.button} onClick={() => onVote('bad')} type='button'>Bad</button>
            {canReset ? (
                <button className={`${css.button} ${css.reset}`} onClick={onReset} type='button'>Reset</button>
            ) : null}
            
        </div>
    )
}